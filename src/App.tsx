import './App.css';
import './App.Responsive.css';

import { AcademicPathways } from './components/AcademicPathways/Index';
import { CTA } from './components/CTA/Index';
import { Destinations } from './components/Destinations/Index';
import { FAQ } from './components/FAQ/Index';
import { Footer } from './components/Footer/Index';
import { Hero } from './components/Hero/Index';
import { Testimonials } from './components/Testimonials/Index';
import { WhatWeDo } from './components/WhatWeDo/Index';
import { WhyUs } from './components/WhyUs/Index';

function App() {
	return (
		<div className='app'>
			<main>
				<Hero />

				<WhatWeDo />

				<AcademicPathways />

				<Destinations />

				<WhyUs />

				<Testimonials />

				<FAQ />

				<CTA />
			</main>

			<Footer />
		</div>
	);
}

export default App;
