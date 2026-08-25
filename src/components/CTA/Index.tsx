import { motion } from 'motion/react';
import { useState } from 'react';

import { Button } from '../Button/Index';
import { ConsultationModal } from '../ConsultationModal/Index';

import './index.css';

export function CTA() {
	const [isConsultationOpen, setIsConsultationOpen] = useState(false);

	return (
		<>
			<motion.section
				id='contact'
				className='cta'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{
					once: true,
					amount: 0.2,
				}}
				transition={{
					duration: 0.7,
					ease: 'easeOut',
				}}
			>
				<div className='cta__overlay' />

				<div className='cta__content'>
					<div className='cta__text'>
						<h2>
							Ready to Take
							<br />
							the Next Step?
						</h2>

						<p>
							Schedule a 1-on-1 consultation
							<br className='desktop-break' />
							session with our experts.
						</p>
					</div>

					<div className='cta__action'>
						<Button size='medium' variant='light' onClick={() => setIsConsultationOpen(true)}>
							BOOK A CONSULTATION
						</Button>
					</div>
				</div>
			</motion.section>

			<ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
		</>
	);
}
