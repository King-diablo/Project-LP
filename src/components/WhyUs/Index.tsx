import { motion } from 'motion/react';

import { whyUs } from '../../data/siteInfo';

import './Index.css';

const fadeIn = {
	hidden: {
		opacity: 0,
		y: 20,
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
						amount: 0.2,
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
					<motion.div className='why-us__heading' variants={fadeIn} transition={{ duration: 0.6 }}>
						<span>WHY US?</span>
					</motion.div>

					<div className='why-us__grid'>
						{whyUs.map((item) => (
							<motion.article
								className='why-us__card'
								key={item.title}
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
