import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { CSSProperties, MouseEventHandler, ReactNode, ButtonHTMLAttributes } from 'react';

import './Index.css';

type ButtonProps = {
	children: ReactNode;

	href?: string;

	variant?: 'primary' | 'light';
	size?: 'small' | 'medium' | 'large';

	showArrow?: boolean;

	onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;

	className?: string;
	style?: CSSProperties;

	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export function Button({ children, href, variant = 'primary', size = 'medium', showArrow = false, onClick, className = '', style, type = 'button' }: ButtonProps) {
	const classNames = `button button--${variant} button--${size} ${className}`;

	if (href) {
		return (
			<motion.a
				href={href}
				className={classNames}
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

	return (
		<motion.button
			type={type}
			className={classNames}
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
		</motion.button>
	);
}
