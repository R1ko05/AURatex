'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Database, Palette, ArrowRight, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      icon: Code2,
      title: 'FRONTEND',
      desc: 'React, Next.js, TypeScript',
      fullDescription: {
        what: 'Frontend (фронтенд) — это визуальная часть сайта или приложения, с которой взаимодействует пользователь. Это всё, что вы видите и с чем работаете в браузере: кнопки, меню, формы, анимации и дизайн.',
        howWorks: 'Frontend работает в браузере пользователя. Когда вы открываете сайт, браузер загружает HTML (структура страницы), CSS (оформление) и JavaScript (интерактивность). Мы используем современные технологии как React и Next.js, которые делают сайт быстрым, отзывчивым и удобным.',
        why: 'Frontend определяет первое впечатление о вашем бизнесе. Качественный фронтенд делает сайт приятным в использовании, быстрым и понятным для пользователей. Это напрямую влияет на конверсию, удержание клиентов и репутацию бренда.',
        where: 'Frontend используется везде, где есть визуальный интерфейс: корпоративные сайты, интернет-магазины, личные кабинеты, административные панели, мобильные веб-приложения, лендинги и маркетинговые страницы.',
        videoPlaceholder: 'frontend-video.mp4'
      }
    },
    {
      icon: Database,
      title: 'BACKEND',
      desc: 'Node.js, API, Databases',
      fullDescription: {
        what: 'Backend (бэкенд) — это серверная часть приложения, которая работает "за кулисами". Это мозг вашего сайта, который обрабатывает данные, хранит информацию, выполняет бизнес-логику и обеспечивает безопасность.',
        howWorks: 'Backend работает на сервере и обрабатывает запросы от frontend. Например, когда пользователь регистрируется, backend проверяет данные, сохраняет их в базу данных, шифрует пароль и отправляет ответ обратно. Мы используем Node.js для быстрой обработки данных и надёжные базы данных для их хранения.',
        why: 'Backend обеспечивает функциональность вашего сайта. Без него невозможна регистрация пользователей, обработка заказов, работа с платежами, хранение данных. Качественный backend гарантирует безопасность, стабильность и масштабируемость вашего бизнеса.',
        where: 'Backend необходим для любого сложного проекта: интернет-магазины (обработка заказов, платежей), социальные сети (хранение профилей, постов), SaaS-сервисы (бизнес-логика, подписки), CRM-системы, банковские приложения.',
        videoPlaceholder: 'backend-video.mp4'
      }
    },
    {
      icon: Palette,
      title: 'DESIGN',
      desc: 'UI/UX, Branding',
      fullDescription: {
        what: 'Design (дизайн) — это проектирование визуального облика и пользовательского опыта. UI (User Interface) — как выглядит ваш продукт, UX (User Experience) — как им удобно пользоваться. Branding — создание уникального стиля и айдентики бренда.',
        howWorks: 'Дизайн начинается с исследования вашей аудитории и конкурентов. Затем создаются прототипы (каркасы страниц), разрабатывается визуальный стиль (цвета, шрифты, иконки), проектируются все экраны приложения. Итог — готовый дизайн-макет, который передаётся в разработку.',
        why: 'Хороший дизайн увеличивает продажи и доверие. Пользователи принимают решение о доверии к сайту за 50 миллисекунд. Удобный интерфейс снижает количество отказов, увеличивает время на сайте и конверсию. Сильный брендинг выделяет вас среди конкурентов.',
        where: 'Дизайн нужен везде: корпоративные сайты (презентация компании), e-commerce (удобство покупки), мобильные приложения (интуитивность), стартапы (создание айдентики с нуля), редизайн существующих продуктов.',
        videoPlaceholder: 'design-video.mp4'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl top-20 -left-20 animate-pulse" />
          <div className="absolute w-96 h-96 bg-blue-700/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse delay-700" />

          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -25, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-600/40 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 35, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-blue-300/25 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-white">AUR</span>
            <span className="text-blue-600">atex</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Разработка веб-приложений нового поколения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-6 py-3 bg-blue-600 rounded-lg font-bold text-base overflow-hidden transition-all hover:bg-blue-700"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Начать проект
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 border-2 border-blue-600 rounded-lg font-bold text-base hover:bg-blue-600/10 transition-all"
            >
              Наши работы
            </Link>
          </div>
        </motion.div>

        {/* 3D Elements */}
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute right-20 top-40 w-32 h-32 border-2 border-blue-600/20"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </section>

      {/* Services Section */}
      <section className="relative py-12 px-4">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-10 w-32 h-32 border border-blue-600/10 rounded-lg"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-10 w-24 h-24 border border-blue-500/10 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">ЧТО МЫ </span>
              <span className="text-blue-600">ДЕЛАЕМ</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedService(i)}
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-blue-600/20 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-black mb-3 text-blue-600">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-12 px-4">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-1/4 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-10 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">ТЕХНО</span>
              <span className="text-blue-600">ЛОГИИ</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Strapi', 'PostgreSQL', 'Vercel'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15, delay: i * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900/80 border border-blue-600/20 rounded-xl p-4 text-center font-black text-base hover:border-blue-600/50 transition-all text-gray-400 hover:text-white">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-blue-600/5" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-600/10"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-20 w-16 h-16 border-2 border-blue-500/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [0, -360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 w-60 h-60 border border-blue-600/5 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center z-10"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            <span className="text-white">ГОТОВЫ </span>
            <span className="text-blue-600">НАЧАТЬ?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Свяжитесь с нами и создадим что-то невероятное
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 rounded-lg font-black text-lg hover:bg-blue-700 transition-all"
          >
            СВЯЗАТЬСЯ
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-blue-600/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg flex items-center justify-center transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  {(() => {
                    const ServiceIcon = services[selectedService].icon
                    return (
                      <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center">
                        <ServiceIcon className="w-8 h-8 text-blue-600" />
                      </div>
                    )
                  })()}
                  <div>
                    <h2 className="text-3xl font-black text-white">{services[selectedService].title}</h2>
                    <p className="text-gray-400">{services[selectedService].desc}</p>
                  </div>
                </div>

                {/* Video placeholder */}
                <div className="mb-8 bg-gray-800 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-0 h-0 border-l-[15px] border-l-blue-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-gray-400">Видео будет добавлено позже</p>
                    <p className="text-sm text-gray-600 mt-1">{services[selectedService].fullDescription.videoPlaceholder}</p>
                  </div>
                </div>

                {/* Content sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black text-blue-600 mb-3">ЧТО ЭТО ТАКОЕ?</h3>
                    <p className="text-gray-300 leading-relaxed">{services[selectedService].fullDescription.what}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-blue-600 mb-3">КАК ЭТО РАБОТАЕТ?</h3>
                    <p className="text-gray-300 leading-relaxed">{services[selectedService].fullDescription.howWorks}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-blue-600 mb-3">ДЛЯ ЧЕГО ЭТО НУЖНО?</h3>
                    <p className="text-gray-300 leading-relaxed">{services[selectedService].fullDescription.why}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-blue-600 mb-3">ГДЕ ИСПОЛЬЗУЕТСЯ?</h3>
                    <p className="text-gray-300 leading-relaxed">{services[selectedService].fullDescription.where}</p>
                  </div>
                </div>

                {/* CTA button */}
                <div className="mt-8 pt-6 border-t border-blue-600/20">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 rounded-lg font-black text-lg hover:bg-blue-700 transition-all"
                  >
                    ОБСУДИТЬ ПРОЕКТ
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
