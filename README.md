# 🦜 Alas del Perú — Portal de Aves del Perú (Semana 11)

Sitio web interactivo dedicado a la extraordinaria diversidad ornitológica del Perú, segundo país con mayor diversidad de aves del planeta (más de 1,880 especies). Desarrollado con **HTML5 semántico, CSS3 moderno (Vanilla CSS) y JavaScript puro (Vanilla JS)** sin dependencias ni frameworks externos.

Todos los archivos residen directamente en la raíz del proyecto para cumplir con los lineamientos de la entrega.

---

## 📄 Estructura de Páginas (5 Páginas HTML)

1. **`index.html` (Inicio):** Portada principal con Hero section, llamada a la acción, contadores animados de biodiversidad, galería de las 3 regiones naturales y mini trivia interactiva con retroalimentación inmediata.
2. **`especies.html` (Catálogo de Especies):** Catálogo de aves emblemáticas peruanas con buscador en tiempo real, filtros dinámicos por región (Costa, Sierra, Selva) y modal emergente con ficha técnica completa y simulación sonora de canto (Web Audio API).
3. **`rutas.html` (Rutas de Birdwatching):** Guía de las 3 megarrutas peruanas (Norte, Centro y Sur), calculadora interactiva de presupuesto de expedición y checklist interactivo de equipamiento.
4. **`avistamientos.html` (Cuaderno de Campo):** Formulario interactivo para registrar avistamientos de aves con previsualización en vivo, almacenamiento en `localStorage` y muro dinámico de observaciones comunitarias.
5. **`contacto.html` (Contacto y Voluntariado):** Formulario de registro a la red de conservación con validación reactiva de campos, contador dinámico de caracteres, alerta *Toast* flotante y acordeón interactivo de preguntas frecuentes (FAQ).

---

## ⚙️ Funcionalidades Interactivas (JavaScript Puro)

- **Modo Claro / Modo Oscuro:** Switcher en la cabecera sincronizado en todas las páginas y guardado en `localStorage`.
- **Buscador en tiempo real:** Filtrado instantáneo por nombre común, nombre científico o hábitat.
- **Filtro por regiones geográficas:** Visualización segmentada por Costa, Sierra y Selva.
- **Modal de Ficha Técnica con Audio Sintetizado:** Reproducción de frecuencias audibles de cantos de aves mediante `window.AudioContext`.
- **Calculadora / Planificador de Expedición:** Cálculo dinámico de presupuesto estimado en Soles (PEN) y potencial de especies según días y observadores.
- **Checklist dinámico:** Marcado y persistencia visual de equipamiento recomendado.
- **Cuaderno de Campo con `localStorage`:** Alta, visualización y eliminación de registros de avistamiento.
- **Formulario con validación en tiempo real:** Control de longitud de caracteres y notificaciones Toast personalizadas.
- **Acordeón interactivo:** Apertura y cierre animado de preguntas frecuentes.

---

## 🚀 Despliegue y Ejecución Local

Para visualizar el proyecto localmente, simplemente abre cualquiera de los archivos `.html` (por ejemplo `index.html`) en tu navegador web, o inicia un servidor local simple:

```bash
# Con Python
python -m http.server 8080

# O con Node.js / npx
npx serve .
```

---

## 👥 Equipo y Colaboración (Flujo Git/GitHub)

- **Líder de Proyecto / Maintainer:** `pvciencia` (Gestión de ramas, revisión y merge a `main`).
- **Ramas de trabajo:** `main` (producción) y ramas de características `feature/<nombre-tarea>`.