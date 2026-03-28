// La URL viene del .env. import.meta.env es la forma de leer vatriables en vite
const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

export default async function searchNews(keyword) {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ keyword }),
  });

  if (!response.ok) {
    throw new Error(`Error del servidor: ${response.status}`);
  }

  return response.json();
}
