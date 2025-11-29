'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/[0.98] backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" aria-label="Vetro Cleaning Service - Home">
          <Logo className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:block" aria-label="Hoofdnavigatie">
          <ul className="flex gap-8">
            <li><Link href="/#diensten" className="font-medium text-gray-500 hover:text-accent transition-colors py-2">Diensten</Link></li>
            <li><Link href="/#over-ons" className="font-medium text-gray-500 hover:text-accent transition-colors py-2">Over Ons</Link></li>
            <li><Link href="/team" className="font-medium text-gray-500 hover:text-accent transition-colors py-2">Team</Link></li>
            <li><Link href="/#werkwijze" className="font-medium text-gray-500 hover:text-accent transition-colors py-2">Werkwijze</Link></li>
            <li><Link href="/#contact" className="font-medium text-gray-500 hover:text-accent transition-colors py-2">Contact</Link></li>
          </ul>
        </nav>

        <Link href="/#contact" className="btn btn-primary hidden md:inline-flex">
          Neem Contact Op
        </Link>

        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 min-w-[44px] min-h-[44px] justify-center"
          aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 bottom-0 bg-white p-8 transition-transform duration-300 z-[999] md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobiele navigatie">
          <ul className="flex flex-col gap-4">
            <li><Link href="/#diensten" className="block text-xl font-medium text-gray-500 hover:text-accent py-4 border-b border-gray-200" onClick={closeMenu}>Diensten</Link></li>
            <li><Link href="/#over-ons" className="block text-xl font-medium text-gray-500 hover:text-accent py-4 border-b border-gray-200" onClick={closeMenu}>Over Ons</Link></li>
            <li><Link href="/team" className="block text-xl font-medium text-gray-500 hover:text-accent py-4 border-b border-gray-200" onClick={closeMenu}>Team</Link></li>
            <li><Link href="/#werkwijze" className="block text-xl font-medium text-gray-500 hover:text-accent py-4 border-b border-gray-200" onClick={closeMenu}>Werkwijze</Link></li>
            <li><Link href="/#contact" className="block text-xl font-medium text-gray-500 hover:text-accent py-4 border-b border-gray-200" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <Link href="/#contact" className="btn btn-primary w-full mt-8" onClick={closeMenu}>
            Neem Contact Op
          </Link>
        </nav>
      </div>
    </header>
  )
}
