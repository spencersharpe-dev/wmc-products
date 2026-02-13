// @ts-check
import { test, expect } from '@playwright/test';

/**
 * Partner/Contact Form Tests
 * Tests for the contact form on the Partner page
 */

test.describe('Partner Page - Form Display', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/partner');
  });

  test('should load the partner page successfully', async ({ page }) => {
    await expect(page).toHaveURL('/partner');
  });

  test('should display page title', async ({ page }) => {
    // The actual title is "CONTACT US"
    const title = page.getByRole('heading', { name: /CONTACT US/i });
    await expect(title).toBeVisible();
  });

  test('should display contact form', async ({ page }) => {
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should display first name field', async ({ page }) => {
    const firstNameLabel = page.getByText('First name', { exact: false });
    await expect(firstNameLabel).toBeVisible();

    const firstNameInput = page.locator('input[name="firstName"]');
    await expect(firstNameInput).toBeVisible();
  });

  test('should display last name field', async ({ page }) => {
    const lastNameLabel = page.getByText('Last name', { exact: false });
    await expect(lastNameLabel).toBeVisible();

    const lastNameInput = page.locator('input[name="lastName"]');
    await expect(lastNameInput).toBeVisible();
  });

  test('should display company name field', async ({ page }) => {
    const companyLabel = page.getByText('Company name', { exact: false });
    await expect(companyLabel).toBeVisible();

    const companyInput = page.locator('input[name="company"]');
    await expect(companyInput).toBeVisible();
  });

  test('should display email field', async ({ page }) => {
    const emailLabel = page.getByText('Email address', { exact: false });
    await expect(emailLabel).toBeVisible();

    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();
  });

  test('should display phone field', async ({ page }) => {
    const phoneLabel = page.getByText('Phone number', { exact: false });
    await expect(phoneLabel).toBeVisible();

    const phoneInput = page.locator('input[name="phone"]');
    await expect(phoneInput).toBeVisible();
  });

  test('should display company type dropdown', async ({ page }) => {
    const companyTypeLabel = page.getByText('Company type', { exact: false });
    await expect(companyTypeLabel).toBeVisible();

    const companyTypeSelect = page.locator('select[name="companyType"]');
    await expect(companyTypeSelect).toBeVisible();
  });

  test('should have all company type options', async ({ page }) => {
    const select = page.locator('select[name="companyType"]');

    await expect(select.locator('option[value="distributor"]')).toHaveText('Distributor');
    await expect(select.locator('option[value="contractor"]')).toHaveText('General Contractor');
    await expect(select.locator('option[value="specialty"]')).toHaveText('Specialty Contractor');
    await expect(select.locator('option[value="supplier"]')).toHaveText('Supplier');
    await expect(select.locator('option[value="other"]')).toHaveText('Other');
  });

  test('should display message textarea', async ({ page }) => {
    const messageLabel = page.getByText('Tell us about your business', { exact: false });
    await expect(messageLabel).toBeVisible();

    const messageTextarea = page.locator('textarea[name="message"]');
    await expect(messageTextarea).toBeVisible();
  });

  test('should display terms checkbox', async ({ page }) => {
    const termsCheckbox = page.locator('input#terms');
    await expect(termsCheckbox).toBeVisible();

    const termsLabel = page.getByText(/I agree to the terms and conditions/);
    await expect(termsLabel).toBeVisible();
  });

  test('should display submit button', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await expect(submitButton).toBeVisible();
  });

  test('should display cancel button', async ({ page }) => {
    const cancelButton = page.getByRole('link', { name: 'Cancel' });
    await expect(cancelButton).toBeVisible();
    await expect(cancelButton).toHaveAttribute('href', '/');
  });

  test('should display phone number for contact', async ({ page }) => {
    const phoneLink = page.getByRole('link', { name: '(714) 923-1027' }).first();
    await expect(phoneLink).toBeVisible();
  });
});

test.describe('Partner Page - Form Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/partner');
  });

  test('should show error when submitting without accepting terms', async ({ page }) => {
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await submitButton.click();

    // Should show terms error first (since terms aren't checked)
    const termsError = page.getByText(/You must agree to the terms/);
    await expect(termsError).toBeVisible();
  });

  test('should show name error when name is empty but terms accepted', async ({ page }) => {
    // Check terms
    const termsCheckbox = page.locator('input#terms');
    await termsCheckbox.check();

    // Submit without name
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await submitButton.click();

    // Should show name error
    const nameError = page.getByText(/Name is required/);
    await expect(nameError).toBeVisible();
  });

  test('should show email error for invalid email format', async ({ page }) => {
    // Fill required fields with invalid email
    await page.locator('input[name="firstName"]').fill('John');
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('invalid-email');
    await page.locator('textarea[name="message"]').fill('Test message');
    await page.locator('input#terms').check();

    // Submit
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await submitButton.click();

    // Browser HTML5 validation will show native error for type="email" input
    // Check that email input is invalid via validationMessage or :invalid pseudo-class
    const isInvalid = await emailInput.evaluate((el) => !(/** @type {HTMLInputElement} */ (el)).validity.valid);
    expect(isInvalid).toBe(true);
  });

  test('should show email error when email is empty', async ({ page }) => {
    // Fill fields except email
    await page.locator('input[name="firstName"]').fill('John');
    await page.locator('textarea[name="message"]').fill('Test message');
    await page.locator('input#terms').check();

    // Submit
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await submitButton.click();

    // Should show email error
    const emailError = page.getByText(/Email is required/);
    await expect(emailError).toBeVisible();
  });

  test('should show message error when message is empty', async ({ page }) => {
    // Fill fields except message
    await page.locator('input[name="firstName"]').fill('John');
    await page.locator('input[name="email"]').fill('john@example.com');
    await page.locator('input#terms').check();

    // Submit
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await submitButton.click();

    // Should show message error
    const messageError = page.getByText(/Please tell us about your business/);
    await expect(messageError).toBeVisible();
  });

  test('should clear validation error when user starts typing', async ({ page }) => {
    // Check terms
    await page.locator('input#terms').check();

    // Submit to trigger name error
    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await submitButton.click();

    // Verify error is shown
    const nameError = page.getByText(/Name is required/);
    await expect(nameError).toBeVisible();

    // Start typing in first name
    await page.locator('input[name="firstName"]').fill('J');

    // Error should be cleared
    await expect(nameError).not.toBeVisible();
  });
});

test.describe('Partner Page - Form Interaction', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/partner');
  });

  test('should allow filling out all form fields', async ({ page }) => {
    await page.locator('input[name="firstName"]').fill('John');
    await page.locator('input[name="lastName"]').fill('Doe');
    await page.locator('input[name="company"]').fill('Test Company');
    await page.locator('input[name="email"]').fill('john@testcompany.com');
    await page.locator('input[name="phone"]').fill('555-123-4567');
    await page.locator('select[name="companyType"]').selectOption('contractor');
    await page.locator('textarea[name="message"]').fill('This is a test message about our company.');
    await page.locator('input#terms').check();

    // Verify all fields are filled
    await expect(page.locator('input[name="firstName"]')).toHaveValue('John');
    await expect(page.locator('input[name="lastName"]')).toHaveValue('Doe');
    await expect(page.locator('input[name="company"]')).toHaveValue('Test Company');
    await expect(page.locator('input[name="email"]')).toHaveValue('john@testcompany.com');
    await expect(page.locator('input[name="phone"]')).toHaveValue('555-123-4567');
    await expect(page.locator('select[name="companyType"]')).toHaveValue('contractor');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a test message about our company.');
    await expect(page.locator('input#terms')).toBeChecked();
  });

  test('should navigate to home when clicking cancel', async ({ page }) => {
    const cancelButton = page.getByRole('link', { name: 'Cancel' });
    await cancelButton.click();

    await expect(page).toHaveURL('/');
  });

  test('terms checkbox should toggle', async ({ page }) => {
    const termsCheckbox = page.locator('input#terms');

    // Initially unchecked
    await expect(termsCheckbox).not.toBeChecked();

    // Check it
    await termsCheckbox.check();
    await expect(termsCheckbox).toBeChecked();

    // Uncheck it
    await termsCheckbox.uncheck();
    await expect(termsCheckbox).not.toBeChecked();
  });

  test('should show required field indicators', async ({ page }) => {
    // Check for asterisks on required fields
    const requiredIndicators = page.locator('.text-red-500');

    // Should have required indicators for first name, email, message, and terms
    await expect(requiredIndicators).toHaveCount(4);
  });
});

test.describe('Partner Page - Mobile', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('should display form properly on mobile', async ({ page }) => {
    await page.goto('/partner');

    const form = page.locator('form');
    await expect(form).toBeVisible();

    const submitButton = page.getByRole('button', { name: /Submit application/i });
    await expect(submitButton).toBeVisible();
  });

  test('should have working hamburger menu on partner page', async ({ page }) => {
    await page.goto('/partner');

    const hamburger = page.getByRole('button', { name: 'Toggle menu' });
    await expect(hamburger).toBeVisible();

    await hamburger.click();

    const homeLink = page.locator('.md\\:hidden').getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();
  });

  test('all form fields should be visible on mobile', async ({ page }) => {
    await page.goto('/partner');

    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="lastName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });
});
