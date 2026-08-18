import { motion } from 'motion/react';
import './Index.css';

type Props = {
	icon: string;
	url: string;
	title: string;
	subtitle: string;
	description: string;
	items: string[];
};

export function PathwayCard({ url, title, subtitle, description, items }: Props) {
	return (
		<motion.article
			className='pathway-card'
			whileHover={{
				y: -5,
			}}
		>
			<div className='pathway-card__icon'>
				{/* {icon} */}
				<motion.img src={url} alt={`${title} icon`} />
			</div>

			<h3>{title}</h3>

			<h4>{subtitle}</h4>

			<p>{description}</p>

			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</motion.article>
	);
}
