import { motion } from 'motion/react';
import { stats } from '../../data/siteInfo';

import './Index.css';

export function Stats() {
	return (
		<div className='stats-wrapper'>
			<motion.div
				className='stats'
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: true,
					amount: 0.4,
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
				{stats.map((stat) => (
					<motion.div
						className='stat'
						key={stat.label}
						variants={{
							hidden: {
								opacity: 0,
								y: 20,
								scale: 0.95,
							},
							visible: {
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									duration: 0.5,
									ease: 'easeOut',
								},
							},
						}}
					>
						<strong>{stat.value}</strong>
						<span>{stat.label}</span>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
