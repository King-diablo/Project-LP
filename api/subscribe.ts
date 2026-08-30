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

export default async function handler(req: any, res: any) {
	if (req.method !== 'POST') {
		return res.status(405).json({
			success: false,
			error: 'Method not allowed',
		});
	}

	try {
		const email = typeof req.body?.email === 'string' ? req.body.email.trim() : '';

		if (!email || !isValidEmail(email)) {
			return res.status(400).json({
				success: false,
				error: 'A valid email is required',
			});
		}

		const { error } = await supabase.from('newsletter_subscribers').insert({ email });

		if (error) {
			console.error('Supabase insert error:', error);
			return res.status(500).json({
				success: false,
				error: 'Failed to subscribe',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Subscribed successfully',
		});
	} catch (error) {
		console.error('Subscribe handler error:', error);
		return res.status(500).json({
			success: false,
			error: 'Internal server error',
		});
	}
}
