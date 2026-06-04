# Consolidos S.A.S

Sitio web en React + Vite.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Publicar en [Netlify](https://app.netlify.com/)

### Opción A — Conectar GitHub (recomendado)

1. Sube los cambios a `https://github.com/jorgeochoa1987/consolidos`
2. En [Netlify](https://app.netlify.com/) → **Add new site** → **Import an existing project**
3. Elige **GitHub** y el repositorio `consolidos`
4. Netlify detectará `netlify.toml`; si no, usa:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. **Deploy site**

Cada `git push` a `main` volverá a desplegar el sitio.

### Opción B — Arrastrar carpeta (sin Git)

```bash
npm run build
```

En Netlify → **Add new site** → **Deploy manually** → arrastra la carpeta `dist/`.

### Dominio

En el sitio → **Domain management** puedes usar el subdominio `*.netlify.app` o conectar un dominio propio.

## Assets

- `src/assets/cropped-image-modified-300x100.png` — logo (componente `Logo`)
- `public/favicon.svg` — favicon del navegador
- `public/icons.svg` — sprite de iconos (componente `Icon`)
