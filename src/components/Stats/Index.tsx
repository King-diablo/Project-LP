import { stats } from '../../data/siteInfo';

import './Index.css';

export function Stats() {
	return (
		<div className='stats'>
			{stats.map((stat) => (
				<div className='stat' key={stat.label}>
					<img src={stat.icon} alt='' className='stat__icon' />

					<div className='stat__content'>
						<strong>{stat.value}</strong>
						<span>{stat.label}</span>
					</div>
				</div>
			))}
		</div>
	);
}
