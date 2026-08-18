import { motion } from 'motion/react';
import { testimonials } from '../../data/siteInfo';
import { TestimonialCard } from '../TestimonialCard/Index';

import './Index.css';

export function Testimonials() {
	const items = [...testimonials, ...testimonials];

	return (
		<section id='about' className='testimonials section'>
			<div className='container'>
				<div className='section-heading'>
					<span>What Our Clients</span>

					<h2>Are Saying</h2>

					<p>We take pride in delivering exceptional solutions that deliver great results. But don't just take our word for it.</p>
				</div>
			</div>

			<div className='testimonial-carousel'>
				<motion.div
					className='testimonial-track'
					animate={{
						x: ['0%', '-50%'],
					}}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: 'loop',
							duration: 30,
							ease: 'linear',
						},
					}}
				>
					{items.map((testimonial, index) => (
						<div className='testimonial-slide' key={`${testimonial.name}-${index}`}>
							<TestimonialCard {...testimonial} />
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
