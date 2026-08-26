import { motion } from 'motion/react';

import './Index.css';
import { Button } from '../Button/Index';

const socialsIco = [
	{
		name: 'Mail',
		ico: '/Socials/gmail.svg',
		url: 'mailto:contactmoneclat@gmail.com',
	},
	{
		name: 'Instagram',
		ico: '/Socials/Instagram.svg',
		url: 'https://www.instagram.com/themoneclat?igsh=MWJvb2VienBhZzUxYw%3D%3D&utm_source=qr',
	},
	{
		name: 'Whatsapp',
		ico: '/Socials/whatsapp.svg',
		url: 'https://wa.link/8g8au0',
	},
];

export function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__grid'>
					<div className='footer__brand'>
						<div className='footer__logo'>MON E'CLAT CONSULT</div>

						<p>Comprehensive Support for Your Overseas Journey.</p>

						<h4>Subscribe to get the latest updates</h4>

						<form className='footer__subscribe'>
							<input type='email' placeholder='you@email.com' />
							<Button
								size='medium'
								variant='light'
								onClick={() => null}
								style={{
									borderRadius: '999px',
									border: '2px solid #000',
									backgroundColor: '#263a48',
									color: '#fff',
								}}
							>
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

					<div className='footer__socials'>
						{socialsIco.map((social) => (
							<a href={social.url} key={social.name}>
								<motion.img src={social.ico} alt={`${social.name} icon`} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
