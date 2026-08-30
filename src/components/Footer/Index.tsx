import './Index.css';
import { Button } from '../Button/Index';

const socialsIco = [
	{
		name: 'Email Us',
		ico: '/Socials/gmail_v2.svg',
		url: 'mailto:contactmoneclat@gmail.com',
	},
	{
		name: 'Instagram',
		ico: '/Socials/Instagram.svg',
		url: 'https://www.instagram.com/themoneclat?igsh=MWJvb2VienBhZzUxYw%3D%3D&utm_source=qr',
	},
	{
		name: 'WhatsApp',
		ico: '/Socials/whatsapp.svg',
		url: 'https://wa.link/8g8au0',
	},
];

export function Footer() {
	const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const emailInput = form.elements.namedItem('email') as HTMLInputElement | null;
		const email = emailInput?.value.trim();

		if (!email) return;

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			const result = await response.json();

			if (!response.ok || !result.success) {
				throw new Error(result.error || 'Unable to subscribe. Please try again.');
			}
		} catch (error) {
			console.error('Subscribe error:', error);
		} finally {
			form.reset();
		}
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__grid'>
					<div className='footer__brand'>
						<div className='footer__logo'>MON E&apos;CLAT CONSULT</div>

						<p>Comprehensive Support for Your Overseas Journey.</p>

						<h4>Subscribe to get the latest updates</h4>

						<form className='footer__subscribe' onSubmit={handleSubscribe}>
							<input type='email' name='email' placeholder='you@email.com' aria-label='Your email address for newsletter' required />
							<Button size='medium' variant='light' className='footer__subscribe-btn' href='' type='submit'>
								Join
							</Button>
						</form>
					</div>

					<div className='footer__links'>
						<h4>Explore</h4>

						<a href='#services'>What We Do</a>

						<a href='#destinations'>Plan Your Journey</a>

						<a href='#about'>Why Us</a>

						<a href='#faqs'>FAQs</a>
					</div>

					<div className='footer__socials-section'>
						<h4>Connect</h4>
						<div className='footer__socials'>
							{socialsIco.map((social) => (
								<a href={social.url} key={social.name} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
									<img src={social.ico} alt='' aria-hidden='true' loading='lazy' decoding='async' width={24} height={24} />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className='footer__bottom'>
					<p>© {new Date().getFullYear()} MON E&apos;CLAT CONSULT. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
