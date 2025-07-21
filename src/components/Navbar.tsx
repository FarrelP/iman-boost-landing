'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // State untuk menu mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  interface NavItem {
    name: string;
    href: string;
  }

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Product', href: '/product' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-20 p-6 transition-all duration-300 bg-gradient-to-b from-green-900 to-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-3xl font-bold cursor-pointer" onClick={() => {
          setActiveItem('Home');
          setIsMobileMenuOpen(false); // Tutup menu mobile saat klik logo
        }}>
          YourLogo
        </Link>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path> // Ikon 'X' saat menu terbuka
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path> // Ikon hamburger saat menu tertutup
            )}
          </svg>
        </button>

        {/* Desktop Navigation Items (hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                text-white text-lg relative group
                ${activeItem === item.name ? 'font-light' : 'font-extrlight'}
                transition-all duration-300 ease-in-out uppercase
              `}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
              <span className={`
                absolute bottom-0 left-0 w-full h-0.5 bg-white
                transform scale-x-0 group-hover:scale-x-100
                ${activeItem === item.name ? 'scale-x-100' : ''}
                transition-transform duration-300 ease-out origin-left
              `}></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (visible when isMobileMenuOpen is true) */}
      <div className={`
        md:hidden bg-green-900/90 py-4 px-6 mt-4 rounded-lg
        transition-all duration-300 ease-in-out transform origin-top
        ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}
      `}>
        <div className="flex flex-col space-y-4">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                block text-white text-lg hover:text-gray-200
                ${activeItem === item.name ? 'font-extrabold' : 'font-normal'}
                transition-colors duration-200
              `}
              onClick={() => {
                setActiveItem(item.name);
                setIsMobileMenuOpen(false); // Tutup menu setelah item diklik
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}