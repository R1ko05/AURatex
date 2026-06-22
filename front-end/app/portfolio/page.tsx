'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce платформа',
      description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Корпоративный сайт',
      description: 'Современный сайт для IT-компании с анимациями и CMS',
      tags: ['React', 'Tailwind CSS', 'Strapi', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      description: 'Панель управления для SaaS-приложения с аналитикой и графиками',
      tags: ['Next.js', 'TypeScript', 'Chart.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Блог-платформа',
      description: 'Платформа для публикации статей с Markdown и комментариями',
      tags: ['Next.js', 'MDX', 'Prisma', 'NextAuth'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Сервис бронирования',
      description: 'Онлайн-система бронирования с календарём и уведомлениями',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Портфолио-конструктор',
      description: 'Конструктор для создания персональных портфолио сайтов',
      tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-6 h-6 bg-blue-500/20 rounded-sm"
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-20 w-8 h-8 border-2 border-blue-400/15 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-40 left-1/4 w-24 h-24 border border-blue-600/10 rounded-lg"
          />
          <motion.div
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-1/3 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
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
              <span className="text-white">НАШИ </span>
              <span className="text-blue-600">РАБОТЫ</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Примеры проектов, которые мы разработали для наших клиентов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-blue-600/20 rounded-xl overflow-hidden hover:border-blue-600/50 transition-all">
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-6xl font-black text-blue-600/20">{project.id}</div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black text-white mb-2">{project.title}</h3>
                    <p className="text-gray-500 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-600/10 text-blue-600 text-sm rounded-full border border-blue-600/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Демо</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
