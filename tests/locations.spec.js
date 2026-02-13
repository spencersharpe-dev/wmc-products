// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Locations Page Tests
 * Tests for the Locations page of WMC Products
 */

test.describe('Locations Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/locations');
  });

  test('should load the locations page successfully', async ({ page }) => {
    await expect(page).toHaveURL('/locations');
  });

  test('should display page title', async ({ page }) => {
    const title = page.getByRole('heading', { name: /Our Locations/i });
    await expect(title).toBeVisible();
  });

  test('should display page subtitle', async ({ page }) => {
    const subtitle = page.getByText('Serving California, Arizona, and Nevada');
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

  test('should display main content area', async ({ page }) => {
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should display Southern California location', async ({ page }) => {
    const locationName = page.getByRole('heading', { name: 'Southern California' });
    await expect(locationName).toBeVisible();

    const headquarters = page.getByText('Headquarters');
    await expect(headquarters).toBeVisible();
  });

  test('should display Northern California location', async ({ page }) => {
    const locationName = page.getByRole('heading', { name: 'Northern California' });
    await expect(locationName).toBeVisible();
  });

  test('should display San Diego location', async ({ page }) => {
    const locationName = page.getByRole('heading', { name: /San Diego/ });
    await expect(locationName).toBeVisible();
  });

  test('should display Arizona location', async ({ page }) => {
    const locationName = page.getByRole('heading', { name: /Arizona/ });
    await expect(locationName).toBeVisible();
  });

  test('should display location addresses', async ({ page }) => {
    const anaheimAddress = page.getByText('1518 North Endeavor Place, Unit A');
    await expect(anaheimAddress).toBeVisible();
  });

  test('should have clickable phone numbers', async ({ page }) => {
    // There are multiple phone links on the page
    const phoneLinks = page.locator('a[href^="tel:"]');
    const count = await phoneLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have clickable map links', async ({ page }) => {
    // Location cards have links to Google Maps
    const mapLinks = page.locator('a[href*="google.com/maps"]');
    const count = await mapLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display CTA section', async ({ page }) => {
    const ctaHeading = page.getByRole('heading', { name: 'Need Help Finding Us?' });
    await expect(ctaHeading).toBeVisible();
  });

  test('should have Contact Us button in CTA', async ({ page }) => {
    const ctaButton = page.locator('main').getByRole('link', { name: 'Contact Us' });
    await expect(ctaButton).toBeVisible();
  });

  test('should have Contact Us button in navigation', async ({ page, isMobile }) => {
    if (!isMobile) {
      const contactButton = page.locator('nav').getByRole('link', { name: 'Contact Us' });
      await expect(contactButton).toBeVisible();
    }
  });

  test('should have phone number link in nav', async ({ page, isMobile }) => {
    if (!isMobile) {
      const phoneLink = page.locator('nav').getByRole('link', { name: '(714) 923-1027' });
      await expect(phoneLink).toBeVisible();
    }
  });
});

test.describe('Locations Page - Navigation', () => {
  // Desktop viewport for navigation tests
  test.use({ viewport: { width: 1280, height: 720 } });

  test('should navigate back to home from locations page', async ({ page }) => {
    await page.goto('/locations');

    const homeLink = page.locator('nav').getByRole('link', { name: 'Home' });
    await homeLink.click();

    await expect(page).toHaveURL('/');
  });

  test('should navigate to vendors from locations page', async ({ page }) => {
    await page.goto('/locations');

    const vendorsLink = page.locator('nav').getByRole('link', { name: 'Vendors' });
    await vendorsLink.click();

    await expect(page).toHaveURL('/vendors');
  });

  test('should navigate to about from locations page', async ({ page }) => {
    await page.goto('/locations');

    const aboutLink = page.locator('nav').getByRole('link', { name: 'About' });
    await aboutLink.click();

    await expect(page).toHaveURL('/about');
  });

  test('should navigate to partner page from nav Contact Us', async ({ page }) => {
    await page.goto('/locations');

    const contactButton = page.locator('nav').getByRole('link', { name: 'Contact Us' });
    await contactButton.click();

    await expect(page).toHaveURL('/partner');
  });

  test('should navigate to partner page from CTA Contact Us', async ({ page }) => {
    await page.goto('/locations');

    const ctaButton = page.locator('main').getByRole('link', { name: 'Contact Us' });
    await ctaButton.click();

    await expect(page).toHaveURL('/partner');
  });
});

test.describe('Locations Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display hamburger menu on mobile', async ({ page }) => {
    await page.goto('/locations');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await expect(hamburger).toBeVisible();
  });

  test('should navigate via mobile menu on locations page', async ({ page }) => {
    await page.goto('/locations');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await hamburger.click();

    const aboutLink = page.locator('.md\\:hidden').getByRole('link', { name: 'About' });
    await aboutLink.click();

    await expect(page).toHaveURL('/about');
  });

  test('should display all four locations on mobile', async ({ page }) => {
    await page.goto('/locations');

    const locationCards = page.locator('.grid .rounded-2xl');
    await expect(locationCards).toHaveCount(4);
  });
});
