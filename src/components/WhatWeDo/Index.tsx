import { motion } from 'motion/react';

import { services } from '../../data/siteInfo';
import { ServiceCard } from '../ServiceCard/Index';
import { Stats } from '../Stats/Index';

import './Index.css';

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export function WhatWeDo() {
	return (
		<section id='services' className='services'>
			<div className='container'>
				<motion.div
					className='section-heading'
					variants={fadeUp}
					initial='hidden'
					whileInView='visible'
					viewport={{
						once: true,
						amount: 0.3,
					}}
					transition={{
						duration: 0.6,
						ease: 'easeOut',
					}}
				>
					<span>What We Do</span>

					<h2>Supporting your journey from application to arrival.</h2>

					<p>From finding the right study destination to visa and travel support, we help you every step of the way.</p>
				</motion.div>

				<motion.div
					className='services-list'
					initial='hidden'
					whileInView='visible'
					viewport={{
						once: true,
						amount: 0.15,
					}}
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.15,
							},
						},
					}}
				>
					{services.map((service) => (
						<motion.div
							key={service.title}
							variants={fadeUp}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
							}}
						>
							<ServiceCard {...service} />
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{
						once: true,
						amount: 0.2,
					}}
					variants={fadeUp}
					transition={{
						duration: 0.7,
						ease: 'easeOut',
						delay: 0.1,
					}}
				>
					<Stats />
				</motion.div>
			</div>
		</section>
	);
}
