// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Home Page Tests
 * Tests for the main landing page of WMC Products
 */

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the home page successfully', async ({ page }) => {
    await expect(page).toHaveURL('/');
  });

  test('should display the WMC logo in navigation', async ({ page }) => {
    const logo = page.locator('nav img[src="/nav-bar-image.jpg"]');
    await expect(logo).toBeVisible();
  });

  test('should display hero video', async ({ page }) => {
    const heroVideo = page.locator('video[src="/water-drop-no-mark.mp4"]');
    await expect(heroVideo).toBeVisible();
  });

  test('should display hero logo image', async ({ page }) => {
    // The actual logo path is /logo_clean_magic (1).png
    const heroLogo = page.locator('header img[alt="WMC Logo"]');
    await expect(heroLogo).toBeVisible();
  });

  test('should display "What we solve" section', async ({ page }) => {
    const sectionTitle = page.getByText('What we solve');
    await expect(sectionTitle).toBeVisible();

    const heading = page.getByText('Integrated services for every jobsite.');
    await expect(heading).toBeVisible();
  });

  test('should display all four solution cards', async ({ page }) => {
    const solutionCards = [
      'WATERPROOFING',
      'CONCRETE RESTORATION',
      'ROOF COATINGS',
      'INJECTION GROUTS'
    ];

    for (const card of solutionCards) {
      await expect(page.getByText(card, { exact: true })).toBeVisible();
    }
  });

  test('should display About Us section', async ({ page }) => {
    // Scroll down to ensure About section is in view
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    const aboutHeading = page.getByRole('heading', { name: 'Over 40 Years of Industry Experience' });
    await expect(aboutHeading).toBeVisible();
  });

  test('should display vendor carousel section', async ({ page }) => {
    // Scroll down to vendor section
    await page.evaluate(() => window.scrollBy(0, window.innerHeight * 2));
    const vendorHeading = page.getByRole('heading', { name: 'Our trusted vendors' });
    await expect(vendorHeading).toBeVisible();
  });

  test('should have View our Vendors link', async ({ page }) => {
    const viewVendorsLink = page.getByRole('link', { name: 'View our Vendors' });
    await expect(viewVendorsLink).toBeVisible();
  });

  test('should have working vendor carousel scroll buttons', async ({ page }) => {
    const leftButton = page.getByRole('button', { name: 'Scroll vendors left' });
    const rightButton = page.getByRole('button', { name: 'Scroll vendors right' });

    await expect(leftButton).toBeVisible();
    await expect(rightButton).toBeVisible();

    // Click right scroll button
    await rightButton.click();
    // Click left scroll button
    await leftButton.click();
  });

  test('should display vendor images in carousel', async ({ page }) => {
    // Check for at least one vendor image - using actual alt text from Home.jsx
    const kosterImage = page.locator('img[alt="Koster Waterproofing Systems"]');
    await expect(kosterImage).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    const footerTagline = page.getByText('Concrete & Waterproofing Building Envelope Specialists');
    await expect(footerTagline).toBeVisible();
  });

  test('should have Contact Us button in navigation', async ({ page, isMobile }) => {
    if (!isMobile) {
      const contactButton = page.locator('nav').getByRole('link', { name: 'Contact Us' });
      await expect(contactButton).toBeVisible();
    }
  });

  test('should display phone number in navigation', async ({ page, isMobile }) => {
    if (!isMobile) {
      const phoneLink = page.locator('nav').getByRole('link', { name: '(714) 923-1027' });
      await expect(phoneLink).toBeVisible();
      await expect(phoneLink).toHaveAttribute('href', 'tel:714-923-1027');
    }
  });

  test('should navigate to vendors page from View our Vendors link', async ({ page }) => {
    const viewVendorsLink = page.getByRole('link', { name: 'View our Vendors' });
    await viewVendorsLink.click();

    await expect(page).toHaveURL('/vendors');
  });
});

test.describe('Home Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display hamburger menu on mobile', async ({ page }) => {
    await page.goto('/');

    const hamburgerButton = page.getByRole('button', { name: 'Toggle menu' });
    await expect(hamburgerButton).toBeVisible();
  });

  test('should open mobile menu when hamburger is clicked', async ({ page }) => {
    await page.goto('/');

    const hamburgerButton = page.getByRole('button', { name: 'Toggle menu' });
    await hamburgerButton.click();

    // Check that navigation links are visible in mobile menu
    const mobileMenu = page.locator('.md\\:hidden.bg-white.border-t');
    await expect(mobileMenu).toBeVisible();
  });

  test('should show phone number in mobile menu', async ({ page }) => {
    await page.goto('/');

    const hamburgerButton = page.getByRole('button', { name: 'Toggle menu' });
    await hamburgerButton.click();

    const phoneText = page.locator('.md\\:hidden').getByText('Have any questions? (714) 923-1027');
    await expect(phoneText).toBeVisible();
  });

  test('should navigate from mobile menu', async ({ page }) => {
    await page.goto('/');

    const hamburgerButton = page.getByRole('button', { name: 'Toggle menu' });
    await hamburgerButton.click();

    const aboutLink = page.locator('.md\\:hidden').getByRole('link', { name: 'About' });
    await aboutLink.click();

    await expect(page).toHaveURL('/about');
  });
});
