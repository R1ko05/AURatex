'use client'

import { motion } from 'framer-motion'
import { Code, Database, Palette, Smartphone, Rocket, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'FRONTEND',
      description: 'Создаём современные и отзывчивые пользовательские интерфейсы',
      features: [
        'React и Next.js приложения',
        'TypeScript для типобезопасности',
        'Tailwind CSS для стилизации',
        'Анимации с Framer Motion',
      ],
    },
    {
      icon: Database,
      title: 'BACKEND',
      description: 'Разрабатываем надёжные серверные решения и API',
      features: [
        'RESTful и GraphQL API',
        'Node.js и Express',
        'Интеграция с базами данных',
        'Аутентификация и авторизация',
      ],
    },
    {
      icon: Palette,
      title: 'UI/UX ДИЗАЙН',
      description: 'Проектируем интуитивные и привлекательные интерфейсы',
      features: [
        'Дизайн-системы',
        'Прототипирование',
        'Адаптивный дизайн',
        'Анализ пользовательского опыта',
      ],
    },
    {
      icon: Smartphone,
      title: 'АДАПТИВНОСТЬ',
      description: 'Ваш сайт отлично выглядит на любых устройствах',
      features: [
        'Mobile-first подход',
        'Кросс-браузерная совместимость',
        'Оптимизация производительности',
        'Progressive Web Apps',
      ],
    },
    {
      icon: Rocket,
      title: 'РАЗВЁРТЫВАНИЕ',
      description: 'Запускаем проекты и обеспечиваем их стабильную работу',
      features: [
        'CI/CD настройка',
        'Хостинг на Vercel',
        'Мониторинг и аналитика',
        'Техническая поддержка',
      ],
    },
    {
      icon: Shield,
      title: 'БЕЗОПАСНОСТЬ',
      description: 'Защищаем ваши данные и обеспечиваем безопасность приложений',
      features: [
        'HTTPS и SSL сертификаты',
        'Защита от XSS и CSRF',
        'Безопасное хранение данных',
        'Регулярные обновления',
      ],
    },
  ]

  const process = [
    {
      step: '01',
      title: 'ОБСУЖДЕНИЕ',
      description: 'Изучаем ваши требования и цели проекта',
    },
    {
      step: '02',
      title: 'ПЛАНИРОВАНИЕ',
      description: 'Разрабатываем техническое задание и архитектуру',
    },
    {
      step: '03',
      title: 'РАЗРАБОТКА',
      description: 'Создаём ваш проект, используя лучшие практики',
    },
    {
      step: '04',
      title: 'ТЕСТИРОВАНИЕ',
      description: 'Проверяем качество и исправляем недочёты',
    },
    {
      step: '05',
      title: 'ЗАПУСК',
      description: 'Развёртываем проект и делаем его доступным',
    },
    {
      step: '06',
      title: 'ПОДДЕРЖКА',
      description: 'Обеспечиваем техническую поддержку и обновления',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-600/5 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-white">НАШИ </span>
              <span className="text-blue-600">УСЛУГИ</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Полный спектр услуг веб-разработки от идеи до запуска и поддержки
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-blue-600/20 rounded-xl p-8 hover:border-blue-600/50 transition-all">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-500 text-sm">
                        <span className="text-blue-600 mt-1">▪</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-blue-600/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">ПРОЦЕСС </span>
              <span className="text-blue-600">РАБОТЫ</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Мы следуем проверенной методологии для достижения лучших результатов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-900/50 border border-blue-600/20 rounded-xl p-6 hover:border-blue-600/50 transition-all">
                  <div className="text-5xl font-black text-blue-600 mb-3">{item.step}</div>
                  <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">ГОТОВЫ НАЧАТЬ РАБОТУ НАД </span>
              <span className="text-blue-600">ПРОЕКТОМ?</span>
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Свяжитесь с нами, и мы обсудим, как мы можем помочь вам
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 px-10 py-4 rounded-lg font-black text-lg hover:bg-blue-700 transition-all"
            >
              СВЯЗАТЬСЯ С НАМИ
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
