import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

import './Index.css';

type Props = {
	question: string;
	answer: string;
};

export function FAQItem({ question, answer }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
			<button className='faq-item__question' onClick={() => setOpen((value) => !value)} aria-expanded={open}>
				<span>{question}</span>

				<span className='faq-item__icon'>{open ? <Minus size={14} /> : <Plus size={14} />}</span>
			</button>

			{open && (
				<div className='faq-item__answer'>
					<p>{answer}</p>
				</div>
			)}
		</div>
	);
}
