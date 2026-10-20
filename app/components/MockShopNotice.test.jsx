import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {MockShopNotice} from './MockShopNotice';

describe('MockShopNotice', () => {
  it('explains that the storefront is using mocked catalog data', () => {
    render(<MockShopNotice />);

    expect(
      screen.getByRole('heading', {name: /welcome to hydrogen/i}),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/mocked products because no store is connected/i),
    ).toBeInTheDocument();
    expect(screen.getByText('npx shopify hydrogen link')).toBeInTheDocument();
  });
});
