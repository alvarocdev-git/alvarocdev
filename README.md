# alvarocdev.com

Sitio personal de Alvaro Carrizales. Estático, trilingüe (ES/EN/PT), construido con [Astro](https://astro.build). Sin cookies, sin trackers.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ localmente para verificar el build
```

## Estructura

- `src/i18n/translations.ts` — **todo el contenido del sitio** en los 3 idiomas, más email y links sociales. Para cambiar textos, editar solo este archivo.
- `src/components/Home.astro` — markup y estilos de la página.
- `src/layouts/Base.astro` — `<head>`, SEO, hreflang y estilos globales (colores en las variables CSS de `:root`).
- `src/pages/` — una página por idioma: `/` (es), `/en/`, `/pt/`.

## Pendientes (TODO)

- Reemplazar los placeholders de "Trabajo para clientes" en `translations.ts` y `Home.astro` con casos reales (problema → solución → resultado). Pedir permiso a cada cliente antes de publicar su marca.

## Deploy a Hostinger

El sitio es 100% estático: lo que hay en `dist/` después de `npm run build` es lo que se sube.

**Opción A — manual (rápida para la primera vez):**

1. `npm run build`
2. En hPanel → Administrador de archivos (o por FTP), vaciar `public_html/`
3. Subir el **contenido** de `dist/` (no la carpeta `dist` en sí) a `public_html/`

**Opción B — Git deploy (recomendada a mediano plazo):**

Hostinger puede clonar un repo en cada push (hPanel → Sitios web → Git). Como Hostinger no ejecuta `npm run build`, hay dos variantes:

- Commitear también `dist/` y apuntar el deploy ahí, o
- Usar GitHub Actions para buildear y subir por FTP (`SamKirkland/FTP-Deploy-Action`) en cada push a `main`.
