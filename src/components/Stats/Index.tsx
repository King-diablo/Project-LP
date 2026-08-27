import { stats } from '../../data/siteInfo';

import './Index.css';

export function Stats() {
	return (
		<div className='stats'>
			{stats.map((stat) => (
				<div className='stat' key={stat.label}>
					<img src={stat.icon} alt='' aria-hidden='true' className='stat__icon' loading='lazy' decoding='async' width={42} height={42} />

					<span className='stat__label'>
						<strong className='stat__value'>{stat.value}</strong>
						<span className='stat__text'>{stat.label}</span>
					</span>
				</div>
			))}
		</div>
	);
}

