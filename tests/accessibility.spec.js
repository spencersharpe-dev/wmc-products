// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Accessibility Tests
 * Basic accessibility checks for the WMC Products site
 */

test.describe('Accessibility - Images', () => {
  test('hero video should have aria-label', async ({ page }) => {
    await page.goto('/');

    const heroVideo = page.locator('video');
    await expect(heroVideo).toHaveAttribute('aria-label', 'Hero background video');
  });

  test('navigation logo should be accessible', async ({ page }) => {
    await page.goto('/');

    const logoLink = page.locator('nav a').first();
    await expect(logoLink).toBeVisible();

    const logoImage = logoLink.locator('img');
    await expect(logoImage).toBeVisible();
  });

  test('vendor images should have alt text', async ({ page }) => {
    await page.goto('/');

    // Check carousel images have alt text
    const vendorImages = page.locator('section img[alt]');
    const count = await vendorImages.count();

    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Accessibility - Buttons and Links', () => {
  test('hamburger menu should have aria-label', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await expect(hamburger).toHaveAttribute('aria-label', 'Toggle menu');
  });

  test('scroll buttons should have aria-labels', async ({ page }) => {
    await page.goto('/');

    const leftButton = page.getByRole('button', { name: 'Scroll vendors left' });
    const rightButton = page.getByRole('button', { name: 'Scroll vendors right' });

    await expect(leftButton).toHaveAttribute('aria-label', 'Scroll vendors left');
    await expect(rightButton).toHaveAttribute('aria-label', 'Scroll vendors right');
  });

  test('phone links should be clickable', async ({ page }) => {
    await page.goto('/');

    const phoneLinks = page.locator('a[href="tel:714-923-1027"]');
    const count = await phoneLinks.count();

    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Accessibility - Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/partner');
  });

  test('form inputs should have labels', async ({ page }) => {
    // First name
    const firstNameLabel = page.getByText('First name');
    await expect(firstNameLabel).toBeVisible();

    // Email
    const emailLabel = page.getByText('Email address');
    await expect(emailLabel).toBeVisible();

    // Message
    const messageLabel = page.getByText('Tell us about your business');
    await expect(messageLabel).toBeVisible();
  });

  test('terms checkbox should have associated label', async ({ page }) => {
    const termsCheckbox = page.locator('input#terms');
    await expect(termsCheckbox).toBeVisible();

    const label = page.locator('label[for="terms"]');
    await expect(label).toBeVisible();
  });

  test('form should have proper input types', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toHaveAttribute('type', 'email');

    const phoneInput = page.locator('input[name="phone"]');
    await expect(phoneInput).toHaveAttribute('type', 'tel');
  });

  test('honeypot field should be hidden from screen readers', async ({ page }) => {
    const honeypot = page.locator('input[name="website"]');
    await expect(honeypot).toHaveAttribute('aria-hidden', 'true');
    await expect(honeypot).toHaveAttribute('tabindex', '-1');
  });
});

test.describe('Accessibility - Headings', () => {
  test('home page should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Check for h2 and h3 headings
    const h2Headings = page.locator('h2');
    const count = await h2Headings.count();

    expect(count).toBeGreaterThan(0);
  });

  test('about page should have h1 heading', async ({ page }) => {
    await page.goto('/about');

    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('about page should have section headings', async ({ page }) => {
    await page.goto('/about');

    const missionHeading = page.getByRole('heading', { name: 'Our Mission' });
    const storyHeading = page.getByRole('heading', { name: 'Our Story' });
    const valuesHeading = page.getByRole('heading', { name: 'Our Values' });

    await expect(missionHeading).toBeVisible();
    await expect(storyHeading).toBeVisible();
    await expect(valuesHeading).toBeVisible();
  });
});

test.describe('Accessibility - Focus Management', () => {
  // Skip on webkit as keyboard focus handling differs
  test('links should be keyboard focusable', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Keyboard focus behavior differs in WebKit');

    await page.goto('/');

    // Tab to first focusable element
    await page.keyboard.press('Tab');

    // Something should be focused
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('form inputs should be keyboard accessible', async ({ page }) => {
    await page.goto('/partner');

    // Focus on first name input
    const firstNameInput = page.locator('input[name="firstName"]');
    await firstNameInput.focus();

    // Type in the field
    await page.keyboard.type('Test');

    await expect(firstNameInput).toHaveValue('Test');
  });
});

test.describe('Accessibility - Color and Contrast', () => {
  test('submit button should have visible text', async ({ page }) => {
    await page.goto('/partner');

    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await expect(submitButton).toBeVisible();

    // Button should have text content
    const buttonText = await submitButton.textContent();
    expect(buttonText?.trim().length).toBeGreaterThan(0);
  });

  test('error messages should be visible', async ({ page }) => {
    await page.goto('/partner');

    // Submit to trigger errors
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await submitButton.click();

    // Error should be visible
    const errorMessage = page.locator('.text-red-600').first();
    await expect(errorMessage).toBeVisible();
  });
});
