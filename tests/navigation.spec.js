// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Navigation Tests
 * Tests for site-wide navigation functionality
 */

test.describe('Desktop Navigation', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('should navigate to Home page', async ({ page }) => {
    await page.goto('/about');

    // Click the logo to go home
    const logo = page.locator('nav a').first();
    await logo.click();

    await expect(page).toHaveURL('/');
  });

  test('should navigate to Vendors page', async ({ page }) => {
    await page.goto('/');

    const vendorsLink = page.locator('nav').getByRole('link', { name: 'Vendors' });
    await vendorsLink.click();

    await expect(page).toHaveURL('/vendors');
  });

  test('should navigate to Locations page', async ({ page }) => {
    await page.goto('/');

    const locationsLink = page.locator('nav').getByRole('link', { name: 'Locations' });
    await locationsLink.click();

    await expect(page).toHaveURL('/locations');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');

    const aboutLink = page.locator('nav').getByRole('link', { name: 'About' });
    await aboutLink.click();

    await expect(page).toHaveURL('/about');
  });

  test('should navigate to Partner/Contact page', async ({ page }) => {
    await page.goto('/');

    const contactButton = page.locator('nav').getByRole('link', { name: 'Contact Us' });
    await contactButton.click();

    await expect(page).toHaveURL('/partner');
  });

  test('should have all navigation links visible', async ({ page }) => {
    await page.goto('/');

    const navLinks = ['Home', 'Vendors', 'Locations', 'About'];

    for (const linkName of navLinks) {
      const link = page.locator('nav .md\\:flex').getByRole('link', { name: linkName });
      await expect(link).toBeVisible();
    }
  });

  test('navigation should be fixed on scroll', async ({ page }) => {
    await page.goto('/');

    // Scroll down the page
    await page.evaluate(() => window.scrollBy(0, 500));

    // Navigation should still be visible
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
});

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should toggle mobile menu', async ({ page }) => {
    await page.goto('/');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });

    // Open menu
    await hamburger.click();
    const mobileMenu = page.locator('.md\\:hidden.bg-white.border-t');
    await expect(mobileMenu).toBeVisible();

    // Close menu
    await hamburger.click();
    await expect(mobileMenu).not.toBeVisible();
  });

  test('should navigate via mobile menu', async ({ page }) => {
    await page.goto('/');

    // Open menu
    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await hamburger.click();

    // Click Vendors link
    const vendorsLink = page.locator('.md\\:hidden').getByRole('link', { name: 'Vendors' });
    await vendorsLink.click();

    await expect(page).toHaveURL('/vendors');
  });

  test('mobile menu should close after navigation', async ({ page }) => {
    await page.goto('/');

    // Open menu
    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await hamburger.click();

    // Click About link
    const aboutLink = page.locator('.md\\:hidden').getByRole('link', { name: 'About' });
    await aboutLink.click();

    // Menu should close after navigation
    await expect(page).toHaveURL('/about');
  });

  test('should have all navigation links in mobile menu', async ({ page }) => {
    await page.goto('/');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await hamburger.click();

    const navLinks = ['Home', 'Vendors', 'Locations', 'About'];

    for (const linkName of navLinks) {
      const link = page.locator('.md\\:hidden').getByRole('link', { name: linkName });
      await expect(link).toBeVisible();
    }
  });
});

test.describe('Cross-Page Navigation Consistency', () => {
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/vendors', name: 'Vendors' },
    { path: '/locations', name: 'Locations' },
    { path: '/partner', name: 'Partner' }
  ];

  for (const pageInfo of pages) {
    test(`navigation should be present on ${pageInfo.name} page`, async ({ page }) => {
      await page.goto(pageInfo.path);

      const nav = page.locator('nav');
      await expect(nav).toBeVisible();

      // Logo should be visible
      const logo = nav.locator('img').first();
      await expect(logo).toBeVisible();
    });
  }
});
