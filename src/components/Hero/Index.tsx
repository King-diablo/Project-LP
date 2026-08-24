import { motion } from 'motion/react';
import { Button } from '../Button/Index';
import { Navbar } from '../Nav/Index';

import './Index.css';

export function Hero() {
	return (
		<section className='hero'>
			<Navbar />

			<div className='hero__content'>
				<motion.div
					className='hero__text'
					initial={{
						opacity: 0,
						y: 30,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.7,
						ease: 'easeOut',
					}}
				>
					<h1>
						Your gateway to studying abroad.
						<br />
						<span>Without the stress.</span>
					</h1>

					<p>We help you find the right study, work, and travel opportunities tailored to your dreams and budget.</p>

					<Button href='#services'>EXPLORE OPPORTUNITIES</Button>
				</motion.div>
			</div>
		</section>
	);
}
