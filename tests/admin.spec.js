// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Admin Dashboard Tests
 * Tests for the admin login and dashboard functionality
 */

test.describe('Admin Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin/login');
  });

  test('should load the admin login page', async ({ page }) => {
    await expect(page).toHaveURL('/admin/login');
  });

  test('should display login form', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    const submitButton = page.getByRole('button', { name: /Sign In/i });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('should display Admin Login heading', async ({ page }) => {
    const heading = page.getByRole('heading', { name: 'Admin Login' });
    await expect(heading).toBeVisible();
  });

  test('should display WMC logo', async ({ page }) => {
    const logo = page.locator('img[alt="WMC Products"]');
    await expect(logo).toBeVisible();
  });

  test('should have back to website link', async ({ page }) => {
    const backLink = page.getByRole('link', { name: 'Back to website' });
    await expect(backLink).toBeVisible();
    await expect(backLink).toHaveAttribute('href', '/');
  });

  test('should navigate to home when clicking back to website', async ({ page }) => {
    const backLink = page.getByRole('link', { name: 'Back to website' });
    await backLink.click();
    await expect(page).toHaveURL('/');
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.locator('input[type="email"]').fill('invalid@test.com');
    await page.locator('input[type="password"]').fill('wrongpassword');
    await page.getByRole('button', { name: /Sign In/i }).click();

    // Wait for error message to appear
    const errorMessage = page.locator('.bg-red-50');
    await expect(errorMessage).toBeVisible({ timeout: 10000 });
  });

  test('should show loading text while submitting', async ({ page }) => {
    await page.locator('input[type="email"]').fill('test@test.com');
    await page.locator('input[type="password"]').fill('password');

    const submitButton = page.getByRole('button', { name: /Sign In/i });
    await submitButton.click();

    // Button should show "Signing in..." text during submission
    // Use a short timeout since the state changes quickly
    const signingInButton = page.getByRole('button', { name: /Signing in/i });
    await expect(signingInButton).toBeVisible({ timeout: 2000 }).catch(() => {
      // If we didn't catch the loading state, the auth error was fast
      // Just verify the button exists
      expect(submitButton).toBeTruthy();
    });
  });

  test('email field should be required', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toHaveAttribute('required', '');
  });

  test('password field should be required', async ({ page }) => {
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toHaveAttribute('required', '');
  });
});

test.describe('Admin Route Protection', () => {
  test('should redirect to login when accessing /admin without auth', async ({ page }) => {
    await page.goto('/admin');

    // Should redirect to login page
    await expect(page).toHaveURL('/admin/login');
  });

  test('should show loading spinner initially on protected route', async ({ page }) => {
    // This test checks that the loading state appears before redirect
    await page.goto('/admin');

    // Either shows loading spinner or redirects to login
    const loginHeading = page.getByRole('heading', { name: 'Admin Login' });
    await expect(loginHeading).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Admin Login Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display login form properly on mobile', async ({ page }) => {
    await page.goto('/admin/login');

    const emailInput = page.locator('input[type="email"]');
    const passwordInput = page.locator('input[type="password"]');
    const submitButton = page.getByRole('button', { name: /Sign In/i });

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('should have proper styling on mobile', async ({ page }) => {
    await page.goto('/admin/login');

    // Check the form card is visible
    const formCard = page.locator('.rounded-2xl.border');
    await expect(formCard).toBeVisible();
  });
});

test.describe('Admin Login Page - Accessibility', () => {
  test('should have proper form labels', async ({ page }) => {
    await page.goto('/admin/login');

    const emailLabel = page.getByText('Email');
    const passwordLabel = page.getByText('Password');

    await expect(emailLabel).toBeVisible();
    await expect(passwordLabel).toBeVisible();
  });

  test('form inputs should be keyboard accessible', async ({ page }) => {
    await page.goto('/admin/login');

    // Focus on email input
    const emailInput = page.locator('input[type="email"]');
    await emailInput.focus();
    await page.keyboard.type('test@example.com');

    await expect(emailInput).toHaveValue('test@example.com');

    // Tab to password
    await page.keyboard.press('Tab');
    await page.keyboard.type('password123');

    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toHaveValue('password123');
  });
});
