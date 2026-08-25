import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

import './Index.css';

type Props = {
	question: string;
	answer: string;
	open: boolean;
	onToggle: () => void;
};

export function FAQItem({ question, answer, open, onToggle }: Props) {
	return (
		<div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
			<button type='button' className='faq-item__question' onClick={onToggle} aria-expanded={open}>
				<span className='faq-item__title'>{question}</span>

				<span className='faq-item__icon'>{open ? <Minus size={20} strokeWidth={1.8} /> : <Plus size={20} strokeWidth={1.8} />}</span>
			</button>

			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						className='faq-item__answer-wrapper'
						initial={{
							height: 0,
							opacity: 0,
						}}
						animate={{
							height: 'auto',
							opacity: 1,
						}}
						exit={{
							height: 0,
							opacity: 0,
						}}
						transition={{
							duration: 0.2,
							ease: 'easeOut',
						}}
					>
						<div className='faq-item__answer'>
							<p>{answer}</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
