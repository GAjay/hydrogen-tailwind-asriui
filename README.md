# hydrogen-tailwind-asriui

A starter template for building **Shopify headless storefronts** with [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen), [React Router 7](https://reactrouter.com/), [Tailwind CSS v4](https://tailwindcss.com/), and [AsriUI](https://www.npmjs.com/package/asriui). The repo ships with unit tests, E2E smoke tests, and a CI pipeline so you can focus on product features instead of boilerplate.

Use the included **mock shop** for local development, then connect your live Shopify store when you are ready to deploy.

---

## Overview

| | |
| --- | --- |
| **Type** | Headless commerce storefront (React), not a Liquid theme |
| **Runtime** | Node.js 22.x or 24.x |
| **Local URL** | [http://localhost:3000](http://localhost:3000) after `npm run dev` |
| **Repository** | [github.com/GAjay/hydrogen-tailwind-asriui](https://github.com/GAjay/hydrogen-tailwind-asriui) |

### Features

- **Hydrogen quickstart** — catalog, cart, collections, product pages, search, and account routes
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **AsriUI** — accessible React components with a shared provider and re-exports in `app/lib/ui.js`
- **Testing** — Vitest + Testing Library (unit/component), Playwright (E2E)
- **CI** — GitHub Actions: unit tests, production build, and E2E on pull requests and `main`

---

## Quick start

```bash
git clone https://github.com/GAjay/hydrogen-tailwind-asriui.git
cd hydrogen-tailwind-asriui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You should see the storefront running against Shopify’s mock catalog until you link a store.

### Connect a Shopify store

```bash
npx shopify hydrogen link
```

Follow the CLI prompts to attach your shop and environment variables.

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Hydrogen dev server (GraphQL codegen enabled) |
| `npm run build` | Production build for Oxygen / deployment |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:e2e` | Run Playwright smoke tests (starts dev server when needed) |
| `npm run lint` | ESLint |
| `npm run codegen` | Hydrogen GraphQL codegen + React Router typegen |

---

## Project layout

```
app/
  components/     UI and layout (Header, cart, AsriUI provider)
  lib/            Utilities, GraphQL fragments, ui.js (AsriUI re-exports)
  routes/         File-based routes (React Router)
  styles/         reset.css, app.css, tailwind.css
e2e/              Playwright specs
.github/workflows CI pipeline
```

Key integration points:

- **`app/root.jsx`** — global styles, `AsriUIAppProvider`, analytics shell
- **`app/lib/ui.js`** — import shared AsriUI components (`Button`, `Badge`, `Link`, `Input`, `Card`)
- **`app/styles/tailwind.css`** — Tailwind entry and `@source` for `app/**`

---

## UI: Tailwind and AsriUI

Tailwind is configured in `vite.config.js` with the official Vite plugin. AsriUI styles load from `asriui/style.css` in the document head.

Example usage in a route or component:

```jsx
import {Badge, Button} from '~/lib/ui';

export function PromoBanner() {
  return (
    <div className="flex items-center gap-3">
      <Badge variant="secondary">New</Badge>
      <Button variant="primary">Shop collection</Button>
    </div>
  );
}
```

To add more AsriUI primitives, extend `app/lib/ui.js` with subpath imports (for example `asriui/tabs`, `asriui/dialog`). See the [AsriUI package exports](https://www.npmjs.com/package/asriui).

---

## Testing

**Unit and component tests** live next to source files (`*.test.js` / `*.test.jsx`). Configuration: `vitest.config.js`, `vitest.setup.js`.

```bash
npm test
```

**End-to-end tests** use Playwright (`playwright.config.js`, `e2e/`). The config can start the dev server automatically.

```bash
npm run test:e2e
```

Continuous integration is defined in `.github/workflows/ci.yml`.

---

## Production build

```bash
npm run build
npm run preview
```

Deploy the output to [Shopify Oxygen](https://shopify.dev/docs/storefronts/headless/hydrogen/deployments) or your preferred Node/workers host following [Hydrogen deployment docs](https://shopify.dev/custom-storefronts/hydrogen/production).

---

## Customer Account API

The `/account` area requires a public domain for local development and Customer Account API setup in the Shopify admin.

Follow Shopify’s guide: [Hydrogen + Customer Account API](https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api/hydrogen#step-1-set-up-a-public-domain-for-local-development).

---

## Further reading

- [Hydrogen documentation](https://shopify.dev/custom-storefronts/hydrogen)
- [React Router — framework routing](https://reactrouter.com/start/framework/routing)
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront)

---

## License

This project is scaffolded from Shopify’s Hydrogen skeleton. Refer to upstream [Hydrogen](https://github.com/Shopify/hydrogen) licensing for framework components; apply your own license for application code you add on top.
