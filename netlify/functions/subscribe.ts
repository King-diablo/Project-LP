import type { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		persistSession: false,
		autoRefreshToken: false,
	},
});

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

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

	try {
		const body = event.body ? JSON.parse(event.body) : {};

		const email = typeof body.email === 'string' ? body.email.trim() : '';

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

		const { error } = await supabase.from('newsletter_subscribers').insert({ email });

		if (error) {
			console.error('Supabase insert error:', error);

			// Optional: Handle duplicate email gracefully
			if (error.code === '23505') {
				return {
					statusCode: 409,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						success: false,
						error: 'This email is already subscribed',
					}),
				};
			}

			return {
				statusCode: 500,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					success: false,
					error: 'Failed to subscribe',
				}),
			};
		}

		return {
			statusCode: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: true,
				message: 'Subscribed successfully',
			}),
		};
	} catch (error) {
		console.error('Subscribe handler error:', error);

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
