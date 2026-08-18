import { destinations } from '../../data/siteInfo';
import { DestinationCard } from '../DestinationCard/Index';

import './Index.css';

export function Destinations() {
	return (
		<section className='destinations section'>
			<div className='container'>
				<div className='section-heading'>
					<span>DESTINATIONS</span>
				</div>

				<div className='destination-grid'>
					{destinations.map((destination) => (
						<DestinationCard key={destination.name} {...destination} />
					))}
				</div>
			</div>
		</section>
	);
}
