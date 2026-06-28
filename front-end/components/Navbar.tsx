'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Home, Briefcase, Wrench, Users, Phone } from 'lucide-react'
import type { ReactElement } from 'react'

interface NavLink {
    href: string
    label: string
    icon: ReactElement
}

export default function Navbar(): ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = (): void => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    }, [isOpen])

    const navLinks: NavLink[] = [
        { href: '/', label: 'ГЛАВНАЯ', icon: <Home size={18} /> },
        { href: '/portfolio', label: 'ПОРТФОЛИО', icon: <Briefcase size={18} /> },
        { href: '/services', label: 'УСЛУГИ', icon: <Wrench size={18} /> },
        { href: '/about', label: 'О НАС', icon: <Users size={18} /> },
        { href: '/contact', label: 'КОНТАКТЫ', icon: <Phone size={18} /> },
    ]

    const isActive = (href: string): boolean => {
        if (href === '/') return pathname === '/'
        return pathname.indexOf(href) === 0
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
                    scrolled
                        ? 'bg-black/90 backdrop-blur-xl border-blue-600/30 shadow-[0_4px_32px_rgba(37,99,235,0.08)] py-3'
                        : 'bg-transparent border-transparent py-4'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">

                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-xl bg-blue-600/30 blur-md group-hover:blur-lg transition-all duration-300" />
                            <img
                                src="/WhatsApp Image 2026-06-22 at 22.15.44.jpeg"
                                alt="AURatex Logo"
                                width={42}
                                height={42}
                                className="relative rounded-xl"
                            />
                        </div>
                        <span className="text-2xl font-black tracking-tight">
                            <span className="text-white">AURA</span>
                            <span className="text-blue-500">tex</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-1">
                        {Array.from(navLinks).map((link: NavLink) => {
                            const active = isActive(link.href)
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-sm font-bold tracking-wider transition-colors duration-200 group rounded-lg ${
                                        active ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    <span className="absolute inset-0 rounded-lg transition-all duration-200" />
                                    <span className={`absolute bottom-1 left-4 right-4 h-px bg-blue-500 transition-transform duration-200 origin-left ${
                                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center justify-center h-10 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wider transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                        >
                            СВЯЗАТЬСЯ
                        </Link>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-blue-600/30 bg-blue-600/5 hover:bg-blue-600/15 transition-all duration-200 group"
                            aria-label="Open menu"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span className="block h-0.5 w-full bg-blue-400 rounded-full transition-all duration-300 group-hover:w-4/5" />
                                <span className="block h-0.5 w-full bg-blue-400 rounded-full" />
                                <span className="block h-0.5 w-3/5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full" />
                            </div>
                        </button>
                    </div>

                </div>
            </nav>

            <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>

                <div
                    className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />

                <div className={`absolute top-0 right-0 w-full max-w-xs h-full bg-[#060812] border-l border-blue-600/20 shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>

                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

                    <div className="flex items-center justify-between px-6 pt-6 pb-8">
                        <span className="text-xs font-black tracking-[0.25em] text-gray-500 uppercase">Меню</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 transition-all duration-300"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex flex-col px-4 gap-1 flex-grow">
                        {Array.from(navLinks).map((link: NavLink, idx: number) => {
                            const active = isActive(link.href)
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-4 px-4 py-4 rounded-xl font-bold text-base transition-all duration-300 ${
                                        active
                                            ? 'bg-blue-600/15 text-blue-400 border border-blue-600/25'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                                    }`}
                                    style={{
                                        transitionDelay: `${idx * 45}ms`,
                                        transform: isOpen ? 'translateX(0)' : 'translateX(24px)',
                                        opacity: isOpen ? 1 : 0,
                                        transitionProperty: 'all',
                                    }}
                                >
                                    <span className={active ? 'text-blue-500' : 'text-gray-600'}>{link.icon}</span>
                                    <span className="tracking-wider">{link.label}</span>
                                    {active && (
                                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="px-6 py-8 border-t border-white/5">
                        <div className="h-px mb-6 bg-gradient-to-r from-blue-600/30 to-transparent" />
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-widest transition-all duration-200 active:scale-95 shadow-[0_0_24px_rgba(37,99,235,0.4)]"
                        >
                            СВЯЗАТЬСЯ С НАМИ
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}