import { motion } from 'motion/react';

import { whyUs } from '../../data/siteInfo';

import './Index.css';

const fadeIn = {
	hidden: {
		opacity: 0,
		y: 24,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export function WhyUs() {
	return (
		<section className='why-us'>
			<div className='why-us__background' />

			<div className='container'>
				<motion.div
					className='why-us__content'
					initial='hidden'
					whileInView='visible'
					viewport={{
						once: true,
						amount: 0.25,
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
					<motion.div
						className='why-us__heading'
						variants={fadeIn}
						transition={{
							duration: 0.6,
							ease: 'easeOut',
						}}
					>
						<span>WHY US?</span>
					</motion.div>

					<div className='why-us__grid'>
						{whyUs.map((item) => (
							<motion.article
								key={item.title}
								className='why-us__card'
								variants={fadeIn}
								transition={{
									duration: 0.6,
									ease: 'easeOut',
								}}
							>
								<div className='why-us__icon'>{item.icon}</div>

								<h3>{item.title}</h3>

								<p>{item.description}</p>
							</motion.article>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
