# AutoDash — News Search Dashboard

Dashboard de automatización que permite buscar noticias en tiempo real usando n8n como backend y NewsAPI como fuente de datos.

🔗 **[Live Demo](https://news-n8-n.vercel.app/)**

## ¿Qué hace?

El usuario escribe una keyword, la app la envía a un workflow de n8n, que consulta NewsAPI y devuelve los artículos limpios y formateados. El frontend los muestra en tarjetas con imagen, descripción, fuente y fecha.

## Stack

- **React + Vite** — Frontend
- **Tailwind CSS v4** — Estilos
- **n8n** — Backend/automatización (webhook + NewsAPI)
- **NewsAPI** — Fuente de datos de noticias
- **Lucide React** — Iconos
- **ldrs** — Spinner de carga animado

## Arquitectura

```
Usuario → React (POST keyword) → n8n Webhook → NewsAPI → n8n (limpia datos) → React (muestra tarjetas)
```

## Estructura del proyecto

```
dashboard-automatizacion/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navbar con logo y toggle dark/light
│   │   ├── Hero.jsx            # Título, subtítulo y cards informativas
│   │   ├── SearchBar.jsx       # Input y botón de búsqueda
│   │   ├── Dashboard.jsx       # Componente orquestador
│   │   ├── ResultCard.jsx      # Tarjeta de cada noticia
│   │   ├── ResultGrid.jsx      # Grid de tarjetas de resultados
│   │   ├── Spinner.jsx         # Spinner de carga
│   │   ├── Error.jsx           # Mensaje de error
│   │   └── Footer.jsx          # Footer con link a GitHub
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

- Búsqueda de noticias por keyword en tiempo real
- Dark mode / Light mode
- Diseño responsive
- Estados de carga y error
- Imagen de placeholder cuando el artículo no tiene imagen
- Las tarjetas abren el artículo original en una nueva pestaña

## Deploy

El proyecto está desplegado en Vercel. El workflow de n8n corre en un servidor propio.
