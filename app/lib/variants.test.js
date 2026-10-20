import {describe, expect, it} from 'vitest';
import {getVariantUrl} from './variants';

describe('getVariantUrl', () => {
  it('builds a product path without locale prefix', () => {
    const url = getVariantUrl({
      handle: 'snowboard',
      pathname: '/collections/all',
      searchParams: new URLSearchParams(),
    });

    expect(url).toBe('/products/snowboard');
  });

  it('preserves locale prefix in the pathname', () => {
    const url = getVariantUrl({
      handle: 'snowboard',
      pathname: '/en-us/collections/all',
      searchParams: new URLSearchParams(),
    });

    expect(url).toBe('/en-us/products/snowboard');
  });

  it('appends selected options as query params', () => {
    const url = getVariantUrl({
      handle: 'snowboard',
      pathname: '/products/snowboard',
      searchParams: new URLSearchParams('foo=bar'),
      selectedOptions: [
        {name: 'Color', value: 'Blue'},
        {name: 'Size', value: 'M'},
      ],
    });

    expect(url).toBe('/products/snowboard?foo=bar&Color=Blue&Size=M');
  });
});
