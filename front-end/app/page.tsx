'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Database, Palette, ArrowRight, X, CheckCircle2, Zap, Shield, Globe } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type Token = { t: 'k'|'p'|'r'|'f'|'s'|'pl'; v: string }
function CodeLine({ indent = 0, tokens }: { indent?: number; tokens: Token[] }) {
  const color: Record<string, string> = {
    k: 'text-blue-400', p: 'text-sky-300', r: 'text-gray-400',
    f: 'text-yellow-300', s: 'text-green-300', pl: 'text-gray-300',
  }
  return (
      <div style={{ paddingLeft: indent * 10 }} className="flex flex-wrap text-[9px] font-mono leading-4">
        {tokens.map((tok, i) => <span key={i} className={color[tok.t]}>{tok.v}</span>)}
      </div>
  )
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      icon: Code2,
      title: 'FRONTEND',
      desc: 'React, Next.js, TypeScript',
      color: 'from-blue-600/20 to-blue-400/5',
      border: 'border-blue-500/30',
      tag: 'Интерфейс',
      fullDescription: {
        what: 'Frontend — это визуальная часть сайта или приложения, с которой взаимодействует пользователь. Это всё, что вы видите в браузере: кнопки, меню, формы, анимации и дизайн.',
        howWorks: 'Когда вы открываете сайт, браузер загружает HTML (структура), CSS (оформление) и JavaScript (интерактивность). Мы используем React и Next.js — технологии, делающие сайт быстрым, отзывчивым и удобным.',
        why: 'Frontend определяет первое впечатление о вашем бизнесе. Качественный интерфейс напрямую влияет на конверсию, удержание клиентов и репутацию бренда.',
        where: 'Корпоративные сайты, интернет-магазины, личные кабинеты, административные панели, мобильные веб-приложения, лендинги.',
        videoPlaceholder: 'frontend-video.mp4'
      }
    },
    {
      icon: Database,
      title: 'BACKEND',
      desc: 'Node.js, API, Databases',
      color: 'from-indigo-600/20 to-indigo-400/5',
      border: 'border-indigo-500/30',
      tag: 'Сервер',
      fullDescription: {
        what: 'Backend — серверная часть приложения, которая работает за кулисами. Это мозг сайта: обрабатывает данные, хранит информацию, выполняет бизнес-логику и обеспечивает безопасность.',
        howWorks: 'Backend обрабатывает запросы от frontend на сервере. При регистрации — проверяет данные, сохраняет в базу, шифрует пароль и отвечает браузеру. Используем Node.js и надёжные базы данных.',
        why: 'Без backend невозможна регистрация, обработка заказов, платежи, хранение данных. Качественный backend гарантирует безопасность, стабильность и масштабируемость.',
        where: 'Интернет-магазины, социальные сети, SaaS-сервисы, CRM-системы, банковские приложения.',
        videoPlaceholder: 'backend-video.mp4'
      }
    },
    {
      icon: Palette,
      title: 'DESIGN',
      desc: 'UI/UX, Branding',
      color: 'from-sky-600/20 to-sky-400/5',
      border: 'border-sky-500/30',
      tag: 'Визуал',
      fullDescription: {
        what: 'Design — проектирование визуального облика и пользовательского опыта. UI — как выглядит продукт, UX — как им удобно пользоваться, Branding — уникальный стиль и айдентика бренда.',
        howWorks: 'Начинаем с исследования аудитории и конкурентов. Создаём прототипы, разрабатываем визуальный стиль (цвета, шрифты, иконки), проектируем все экраны. Итог — готовый макет для разработки.',
        why: 'Пользователи принимают решение о доверии к сайту за 50 миллисекунд. Удобный интерфейс снижает отказы, увеличивает конверсию. Сильный брендинг выделяет среди конкурентов.',
        where: 'Корпоративные сайты, e-commerce, мобильные приложения, стартапы, редизайн существующих продуктов.',
        videoPlaceholder: 'design-video.mp4'
      }
    }
  ]

  const stats = [
    { value: '6+', label: 'Проектов сдано' },
    { value: '1.5', label: 'Года опыта' },
    { value: '100%', label: 'Довольных клиентов' },
    { value: '24/7', label: 'Поддержка' },
  ]

  const features = [
    { icon: Zap, text: 'Быстрая разработка' },
    { icon: Shield, text: 'Безопасный код' },
    { icon: Globe, text: 'SEO-оптимизация' },
    { icon: CheckCircle2, text: 'Гарантия качества' },
  ]

  return (
      <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

        <section className="relative min-h-screen flex items-center justify-center px-4 pt-40">
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
               }}
          />

          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/6 rounded-full blur-[80px] pointer-events-none" />

          {[
            { top: '20%', left: '15%', size: 3, dur: 8, delay: 0 },
            { top: '35%', right: '12%', size: 5, dur: 11, delay: 1 },
            { top: '65%', left: '8%', size: 4, dur: 7, delay: 2 },
            { top: '70%', right: '20%', size: 3, dur: 9, delay: 0.5 },
            { top: '15%', right: '30%', size: 2, dur: 6, delay: 1.5 },
          ].map((p, i) => (
              <motion.div
                  key={i}
                  className="absolute rounded-full bg-blue-400/30 pointer-events-none"
                  style={{ top: p.top, left: (p as any).left, right: (p as any).right, width: p.size, height: p.size }}
                  animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
              />
          ))}

          <div className="relative z-10 text-center max-w-5xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Веб-студия нового поколения
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-none tracking-tight"
            >
              <span className="text-white">AURA</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">tex</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed"
            >
              Создаём сайты и приложения, которые работают на ваш бизнес —
              <span className="text-white"> быстро, красиво, надёжно</span>
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <f.icon className="w-3.5 h-3.5 text-blue-500" />
                    {f.text}
                  </div>
              ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-base transition-all duration-200 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.35)]"
              >
                Начать проект
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-600/40 hover:border-blue-500 hover:bg-blue-600/10 rounded-xl font-black text-base text-gray-300 hover:text-white transition-all duration-200"
              >
                Наши работы
              </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 border border-blue-600/10 rounded-2xl overflow-hidden bg-blue-600/10"
            >
              {stats.map((s, i) => (
                  <div key={i} className="bg-[#030712] px-6 py-5 text-center">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-xs text-gray-500 font-medium tracking-wide">{s.label}</div>
                  </div>
              ))}
            </motion.div>
          </div>

          <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute right-6 xl:right-16 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none"
              style={{ perspective: '800px' }}
          >
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d', rotateY: '-8deg', rotateX: '4deg' }}
            >
              <div className="w-64 xl:w-72 rounded-xl overflow-hidden border border-blue-500/30 shadow-[0_0_60px_rgba(37,99,235,0.2)] bg-[#0d1117]">
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#161b22] border-b border-white/5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-[9px] text-gray-600 font-mono">app/page.tsx</span>
                </div>
                <div className="p-3 font-mono text-[10px] leading-5 space-y-0.5">
                  <CodeLine indent={0} tokens={[{t:'k',v:'import '},{t:'pl',v:'{ motion } from '},{t:'s',v:"'framer-motion'"}]} />
                  <CodeLine indent={0} tokens={[{t:'k',v:'import '},{t:'pl',v:'Link from '},{t:'s',v:"'next/link'"}]} />
                  <div className="h-1" />
                  <CodeLine indent={0} tokens={[{t:'k',v:'export default '},{t:'r',v:'function '},{t:'f',v:'Hero'},{t:'pl',v:'() {'}]} />
                  <CodeLine indent={1} tokens={[{t:'k',v:'const '},{t:'pl',v:'[open, setOpen] = '},{t:'f',v:'useState'},{t:'pl',v:'(false)'}]} />
                  <div className="h-1" />
                  <CodeLine indent={1} tokens={[{t:'k',v:'return '},{t:'pl',v:'('}]} />
                  <CodeLine indent={2} tokens={[{t:'pl',v:'<'},{t:'k',v:'motion'},{t:'pl',v:'.div'}]} />
                  <CodeLine indent={3} tokens={[{t:'p',v:'animate'},{t:'pl',v:'={{'},{t:'f',v:' y'},{t:'pl',v:': [0,-10,0] }}'}]} />
                  <CodeLine indent={3} tokens={[{t:'p',v:'transition'},{t:'pl',v:'={{'},{t:'f',v:' repeat'},{t:'pl',v:': Infinity }}'}]} />
                  <CodeLine indent={2} tokens={[{t:'pl',v:'>'}]} />
                  <CodeLine indent={3} tokens={[{t:'pl',v:'<'},{t:'k',v:'h1'},{t:'pl',v:' className='},{t:'s',v:'"hero"'},{t:'pl',v:'>'}]} />
                  <CodeLine indent={4} tokens={[{t:'s',v:'AURatex'}]} />
                  <CodeLine indent={3} tokens={[{t:'pl',v:'</'},{t:'k',v:'h1'},{t:'pl',v:'>'}]} />
                  <CodeLine indent={2} tokens={[{t:'pl',v:'</'},{t:'k',v:'motion'},{t:'pl',v:'.div>'}]} />
                  <CodeLine indent={1} tokens={[{t:'pl',v:')'}]} />
                  <CodeLine indent={0} tokens={[{t:'pl',v:'}'}]} />
                </div>
                <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="mx-3 mb-3 w-1.5 h-3 bg-blue-400 inline-block"
                />
              </div>
              <div className="w-[110%] h-3 bg-gradient-to-b from-[#1e2433] to-[#111827] rounded-b-lg -ml-[5%] border border-blue-500/10 border-t-0" />
              <div className="w-[120%] h-1.5 bg-[#0d1117] rounded-b-xl -ml-[10%]" />
            </motion.div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute right-4 xl:right-12 top-[22%] hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 pointer-events-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-bold text-green-400">Build successful</span>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="absolute right-20 xl:right-32 bottom-[18%] hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0d1117] border border-blue-500/20 shadow-lg pointer-events-none"
          >
            <div className="w-5 h-5 rounded bg-blue-600/20 flex items-center justify-center">
              <span className="text-[8px] font-black text-blue-400">TS</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400">TypeScript</span>
            <span className="text-[10px] text-green-400">✓</span>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute left-6 xl:left-14 top-[30%] hidden xl:block pointer-events-none"
          >
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="w-48 rounded-lg bg-[#0d1117] border border-white/5 overflow-hidden"
            >
              <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#161b22] border-b border-white/5">
                <span className="text-[8px] text-gray-600 font-mono">~ terminal</span>
              </div>
              <div className="p-2.5 font-mono text-[9px] space-y-1">
                <p><span className="text-green-400">$</span> <span className="text-gray-400">npm run dev</span></p>
                <p className="text-gray-600">▲ Next.js 15.0</p>
                <p className="text-gray-600">- Local: <span className="text-blue-400">localhost:3000</span></p>
                <p><span className="text-green-400">✓</span> <span className="text-gray-500">Ready in 881ms</span></p>
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-gray-400"
                >█</motion.span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute left-8 bottom-[25%] hidden xl:block pointer-events-none"
          >
            <div className="w-20 h-20 rounded-full border border-blue-600/15" />
            <div className="absolute inset-2 rounded-full border border-blue-500/10" />
            <div className="absolute inset-4 rounded-full border border-blue-400/10 animate-ping" style={{ animationDuration: '3s' }} />
          </motion.div>

          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.4 }}
              className="absolute left-16 top-[20%] hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 pointer-events-none"
          >
            <span className="text-[10px] font-bold text-blue-400">React 19</span>
            <span className="text-[10px] text-gray-600">·</span>
            <span className="text-[10px] text-gray-500">Next.js 15</span>
          </motion.div>

          <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute right-[30%] top-[15%] w-10 h-10 border border-blue-600/10 rounded-md hidden lg:block pointer-events-none"
          />
          <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute left-[20%] bottom-[15%] w-8 h-8 border border-blue-500/10 rounded-full hidden lg:block pointer-events-none"
          />
        </section>

        <section className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-16"
            >
              <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Что мы делаем</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Полный цикл<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">разработки</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6 }}
                      onClick={() => setSelectedService(i)}
                      className="group cursor-pointer"
                  >
                    <div className={`relative h-full bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-7 hover:border-blue-400/50 transition-all duration-300 overflow-hidden`}>
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300 rounded-2xl" />

                      <div className="relative z-10">
                        <span className="inline-block text-[10px] font-black tracking-widest text-blue-400/70 uppercase mb-5 px-2 py-0.5 border border-blue-500/20 rounded-full">
                        {service.tag}
                    </span>

                        <div className="w-14 h-14 bg-blue-600/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600/25 transition-colors duration-300">
                          <service.icon className="w-7 h-7 text-blue-400" />
                        </div>

                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{service.title}</h3>
                        <p className="text-gray-500 text-sm mb-6">{service.desc}</p>

                        <div className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:gap-3 transition-all duration-200">
                          Подробнее
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 px-4">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="mb-16"
            >
              <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Стек технологий</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Современные<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">инструменты</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'React', cat: 'Frontend' },
                { name: 'Next.js', cat: 'Framework' },
                { name: 'TypeScript', cat: 'Language' },
                { name: 'Tailwind', cat: 'Styles' },
                { name: 'Node.js', cat: 'Backend' },
                { name: 'Strapi', cat: 'CMS' },
                { name: 'PostgreSQL', cat: 'Database' },
                { name: 'Vercel', cat: 'Deploy' },
              ].map((tech, i) => (
                  <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className="group relative"
                  >
                    <div className="bg-white/[0.03] hover:bg-blue-600/10 border border-white/[0.06] hover:border-blue-500/30 rounded-xl p-4 transition-all duration-200">
                      <p className="text-[9px] text-gray-600 font-bold tracking-widest uppercase mb-1">{tech.cat}</p>
                      <p className="text-white font-black text-base">{tech.name}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto text-center z-10"
          >
            <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-4">Следующий шаг</p>
            <h2 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Готовы создать
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500"> что-то великое?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Расскажите о вашем проекте — мы подберём решение и стартуем в течение 48 часов
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-lg transition-all duration-200 active:scale-95 shadow-[0_0_50px_rgba(37,99,235,0.4)]"
              >
                Обсудить проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/10 hover:border-white/20 rounded-xl font-black text-lg text-gray-400 hover:text-white transition-all duration-200"
              >
                Услуги и цены
              </Link>
            </div>
          </motion.div>
        </section>

        <AnimatePresence>
          {selectedService !== null && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedService(null)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
              >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0a0f1e] border border-blue-600/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-t-2xl" />

                  <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-5 right-5 w-9 h-9 bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 rounded-lg flex items-center justify-center transition-all duration-200 z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      {(() => {
                        const S = services[selectedService]
                        const Icon = S.icon
                        return (
                            <>
                              <div className="w-14 h-14 bg-blue-600/15 rounded-xl flex items-center justify-center">
                                <Icon className="w-7 h-7 text-blue-400" />
                              </div>
                              <div>
                                <p className="text-[10px] font-black tracking-widest text-blue-500 uppercase mb-1">{S.tag}</p>
                                <h2 className="text-2xl font-black text-white">{S.title}</h2>
                                <p className="text-gray-500 text-sm">{S.desc}</p>
                              </div>
                            </>
                        )
                      })()}
                    </div>

                    <div className="mb-8 bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <div className="w-0 h-0 border-l-[14px] border-l-blue-500 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1" />
                        </div>
                        <p className="text-gray-500 text-sm">Видео появится позже</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[
                        { label: 'Что это?', key: 'what' },
                        { label: 'Как это работает?', key: 'howWorks' },
                        { label: 'Зачем это нужно?', key: 'why' },
                        { label: 'Где применяется?', key: 'where' },
                      ].map((block) => (
                          <div key={block.key} className="border-l-2 border-blue-600/30 pl-5">
                            <h3 className="text-xs font-black tracking-widest text-blue-500 uppercase mb-2">{block.label}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                              {services[selectedService].fullDescription[block.key as keyof typeof services[0]['fullDescription']]}
                            </p>
                          </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                      <Link
                          href="/contact"
                          onClick={() => setSelectedService(null)}
                          className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-base transition-all duration-200 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                      >
                        Обсудить проект
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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