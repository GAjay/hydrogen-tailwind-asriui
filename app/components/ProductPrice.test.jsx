import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import {ProductPrice} from './ProductPrice';

vi.mock('@shopify/hydrogen', () => ({
  Money: ({data}) => <span data-testid="money">{data.amount}</span>,
}));

describe('ProductPrice', () => {
  it('renders compare-at pricing when on sale', () => {
    render(
      <ProductPrice
        price={{amount: '10.00', currencyCode: 'USD'}}
        compareAtPrice={{amount: '15.00', currencyCode: 'USD'}}
      />,
    );

    expect(screen.getByLabelText('Price')).toBeInTheDocument();
    expect(screen.getAllByTestId('money')).toHaveLength(2);
    expect(screen.getByText('10.00')).toBeInTheDocument();
    expect(screen.getByText('15.00')).toBeInTheDocument();
  });

  it('renders a single price when not on sale', () => {
    render(
      <ProductPrice price={{amount: '25.00', currencyCode: 'USD'}} />,
    );

    expect(screen.getAllByTestId('money')).toHaveLength(1);
    expect(screen.getByText('25.00')).toBeInTheDocument();
  });
});
