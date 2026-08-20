type DestinationCardProps = {
	name: string;
	ico: string;
};

export function DestinationCard({ name, ico }: DestinationCardProps) {
	return (
		<div className='destination-card'>
			<img src={ico} alt={`${name} flag`} className='destination-card__flag' />

			<span className='destination-card__name'>{name}</span>
		</div>
	);
}
