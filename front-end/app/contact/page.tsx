'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-600/15 rounded-lg"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute top-1/4 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 right-1/4 w-5 h-5 bg-blue-400/25 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [0, -360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-1/3 w-28 h-28 border border-blue-600/8 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -45, 0],
              x: [0, 35, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute top-1/2 right-1/3 w-7 h-7 bg-blue-300/20"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">СВЯЗАТЬСЯ С </span>
              <span className="text-blue-600">НАМИ</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Напишите нам, и мы ответим в течение 24 часов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-gray-900/50 border border-blue-600/20 rounded-2xl p-8">
                <h2 className="text-3xl font-black text-white mb-6">КОНТАКТЫ</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-600/30">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-white mb-1">EMAIL</h3>
                      <a
                        href="mailto:info@auratex.com"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        info@auratex.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-600/30">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-white mb-1">ТЕЛЕФОН</h3>
                      <a
                        href="tel:+79001234567"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-600/20">
                  <h3 className="font-black text-white mb-4">РЕЖИМ РАБОТЫ</h3>
                  <p className="text-gray-500">Понедельник - Пятница: 10:00 - 19:00</p>
                  <p className="text-gray-500">Суббота - Воскресенье: Выходной</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-gray-900/50 border border-blue-600/20 rounded-2xl p-8">
                <h2 className="text-3xl font-black text-white mb-6">НАПИШИТЕ НАМ</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2">
                      ИМЯ *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-blue-600/30 rounded-lg focus:outline-none focus:border-blue-600 transition-colors text-white"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-blue-600/30 rounded-lg focus:outline-none focus:border-blue-600 transition-colors text-white"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-400 mb-2">
                      ТЕЛЕФОН
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-blue-600/30 rounded-lg focus:outline-none focus:border-blue-600 transition-colors text-white"
                      placeholder="+7 (900) 123-45-67"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2">
                      СООБЩЕНИЕ *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-black border border-blue-600/30 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none text-white"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-black flex items-center justify-center gap-2"
                  >
                    ОТПРАВИТЬ
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
