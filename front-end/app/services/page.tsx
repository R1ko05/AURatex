'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Smartphone, Rocket, Shield, ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Code,
    tag: 'Интерфейс',
    title: 'FRONTEND',
    desc: 'Современные и отзывчивые пользовательские интерфейсы',
    gradientFrom: 'rgba(37, 99, 235, 0.18)',
    gradientTo: 'rgba(37, 99, 235, 0.03)',
    borderColor: 'rgba(99, 102, 241, 0.35)',
    features: ['React и Next.js приложения', 'TypeScript для типобезопасности', 'Tailwind CSS для стилизации', 'Анимации с Framer Motion'],
  },
  {
    icon: Database,
    tag: 'Сервер',
    title: 'BACKEND',
    desc: 'Надёжные серверные решения и высоконагруженные API',
    gradientFrom: 'rgba(79, 70, 229, 0.18)',
    gradientTo: 'rgba(79, 70, 229, 0.03)',
    borderColor: 'rgba(99, 102, 241, 0.35)',
    features: ['RESTful и GraphQL API', 'Node.js и Express', 'Интеграция с базами данных', 'Аутентификация и авторизация'],
  },
  {
    icon: Palette,
    tag: 'Визуал',
    title: 'UI/UX ДИЗАЙН',
    desc: 'Интуитивные интерфейсы и сильный визуальный бренд',
    gradientFrom: 'rgba(14, 165, 233, 0.18)',
    gradientTo: 'rgba(14, 165, 233, 0.03)',
    borderColor: 'rgba(56, 189, 248, 0.35)',
    features: ['Дизайн-системы', 'Прототипирование в Figma', 'Адаптивный дизайн', 'Анализ пользовательского опыта'],
  },
  {
    icon: Smartphone,
    tag: 'Мобайл',
    title: 'АДАПТИВНОСТЬ',
    desc: 'Идеальное отображение на любом устройстве и браузере',
    gradientFrom: 'rgba(6, 182, 212, 0.18)',
    gradientTo: 'rgba(6, 182, 212, 0.03)',
    borderColor: 'rgba(34, 211, 238, 0.35)',
    features: ['Mobile-first подход', 'Кросс-браузерная совместимость', 'Оптимизация производительности', 'Progressive Web Apps'],
  },
  {
    icon: Rocket,
    tag: 'Запуск',
    title: 'РАЗВЁРТЫВАНИЕ',
    desc: 'Запускаем и поддерживаем проекты на проверенной инфраструктуре',
    gradientFrom: 'rgba(124, 58, 237, 0.18)',
    gradientTo: 'rgba(124, 58, 237, 0.03)',
    borderColor: 'rgba(167, 139, 250, 0.35)',
    features: ['CI/CD настройка', 'Хостинг на Vercel', 'Мониторинг и аналитика', 'Техническая поддержка'],
  },
  {
    icon: Shield,
    tag: 'Защита',
    title: 'БЕЗОПАСНОСТЬ',
    desc: 'Надёжная защита данных и приложений от современных угроз',
    gradientFrom: 'rgba(16, 185, 129, 0.18)',
    gradientTo: 'rgba(16, 185, 129, 0.03)',
    borderColor: 'rgba(52, 211, 153, 0.35)',
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
    name: 'STARTER',
    label: 'Для старта',
    price: '150 000',
    desc: 'Лендинг или корпоративный сайт для малого бизнеса',
    popular: false,
    features: ['До 5 страниц', 'Адаптивный дизайн', 'Базовое SEO', 'Форма обратной связи', 'Хостинг на Vercel', '1 месяц поддержки'],
    cta: 'Начать',
  },
  {
    name: 'BUSINESS',
    label: 'Популярный',
    price: '350 000',
    desc: 'Полноценное веб-приложение с CMS и интеграциями',
    popular: true,
    features: ['До 20 страниц', 'CMS (Strapi / Sanity)', 'Личный кабинет пользователя', 'Интеграция с API сервисов', 'Расширенное SEO', 'Telegram-уведомления', '3 месяца поддержки'],
    cta: 'Выбрать план',
  },
  {
    name: 'ENTERPRISE',
    label: 'Для крупных задач',
    price: 'от 700 000',
    desc: 'Сложные платформы, маркетплейсы и SaaS-продукты',
    popular: false,
    features: ['Неограниченно страниц', 'Микросервисная архитектура', 'Платёжные системы', 'Мультиязычность (i18n)', 'Кастомная аналитика', 'Приоритетная поддержка', '12 месяцев поддержки'],
    cta: 'Обсудить',
  },
]

export default function Services() {
  return (
      <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

        {/* Сетка фона */}
        <div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
        />

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section className="relative z-10 py-20 pt-16 px-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

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

          <div className="relative max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Что мы предлагаем
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-none tracking-tight"
            >
              <span className="text-white">НАШИ </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">УСЛУГИ</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              Полный цикл веб-разработки — от идеи и дизайна{' '}
              <span className="text-white">до запуска и поддержки</span>
            </motion.p>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        {/* ─── УСЛУГИ ───────────────────────────────────────────── */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-10"
            >
              <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Направления</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Полный цикл<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">разработки</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                  <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6 }}
                      className="group"
                  >
                    <div
                        className="relative h-full rounded-2xl p-7 transition-all duration-300 overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${s.gradientFrom}, ${s.gradientTo})`,
                          border: `1px solid ${s.borderColor}`,
                        }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: 'rgba(59, 130, 246, 0.05)' }} />
                      <div className="relative z-10">
                    <span className="inline-block text-[10px] font-black tracking-widest text-blue-400/70 uppercase mb-5 px-2.5 py-1 border border-blue-500/20 rounded-full">
                      {s.tag}
                    </span>
                        <div className="w-14 h-14 bg-blue-600/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600/25 transition-colors duration-300">
                          <s.icon className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-black text-white mb-2 tracking-tight">{s.title}</h3>
                        <p className="text-gray-500 text-sm mb-5 leading-relaxed">{s.desc}</p>
                        <ul className="space-y-2.5">
                          {s.features.map((f) => (
                              <li key={f} className="flex items-center gap-2.5 text-gray-400 text-sm">
                                <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                {f}
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        {/* ─── ПРОЦЕСС ──────────────────────────────────────────── */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-10"
            >
              <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Как мы работаем</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Процесс<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">от идеи до запуска</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, i) => (
                  <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="group"
                  >
                    <div className="h-full bg-white/[0.03] hover:bg-blue-600/8 border border-blue-500/30 hover:border-blue-500 rounded-2xl p-7 transition-all duration-300">
                      <div className="flex items-start justify-between mb-5">
                    <span className="text-5xl font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors leading-none select-none">
                      {item.step}
                    </span>
                        <div className="w-2 h-2 rounded-full bg-blue-600/30 group-hover:bg-blue-500 transition-colors mt-2" />
                      </div>
                      <h3 className="text-base font-black text-white mb-2 tracking-wide">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

        {/* ─── ПРАЙС ────────────────────────────────────────────── */}
        <section className="relative z-10 py-24 px-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-14"
            >
              <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Прозрачное ценообразование</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Тарифы и<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">стоимость</span>
              </h2>
              <p className="text-gray-500 text-base mt-4 max-w-md leading-relaxed">
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
                      className="relative flex flex-col"
                  >
                    {plan.popular && (
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/40 to-transparent pointer-events-none z-0" />
                    )}

                    <div
                        className={`relative z-10 flex flex-col flex-1 rounded-2xl p-7 ${
                            plan.popular
                                ? 'bg-[#0a1628] border border-blue-500/50 shadow-[0_0_50px_-10px_rgba(37,99,235,0.4)]'
                                : 'bg-white/[0.03] border border-white/[0.07]'
                        }`}
                    >
                      {plan.popular && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase shadow-[0_0_20px_rgba(37,99,235,0.7)]">
                        <Star className="w-3 h-3" />
                        {plan.label}
                      </span>
                          </div>
                      )}

                      <div className={plan.popular ? 'mt-4' : ''}>
                        {!plan.popular && (
                            <p className="text-[10px] font-black tracking-[0.2em] text-blue-400/50 uppercase mb-2">{plan.label}</p>
                        )}
                        <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
                      </div>

                      <div className="mt-6 mb-6 pb-6 border-b border-white/[0.07]">
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-black text-white leading-none">{plan.price}</span>
                          <span className="text-gray-500 text-sm mb-0.5">₸</span>
                        </div>
                        <p className="text-gray-600 text-xs mt-1">единоразово</p>
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

        {/* ─── CTA ──────────────────────────────────────────────── */}
        <section className="relative z-10 py-24 px-6">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-blue-600/7 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative max-w-2xl mx-auto text-center"
          >
            <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-5">Следующий шаг</p>
            <h2 className="text-5xl font-black mb-5 leading-tight">
              Готовы начать
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ваш проект?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
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
          </motion.div>
        </section>

      </div>
  )
}