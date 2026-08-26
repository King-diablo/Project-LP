import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';

import './Index.css';

type ButtonProps = {
	children: ReactNode;

	href?: string;

	variant?: 'primary' | 'light';
	size?: 'small' | 'medium' | 'large';

	showArrow?: boolean;

	onClick?: MouseEventHandler<HTMLAnchorElement>;

	className?: string;
	style?: CSSProperties;
};

export function Button({ children, href = '#', variant = 'primary', size = 'medium', showArrow = false, onClick, className = '', style }: ButtonProps) {
	return (
		<motion.a
			href={href}
			className={`button button--${variant} button--${size} ${className}`}
			style={style}
			onClick={onClick}
			whileHover={{
				y: -2,
				scale: 1.02,
			}}
			whileTap={{
				scale: 0.97,
			}}
		>
			<span>{children}</span>

			{showArrow && <ArrowRight className='button__arrow' />}
		</motion.a>
	);
}
