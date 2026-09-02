import type { Handler } from '@netlify/functions';
import { confirmationEmail } from '../../template/confirmation.js';
import { clientInquiryEmail } from '../../template/clientInquiry.js';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

if (!resendApiKey) {
	throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(resendApiKey);

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const getClientIp = (event: any) => {
	const forwardedFor = event.headers['x-forwarded-for'];

	if (typeof forwardedFor === 'string') {
		return forwardedFor.split(',')[0].trim();
	}

	return 'unknown';
};

const checkRateLimit = (ip: string) => {
	const now = Date.now();
	const current = rateLimitMap.get(ip);

	if (!current || current.resetAt <= now) {
		const next = {
			count: 1,
			resetAt: now + RATE_LIMIT_WINDOW_MS,
		};

		rateLimitMap.set(ip, next);
		return true;
	}

	if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
		return false;
	}

	current.count += 1;

	return true;
};

const normalizeText = (value: unknown) => {
	if (typeof value !== 'string') return '';

	return value.trim();
};

export const handler: Handler = async (event) => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: false,
				error: 'Method not allowed',
			}),
		};
	}

	if (!event.headers['content-type']?.includes('application/json')) {
		return {
			statusCode: 415,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: false,
				error: 'Content-Type must be application/json',
			}),
		};
	}

	const ip = getClientIp(event);

	if (!checkRateLimit(ip)) {
		return {
			statusCode: 429,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: false,
				error: 'Too many requests. Please try again later.',
			}),
		};
	}

	try {
		const body = event.body ? JSON.parse(event.body) : {};

		const email = normalizeText(body.email);

		if (!email || !isValidEmail(email)) {
			return {
				statusCode: 400,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					success: false,
					error: 'A valid email is required',
				}),
			};
		}

		const fullName = normalizeText(body.fullName) || 'there';

		const phone = normalizeText(body.phone) || 'Not provided';

		const studyLevel = normalizeText(body.studyLevel) || 'Not provided';

		const destination = normalizeText(body.destination) || 'Not provided';

		const budget = normalizeText(body.budget) || 'Not provided';

		const message = normalizeText(body.message) || 'No message provided';

		const confirmationPromise = resend.emails.send({
			from: 'Moneclat <noreply@mail.moneclatconsult.com>',
			to: [email],
			subject: 'Confirmation Mail',
			html: confirmationEmail({ fullName }),
		});

		const inquiryPromise = resend.emails.send({
			from: 'Moneclat <noreply@mail.moneclatconsult.com>',
			to: ['contactmoneclat@gmail.com'],
			subject: 'Inquiry Mail',
			html: clientInquiryEmail({
				fullName,
				email,
				phone,
				studyLevel,
				destination,
				budget,
				message,
			}),
		});

		const response = await Promise.allSettled([confirmationPromise, inquiryPromise]);

		const failed = response.filter((result) => {
			if (result.status === 'rejected') {
				return true;
			}

			return result.value.error !== null;
		});

		if (failed.length > 0) {
			for (const result of failed) {
				if (result.status === 'rejected') {
					console.error('Promise rejected:', result.reason);
				} else {
					console.error('Mail error');
					// console.error('Resend API error:', result.value.error);
				}
			}
			return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ success: false, error: 'Failed to send email' }) };
		}

		return {
			statusCode: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: true,
				msg: 'All mails sent',
				id: response.map((result) => (result.status === 'fulfilled' ? result.value : null)).filter(Boolean),
			}),
		};
	} catch (error) {
		console.error(error);

		return {
			statusCode: 500,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: false,
				error: 'Internal server error',
			}),
		};
	}
};
