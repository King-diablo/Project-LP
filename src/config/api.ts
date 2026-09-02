const platform = import.meta.env.VITE_DEPLOYMENT_PLATFORM;

export const API = {
	contact: platform === 'netlify' ? '/.netlify/functions/contact' : '/api/contact',

	subscribe: platform === 'netlify' ? '/.netlify/functions/subscribe' : '/api/subscribe',
};

export const postData = async (url: string, body: object) =>
	await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
