# AURatex - Сайт компании по веб-разработке

Современный сайт для компании AURatex, специализирующейся на разработке веб-приложений.

## 🚀 Технологии

### Frontend
- **Next.js 16** - React фреймворк для production
- **React 19** - Библиотека для создания UI
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS 4** - Utility-first CSS фреймворк
- **Framer Motion** - Анимации для React
- **Lucide React** - Иконки

### Backend
- **Strapi 5** - Headless CMS для управления контентом
- **TypeScript** - Типизация для бэкенда

## 📦 Установка и запуск

### Frontend

```bash
# Установка зависимостей (если ещё не установлены)
npm install

# Запуск dev сервера
npm run dev
```

Frontend доступен по адресу: **http://localhost:3000**

### Backend (Strapi)

```bash
# Переход в папку backend
cd backend

# Запуск Strapi в dev режиме
npm run develop
```

Strapi admin панель будет доступна по адресу: **http://localhost:1337/admin**

## 📁 Структура проекта

```
auratex-website/
├── app/                    # Next.js App Router страницы
│   ├── page.tsx           # Главная страница
│   ├── about/             # О нас
│   ├── portfolio/         # Портфолио
│   ├── services/          # Услуги
│   ├── contact/           # Контакты
│   └── layout.tsx         # Главный layout
├── components/            # React компоненты
│   ├── Navbar.tsx        # Навигация
│   └── Footer.tsx        # Подвал
├── lib/                   # Утилиты
│   └── utils.ts          # Вспомогательные функции
├── backend/              # Strapi CMS
│   ├── config/           # Конфигурация Strapi
│   ├── src/              # Контент-типы и API
│   └── public/           # Статические файлы
└── public/               # Статические файлы Next.js
```

## 🎨 Страницы

- **/** - Главная страница с информацией о компании
- **/about** - О нас и нашей команде
- **/services** - Услуги, которые мы предоставляем
- **/portfolio** - Примеры наших работ
- **/contact** - Форма обратной связи и контакты

## ⚙️ Настройка

### Environment Variables

Создайте файл `.env.local` в корне проекта для подключения к Strapi:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### Strapi настройка

1. Запустите Strapi: `cd backend && npm run develop`
2. Создайте первого админа в браузере (http://localhost:1337/admin)
3. Настройте Content Types для портфолио и других разделов
4. Настройте API permissions в Settings → Users & Permissions → Roles → Public

## 📝 Доступные команды

### Frontend
```bash
npm run dev        # Запуск dev сервера
npm run build      # Сборка для production
npm start          # Запуск production
npm run lint       # Проверка кода
```

### Backend (в папке backend/)
```bash
npm run develop    # Запуск Strapi с hot reload
npm run build      # Сборка admin панели
npm start          # Запуск production
npm run strapi     # Strapi CLI команды
```

## 🚢 Деплой

### Frontend (Vercel)
1. Push код в GitHub
2. Импортируйте проект в [Vercel](https://vercel.com)
3. Vercel автоматически настроит деплой Next.js

### Backend (Strapi)
Strapi можно задеплоить на Railway, Render, DigitalOcean или любой VPS.

## 👥 Команда

**AURatex** - команда из 3 разработчиков, специализирующихся на:
- Frontend разработке (React, Next.js, TypeScript)
- Backend разработке (Node.js, Strapi, API)
- UI/UX дизайне и современных веб-решениях

---

© 2026 AURatex. Все права защищены.
