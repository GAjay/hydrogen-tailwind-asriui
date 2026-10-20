import {expect, test} from '@playwright/test';

test.describe('storefront smoke', () => {
  test('home page loads with mock shop notice', async ({page}) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', {name: /welcome to hydrogen/i}),
    ).toBeVisible();
  });

  test('collections index is reachable', async ({page}) => {
    await page.goto('/collections');

    await expect(page).toHaveURL(/\/collections/);
    await expect(page.locator('body')).toBeVisible();
  });
});
