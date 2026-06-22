# Настройка Strapi для AURatex

## Первый запуск

1. Запустите Strapi:
```bash
cd backend
npm run develop
```

2. Откройте http://localhost:1337/admin в браузере

3. Создайте первого администратора:
   - Email: admin@auratex.com
   - Password: (выберите надёжный пароль)
   - Имя: AURatex Admin

## Создание Content Types

### 1. Portfolio Project (Проект портфолио)

**Content Type Builder → Create new collection type**

Название: `project`

Поля:
- `title` (Text, Short text) - Название проекта
- `description` (Text, Long text) - Описание проекта
- `image` (Media, Single media) - Изображение проекта
- `tags` (JSON) - Теги/технологии
- `liveUrl` (Text, Short text) - Ссылка на демо
- `githubUrl` (Text, Short text) - Ссылка на GitHub
- `featured` (Boolean) - Показывать на главной

### 2. Team Member (Член команды)

**Content Type Builder → Create new collection type**

Название: `team-member`

Поля:
- `name` (Text, Short text) - Имя
- `role` (Text, Short text) - Должность
- `bio` (Text, Long text) - Биография
- `photo` (Media, Single media) - Фото
- `order` (Number, integer) - Порядок отображения

### 3. Service (Услуга)

**Content Type Builder → Create new collection type**

Название: `service`

Поля:
- `title` (Text, Short text) - Название услуги
- `description` (Text, Long text) - Описание
- `icon` (Text, Short text) - Название иконки
- `features` (JSON) - Список возможностей

### 4. Contact Form (Форма обратной связи)

**Content Type Builder → Create new collection type**

Название: `contact-submission`

Поля:
- `name` (Text, Short text) - Имя
- `email` (Email) - Email
- `phone` (Text, Short text) - Телефон
- `message` (Text, Long text) - Сообщение
- `status` (Enumeration: new, read, replied) - Статус

## Настройка прав доступа

**Settings → Users & Permissions → Roles → Public**

Разрешить для всех Content Types:
- `find` - Получение списка
- `findOne` - Получение одного элемента

Для `contact-submission`:
- `create` - Создание новой записи

**Authenticated** - те же права + `update` и `delete` для администраторов.

## API Endpoints

После настройки будут доступны:

- `GET /api/projects` - Все проекты
- `GET /api/projects/:id` - Один проект
- `GET /api/team-members` - Команда
- `GET /api/services` - Услуги
- `POST /api/contact-submissions` - Отправка формы

## Добавление тестовых данных

### Пример проекта:
```json
{
  "title": "E-Commerce платформа",
  "description": "Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью",
  "tags": ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/auratex/project",
  "featured": true
}
```

## Интеграция с Next.js

В Next.js используйте:

```typescript
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

async function getProjects() {
  const res = await fetch(`${STRAPI_URL}/api/projects?populate=*`)
  return res.json()
}
```

## Production настройки

Перед деплоем:
1. Измените `.env` в backend с production настройками
2. Настройте DATABASE_URL
3. Установите `NODE_ENV=production`
4. Запустите `npm run build`
