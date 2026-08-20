import { motion } from 'motion/react';

import { destinations } from '../../data/siteInfo';
import { DestinationCard } from '../DestinationCard/Index';

import './Index.css';

export function Destinations() {
	return (
		<motion.section
			className='destinations section'
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
						staggerChildren: 0.08,
					},
				},
			}}
		>
			<div className='container'>
				<motion.div
					className='section-heading'
					variants={{
						hidden: {
							opacity: 0,
							y: 15,
						},
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.5,
							},
						},
					}}
				>
					<span>DESTINATIONS</span>
				</motion.div>

				<div className='destination-grid'>
					{destinations.map((destination) => (
						<motion.div
							key={destination.name}
							variants={{
								hidden: {
									opacity: 0,
									y: 15,
								},
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.45,
									},
								},
							}}
						>
							<DestinationCard {...destination} />
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
