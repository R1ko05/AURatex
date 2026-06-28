'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Database, Palette, Smartphone, Rocket, Shield, ArrowRight, Check, Star, Zap, Clock, HeartHandshake } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const services = [
  {
    icon: Code,
    tag: 'Интерфейс',
    title: 'FRONTEND',
    desc: 'Современные и отзывчивые пользовательские интерфейсы',
    accent: '#2563eb',
    features: ['React и Next.js приложения', 'TypeScript для типобезопасности', 'Tailwind CSS для стилизации', 'Анимации с Framer Motion'],
  },
  {
    icon: Database,
    tag: 'Сервер',
    title: 'BACKEND',
    desc: 'Надёжные серверные решения и высоконагруженные API',
    accent: '#4f46e5',
    features: ['RESTful и GraphQL API', 'Node.js и Express', 'Интеграция с базами данных', 'Аутентификация и авторизация'],
  },
  {
    icon: Palette,
    tag: 'Визуал',
    title: 'UI/UX ДИЗАЙН',
    desc: 'Интуитивные интерфейсы и сильный визуальный бренд',
    accent: '#0ea5e9',
    features: ['Дизайн-системы', 'Прототипирование в Figma', 'Адаптивный дизайн', 'Анализ пользовательского опыта'],
  },
  {
    icon: Smartphone,
    tag: 'Мобайл',
    title: 'АДАПТИВНОСТЬ',
    desc: 'Идеальное отображение на любом устройстве и браузере',
    accent: '#06b6d4',
    features: ['Mobile-first подход', 'Кросс-браузерная совместимость', 'Оптимизация производительности', 'Progressive Web Apps'],
  },
  {
    icon: Rocket,
    tag: 'Запуск',
    title: 'РАЗВЁРТЫВАНИЕ',
    desc: 'Запускаем и поддерживаем проекты на надёжной инфраструктуре',
    accent: '#7c3aed',
    features: ['CI/CD настройка', 'Хостинг на Vercel', 'Мониторинг и аналитика', 'Техническая поддержка'],
  },
  {
    icon: Shield,
    tag: 'Защита',
    title: 'БЕЗОПАСНОСТЬ',
    desc: 'Надёжная защита данных и приложений от угроз',
    accent: '#10b981',
    features: ['HTTPS и SSL сертификаты', 'Защита от XSS и CSRF', 'Безопасное хранение данных', 'Регулярные обновления'],
  },
]

const process = [
  { step: '01', title: 'ОБСУЖДЕНИЕ', desc: 'Изучаем требования, цели и аудиторию вашего проекта' },
  { step: '02', title: 'ПЛАНИРОВАНИЕ', desc: 'Разрабатываем техническое задание и архитектуру решения' },
  { step: '03', title: 'ДИЗАЙН', desc: 'Создаём прототипы и утверждаем визуальный стиль' },
  { step: '04', title: 'РАЗРАБОТКА', desc: 'Пишем чистый, поддерживаемый код по лучшим практикам' },
  { step: '05', title: 'ТЕСТИРОВАНИЕ', desc: 'Проверяем качество, скорость и кросс-браузерность' },
  { step: '06', title: 'ЗАПУСК', desc: 'Деплоим проект и обеспечиваем стабильную работу 24/7' },
]

const plans = [
  {
    name: 'ЛЕНДИНГ',
    label: 'Для старта',
    price: 'от 7 000',
    currency: 'сом',
    timeline: '3–5 дней',
    desc: 'Сайт-визитка или одностраничный лендинг для быстрого старта',
    popular: false,
    features: ['Дизайн под ваш бренд', 'Адаптивная верстка', 'Форма обратной связи', 'Запуск на хостинге', 'Базовое SEO'],
    cta: 'Начать',
  },
  {
    name: 'КОРПОРАТИВ',
    label: 'Популярный',
    price: 'от 18 000',
    currency: 'сом',
    timeline: '7–10 дней',
    desc: 'Многостраничный сайт для компании или сферы услуг',
    popular: true,
    features: ['Главная, О нас, Услуги, Контакты', 'Удобная админка (CMS)', 'Вы сами меняете тексты и фото', 'Подключение домена', 'Адаптивный дизайн', 'Telegram-уведомления'],
    cta: 'Выбрать план',
  },
  {
    name: 'ПЛАТФОРМА',
    label: 'Сложный проект',
    price: 'от 36 000',
    currency: 'сом',
    timeline: '10–14 дней',
    desc: 'Сложные платформы с каталогами, фильтрами и интеграциями',
    popular: false,
    features: ['Динамические каталоги с карточками', 'Поиск и фильтрация контента', 'Мультиязычность (i18n)', 'Интеграция с базами данных', 'Облачное хранилище медиафайлов', 'Приоритетная поддержка'],
    cta: 'Обсудить',
  },
]

const perks = [
  { icon: Zap, title: 'Быстрый старт', desc: 'Начинаем работу в течение 48 часов после согласования' },
  { icon: Clock, title: 'Точные сроки', desc: 'Фиксируем дедлайны в договоре и соблюдаем их' },
  { icon: HeartHandshake, title: 'Поддержка после сдачи', desc: 'Остаёмся на связи и помогаем после запуска' },
]

export default function Services() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
      <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

        <div className="fixed inset-0 pointer-events-none z-0"
             style={{
               backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
               backgroundSize: '60px 60px',
             }}
        />

        <section ref={heroRef} className="relative z-10 min-h-[70vh] flex items-center px-6 pt-40 pb-20 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none" />

          {[
            { top: '20%', left: '8%', size: 3, dur: 9, delay: 0 },
            { top: '65%', left: '4%', size: 5, dur: 12, delay: 1 },
            { top: '30%', right: '6%', size: 4, dur: 8, delay: 2 },
            { top: '70%', right: '10%', size: 3, dur: 10, delay: 0.5 },
          ].map((p, i) => (
              <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-400/25 pointer-events-none"
                  style={{ top: p.top, left: (p as any).left, right: (p as any).right, width: p.size, height: p.size }}
                  animate={{ y: [0, -20, 0], opacity: [0.25, 0.7, 0.25] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
              />
          ))}

          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                      className="absolute right-10 top-20 w-40 h-40 border border-blue-600/8 rounded-full pointer-events-none hidden lg:block" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="absolute right-16 top-26 w-28 h-28 border border-blue-500/6 rounded-full pointer-events-none hidden lg:block" />

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-7xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Что мы предлагаем
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight"
              >
                <span className="text-white">НАШИ </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">УСЛУГИ</span>
              </motion.h1>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-400 max-w-sm leading-relaxed lg:text-right"
              >
                Полный цикл веб-разработки — от идеи и дизайна{' '}
                <span className="text-white">до запуска и поддержки</span>
              </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid sm:grid-cols-3 gap-4 mt-14"
            >
              {perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/15 flex items-center justify-center shrink-0">
                      <perk.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white mb-0.5">{perk.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
            >
              <div>
                <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Направления</p>
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Полный цикл<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">разработки</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Берёмся за проекты любой сложности — от лендинга до высоконагруженной платформы
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                  <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="group"
                  >
                    <div
                        className="relative h-full rounded-2xl p-7 transition-all duration-300 overflow-hidden border border-white/[0.07] bg-white/[0.03]"
                        style={{ '--accent': s.accent } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                           style={{ background: `radial-gradient(circle at 30% 30%, ${s.accent}18, transparent 60%)` }} />
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-all duration-300" />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                      <span className="inline-block text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1 border rounded-full"
                            style={{ color: s.accent, borderColor: `${s.accent}40` }}>
                        {s.tag}
                      </span>
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                               style={{ background: `${s.accent}20` }}>
                            <s.icon className="w-5 h-5" style={{ color: s.accent }} />
                          </div>
                        </div>

                        <h3 className="text-xl font-black text-white mb-2 tracking-tight">{s.title}</h3>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">{s.desc}</p>

                        <div className="space-y-2.5 pt-5 border-t border-white/[0.06]">
                          {s.features.map((f) => (
                              <li key={f} className="flex items-center gap-2.5 text-gray-400 text-sm list-none">
                                <Check className="w-3.5 h-3.5 shrink-0" style={{ color: s.accent }} />
                                {f}
                              </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
            >
              <div>
                <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Как мы работаем</p>
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  От идеи<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">до запуска</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Прозрачный процесс в 6 этапов. Вы всегда знаете, на каком шаге находится проект
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/30 via-blue-600/10 to-transparent hidden lg:block" />

              <div className="grid lg:grid-cols-2 gap-5">
                {process.map((item, i) => (
                    <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className={`group ${i % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:mt-10'}`}
                    >
                      <div className="h-full bg-white/[0.03] hover:bg-blue-600/8 border border-blue-500/15 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300">
                        <div className="flex items-start gap-5">
                      <span className="text-6xl font-black text-blue-600/15 group-hover:text-blue-600/30 transition-colors leading-none select-none shrink-0">
                        {item.step}
                      </span>
                          <div>
                            <h3 className="text-base font-black text-white mb-2 tracking-wide">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        <section className="relative z-10 py-24 px-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
            >
              <div>
                <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Прозрачное ценообразование</p>
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Тарифы и<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">стоимость</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Фиксированные цены без скрытых доплат. Итоговая стоимость уточняется после брифа.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 items-start">
              {plans.map((plan, i) => (
                  <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="relative flex flex-col"
                  >
                    {plan.popular && (
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/50 to-transparent pointer-events-none z-0" />
                    )}

                    <div className={`relative z-10 flex flex-col flex-1 rounded-2xl p-7 ${
                        plan.popular
                            ? 'bg-[#080f20] border border-blue-500/60 shadow-[0_0_60px_-10px_rgba(37,99,235,0.5)]'
                            : 'bg-white/[0.03] border border-white/[0.07]'
                    }`}>

                      {plan.popular && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase shadow-[0_0_25px_rgba(37,99,235,0.7)]">
                        <Star className="w-3 h-3" /> {plan.label}
                      </span>
                          </div>
                      )}

                      <div className={plan.popular ? 'mt-5' : ''}>
                        {!plan.popular && (
                            <p className="text-[10px] font-black tracking-[0.2em] text-blue-400/50 uppercase mb-2">{plan.label}</p>
                        )}
                        <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
                      </div>

                      <div className="mt-6 mb-6 pb-6 border-b border-white/[0.07]">
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-black text-white leading-none">{plan.price}</span>
                          <span className="text-gray-500 text-sm mb-0.5">{plan.currency}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <p className="text-gray-600 text-xs">единоразово</p>
                          <span className="text-gray-700 text-xs">·</span>
                          <p className="text-blue-500/70 text-xs font-bold">⏱ {plan.timeline}</p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                              <Check className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-blue-400' : 'text-blue-600/60'}`} />
                              {f}
                            </li>
                        ))}
                      </ul>

                      <Link
                          href="/contact"
                          className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-black text-sm transition-all duration-200 active:scale-95 group ${
                              plan.popular
                                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.5)]'
                                  : 'border border-blue-600/30 hover:border-blue-500/50 hover:bg-blue-600/10 text-gray-400 hover:text-white'
                          }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-xs mt-8">
              * Цены ориентировочные. Точная стоимость определяется после обсуждения ТЗ.
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        <section className="relative z-10 py-24 px-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/7 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto"
          >
            <div className="relative rounded-3xl border border-blue-500/20 bg-white/[0.02] p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-5">Следующий шаг</p>
              <h2 className="text-5xl font-black mb-5 leading-tight">
                Готовы начать
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ваш проект?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
                Расскажите о задаче — подберём тариф и стартуем в течение 48 часов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-base transition-all duration-200 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                >
                  Обсудить проект
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/20 rounded-xl font-black text-base text-gray-400 hover:text-white transition-all duration-200"
                >
                  Наши работы
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
  )
}