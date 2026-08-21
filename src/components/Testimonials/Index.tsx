import { motion } from 'motion/react';

import { testimonials } from '../../data/siteInfo';
import { TestimonialCard } from '../TestimonialCard/Index';

import './Index.css';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export function Testimonials() {
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
					variants={itemVariants}
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
				className='testimonial-carousel'
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: true,
					amount: 0.2,
				}}
				variants={containerVariants}
			>
				<div className='testimonial-track'>
					{testimonials.map((testimonial) => (
						<motion.div
							className='testimonial-slide'
							key={testimonial.name}
							variants={itemVariants}
							transition={{
								duration: 0.6,
								ease: 'easeOut',
							}}
						>
							<TestimonialCard {...testimonial} />
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
