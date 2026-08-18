import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { services } from '../../data/siteInfo';
import { ServiceCard } from '../ServiceCard/Index';
import { Stats } from '../Stats/Index';

import './Index.css';

export function WhatWeDo() {
	const [activeService, setActiveService] = useState(0);

	const selectedService = services[activeService];

	return (
		<section id='services' className='services section'>
			<div className='container'>
				<div className='section-heading'>
					<span>WHAT WE DO</span>

					<h2>Seamless Support from Application to Arrival</h2>

					<p>We simplify study abroad. From finding the right program to settling in your new country, we're with you every step of the way.</p>
				</div>

				<motion.div
					className='services-showcase'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.15 }}
					transition={{
						duration: 0.6,
						ease: 'easeOut',
					}}
				>
					{/* LEFT SIDE */}
					<div className='services-showcase__menu'>
						<div className='services-showcase__menu-label'>
							<span>OUR SERVICES</span>

							<span>{String(services.length).padStart(2, '0')}</span>
						</div>

						<div className='services-list' role='tablist'>
							{services.map((service, index) => {
								const isActive = index === activeService;

								return (
									<button key={service.title} type='button' role='tab' aria-selected={isActive} className={`service-selector ${isActive ? 'service-selector--active' : ''}`} onClick={() => setActiveService(index)}>
										<span className='service-selector__number'>{String(index + 1).padStart(2, '0')}</span>

										<span className='service-selector__icon'>
											<motion.img src={service.url} />
										</span>

										<span className='service-selector__title'>{service.title}</span>

										<motion.span
											className='service-selector__arrow'
											animate={{
												x: isActive ? 4 : 0,
											}}
											transition={{
												duration: 0.25,
											}}
										>
											→
										</motion.span>

										{isActive && (
											<motion.span
												className='service-selector__indicator'
												layoutId='service-indicator'
												transition={{
													type: 'spring',
													stiffness: 400,
													damping: 30,
												}}
											/>
										)}
									</button>
								);
							})}
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className='services-showcase__content'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={activeService}
								className='service-detail'
								initial={{
									opacity: 0,
									x: 35,
								}}
								animate={{
									opacity: 1,
									x: 0,
								}}
								exit={{
									opacity: 0,
									x: -25,
								}}
								transition={{
									duration: 0.35,
									ease: 'easeOut',
								}}
							>
								<ServiceCard {...selectedService} />
							</motion.div>
						</AnimatePresence>
					</div>
				</motion.div>

				<Stats />
			</div>
		</section>
	);
}
