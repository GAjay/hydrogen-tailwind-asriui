import {describe, expect, it} from 'vitest';
import {
  ORDER_FILTER_FIELDS,
  buildOrderSearchQuery,
  parseOrderFilters,
} from './orderFilters';

describe('buildOrderSearchQuery', () => {
  it('builds a name-only query and strips leading #', () => {
    expect(buildOrderSearchQuery({name: '#1001'})).toBe('name:1001');
  });

  it('combines name and confirmation number with AND', () => {
    expect(
      buildOrderSearchQuery({
        name: '1001',
        confirmationNumber: 'ABC123',
      }),
    ).toBe('name:1001 AND confirmation_number:ABC123');
  });

  it('sanitizes malicious characters from filter values', () => {
    expect(
      buildOrderSearchQuery({
        name: '1001; DROP TABLE',
        confirmationNumber: 'ABC<script>',
      }),
    ).toBe('name:1001DROPTABLE AND confirmation_number:ABCscript');
  });

  it('returns undefined when filters are empty or invalid', () => {
    expect(buildOrderSearchQuery({})).toBeUndefined();
    expect(buildOrderSearchQuery({name: '   '})).toBeUndefined();
  });
});

describe('parseOrderFilters', () => {
  it('reads supported search params from the URL', () => {
    const params = new URLSearchParams(
      `${ORDER_FILTER_FIELDS.NAME}=1001&${ORDER_FILTER_FIELDS.CONFIRMATION_NUMBER}=XYZ`,
    );

    expect(parseOrderFilters(params)).toEqual({
      name: '1001',
      confirmationNumber: 'XYZ',
    });
  });

  it('returns an empty object when no filters are present', () => {
    expect(parseOrderFilters(new URLSearchParams())).toEqual({});
  });
});
