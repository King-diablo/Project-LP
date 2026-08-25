import { motion } from 'motion/react';

import { pathways } from '../../data/siteInfo';
import { PathwayCard } from '../PathwayCard/Index';

import './index.css';

export function AcademicPathways() {
	return (
		<section className='pathways section section--gray'>
			<motion.div
				className='pathways__container'
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
				<div className='section-heading'>
					<span>ACADEMIC PATHWAYS</span>
				</div>

				<div className='pathways-grid'>
					{pathways.map((pathway) => (
						<PathwayCard key={pathway.title} {...pathway} />
					))}
				</div>
			</motion.div>
		</section>
	);
}
