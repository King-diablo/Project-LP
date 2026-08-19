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
					margin: '0px 0px -15% 0px',
				}}
				transition={{
					duration: 0.7,
					ease: 'easeOut',
				}}
			>
				<div className='cta__content'>
					<h2>
						Ready to Take
						<br />
						the Next Step?
					</h2>

					<p>Schedule a 1-on-1 consultation session with our experts.</p>

					<Button onClick={() => setIsConsultationOpen(true)}>BOOK A CONSULTATION</Button>
				</div>
			</motion.section>

			<ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
		</>
	);
}
