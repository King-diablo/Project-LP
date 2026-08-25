import { motion } from 'motion/react';

import { services } from '../../data/siteInfo';
import { ServiceCard } from '../ServiceCard/Index';
import { Stats } from '../Stats/Index';

import './Index.css';

const fadeUp = {
	hidden: {
		opacity: 0,
		y: 24,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export function WhatWeDo() {
	return (
		<section id='services' className='services'>
			<div className='container services__container'>
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
					<span>WHAT WE DO</span>

					<h2>Seamless Support from Application to Arrival</h2>

					<p>We simplify study abroad. From finding the right program to settling in your new country, we’re with you every step of the way.</p>
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
								staggerChildren: 0.12,
							},
						},
					}}
				>
					{services.map((service) => (
						<motion.div
							key={service.title}
							className='services-list__item'
							variants={fadeUp}
							transition={{
								duration: 0.5,
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
						duration: 0.6,
						ease: 'easeOut',
					}}
				>
					<Stats />
				</motion.div>
			</div>
		</section>
	);
}
