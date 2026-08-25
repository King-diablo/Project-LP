import { stats } from '../../data/siteInfo';

import './Index.css';

export function Stats() {
	return (
		<div className='stats'>
			{stats.map((stat) => (
				<div className='stat' key={stat.label}>
					<img src={stat.icon} alt='' className='stat__icon' />

					{/* <strong className='stat__value'>{stat.value}</strong> */}

					<span className='stat__label'>
						{stat.value} {stat.label}
					</span>
				</div>
			))}
		</div>
	);
}
