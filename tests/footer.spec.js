// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Footer Tests
 * Tests for the site footer across all pages
 */

test.describe('Footer - Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display WMC branding', async ({ page }) => {
    const footer = page.locator('footer');
    const wmcText = footer.getByText('WMC', { exact: true });
    await expect(wmcText).toBeVisible();

    const productsText = footer.getByText('products', { exact: true });
    await expect(productsText).toBeVisible();
  });

  test('should display company tagline', async ({ page }) => {
    const footer = page.locator('footer');
    const tagline = footer.getByText('Concrete & Waterproofing Building Envelope Specialists');
    await expect(tagline).toBeVisible();
  });

  test('should display Company section', async ({ page }) => {
    const footer = page.locator('footer');
    const companyHeading = footer.getByText('Company', { exact: true });
    await expect(companyHeading).toBeVisible();
  });

  test('should display Get in touch section', async ({ page }) => {
    const footer = page.locator('footer');
    const getInTouchHeading = footer.getByText('Get in touch', { exact: true });
    await expect(getInTouchHeading).toBeVisible();
  });

  test('should display Contact sales button', async ({ page }) => {
    const footer = page.locator('footer');
    const contactSalesButton = footer.getByRole('link', { name: 'Contact sales' });
    await expect(contactSalesButton).toBeVisible();
    await expect(contactSalesButton).toHaveAttribute('href', '/partner');
  });
});

test.describe('Footer - Navigation Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have Vendors link', async ({ page }) => {
    const footer = page.locator('footer');
    const vendorsLink = footer.getByRole('link', { name: 'Vendors' });
    await expect(vendorsLink).toBeVisible();
    await expect(vendorsLink).toHaveAttribute('href', '/vendors');
  });

  test('should have About link', async ({ page }) => {
    const footer = page.locator('footer');
    const aboutLink = footer.getByRole('link', { name: 'About' });
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
  });

  test('should have Locations link', async ({ page }) => {
    const footer = page.locator('footer');
    const locationsLink = footer.getByRole('link', { name: 'Locations' });
    await expect(locationsLink).toBeVisible();
    await expect(locationsLink).toHaveAttribute('href', '/locations');
  });

  test('should navigate to Vendors from footer', async ({ page }) => {
    const footer = page.locator('footer');
    const vendorsLink = footer.getByRole('link', { name: 'Vendors' });
    await vendorsLink.click();

    await expect(page).toHaveURL('/vendors');
  });

  test('should navigate to About from footer', async ({ page }) => {
    const footer = page.locator('footer');
    const aboutLink = footer.getByRole('link', { name: 'About' });
    await aboutLink.click();

    await expect(page).toHaveURL('/about');
  });

  test('should navigate to Locations from footer', async ({ page }) => {
    const footer = page.locator('footer');
    const locationsLink = footer.getByRole('link', { name: 'Locations' });
    await locationsLink.click();

    await expect(page).toHaveURL('/locations');
  });

  test('should navigate to Partner page from Contact sales button', async ({ page }) => {
    const footer = page.locator('footer');
    const contactSalesButton = footer.getByRole('link', { name: 'Contact sales' });
    await contactSalesButton.click();

    await expect(page).toHaveURL('/partner');
  });
});

test.describe('Footer - Presence on All Pages', () => {
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/vendors', name: 'Vendors' },
    { path: '/locations', name: 'Locations' },
    { path: '/partner', name: 'Partner' }
  ];

  for (const pageInfo of pages) {
    test(`footer should be visible on ${pageInfo.name} page`, async ({ page }) => {
      await page.goto(pageInfo.path);

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test(`footer should have WMC branding on ${pageInfo.name} page`, async ({ page }) => {
      await page.goto(pageInfo.path);

      const footer = page.locator('footer');
      const wmcText = footer.getByText('WMC', { exact: true });
      await expect(wmcText).toBeVisible();
    });

    test(`footer navigation links should work on ${pageInfo.name} page`, async ({ page }) => {
      await page.goto(pageInfo.path);

      const footer = page.locator('footer');

      // All footer links should be present
      await expect(footer.getByRole('link', { name: 'Vendors' })).toBeVisible();
      await expect(footer.getByRole('link', { name: 'About' })).toBeVisible();
      await expect(footer.getByRole('link', { name: 'Locations' })).toBeVisible();
      await expect(footer.getByRole('link', { name: 'Contact sales' })).toBeVisible();
    });
  }
});

test.describe('Footer - Styling', () => {
  test('footer should have correct background color', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toHaveClass(/bg-ocean/);
  });

  test('footer should have white text', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer).toHaveClass(/text-white/);
  });
});
