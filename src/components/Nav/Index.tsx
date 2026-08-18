// Navbar.tsx

import { Button } from '../Button/Index';
import { navLinks } from '../../data/siteInfo';
import { Menu } from 'lucide-react';

import './Index.css';

export function Navbar() {
	return (
		<header className='navbar'>
			<a href='/' className='navbar__logo'>
				<strong>MON</strong>
				<span>
					E'CLAT
					<br />
					CONSULT
				</span>
			</a>

			<nav className='navbar__links'>
				{navLinks.map((link) => (
					<a key={link.href} href={link.href}>
						{link.label}
					</a>
				))}
			</nav>

			<Button href='#contact'>BOOK A CONSULTATION</Button>

			<button className='navbar__menu' aria-label='Open navigation'>
				<Menu size={22} />
			</button>
		</header>
	);
}
