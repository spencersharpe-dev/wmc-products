// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Vendors Page Tests
 * Tests for the Vendors page of WMC Products
 */

test.describe('Vendors Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/vendors');
  });

  test('should load the vendors page successfully', async ({ page }) => {
    await expect(page).toHaveURL('/vendors');
  });

  test('should display page title', async ({ page }) => {
    const title = page.getByRole('heading', { name: /Our Vendors/i });
    await expect(title).toBeVisible();
  });

  test('should display page subtitle', async ({ page }) => {
    const subtitle = page.getByText('Trusted Partners in Building Envelope Systems');
    await expect(subtitle).toBeVisible();
  });

  test('should display navigation', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should display vendor grid', async ({ page }) => {
    // Check for vendor card container with grid layout
    const vendorGrid = page.locator('.grid.gap-8');
    await expect(vendorGrid).toBeVisible();
  });

  test('should display Koster vendor', async ({ page }) => {
    const kosterImage = page.locator('img[alt="Koster"]');
    await expect(kosterImage).toBeVisible();
  });

  test('should display Ameripolish vendor', async ({ page }) => {
    const ameripolishImage = page.locator('img[alt="Ameripolish"]');
    await expect(ameripolishImage).toBeVisible();
  });

  test('should display ASC vendor', async ({ page }) => {
    const ascImage = page.locator('img[alt="ASC"]');
    await expect(ascImage).toBeVisible();
  });

  test('should display Evonik vendor', async ({ page }) => {
    const evonikImage = page.locator('img[alt="Evonik"]');
    await expect(evonikImage).toBeVisible();
  });

  test('should display Lucas vendor', async ({ page }) => {
    const lucasImage = page.locator('img[alt="Lucas"]');
    await expect(lucasImage).toBeVisible();
  });

  test('should display Neptune vendor', async ({ page }) => {
    const neptuneImage = page.locator('img[alt="Neptune"]');
    await expect(neptuneImage).toBeVisible();
  });

  test('should display SET vendor', async ({ page }) => {
    const setImage = page.locator('img[alt="SET"]');
    await expect(setImage).toBeVisible();
  });

  test('should display Wetsuit vendor', async ({ page }) => {
    const wetsuitImage = page.locator('img[alt="Wetsuit"]');
    await expect(wetsuitImage).toBeVisible();
  });

  test('should display Manta vendor', async ({ page }) => {
    const mantaImage = page.locator('img[alt="Manta"]');
    await expect(mantaImage).toBeVisible();
  });

  test('vendor cards should be clickable links', async ({ page }) => {
    // Koster card should link to external site
    const kosterLink = page.locator('a[href="https://www.kosterusa.com/us_en/"]');
    await expect(kosterLink).toBeVisible();
  });

  test('should have Contact Us button in navigation', async ({ page, isMobile }) => {
    if (!isMobile) {
      const contactButton = page.locator('nav').getByRole('link', { name: 'Contact Us' });
      await expect(contactButton).toBeVisible();
    }
  });
});

test.describe('Vendors Page - Responsive Layout', () => {
  test('should display vendor grid properly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/vendors');

    const vendorGrid = page.locator('.grid.gap-8');
    await expect(vendorGrid).toBeVisible();
  });

  test('should display vendor grid properly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/vendors');

    const vendorGrid = page.locator('.grid.gap-8');
    await expect(vendorGrid).toBeVisible();
  });

  test('should display vendor grid properly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/vendors');

    const vendorGrid = page.locator('.grid.gap-8');
    await expect(vendorGrid).toBeVisible();
  });
});

test.describe('Vendors Page - Navigation', () => {
  // Desktop viewport for navigation tests
  test.use({ viewport: { width: 1280, height: 720 } });

  test('should navigate back to home from vendors page', async ({ page }) => {
    await page.goto('/vendors');

    const homeLink = page.locator('nav').getByRole('link', { name: 'Home' });
    await homeLink.click();

    await expect(page).toHaveURL('/');
  });

  test('should navigate to about from vendors page', async ({ page }) => {
    await page.goto('/vendors');

    const aboutLink = page.locator('nav').getByRole('link', { name: 'About' });
    await aboutLink.click();

    await expect(page).toHaveURL('/about');
  });

  test('should navigate to locations from vendors page', async ({ page }) => {
    await page.goto('/vendors');

    const locationsLink = page.locator('nav').getByRole('link', { name: 'Locations' });
    await locationsLink.click();

    await expect(page).toHaveURL('/locations');
  });
});

test.describe('Vendors Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display hamburger menu on mobile', async ({ page }) => {
    await page.goto('/vendors');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await expect(hamburger).toBeVisible();
  });

  test('should navigate via mobile menu', async ({ page }) => {
    await page.goto('/vendors');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await hamburger.click();

    const aboutLink = page.locator('.md\\:hidden').getByRole('link', { name: 'About' });
    await aboutLink.click();

    await expect(page).toHaveURL('/about');
  });
});
