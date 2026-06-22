'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Разработчик 1',
      role: 'Full-stack разработчик',
      bio: 'Специализируется на React, Next.js и Node.js',
    },
    {
      name: 'Разработчик 2',
      role: 'Frontend разработчик',
      bio: 'Эксперт в создании современных интерфейсов',
    },
    {
      name: 'Разработчик 3',
      role: 'Backend разработчик',
      bio: 'Создаёт надёжные серверные решения',
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'РЕЗУЛЬТАТ',
      description: 'Мы фокусируемся на достижении целей наших клиентов',
    },
    {
      icon: Award,
      title: 'КАЧЕСТВО',
      description: 'Пишем чистый, масштабируемый и поддерживаемый код',
    },
    {
      icon: Users,
      title: 'КОМАНДА',
      description: 'Тесное сотрудничество с клиентами на всех этапах',
    },
    {
      icon: Heart,
      title: 'СТРАСТЬ',
      description: 'Мы увлечены веб-разработкой и любим то, что делаем',
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
              <span className="text-white">О </span>
              <span className="text-blue-600">НАС</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Мы — команда из трёх увлечённых разработчиков, которые создают качественные веб-решения
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-6">
              <span className="text-white">НАША </span>
              <span className="text-blue-600">ИСТОРИЯ</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-lg">
              <p>
                AURatex была основана тремя друзьями, которые разделяют страсть к веб-разработке и
                стремление создавать качественные цифровые продукты.
              </p>
              <p>
                Мы специализируемся как на frontend, так и на backend разработке, используя современные
                технологии и лучшие практики индустрии. Наш опыт охватывает создание сложных
                веб-приложений, корпоративных сайтов и e-commerce платформ.
              </p>
              <p>
                Каждый проект для нас — это возможность применить наши навыки и создать что-то
                действительно ценное для наших клиентов.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              <span className="text-white">НАШИ </span>
              <span className="text-blue-600">ЦЕННОСТИ</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900/50 border border-blue-600/20 p-6 rounded-xl text-center hover:border-blue-600/50 transition-all">
                  <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-black text-white mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">НАША </span>
              <span className="text-blue-600">КОМАНДА</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Познакомьтесь с людьми, которые воплощают проекты в жизнь
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900/50 border border-blue-600/20 rounded-xl overflow-hidden hover:border-blue-600/50 transition-all">
                  <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-8xl font-black text-blue-600/20">{index + 1}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-bold mb-3">{member.role}</p>
                    <p className="text-gray-500">{member.bio}</p>
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
