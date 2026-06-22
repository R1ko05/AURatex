'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'ГЛАВНАЯ' },
    { href: '/portfolio', label: 'ПОРТФОЛИО' },
    { href: '/services', label: 'УСЛУГИ' },
    { href: '/about', label: 'О НАС' },
    { href: '/contact', label: 'КОНТАКТЫ' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-blue-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/WhatsApp Image 2026-06-22 at 22.15.44.jpeg"
              alt="AURatex Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-black">
              <span className="text-white">AUR</span>
              <span className="text-blue-600">atex</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 font-bold text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-600 hover:text-blue-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-blue-600/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-400 hover:text-blue-600 transition-colors duration-200 font-bold py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
