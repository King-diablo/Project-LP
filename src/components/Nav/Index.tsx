import { useState } from 'react';
import { Button } from '../Button/Index';
import { navLinks } from '../../data/siteInfo';
import { Menu, X } from 'lucide-react';

import './Index.css';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className='navbar'>
			<a href='/' className='navbar__logo' onClick={closeMenu}>
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

			<div className='navbar__action'>
				<Button href='#contact'>BOOK A CONSULTATION</Button>
			</div>

			<button type='button' className='navbar__menu' aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
				{isMenuOpen ? <X size={22} /> : <Menu size={22} />}
			</button>

			<nav className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
				{navLinks.map((link) => (
					<a key={link.href} href={link.href} onClick={closeMenu}>
						{link.label}
					</a>
				))}

				<div className='navbar__mobile-action'>
					<Button href='#contact' onClick={closeMenu}>
						BOOK A CONSULTATION
					</Button>
				</div>
			</nav>
		</header>
	);
}
