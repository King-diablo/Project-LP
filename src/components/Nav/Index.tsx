import { useState, useEffect, useRef } from 'react';
import { Menu, Plane, X } from 'lucide-react';

import { Button } from '../Button/Index';
import { navLinks } from '../../data/siteInfo';

import './Index.css';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	// Close on Escape key or click outside
	useEffect(() => {
		if (!isMenuOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeMenu();
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(event.target as Node)) {
				closeMenu();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<header className='navbar' ref={navRef}>
			<a href='/' className='navbar__logo' onClick={closeMenu} aria-label="Mon E'clat Consult Home">
				<strong>MON</strong>

				<span>
					E'CLAT
					<br />
					CONSULT
				</span>
			</a>

			<nav className='navbar__links' aria-label='Main navigation'>
				{navLinks.map((link, index) => (
					<a key={link.href} href={link.href}>
						{index === 0 && <Plane size={17} strokeWidth={2.5} aria-hidden='true' />}
						{link.label}
					</a>
				))}
			</nav>

			<div className='navbar__action'>
				<Button href='#contact'>BOOK A CONSULTATION</Button>
			</div>

			<button type='button' className='navbar__menu' aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls='mobile-navigation' onClick={toggleMenu}>
				{isMenuOpen ? <X size={24} aria-hidden='true' /> : <Menu size={24} aria-hidden='true' />}
			</button>

			<nav id='mobile-navigation' className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`} aria-label='Mobile navigation' aria-hidden={!isMenuOpen}>
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
