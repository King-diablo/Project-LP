import { motion } from 'motion/react';

import './Index.css';

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	variant?: 'primary' | 'light';
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button({ children, href = '#', variant = 'primary', onClick }: ButtonProps) {
	return (
		<motion.a
			href={href}
			className={`button button--${variant}`}
			onClick={onClick}
			whileHover={{
				y: -2,
				scale: 1.02,
			}}
			whileTap={{
				scale: 0.97,
			}}
		>
			{children}
		</motion.a>
	);
}
