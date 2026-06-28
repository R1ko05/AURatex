'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, X, Tag } from 'lucide-react'
import { useState } from 'react'

type Project = {
    id: number
    title: string
    subtitle: string
    description: string
    fullDescription: string
    tags: string[]
    liveUrl: string
    githubUrl: string
    image?: string // путь к картинке, например '/images/getgrant.png'
    accent: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'GetGrant',
        subtitle: 'Образовательная платформа',
        description: 'Система поиска международных программ и грантов с 5-шаговым мастером подачи заявок.',
        fullDescription: 'Кастомный i18n-роутинг на базе Event Delegation, динамическая интеграция со Strapi v5 и 5-шаговый мастер подачи заявок с Drag-and-Drop зоной загрузки документов. Мультиязычный интерфейс, SEO-оптимизация под каждый регион.',
        tags: ['Next.js', 'TypeScript', 'Strapi v5', 'Tailwind CSS'],
        liveUrl: 'https://getgrant-project.vercel.app',
        githubUrl: 'https://github.com/abdulazim0421-cmyk/getgrant-project.git',
        image: './images/project1.png',
        accent: 'from-blue-600/25 to-indigo-600/10',
    },
    {
        id: 2,
        title: 'StudyNZ',
        subtitle: 'Образовательный портал Новой Зеландии',
        description: 'Платформа для абитуриентов с динамическими страницами вузов и рейтингом QS.',
        fullDescription: 'Сложная типизированная архитектура связей «Страна-Университет-Программа», динамические страницы вузов с интеграцией мирового рейтинга QS. Интерактивные табы для вывода курсов, фильтрация по специальностям и стоимости обучения.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi API'],
        liveUrl: 'https://new-zealand-project.vercel.app',
        githubUrl: 'https://github.com/serqx0662-creator/New-Zealand-project.git',
        image: './images/project2.png',
        accent: 'from-sky-600/25 to-blue-600/10',
    },
    {
        id: 3,
        title: 'StreamVibe',
        subtitle: 'Стриминговая платформа',
        description: 'Премиальный веб-интерфейс онлайн-кинотеатра в глубоких тёмных тонах.',
        fullDescription: 'Динамические сетки категорий контента, карусели популярных релизов, плавная анимация карточек при наведении и адаптивный плеер. Реализован тёмный дизайн с акцентами, системой рейтингов и персонализированными рекомендациями.',
        tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Shadcn UI'],
        liveUrl: 'https://stream-vibe-hazel-one.vercel.app',
        githubUrl: 'https://github.com/serqx0662-creator/StreamVibe.git',
        image: './images/project3.png',
        accent: 'from-violet-600/25 to-blue-600/10',
    },
]

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onClick={onClick}
            className="group cursor-pointer"
        >
            <div className={`relative h-full bg-gradient-to-br ${project.accent} border border-blue-600/20 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300`}>
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300 rounded-2xl pointer-events-none z-10" />

                <div className="relative w-full h-48 bg-[#0d1117] overflow-hidden border-b border-blue-600/15">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                            <div className="text-7xl font-black text-blue-600/10 select-none leading-none">
                                0{project.id}
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-blue-600/30 uppercase">
                                Добавьте скриншот проекта
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col">
                    <div className="mb-4">
                        <p className="text-[10px] font-black tracking-[0.2em] text-blue-400/70 uppercase mb-1">
                            {project.subtitle}
                        </p>
                        <h3 className="text-xl font-black text-white">{project.title}</h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-0.5 bg-blue-600/10 text-blue-400 text-xs rounded-full border border-blue-600/20 font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer links */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:gap-3 transition-all duration-200">
                            Подробнее
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-gray-500 hover:text-blue-400 transition-colors"
                                title="Demo"
                            >
                                <ExternalLink size={15} />
                            </a>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-gray-500 hover:text-white transition-colors"
                                title="GitHub"
                            >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Portfolio() {
    const [selected, setSelected] = useState<number | null>(null)
    const selectedProject = selected !== null ? projects[selected] : null

    return (
        <div className="min-h-screen bg-[#030712] text-white overflow-hidden">

            {/* ─── HERO ─────────────────────────────────────────────── */}
            <section className="relative py-20 px-4">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Glow blobs */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-indigo-600/6 rounded-full blur-[80px] pointer-events-none" />

                {/* Floating particles */}
                {[
                    { top: '15%', left: '10%', size: 3, dur: 9, delay: 0 },
                    { top: '70%', left: '5%', size: 5, dur: 13, delay: 1 },
                    { top: '25%', right: '8%', size: 4, dur: 8, delay: 2 },
                    { top: '60%', right: '15%', size: 3, dur: 11, delay: 0.5 },
                ].map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400/25 pointer-events-none"
                        style={{ top: p.top, left: (p as any).left, right: (p as any).right, width: p.size, height: p.size }}
                        animate={{ y: [0, -20, 0], opacity: [0.25, 0.7, 0.25] }}
                        transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                    />
                ))}

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Реальные кейсы
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-none tracking-tight"
                    >
                        <span className="text-white">НАШИ </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">РАБОТЫ</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
                    >
                        Веб-приложения и платформы, разработанные нами —
                        <span className="text-white"> каждый проект уникален</span>
                    </motion.p>
                </div>
            </section>

            <section className="relative px-4 pb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={() => setSelected(index)}
                            />
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
                        Ваш проект —
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                            следующим здесь
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Расскажите о задаче — мы предложим решение и стартуем в течение 48 часов
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-lg transition-all duration-200 active:scale-95 shadow-[0_0_50px_rgba(37,99,235,0.4)]"
                        >
                            Обсудить проект
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/10 hover:border-white/20 rounded-xl font-black text-lg text-gray-400 hover:text-white transition-all duration-200"
                        >
                            На главную
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* ─── PROJECT MODAL ────────────────────────────────────── */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                        className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0a0f1e] border border-blue-600/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-t-2xl" />

                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-5 right-5 w-9 h-9 bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 rounded-lg flex items-center justify-center transition-all duration-200 z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal image */}
                            <div className="relative w-full h-56 bg-[#0d1117] overflow-hidden rounded-t-2xl border-b border-blue-600/15">
                                {selectedProject.image ? (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-9xl font-black text-blue-600/10 select-none leading-none">
                                            0{selectedProject.id}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/30 to-transparent" />
                            </div>

                            <div className="p-8">
                                {/* Header */}
                                <div className="mb-6">
                                    <p className="text-[10px] font-black tracking-widest text-blue-500 uppercase mb-1">
                                        {selectedProject.subtitle}
                                    </p>
                                    <h2 className="text-3xl font-black text-white mb-3">{selectedProject.title}</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-0.5 bg-blue-600/10 text-blue-400 text-xs rounded-full border border-blue-600/20 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="border-l-2 border-blue-600/30 pl-5 mb-8">
                                    <h3 className="text-xs font-black tracking-widest text-blue-500 uppercase mb-2">О проекте</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">{selectedProject.fullDescription}</p>
                                </div>

                                {/* Links */}
                                <div className="flex gap-4 pt-6 border-t border-white/5">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-sm transition-all duration-200 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Открыть демо
                                    </a>
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-blue-600/30 hover:border-blue-500 hover:bg-blue-600/10 rounded-xl font-black text-sm text-gray-400 hover:text-white transition-all duration-200"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}