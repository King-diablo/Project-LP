import { motion } from 'motion/react';

import './Index.css';

type Props = {
	url: string;
	title: string;
	description: string;
};

export function ServiceCard({ url, title, description }: Props) {
	return (
		<motion.article
			className='service-card'
			whileHover={{
				y: -6,
			}}
			transition={{
				duration: 0.2,
			}}
		>
			<motion.img className='service-card__icon' src={url} />

			<h3>{title}</h3>

			<p>{description}</p>
		</motion.article>
	);
}
