// Es el componente orquestador. Usa el hook useSearch, renderiza el SearchBar, y según el estado muestra: el spinner si está cargando, un mensaje de error si falló, o las tarjetas con los resultados.

// Usuario escribe → SearchBar llama a handleSearch → useSearch hace el fetch a n8n → Dashboard recibe los resultados → ResultsGrid los muestra
