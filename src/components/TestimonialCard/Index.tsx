import './Index.css';

type Props = {
	quote: string;
	name: string;
	role: string;
};

export function TestimonialCard({ quote, name, role }: Props) {
	return (
		<article className='testimonial-card'>
			<p>"{quote}"</p>

			<div className='testimonial-card__author'>
				<strong>{name}</strong>
				<span>{role}</span>
			</div>
		</article>
	);
}
