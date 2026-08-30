import { Resend } from 'resend';
import { confirmationEmail } from './confirmation.ts';
import { clientInquiryEmail } from './clientInquiry.ts';

const resendApiKey = process.env.RESEND_API_KEY;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

if (!resendApiKey) {
	throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(resendApiKey);

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const getClientIp = (req: any) => {
	const forwardedFor = req.headers['x-forwarded-for'];
	if (typeof forwardedFor === 'string') {
		return forwardedFor.split(',')[0].trim();
	}
	return req.socket?.remoteAddress ?? 'unknown';
};

const checkRateLimit = (ip: string) => {
	const now = Date.now();
	const current = rateLimitMap.get(ip);

	if (!current || current.resetAt <= now) {
		const next = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
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

export default async function handler(req: any, res: any) {
	if (req.method !== 'POST') {
		return res.status(405).json({
			success: false,
			error: 'Method not allowed',
		});
	}

	if (!req.headers['content-type']?.includes('application/json')) {
		return res.status(415).json({
			success: false,
			error: 'Content-Type must be application/json',
		});
	}

	const ip = getClientIp(req);
	if (!checkRateLimit(ip)) {
		return res.status(429).json({
			success: false,
			error: 'Too many requests. Please try again later.',
		});
	}

	try {
		const body = typeof req.body === 'object' && req.body ? req.body : {};
		const email = normalizeText(body.email);

		if (!email || !isValidEmail(email)) {
			return res.status(400).json({
				success: false,
				error: 'A valid email is required',
			});
		}

		const fullName = normalizeText(body.fullName) || 'there';
		const phone = normalizeText(body.phone) || 'Not provided';
		const studyLevel = normalizeText(body.studyLevel) || 'Not provided';
		const destination = normalizeText(body.destination) || 'Not provided';
		const budget = normalizeText(body.budget) || 'Not provided';
		const message = normalizeText(body.message) || 'No message provided';

		const confirmationPromise = resend.emails.send({
			from: 'Moneclat <onboarding@resend.dev>',
			to: [email],
			subject: 'Confirmation Mail',
			html: confirmationEmail({ fullName }),
		});

		const inquiryPromise = resend.emails.send({
			from: 'Moneclat <onboarding@resend.dev>',
			to: [email],
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
		const rejected = response.filter((result) => result.status === 'rejected');

		if (rejected.length > 0) {
			for (const item of rejected) {
				if (item.status === 'rejected') {
					console.error(item.reason);
				}
			}

			return res.status(500).json({
				success: false,
				error: 'Failed to send email',
			});
		}

		return res.status(200).json({
			success: true,
			msg: 'all mails sent',
			id: response.map((result) => (result.status === 'fulfilled' ? result.value : null)).filter(Boolean),
		});
	} catch (error) {
		console.error(error);

		return res.status(500).json({
			success: false,
			error: 'Internal server error',
		});
	}
}
