import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from '../Button/Index';
import { navLinks } from '../../data/siteInfo';

import './Index.css';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<header className='navbar'>
			<a href='/' className='navbar__logo' onClick={closeMenu} aria-label='Mon Eclat Consult Home'>
				<strong>MON</strong>

				<span>
					E'CLAT
					<br />
					CONSULT
				</span>
			</a>

			<nav className='navbar__links' aria-label='Main navigation'>
				{navLinks.map((link) => (
					<a key={link.href} href={link.href}>
						{link.label}
					</a>
				))}
			</nav>

			<div className='navbar__action'>
				<Button href='#contact'>BOOK A CONSULTATION</Button>
			</div>

			<button type='button' className='navbar__menu' aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} aria-controls='mobile-navigation' onClick={toggleMenu}>
				{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			<nav id='mobile-navigation' className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`} aria-label='Mobile navigation'>
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
