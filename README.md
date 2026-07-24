<div align="center">

# alvarocdev.com

**Portafolio técnico de Alvaro Carrizales y la cara pública del ecosistema Nexo.**

Backend Tech Lead · Buenos Aires · construyo productos web que resuelven problemas de verdad.

[**alvarocdev.com**](https://alvarocdev.com) · [ecosistema Nexo](https://github.com/nexo-tools)

</div>

---

Sitio personal y portafolio: quién soy, cómo trabajo y las herramientas que construyo
en abierto. Trilingüe (ES/EN/PT), estático, **sin cookies, sin trackers y sin CDNs** —
el mismo criterio de privacidad que aplico en todo lo que hago. Mi marca personal es
verde; el ecosistema Nexo se muestra dentro con su propio acento violeta y sus isotipos.

## Ecosistema Nexo

Nexo es una familia de herramientas open source y self-hostables que comparten una
identidad visual ([nexo-brand](https://github.com/nexo-tools)), una cuenta opcional
([Nexo ID](https://github.com/nexo-tools/nexo-id), SSO) y un mismo estándar de
ingeniería. Cada herramienta funciona **de forma independiente** — el ecosistema es opt-in.

| Herramienta | Qué es | Repo |
| --- | --- | --- |
| **Nexo Tools** | Hub del ecosistema — descubrí las herramientas y saltá entre ellas con una cuenta | [nexo-tools](https://github.com/nexo-tools/nexo-tools) |
| **Nexo Links** | Link-in-bio que hospedás vos (alternativa a Linktree) | [nexo-links](https://github.com/nexo-tools/nexo-links) |
| **Nexo Agenda** | Reservas para negocios de servicios (alternativa a AgendaPro / Fresha / Booksy) | [nexo-agenda](https://github.com/nexo-tools/nexo-agenda) |
| **Nexo Short** | Acortador de URLs self-hosted | [nexo-short](https://github.com/nexo-tools/nexo-short) |
| **Nexo Events** | Entradas y pases para eventos | [nexo-events](https://github.com/nexo-tools/nexo-events) |
| **Nexo ID** | Una cuenta para todas las herramientas — SSO OAuth 2.0 / OIDC | [nexo-id](https://github.com/nexo-tools/nexo-id) |

Portada para conocerlas: **[nexotools.alvarocdev.com](https://nexotools.alvarocdev.com)**.

## Cómo está hecho

[Astro](https://astro.build) · TypeScript · 100% estático · trilingüe con archivo único de
traducciones · tokens de diseño propios (verde personal + violeta del ecosistema) ·
cero requests externos. El sitio se despliega como HTML plano en shared hosting.

---

<details>
<summary><b>Desarrollo local</b> (para mantener el sitio)</summary>

```bash
npm install      # dependencias
npm run dev      # http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ para verificar el build
```

**Dónde tocar qué**
- `src/i18n/translations.ts` — **todo el contenido** en los 3 idiomas (textos, links sociales, tarjetas del ecosistema y de clientes). Para cambiar textos, editar solo este archivo.
- `src/components/Home.astro` — markup y estilos de la página.
- `src/layouts/Base.astro` — `<head>`, SEO, hreflang, tokens de color/tipografía y el beacon opcional.
- `src/pages/` — una página por idioma: `/` (es), `/en/`, `/pt/`.
- `public/ecosystem/` — isotipos Nexo; `public/sitemap.xml` y `public/robots.txt`.

**Sección de clientes** (diferida): cargar casos reales en `work.clients` de `translations.ts`
y poner `showClientWork = true` en `Home.astro`. Pedir permiso a cada cliente antes de publicar su marca.

**Env opcional** (build-time, solo `PUBLIC_*`, todo apagado por default → sin JS):
`PUBLIC_NEXO_BEACON_ENABLED` (beacon de pageview cookieless, opt-in, respeta Do Not Track) +
`PUBLIC_NEXO_HUB_URL`. Plantilla en `.env.example`.

**Deploy**: `npm run build` → subir el **contenido** de `dist/` a `public_html/` (o via GitHub Actions + FTP en cada push a `main`).

</details>

## Licencia

Código bajo [MIT](LICENSE). Contenido y marca personal © Alvaro Carrizales.
