import { motion } from 'motion/react';

import './Index.css';

type Props = {
	name: string;
	flag: string;
	ico: string;
};

export function DestinationCard({ name, ico }: Props) {
	return (
		<motion.div
			className='destination-card'
			whileHover={{
				y: -4,
			}}
		>
			<span className='destination-card__flag'>
				<motion.img src={ico} alt={`${name} icon`} width={50} height={50} />
			</span>

			<span>{name}</span>
		</motion.div>
	);
}
