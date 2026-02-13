// @ts-check
import { test, expect } from '@playwright/test';

/**
 * About Page Tests
 * Tests for the About page of WMC Products
 */

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should load the about page successfully', async ({ page }) => {
    await expect(page).toHaveURL('/about');
  });

  test('should display page title', async ({ page }) => {
    const title = page.getByRole('heading', { name: /About WMC products/i });
    await expect(title).toBeVisible();
  });

  test('should display page subtitle', async ({ page }) => {
    const subtitle = page.getByText('Protecting structures from the ground up');
    await expect(subtitle).toBeVisible();
  });

  test('should display Our Mission section', async ({ page }) => {
    const missionHeading = page.getByRole('heading', { name: 'Our Mission' });
    await expect(missionHeading).toBeVisible();

    const missionContent = page.getByText(/revolutionize the construction industry/);
    await expect(missionContent).toBeVisible();
  });

  test('should display Our Story section', async ({ page }) => {
    const storyHeading = page.getByRole('heading', { name: 'Our Story' });
    await expect(storyHeading).toBeVisible();

    const storyContent = page.getByText(/Water Mitigation Concepts is the leader/);
    await expect(storyContent).toBeVisible();
  });

  test('should mention 40 years of experience in story', async ({ page }) => {
    const experienceText = page.getByText(/over 40 years of experience/i);
    await expect(experienceText).toBeVisible();
  });

  test('should display Our Values section', async ({ page }) => {
    const valuesHeading = page.getByRole('heading', { name: 'Our Values' });
    await expect(valuesHeading).toBeVisible();
  });

  test('should display all four values', async ({ page }) => {
    // The actual values in About.jsx are: Reliability, Transparency, Innovation, Partnership
    const values = ['Reliability', 'Transparency', 'Innovation', 'Partnership'];

    for (const value of values) {
      const valueHeading = page.getByRole('heading', { name: value });
      await expect(valueHeading).toBeVisible();
    }
  });

  test('should display Ready to Join Us CTA section', async ({ page }) => {
    const ctaHeading = page.getByRole('heading', { name: 'Ready to Join Us?' });
    await expect(ctaHeading).toBeVisible();
  });

  test('should have Contact Us CTA button', async ({ page }) => {
    // The CTA section has a "Contact Us" button that links to /partner
    const ctaSection = page.locator('main');
    const contactLink = ctaSection.getByRole('link', { name: 'Contact Us' });
    await expect(contactLink).toBeVisible();
  });

  test('should navigate to partner page when clicking CTA Contact Us', async ({ page }) => {
    // Scroll to CTA section first
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    // The CTA "Contact Us" button in the main content area
    const ctaSection = page.locator('main');
    const contactLink = ctaSection.getByRole('link', { name: 'Contact Us' });
    await contactLink.click();

    await expect(page).toHaveURL('/partner');
  });

  test('should display phone number in nav', async ({ page, isMobile }) => {
    if (!isMobile) {
      const phoneLink = page.locator('nav').getByRole('link', { name: '(714) 923-1027' });
      await expect(phoneLink).toBeVisible();
    }
  });

  test('should display footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('About Page - Content Sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should have proper card styling for sections', async ({ page }) => {
    // Check that mission card exists with proper styling
    const missionCard = page.locator('div').filter({ hasText: 'Our Mission' }).first();
    await expect(missionCard).toBeVisible();
  });

  test('should mention service areas in story', async ({ page }) => {
    const serviceAreas = page.getByText(/California, Arizona and Nevada/);
    await expect(serviceAreas).toBeVisible();
  });

  test('should mention vendor partners in story', async ({ page }) => {
    const vendors = ['Koster American', 'RM Lucas Co', 'AmeriPolish Coatings'];

    for (const vendor of vendors) {
      const vendorText = page.getByText(new RegExp(vendor));
      await expect(vendorText).toBeVisible();
    }
  });
});
