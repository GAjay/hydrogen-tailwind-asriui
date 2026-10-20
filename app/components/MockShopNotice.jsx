import {Badge, Button, Link} from '~/lib/ui';

export function MockShopNotice() {
  return (
    <section
      className="mock-shop-notice mx-auto my-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      aria-labelledby="mock-shop-notice-heading"
    >
      <div className="flex flex-col gap-4">
        <Badge variant="secondary">Mock shop</Badge>
        <h2 id="mock-shop-notice-heading" className="text-2xl font-semibold">
          Welcome to Hydrogen!
        </h2>
        <p className="text-slate-600">
          You&rsquo;re seeing mocked products because no store is connected to
          this project yet.
        </p>
        <p className="text-slate-600">
          Link a store by running{' '}
          <code className="rounded bg-slate-100 px-2 py-1 text-sm">
            npx shopify hydrogen link
          </code>{' '}
          in your terminal.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="/collections" variant="button">
            Browse collections
          </Link>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.open(
                  'https://shopify.dev/docs/storefronts/headless/hydrogen',
                  '_blank',
                  'noopener,noreferrer',
                );
              }
            }}
          >
            Hydrogen docs
          </Button>
        </div>
      </div>
    </section>
  );
}
