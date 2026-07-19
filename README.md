# Directus + Next.js POC

A modern web application built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Directus Headless CMS**. The application displays Services, News, and Team Members fetched dynamically from Directus using the official Directus SDK.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Directus CMS
- PostgreSQL
- Redis
- Docker

## Prerequisites

Before running the project, make sure you have installed:

- Node.js 22+
- Docker Desktop
- Git

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd Directus-POC
```

### 1. Start Directus

Navigate to the backend folder:

```bash
cd back-end
```

Start the Docker containers:

```bash
docker compose up
```

Directus will be available at:

```
http://localhost:8055
```

### 2. Start the Frontend

Open a new terminal:

```bash
cd directus-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Default Admin Account

```
Email: admin@example.com
Password: Admin@123456
```

## Features

- Display Services
- Display Team Members
- Display News
- Dynamic content from Directus
- Responsive UI
- Server Components
- TypeScript support

## Project Structure

```
back-end/
├── docker-compose.yml
├── uploads/
├── extensions/
└── data/

directus-frontend/
├── app/
├── components/
├── lib/
├── types/
└── public/
```
