const platform = import.meta.env.VITE_DEPLOYMENT_PLATFORM;

export const API = {
	contact: '/.netlify/functions/contact',

	subscribe: '/.netlify/functions/subscribe',
};

export const postData = async (url: string, body: object) =>
	await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
