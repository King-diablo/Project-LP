import { motion } from 'motion/react';

import './Index.css';
import { Button } from '../Button/Index';

const socialsIco = [
	{
		name: 'Linkedin',
		ico: '/Socials/Linkedin.svg',
	},
	{
		name: 'Instagram',
		ico: '/Socials/Instagram.svg',
	},
	{
		name: 'X',
		ico: '/Socials/x.svg',
	},
	{
		name: 'Facebook',
		ico: '/Socials/facebook.svg',
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

							{/* <button type='submit'>Join</button>
							 */}
							<Button size='medium' variant='light' onClick={() => null}>
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
							<a href='#' key={social.name}>
								<motion.img src={social.ico} alt={`${social.name} icon`} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
