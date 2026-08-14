# Portafolio web — David Pérez

Sitio de portafolio de una página, construido con **HTML, CSS y JavaScript puros**, **solo en inglés**. Sin dependencias ni pasos de build: listo para publicarse en GitHub Pages tal cual.

## Contenido

- `index.html` — estructura de todas las secciones (inicio, sobre mí, experiencia, habilidades, proyectos, educación), en inglés. El sitio no incluye sección de contacto por decisión del autor.
- `styles.css` — diseño oscuro con acento carmesí, responsive (móvil primero), con variables CSS.
- `script.js` — menú móvil, scroll suave, resaltado de la sección activa, animación de aparición y año automático.
- `assets/foto.jpg` — foto profesional de la sección About me (optimizada para web, 800 px de ancho).

## Antes de publicar

El sitio ya viene completo con todos tus datos reales (bio, ubicación, formación, experiencia en ADUASIS NLD y educación). No quedan placeholders. Recuerda subir también la carpeta `assets/` junto a `index.html`.

**Nota:** coloca tu CV en PDF como `assets/CV-David-Perez.pdf` para que el botón **View CV** del hero funcione — lo abre en una pestaña nueva para visualizarlo.

## Publicación como sitio de usuario: `davidzpc03.github.io`

Esta es la opción recomendada. El portafolio quedará en `https://davidzpc03.github.io/`.

1. En GitHub, crea un repositorio **público** llamado exactamente `davidzpc03.github.io`.
2. Sube los archivos de esta carpeta a la raíz del repositorio:

   ```bash
   git clone https://github.com/DavidZPC03/davidzpc03.github.io.git
   cd davidzpc03.github.io
   # copia aquí index.html, styles.css, script.js y la carpeta assets/
   git add .
   git commit -m "feat: portafolio inicial"
   git push origin main
   ```

3. GitHub Pages se activa automáticamente para los repos con ese nombre. En 1-2 minutos el sitio estará en `https://davidzpc03.github.io/`.

## Alternativa: project page

Si prefieres publicarlo como página de un proyecto (quedaría en `https://davidzpc03.github.io/NOMBRE-DEL-REPO/`):

1. Crea un repositorio con el nombre que quieras (por ejemplo, `portafolio`).
2. Sube los archivos a la raíz.
3. En el repositorio: **Settings → Pages → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.

## Personalización

- Colores, tipografía y espaciados se ajustan desde las variables CSS al inicio de `styles.css` (`:root`).
- Para añadir un proyecto nuevo, duplica un bloque `<article class="card">` en `index.html`.

## Licencia

MIT.
