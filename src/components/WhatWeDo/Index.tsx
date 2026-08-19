import { motion } from 'motion/react';

import { services } from '../../data/siteInfo';
import { ServiceCard } from '../ServiceCard/Index';
import { Stats } from '../Stats/Index';

import './Index.css';

export function WhatWeDo() {
	return (
		<section id='services' className='services'>
			<motion.div
				className='container'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{
					once: true,
					amount: 0.15,
				}}
				transition={{
					duration: 0.8,
					ease: 'easeOut',
				}}
			>
				<div className='section-heading'>
					<span>What We Do</span>

					<h2>Supporting your journey from application to arrival.</h2>

					<p>From finding the right study destination to visa and travel support, we help you every step of the way.</p>
				</div>

				<div className='services-list'>
					{services.map((service) => (
						<ServiceCard key={service.title} {...service} />
					))}
				</div>

				<Stats />
			</motion.div>
		</section>
	);
}
