'use client'

import { motion } from 'framer-motion'
import { Target, Award, Users, Heart, Send, ExternalLink, Code2, Palette, Database } from 'lucide-react'

const team = [
    {
        name: 'Улукбек',
        role: 'Frontend & UI/UX',
        bio: 'Превращает дизайн в живой код. Отвечает за визуальную часть и пользовательский опыт — если сайт красивый, это его рук дело.',
        tags: ['React', 'Next.js', 'Figma', 'Framer Motion'],
        icon: Palette,
        gradient: 'from-blue-600/20 to-blue-400/5',
        accent: '#3b82f6',
        photo: './images/team/ulukbek.jpg',
        initials: 'У',
    },
    {
        name: 'Азимжан',
        role: 'Backend & API',
        bio: 'Строит то, что не видно, но без чего ничего не работает. Архитектура, базы данных, безопасность — его зона.',
        tags: ['Node.js', 'PostgreSQL', 'REST API', 'Strapi'],
        icon: Database,
        gradient: 'from-indigo-600/20 to-indigo-400/5',
        accent: '#6366f1',
        photo: './images/team/azimzhan.jpg',
        initials: 'А',
    },
    {
        name: 'Ринат',
        role: 'Fullstack & DevOps',
        bio: 'Держит проект вместе — от первой строки кода до деплоя. Следит за тем, чтобы всё работало быстро и без сбоев.',
        tags: ['TypeScript', 'Vercel', 'CI/CD', 'Tailwind'],
        icon: Code2,
        gradient: 'from-sky-600/20 to-sky-400/5',
        accent: '#0ea5e9',
        photo: './images/team/rinat.jpg',
        initials: 'Р',
    },
]

const values = [
    { icon: Target, title: 'РЕЗУЛЬТАТ', description: 'Фокусируемся на целях клиента, а не просто на написании кода' },
    { icon: Award, title: 'КАЧЕСТВО', description: 'Чистый, масштабируемый код и продуманный дизайн в каждом проекте' },
    { icon: Users, title: 'КОМАНДА', description: 'Работаем в тесном контакте с клиентом на каждом этапе' },
    { icon: Heart, title: 'СТРАСТЬ', description: 'Искренне любим то, что делаем — и это чувствуется в результате' },
]

const stats = [
    { value: '40+', label: 'Проектов' },
    { value: '3', label: 'Года опыта' },
    { value: '100%', label: 'Клиентов довольны' },
    { value: '48ч', label: 'Старт проекта' },
]

export default function About() {
    return (
        <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

            {/* Grid bg */}
            <div className="fixed inset-0 pointer-events-none z-0"
                 style={{
                     backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
                     backgroundSize: '60px 60px',
                 }}
            />

            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Кто мы такие
                    </motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight"
                        >
                            <span className="text-white">О </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">НАС</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-sm leading-relaxed lg:text-right"
                        >
                            Трое друзей, которые превращают идеи в{' '}
                            <span className="text-white">работающие цифровые продукты</span>
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-px border border-blue-600/10 rounded-2xl overflow-hidden bg-blue-600/10"
                    >
                        {stats.map((s, i) => (
                            <div key={i} className="bg-[#030712] px-6 py-5 text-center">
                                <div className="text-2xl md:text-3xl font-black text-white mb-1">{s.value}</div>
                                <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

            <section className="relative z-10 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Как всё начиналось</p>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                                Наша<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">история</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    Мы познакомились в лицее, куда поступили учиться на frontend-разработчиков. За время учёбы не ограничились программой — самостоятельно освоили backend, базы данных, деплой и дизайн.
                                </p>
                                <p>
                                    Все трое окончили с красным дипломом. Это не случайность — мы реально горели тем, что делали, и продолжаем гореть до сих пор.
                                </p>
                                <p>
                                    Совсем недавно решили сделать следующий шаг и основали AURatex. Никакой корпоративщины — просто три человека, которые умеют делать хорошие сайты и хотят помогать бизнесу расти.
                                </p>
                            </div>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {[
                                { year: '2025', text: 'Познакомились в лицее на специальности frontend-разработка' },
                                { year: '2025', text: 'Во время учёбы самостоятельно освоили backend, базы данных и DevOps' },
                                { year: '2026', text: 'Все трое окончили лицей с красным дипломом' },
                                { year: '2026', text: 'Основали AURatex — и начали работать с первыми клиентами' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/20 transition-colors"
                                >
                                    <span className="text-2xl font-black text-blue-600/40 shrink-0 leading-none">{item.year}</span>
                                    <p className="text-gray-400 text-sm leading-relaxed self-center">{item.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
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
                            <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Люди за проектами</p>
                            <h2 className="text-4xl md:text-5xl font-black text-white">
                                Наша<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">команда</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                            Три fullstack-разработчика с чёткой специализацией в своей зоне
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="group"
                            >
                                <div className={`relative h-full rounded-2xl overflow-hidden border border-white/[0.07] bg-gradient-to-br ${member.gradient} transition-all duration-300`}>
                                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-all duration-300" />

                                    <div className="relative h-80 overflow-hidden bg-black/20">
                                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                                            <span className="text-[120px] font-black leading-none select-none"
                                                    style={{ color: `${member.accent}25` }}>
                                                {member.initials}
                                            </span>
                                        </div>
                                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-center" style={{ objectPosition: "center 10%" }} />

                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center"
                                             style={{ background: `${member.accent}25`, border: `1px solid ${member.accent}40` }}>
                                            <member.icon className="w-5 h-5" style={{ color: member.accent }} />
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent" />
                                    </div>

                                    <div className="relative p-6 pt-4">
                                        <div className="mb-1">
                                            <span className="text-[9px] font-black tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border"
                                                    style={{ color: member.accent, borderColor: `${member.accent}40` }}>
                                                {member.role}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mt-2 mb-2">{member.name}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{member.bio}</p>

                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {member.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] font-bold text-gray-500 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-2 pt-4 border-t border-white/[0.06]">
                                            {[
                                                { icon: Code2, href: '#', label: 'GitHub' },
                                                { icon: Send, href: '#', label: 'Telegram' },
                                                { icon: ExternalLink, href: '#', label: 'LinkedIn' },
                                            ].map(({ icon: Icon, href, label }, j) => (
                                                <a key={j} href={href}
                                                   className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white transition-all duration-200">
                                                    <Icon className="w-3.5 h-3.5" />
                                                </a>
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
                            <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-3">Что нами движет</p>
                            <h2 className="text-4xl md:text-5xl font-black text-white">
                                Наши<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">ценности</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                            Принципы, которые определяют как мы работаем и общаемся с клиентами
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: i * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -4 }}
                                className="group"
                            >
                                <div className="h-full bg-white/[0.03] hover:bg-blue-600/8 border border-blue-500/15 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300">
                                    <div className="w-12 h-12 bg-blue-600/15 group-hover:bg-blue-600/25 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                                        <v.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-base font-black text-white mb-2 tracking-wide">{v.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />

            <section className="relative z-10 py-24 px-6">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/7 rounded-full blur-[100px] pointer-events-none" />

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

                        <p className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-5">Поработаем вместе?</p>
                        <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
                            Расскажите нам
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">о вашем проекте</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
                            Ответим в течение нескольких часов и предложим решение
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-base transition-all duration-200 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                        >
                            Написать нам
                        </a>
                    </div>
                </motion.div>
            </section>

        </div>
    )
}