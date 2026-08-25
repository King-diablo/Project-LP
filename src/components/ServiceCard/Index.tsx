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
				y: -4,
			}}
			transition={{
				duration: 0.2,
			}}
		>
			<img className='service-card__icon' src={url} alt='' aria-hidden='true' />

			<h3>{title}</h3>

			<p>{description}</p>
		</motion.article>
	);
}
