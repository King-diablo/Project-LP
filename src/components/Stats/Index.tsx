import { stats } from '../../data/siteInfo';

import './Index.css';

export function Stats() {
	return (
		<div className='stats'>
			{stats.map((stat) => (
				<div className='stat' key={stat.label}>
					<img src={stat.icon} alt={stat.label} className='stat__icon' />

					<strong>{stat.value}</strong>

					<span>{stat.label}</span>
				</div>
			))}
		</div>
	);
}
