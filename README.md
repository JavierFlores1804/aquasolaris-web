# Aqua Solaris — Sitio web (100% gratuito)

## 🚀 Poner el sitio en línea en tu dominio ahora mismo (10 minutos)

Reviso tu dominio y hoy `www.aquasolaris.org` muestra la página temporal de estacionamiento de **Squarespace** ("En construcción"), lo que indica que lo compraste o administras a través de Squarespace Domains. No tengo acceso a tu cuenta de GitHub ni al panel de tu dominio — esa parte solo la puedes hacer tú (o dármela por acceso temporal si prefieres que lo intente, pero no es necesario, son pasos rápidos). Aquí el camino más corto:

1. **Crea tu repositorio** en https://github.com (cuenta gratis) → **New repository** → público → nómbralo `aquasolaris-web`.
2. **Sube todos los archivos** de esta carpeta (incluido el archivo `CNAME` que ya viene con `www.aquasolaris.org` escrito adentro — no lo abras ni lo edites, ya está listo).
3. Ve a **Settings → Pages** del repositorio → en "Source" elige la rama `main`, carpeta `/root` → Guardar. GitHub detectará el archivo `CNAME` y activará automáticamente el campo "Custom domain" con `www.aquasolaris.org`.
4. **En el panel de DNS de tu dominio** (en Squarespace: entra a tu cuenta → Dominios → aquasolaris.org → DNS Settings) agrega:
   - **CNAME**: host `www` → valor `tu-usuario.github.io`
   - **4 registros A** en el host `@` (dominio raíz) apuntando a: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Si Squarespace ya tiene un registro A o CNAME puesto por defecto para el "parking page", **bórralo** primero para evitar conflicto.
5. Espera entre 10 minutos y algunas horas a que se propague el DNS. Vuelve a **Settings → Pages** y activa **"Enforce HTTPS"** (gratis, automático).
6. Listo: `https://www.aquasolaris.org` mostrará tu sitio real.

**Para actualizar el sitio más adelante**: edita cualquier archivo (sobre todo `contenido.js` para tus datos, o pide mi ayuda para textos/diseño), vuelve a subirlo al mismo repositorio de GitHub, y los cambios se reflejan solos en `www.aquasolaris.org` en un par de minutos — sin volver a tocar el DNS ni el dominio nunca más.

---

Esta carpeta contiene tu página web lista para publicar.

## Novedades de esta versión (mejoras a 10/10)

- **Favicons reales** en todos los tamaños (`favicon.ico`, `icons/`) generados a partir de tu logo — antes solo tenías un ícono genérico.
- **Imagen de vista previa** (`og-cover.png`): así se ve tu sitio cuando alguien comparte el link en WhatsApp, Facebook o Twitter/X.
- **`site.webmanifest`**: permite que el sitio se pueda "agregar a pantalla de inicio" en celulares, como una app.
- **Página 404 personalizada** (`404.html`) con tu marca, para cuando alguien entra a un enlace roto.
- **Sección "Transparencia"**: muestra cómo se distribuyen los fondos según tu propio estatuto (Artículo Quinto), un elemento que aumenta mucho la confianza de fuentes donantes serias.
- **Fuentes cargando en el `<head>`**: el sitio ya no muestra "parpadeo" de texto sin estilo al cargar.
- **Nota de privacidad breve** en el pie de página (el sitio no usa cookies de rastreo).

## 0. Tu logo y las fotos del sitio

Ya integré tu logo (`logo.jpeg`) en el encabezado, el favicon y la sección principal.

**Sobre las fotos**: no puedo insertar fotografías con derechos de autor de terceros directamente en tu sitio — por políticas de propiedad intelectual, solo puedo usar contenido que tú generes o que tenga licencia libre confirmada. Por eso dejé espacios de foto ya diseñados y con el tamaño correcto (verás un ícono de "imagen" mientras no exista el archivo). Para completarlos:

1. Ve a un banco de imágenes gratuito de uso comercial, sin necesidad de atribución: **https://unsplash.com** o **https://www.pexels.com**.
2. Busca y descarga fotos para estos 4 espacios exactos (deben llamarse así y colocarse dentro de una carpeta `images/` junto al `index.html`):

| Archivo | Búsqueda sugerida |
|---|---|
| `images/foto-comunidad.jpg` | "rural community Peru" / "comunidad andina" |
| `images/foto-agua.jpg` | "water irrigation canal" / "riego agrícola" |
| `images/foto-solar.jpg` | "solar panels rural" / "paneles solares" |
| `images/foto-agricultura.jpg` | "Andes terrace farming" / "terrazas de cultivo" |

3. Si tienes fotos propias de tus proyectos (mucho mejor para credibilidad con donantes), úsalas con esos mismos nombres de archivo.

## 0.1. Cómo editar el sitio en el futuro (sin tocar diseño ni código)

Para que puedas actualizar datos tú mismo más adelante, separé toda la información que cambia seguido en un archivo aparte: **`contenido.js`**.

Ahí puedes editar, solo reemplazando el texto entre comillas:
- Correo, teléfono y WhatsApp
- Número de Yape/Plin
- Datos bancarios (banco, cuenta, CCI)
- Enlace de PayPal (cuando lo tengas)
- Enlaces de tus redes sociales

**No necesitas tocar `index.html`** para nada de esto — el sitio lee automáticamente `contenido.js` cada vez que carga. Si dejas un campo vacío (`""`), esa sección se oculta o muestra "próximamente" sola.

Para editar: abre `contenido.js` con cualquier editor de texto (incluso el editor de GitHub en el navegador, sin instalar nada), cambia el valor, guarda y vuelve a subirlo.

Si en el futuro quieres cambiar textos más grandes (títulos, descripciones, secciones nuevas), eso sí requiere tocar `index.html` — en ese caso puedes volver a pedirme ayuda, o usar el editor de GitHub directamente (los textos están organizados en un bloque claro dentro del archivo, buscá `const i18n = {`).

## 0.2. Tu código QR de Yape/Plin

Un código QR de Yape o Plin **no se puede generar genéricamente** — solo es válido el que exporta la propia app desde tu cuenta, porque está vinculado a tu número y a la validación de esa entidad financiera. Para agregarlo a tu sitio:

1. Abre la app de Yape (o Plin) en tu celular.
2. Ve a tu perfil → "Mi código QR" o "Cobrar" → guarda/descarga la imagen.
3. Renómbrala como `qr-yape.png` y colócala dentro de la carpeta `images/` junto al `index.html`.
4. El sitio lo mostrará automáticamente en la sección de donaciones.

Mientras no subas la imagen ni tu número en `contenido.js`, el sitio muestra "pendiente de confirmar" en esa sección.

## 1. Antes de publicar: completa tus datos reales

Todos tus datos de contacto, Yape/Plin, banco, PayPal y redes sociales van en **`contenido.js`** (ver sección 0.1). Ahora mismo están vacíos a propósito — no inventé ningún número ni cuenta. Complétalos ahí antes de avisarle a tus donantes, aunque puedes publicar el sitio igual y completarlos después; el sitio mostrará "pendiente de confirmar" en lo que falte.

## 2. Hosting gratuito con GitHub Pages (cero costo, para siempre)

1. Crea una cuenta gratuita en https://github.com (si no tienes una).
2. Crea un repositorio nuevo, público, llamado por ejemplo `aquasolaris-web`.
3. Sube TODOS los archivos y carpetas de este proyecto al repositorio (botón **Add file → Upload files**): `index.html`, `contenido.js`, `404.html`, `site.webmanifest`, `favicon.ico`, `og-cover.png`, `robots.txt`, `sitemap.xml`, `logo.jpeg`, la carpeta `icons/` y la carpeta `images/` con tus fotos. Mantén los mismos nombres de carpeta.
4. Ve a **Settings → Pages**.
5. En "Source" elige la rama `main` y la carpeta `/root`, y guarda.
6. GitHub te dará una URL tipo `https://tu-usuario.github.io/aquasolaris-web/`. Tu sitio ya está en línea, sin pagar nada.

Alternativas igualmente gratuitas si prefieres otra plataforma: **Cloudflare Pages** o **Netlify** (ambas tienen plan gratuito permanente y también permiten dominio propio).

## 3. Conectar tu dominio propio (aquasolaris.org) — gratis

Como ya eres dueño del dominio, solo necesitas apuntarlo al hosting gratuito, sin pagar hosting aparte:

1. En **Settings → Pages** de tu repositorio, en el campo "Custom domain" escribe `www.aquasolaris.org` y guarda.
2. Entra al panel de administración DNS donde compraste el dominio (tu proveedor de dominios) y agrega estos registros:
   - Un registro **CNAME**: `www` → `tu-usuario.github.io`
   - Cuatro registros **A** para el dominio raíz (`@`) apuntando a las IP de GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Espera unas horas a que se propague el DNS. Luego activa "Enforce HTTPS" en GitHub Pages (gratis, certificado SSL automático).

## 4. Posicionamiento en Google (SEO) — gratis

El sitio ya incluye lo esencial: metaetiquetas, descripción, datos estructurados (Schema.org NGO), `sitemap.xml` y `robots.txt`.

Pasos gratuitos adicionales:

1. **Google Search Console** (https://search.google.com/search-console): agrega tu dominio, verifica la propiedad, y envía `https://www.aquasolaris.org/sitemap.xml`. Esto ayuda a que Google indexe tu página más rápido.
2. **Google Business Profile** (opcional, gratis): si tienes una oficina o punto de contacto físico, regístralo para aparecer en Google Maps y búsquedas locales.
3. **Google for Nonprofits / Google Ad Grants**: como ONG registrada legalmente (ya tienes tu partida SUNARP), puedes postular a este programa, que otorga hasta USD 10,000 mensuales en anuncios gratuitos en Google. Requiere validación a través de **TechSoup** (gratuito, proceso de verificación de tu condición de ONG) y luego solicitud en https://www.google.com/nonprofits/. La aprobación no es automática y toma algunos días, pero no tiene ningún costo.
4. Contenido: mientras más texto original y actualizado tenga tu sitio (noticias de proyectos, fotos, resultados), mejor posicionas de forma orgánica, sin pagar publicidad.

## 5. Traducción al inglés

Ya está incluida: el botón **ES / EN** en la esquina superior derecha cambia todo el texto del sitio sin recargar la página, usando JavaScript (sin costo ni servicios externos de traducción).

## 6. Recibir donaciones — gratis de configurar

Ninguna de estas opciones tiene costo de configuración. Ten en cuenta que las pasarelas de pago (no la asociación) cobran una pequeña comisión por cada transacción procesada; eso es estándar en cualquier método de pago digital del mundo:

- **Yape / Plin**: gratis, solo necesitas tu número vinculado a una cuenta bancaria peruana. No hay comisión para quien dona.
- **Transferencia bancaria**: gratis, solo agrega los datos de tu cuenta a nombre de Aqua Solaris.
- **PayPal**: crea una cuenta gratuita tipo "Nonprofit" o usa un botón "Donate" (https://www.paypal.com/donate/buttons) — gratis de crear, cobra comisión por transacción recibida.

Una vez tengas el enlace de PayPal, pégalo en el campo `paypal_link` dentro de `contenido.js` (ver sección 0.1) — el botón se activa solo, sin tocar nada más.

## 7. Resumen de costo total

| Elemento | Costo |
|---|---|
| Hosting (GitHub Pages / Cloudflare Pages) | Gratis |
| Diseño del sitio | Ya incluido (este proyecto) |
| Certificado SSL / HTTPS | Gratis (automático) |
| Traducción ES/EN | Gratis (incluida en el código) |
| Google Search Console | Gratis |
| Google Ad Grants (visibilidad en Google) | Gratis (sujeto a aprobación) |
| Recepción de donaciones (Yape/Plin/banco) | Gratis de configurar; el dominio ya es tuyo |
| PayPal | Gratis de crear; comisión solo por transacción recibida |

**Todo el proceso de creación, hosting y posicionamiento tiene costo cero.** Lo único que no depende de la configuración, sino del propio sistema financiero mundial, es la pequeña comisión por transacción que cobran las pasarelas de pago digitales (PayPal, tarjetas) — no existe ninguna forma de recibir dinero por internet mediante tarjeta sin esa comisión, la cobra el banco/procesador, no tú.
