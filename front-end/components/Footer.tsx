'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-blue-600/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              <span className="text-white">AUR</span>
              <span className="text-blue-600">atex</span>
            </h3>
            <p className="text-gray-500 mb-4">
              Разработка веб-приложений нового поколения
            </p>
          </div>

          <div>
            <h4 className="font-black text-blue-600 mb-4">НАВИГАЦИЯ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-blue-600 mb-4">КОНТАКТЫ</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@auratex.com"
                className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                <span>info@auratex.com</span>
              </a>
              <a
                href="https://github.com/auratex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/company/auratex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600/20 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} <span className="text-white">AUR</span><span className="text-blue-600">atex</span>. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
