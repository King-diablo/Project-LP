import { motion } from 'motion/react';

import { testimonials } from '../../data/siteInfo';
import { TestimonialCard } from '../TestimonialCard/Index';

import './Index.css';

const headingVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const carouselVariants = {
	hidden: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export function Testimonials() {
	const firstRow = testimonials.filter((_, index) => index % 2 === 0);

	const secondRow = testimonials.filter((_, index) => index % 2 !== 0);

	return (
		<section id='about' className='testimonials section'>
			<div className='container'>
				<motion.div
					className='section-heading'
					initial='hidden'
					whileInView='visible'
					viewport={{
						once: true,
						amount: 0.3,
					}}
					variants={headingVariants}
					transition={{
						duration: 0.6,
						ease: 'easeOut',
					}}
				>
					<span>What Our Clients</span>

					<h2>Are Saying</h2>

					<p>We take pride in delivering exceptional solutions that deliver great results. But don't just take our word for it.</p>
				</motion.div>
			</div>

			<motion.div
				className='testimonial-marquee'
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: true,
					amount: 0.15,
				}}
				variants={carouselVariants}
				transition={{
					duration: 0.7,
					ease: 'easeOut',
				}}
			>
				{/* LEFT → RIGHT */}
				<div className='testimonial-row testimonial-row--right'>
					<div className='testimonial-track'>
						{[...firstRow, ...firstRow].map((testimonial, index) => (
							<div className='testimonial-slide' key={`${testimonial.name}-${index}`}>
								<TestimonialCard {...testimonial} />
							</div>
						))}
					</div>
				</div>

				{/* RIGHT → LEFT */}
				<div className='testimonial-row testimonial-row--left'>
					<div className='testimonial-track'>
						{[...secondRow, ...secondRow].map((testimonial, index) => (
							<div className='testimonial-slide' key={`${testimonial.name}-${index}`}>
								<TestimonialCard {...testimonial} />
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
