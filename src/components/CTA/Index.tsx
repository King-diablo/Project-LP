import { useState } from 'react';

import { Button } from '../Button/Index';

import './index.css';
import { ConsultationModal } from '../ConsultationModal/Index';

export function CTA() {
	const [isConsultationOpen, setIsConsultationOpen] = useState(false);

	return (
		<>
			<section id='contact' className='cta'>
				<div className='cta__content'>
					<h2>
						Ready to Take
						<br />
						the Next Step?
					</h2>

					<p>Schedule a 1-on-1 consultation session with our experts.</p>

					<Button
						href='#contact'
						onClick={(event) => {
							event.preventDefault();
							setIsConsultationOpen(true);
						}}
					>
						BOOK A CONSULTATION
					</Button>
				</div>
			</section>

			<ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
		</>
	);
}
