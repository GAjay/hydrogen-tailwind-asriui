# hydrogen-tailwind-asriui

**Production-ready starter for a Shopify headless storefront** — [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen) + [React Router 7](https://reactrouter.com/) + [Tailwind CSS v4](https://tailwindcss.com/) + [AsriUI](https://www.npmjs.com/package/asriui), with **Vitest**, **Playwright**, and **GitHub Actions CI** included.

Clone it, run `npm install` and `npm run dev`, and you get a working demo store (mock catalog) in minutes. Link your Shopify shop when you are ready to go live.

### GitHub “About” description (copy/paste)

```text
Shopify Hydrogen + React Router starter with Tailwind, AsriUI, Vitest, Playwright & CI. Mock shop out of the box—link your store to ship headless commerce.
```

**Topics to add on GitHub:** `shopify`, `hydrogen`, `react`, `react-router`, `headless-commerce`, `tailwindcss`, `vitest`, `playwright`, `ecommerce`, `storefront`

### Quick start

```bash
git clone https://github.com/GAjay/hydrogen-tailwind-asriui.git && cd hydrogen-tailwind-asriui
npm install
npm run dev          # http://localhost:3000
npm test             # unit tests
npm run test:e2e     # browser smoke tests
npx shopify hydrogen link   # optional: connect a real Shopify store
```

### Who this is for

- Developers building a **custom Shopify storefront** with React (not Liquid themes)
- Teams that want **UI (Tailwind + AsriUI) and testing** set up on day one
- Anyone learning **Hydrogen** without configuring tooling from scratch

### Docs

- [Hydrogen](https://shopify.dev/custom-storefronts/hydrogen)
- [React Router (framework mode)](https://reactrouter.com/start/framework/routing)

## What's included

- React Router
- Hydrogen
- Oxygen
- Vite
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 22.x or 24.x

This project was scaffolded with the Hydrogen quickstart (mock shop). Link your store when ready:

```bash
npx shopify hydrogen link
```

## Tailwind CSS & AsriUI

This storefront uses **Tailwind CSS v4** (`app/styles/tailwind.css`, `@tailwindcss/vite`) together with **[AsriUI](https://www.npmjs.com/package/asriui)** components.

- Global provider: `app/components/AsriUIAppProvider.jsx` (wraps the app in `root.jsx`)
- Shared imports: `app/lib/ui.js` — re-exports `Button`, `Badge`, `Link`, `Input`, `Card` from AsriUI subpaths

Example:

```jsx
import {Button, Badge} from '~/lib/ui';

export function Example() {
  return (
    <>
      <Badge variant="secondary">New</Badge>
      <Button variant="primary">Shop now</Button>
    </>
  );
}
```

Add more components from [AsriUI subpath exports](https://www.npmjs.com/package/asriui) (`asriui/tabs`, `asriui/dialog`, etc.) via `app/lib/ui.js` as you need them.

## Testing

**Unit & component tests (Vitest + Testing Library):**

```bash
npm test
npm run test:watch
```

**E2E smoke tests (Playwright, starts dev server automatically):**

```bash
npm run test:e2e
```

CI runs lint, unit tests, production build, and E2E on GitHub Actions (see `.github/workflows/ci.yml`).

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```

## Setup for using Customer Account API (`/account` section)

Follow step 1 and 2 of <https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api/hydrogen#step-1-set-up-a-public-domain-for-local-development>
