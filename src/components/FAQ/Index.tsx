import { motion } from 'motion/react';

import { faqs } from '../../data/siteInfo';
import { FAQItem } from '../FAQItem/Index';

import './Index.css';

export function FAQ() {
	return (
		<section id='faqs' className='faq section'>
			<motion.div
				className='container faq__container'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{
					once: true,
					margin: '0px 0px -15% 0px',
				}}
				transition={{
					duration: 0.7,
					ease: 'easeOut',
				}}
			>
				<div className='faq__heading'>
					<span>Frequently</span>
					<h2>asked questions</h2>
				</div>

				<div className='faq__list'>
					{faqs.map((faq) => (
						<FAQItem key={faq.question} {...faq} />
					))}
				</div>
			</motion.div>
		</section>
	);
}
