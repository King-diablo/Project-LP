import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import './Index.css';

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	variant?: 'primary' | 'light';
	size?: 'small' | 'medium' | 'large';
	showArrow?: boolean;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function Button({ children, href = '#', variant = 'primary', size = 'medium', showArrow = false, onClick }: ButtonProps) {
	return (
		<motion.a
			href={href}
			className={`button button--${variant} button--${size}`}
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
