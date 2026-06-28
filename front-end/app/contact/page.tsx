'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Send, MessageCircle, X, Check, Clock, Loader2 } from 'lucide-react'
import { useState } from 'react'

// ← Замени на свои данные
const TELEGRAM_USERNAME = 'auratex_support' // без @
const CONTACT_EMAIL = 'info@auratex.com'

type FormData = {
  name: string
  email: string
  phone: string
  budget: string
  message: string
}

type ModalStep = 'choose' | 'sending' | 'success'

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [modalStep, setModalStep] = useState<ModalStep>('choose')
  const [chosenMethod, setChosenMethod] = useState<'telegram' | 'email' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setModalStep('choose')
    setChosenMethod(null)
    setShowModal(true)
  }

  const sendViaTelegram = () => {
    setChosenMethod('telegram')
    setModalStep('sending')

    const text = encodeURIComponent(
        `🚀 Новая заявка с сайта AURatex\n\n` +
        `👤 Имя: ${formData.name}\n` +
        `📧 Email: ${formData.email}\n` +
        `📱 Телефон: ${formData.phone || 'не указан'}\n` +
        `💰 Бюджет: ${formData.budget || 'не указан'}\n\n` +
        `💬 Сообщение:\n${formData.message}`
    )

    setTimeout(() => {
      window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${text}`, '_blank')
      setModalStep('success')
      setFormData({ name: '', email: '', phone: '', budget: '', message: '' })
    }, 1200)
  }

  const sendViaEmail = () => {
    setChosenMethod('email')
    setModalStep('sending')

    const subject = encodeURIComponent(`Заявка от ${formData.name} — AURatex`)
    const body = encodeURIComponent(
        `Имя: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Телефон: ${formData.phone || 'не указан'}\n` +
        `Бюджет: ${formData.budget || 'не указан'}\n\n` +
        `Сообщение:\n${formData.message}`
    )

    setTimeout(() => {
      window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_blank')
      setModalStep('success')
      setFormData({ name: '', email: '', phone: '', budget: '', message: '' })
    }, 1200)
  }

  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => setModalStep('choose'), 300)
  }

  const budgets = [
    'До 100 000 ₸',
    '100 000 – 300 000 ₸',
    '300 000 – 700 000 ₸',
    'от 700 000 ₸',
    'Обсудим',
  ]

  return (
      <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

        <div className="fixed inset-0 pointer-events-none z-0"
             style={{
               backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
               backgroundSize: '60px 60px',
             }}
        />

        <section className="relative z-10 pt-40 pb-20 px-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

          {[
            { top: '15%', left: '5%', size: 3, dur: 8 },
            { top: '70%', left: '3%', size: 5, dur: 11 },
            { top: '25%', right: '5%', size: 4, dur: 9 },
            { top: '75%', right: '8%', size: 3, dur: 7 },
          ].map((p, i) => (
              <motion.div key={i}
                          className="absolute rounded-full bg-blue-400/20 pointer-events-none"
                          style={{ top: p.top, left: (p as any).left, right: (p as any).right, width: p.size, height: p.size }}
                          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
              />
          ))}

          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Обсудим ваш проект
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight"
              >
                <span className="text-white">СВЯЗА</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ТЬСЯ</span>
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-400 max-w-sm leading-relaxed lg:text-right"
              >
                Заполните форму — выберете куда удобнее получить ответ:{' '}
                <span className="text-white">в Telegram или на почту</span>
              </motion.p>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        {/* ── MAIN CONTENT ── */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">

            {/* Left — info */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2 space-y-5"
            >
              {/* Contact cards */}
              {[
                {
                  icon: MessageCircle,
                  label: 'Telegram',
                  value: `@${TELEGRAM_USERNAME}`,
                  href: `https://t.me/${TELEGRAM_USERNAME}`,
                  accent: '#3b82f6',
                  hint: 'Ответим быстрее всего',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: CONTACT_EMAIL,
                  href: `mailto:${CONTACT_EMAIL}`,
                  accent: '#6366f1',
                  hint: 'Для официальных запросов',
                },
                {
                  icon: Phone,
                  label: 'Телефон',
                  value: '+7 (900) 123-45-67',
                  href: 'tel:+79001234567',
                  accent: '#0ea5e9',
                  hint: 'Пн–Пт, 10:00–19:00',
                },
              ].map((item, i) => (
                  <motion.a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                         style={{ background: `${item.accent}20`, border: `1px solid ${item.accent}30` }}>
                      <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase mb-0.5">{item.label}</p>
                      <p className="text-white font-bold text-sm truncate group-hover:text-blue-400 transition-colors">{item.value}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{item.hint}</p>
                    </div>
                  </motion.a>
              ))}

              {/* Working hours */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-black tracking-widest text-gray-500 uppercase">Режим работы</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Пн — Пт</span>
                    <span className="text-white font-bold">10:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Сб — Вс</span>
                    <span className="text-gray-600">Выходной</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-bold">Сейчас онлайн</span>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="lg:col-span-3"
            >
              <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

                <h2 className="text-2xl font-black text-white mb-1">Заполните форму</h2>
                <p className="text-gray-500 text-sm mb-8">Выберете способ получения ответа после отправки</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Имя *</label>
                      <input
                          type="text" name="name" required value={formData.name} onChange={handleChange}
                          placeholder="Иван Иванов"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Email *</label>
                      <input
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          placeholder="ivan@example.com"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Телефон</label>
                      <input
                          type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          placeholder="+7 (900) 123-45-67"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Бюджет</label>
                      <select
                          name="budget" value={formData.budget} onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 rounded-xl text-sm outline-none transition-colors appearance-none cursor-pointer"
                          style={{ color: formData.budget ? 'white' : '#4b5563' }}
                      >
                        <option value="" disabled>Выберите бюджет</option>
                        {budgets.map(b => <option key={b} value={b} className="bg-[#0d1117] text-white">{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Сообщение *</label>
                    <textarea
                        name="message" required value={formData.message} onChange={handleChange}
                        rows={5} placeholder="Расскажите о вашем проекте: что нужно сделать, в какие сроки, какие есть особенности..."
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] focus:border-blue-500/50 rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-base transition-all duration-200 active:scale-[0.98] shadow-[0_0_30px_rgba(37,99,235,0.35)]"
                  >
                    Отправить заявку
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-gray-600 text-xs">
                    После нажатия выберете удобный способ связи — Telegram или Email
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── MODAL ── */}
        <AnimatePresence>
          {showModal && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                  onClick={(e) => e.target === e.currentTarget && modalStep !== 'sending' && closeModal()}
              >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 10 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-md rounded-2xl bg-[#080f20] border border-blue-500/20 overflow-hidden"
                >
                  {/* Top glow */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                  {/* Close */}
                  {modalStep !== 'sending' && (
                      <button onClick={closeModal}
                              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-500 flex items-center justify-center transition-all">
                        <X className="w-4 h-4" />
                      </button>
                  )}

                  {/* ── CHOOSE ── */}
                  {modalStep === 'choose' && (
                      <div className="p-8">
                        <div className="mb-6">
                          <p className="text-[10px] font-black tracking-widest text-blue-500 uppercase mb-2">Заявка готова</p>
                          <h3 className="text-2xl font-black text-white mb-2">Куда отправить?</h3>
                          <p className="text-gray-500 text-sm">Выберите удобный способ — мы получим вашу заявку и свяжемся с вами</p>
                        </div>

                        <div className="space-y-3">
                          {/* Telegram option */}
                          <motion.button
                              whileHover={{ x: 4 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={sendViaTelegram}
                              className="group w-full flex items-center gap-4 p-5 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-500/15 transition-all duration-200 text-left"
                          >
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                              <MessageCircle className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-white text-base">Telegram</p>
                              <p className="text-gray-500 text-xs mt-0.5">Откроется чат — отвечаем быстро</p>
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/25">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              <span className="text-[10px] font-bold text-green-400">Быстро</span>
                            </div>
                          </motion.button>

                          {/* Email option */}
                          <motion.button
                              whileHover={{ x: 4 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={sendViaEmail}
                              className="group w-full flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-200 text-left"
                          >
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                              <Mail className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-white text-base">Email</p>
                              <p className="text-gray-500 text-xs mt-0.5">Откроется почтовый клиент</p>
                            </div>
                            <span className="text-[10px] font-bold text-gray-600 px-2.5 py-1 rounded-full border border-white/[0.06]">Официально</span>
                          </motion.button>
                        </div>

                        <p className="text-center text-gray-600 text-xs mt-5">
                          Нажав кнопку, вы будете перенаправлены в выбранный сервис
                        </p>
                      </div>
                  )}

                  {/* ── SENDING ── */}
                  {modalStep === 'sending' && (
                      <div className="p-8 text-center">
                        <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                             style={{ background: chosenMethod === 'telegram' ? 'rgba(59,130,246,0.15)' : 'rgba(99,102,241,0.15)' }}>
                          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                        </div>
                        <h3 className="text-xl font-black text-white mb-2">Открываем {chosenMethod === 'telegram' ? 'Telegram' : 'почту'}...</h3>
                        <p className="text-gray-500 text-sm">Подготавливаем вашу заявку</p>
                      </div>
                  )}

                  {/* ── SUCCESS ── */}
                  {modalStep === 'success' && (
                      <div className="p-8 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                            className="w-16 h-16 rounded-2xl bg-green-500/15 border border-green-500/25 mx-auto mb-5 flex items-center justify-center"
                        >
                          <Check className="w-8 h-8 text-green-400" />
                        </motion.div>
                        <h3 className="text-xl font-black text-white mb-2">Заявка отправлена!</h3>
                        <p className="text-gray-500 text-sm mb-6">
                          {chosenMethod === 'telegram'
                              ? 'Telegram открыт — отправьте сообщение, и мы ответим в течение нескольких часов'
                              : 'Почтовый клиент открыт — отправьте письмо, и мы ответим в течение 24 часов'}
                        </p>
                        <button
                            onClick={closeModal}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-sm transition-all active:scale-95"
                        >
                          Отлично!
                        </button>
                      </div>
                  )}
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>

      </div>
  )
}