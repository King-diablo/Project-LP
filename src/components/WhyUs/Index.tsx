import { whyUs } from '../../data/siteInfo';

import './Index.css';

export function WhyUs() {
	return (
		<section className='why-us'>
			<div className='container'>
				<div className='why-us__heading'>
					<span>WHY US?</span>
				</div>

				<div className='why-us__grid'>
					{whyUs.map((item) => (
						<article className='why-us__card' key={item.title}>
							<span>{item.icon}</span>

							<h3>{item.title}</h3>

							<p>{item.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
