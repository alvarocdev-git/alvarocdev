# alvarocdev.com

Sitio personal y portafolio técnico de Alvaro Carrizales — la cara técnica del **ecosistema Nexo** (6 herramientas open source). Estático, trilingüe (ES/EN/PT), construido con [Astro](https://astro.build). Sin cookies, sin trackers, sin CDNs. Marca personal en verde (`#4ade80`); el ecosistema Nexo se muestra dentro con su acento violeta y sus isotipos.

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ localmente para verificar el build
```

## Estructura

- `src/i18n/translations.ts` — **todo el contenido del sitio** en los 3 idiomas, más email, links sociales y las tarjetas del ecosistema Nexo (`products.items`) y de clientes (`work.clients`). Para cambiar textos, editar solo este archivo.
- `src/components/Home.astro` — markup y estilos de la página.
- `src/layouts/Base.astro` — `<head>`, SEO, hreflang, tokens de color/tipografía (`:root`) y el beacon opcional.
- `src/pages/` — una página por idioma: `/` (es), `/en/`, `/pt/`.
- `public/ecosystem/` — los 7 isotipos Nexo (copiados de `nexo-brand/marks/`). `public/sitemap.xml` y `public/robots.txt` estáticos.

## Env opcional (build-time, solo `PUBLIC_*`)

Todo apagado por default: sin nada seteado, el sitio no envía JS. Plantilla en `.env.example` (el `.env` local está gitignoreado).

- `PUBLIC_NEXO_BEACON_ENABLED` (`false` por default) — beacon de pageview cookieless, opt-in, para el `/admin` de nexotools. Respeta Do Not Track; sin cookies/IP/UA. Si está en `true`, requiere `PUBLIC_NEXO_HUB_URL`.
- `PUBLIC_NEXO_HUB_URL` — URL base del hub al que se hace `POST /beacon`.

## Pendientes (TODO)

- Cargar clientes reales en `work.clients` de `translations.ts` (`name`, `tagline`, `url` y, opcional, `problem`/`solution`/`outcome`) y poner `showClientWork = true` en `Home.astro`. Pedir permiso a cada cliente antes de publicar su marca.

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
