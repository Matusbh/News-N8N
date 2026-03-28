# AutoDash — News Search Dashboard

Dashboard de automatización que permite buscar noticias en tiempo real usando n8n como backend y NewsAPI como fuente de datos.

## ¿Qué hace?

El usuario escribe una keyword, la app la envía a un workflow de n8n, que consulta NewsAPI y devuelve los artículos limpios y formateados. El frontend los muestra en tarjetas.

## Stack

- **React + Vite** — Frontend
- **Tailwind CSS** — Estilos
- **n8n** — Backend/automatización (webhook + NewsAPI)
- **NewsAPI** — Fuente de datos de noticias

## Arquitectura

```
Usuario → React (POST keyword) → n8n Webhook → NewsAPI → n8n (limpia datos) → React (muestra tarjetas)
```

## Estructura del proyecto

```
dashboard-automatizacion/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       # Input y botón de búsqueda
│   │   ├── ResultCard.jsx      # Tarjeta de cada noticia
│   │   ├── Dashboard.jsx       # Componente principal
│   │   └── LoadingSpinner.jsx  # Spinner de carga
│   ├── hooks/
│   │   └── useSearch.js        # Lógica de búsqueda y estados
│   ├── services/
│   │   └── api.js              # Llamada al webhook de n8n
│   ├── App.jsx
│   └── main.jsx
├── .env                        # Variables de entorno (no se sube a Git)
└── package.json
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```
VITE_N8N_WEBHOOK_URL=https://tu-webhook-de-n8n/webhook/noticias
```

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Arrancar en desarrollo
npm run dev

# Build para producción
npm run build
```

## Features

- Búsqueda de noticias por keyword
- Dark mode / Light mode
- Diseño responsive
- Estados de carga y error

## Deploy

El proyecto está desplegado en Vercel. El workflow de n8n corre en un servidor propio.
