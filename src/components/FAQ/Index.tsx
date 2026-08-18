import { faqs } from '../../data/siteInfo';
import { FAQItem } from '../FAQItem/Index';

import './Index.css';

export function FAQ() {
	return (
		<section id='faqs' className='faq section'>
			<div className='container faq__container'>
				<div className='faq__heading'>
					<span>Frequently</span>
					<h2>asked questions</h2>
				</div>

				<div className='faq__list'>
					{faqs.map((faq) => (
						<FAQItem key={faq.question} {...faq} />
					))}
				</div>
			</div>
		</section>
	);
}
