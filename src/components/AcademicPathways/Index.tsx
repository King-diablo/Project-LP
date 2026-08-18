import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { pathways } from '../../data/siteInfo';
import { PathwayCard } from '../PathwayCard/Index';

import './index.css';

export function AcademicPathways() {
	const [activePathway, setActivePathway] = useState(0);

	const activePath = pathways[activePathway];

	return (
		<section className='pathways section section--gray'>
			<div className='container'>
				<div className='section-heading'>
					<span>ACADEMIC PATHWAYS</span>
				</div>

				{/* Pathway selector */}
				<div className='pathway-tabs' role='tablist'>
					{pathways.map((pathway, index) => {
						const isActive = index === activePathway;

						return (
							<button key={pathway.title} type='button' role='tab' aria-selected={isActive} className={`pathway-tab ${isActive ? 'pathway-tab--active' : ''}`} onClick={() => setActivePathway(index)}>
								<span className='pathway-tab__icon'>
									<motion.img src={pathway.url} alt={`${pathway.title} icon`} className='pathway-tab__icon-img' />
								</span>

								<span>{pathway.title}</span>

								{isActive && (
									<motion.span
										className='pathway-tab__indicator'
										layoutId='pathway-tab-indicator'
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 30,
										}}
									/>
								)}
							</button>
						);
					})}
				</div>

				{/* Selected pathway */}
				<div className='pathway-content'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={activePathway}
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							exit={{
								opacity: 0,
								y: -20,
							}}
							transition={{
								duration: 0.3,
								ease: 'easeOut',
							}}
						>
							<PathwayCard {...activePath} />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
