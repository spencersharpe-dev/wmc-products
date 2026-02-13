import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { createSubmission } from './services/submissionsService';

const navLinks = ["Home", "Vendors", "Locations", "About"];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqedeovo";

export default function Partner() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [showTermsError, setShowTermsError] = React.useState(false);

  // Form field states
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    companyType: '',
    message: '',
    website: '' // Honeypot field
  });

  // Form submission states
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');
  const [validationErrors, setValidationErrors] = React.useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    // Name validation (first + last combined)
    if (!formData.firstName.trim() && !formData.lastName.trim()) {
      errors.firstName = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Please tell us about your business';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setSubmitError('');
    setSubmitSuccess(false);

    // Honeypot check - if filled, it's a bot
    if (formData.website) {
      setSubmitError('Spam detected. Please try again.');
      return;
    }

    // Terms validation
    if (!termsAccepted) {
      setShowTermsError(true);
      return;
    }
    setShowTermsError(false);

    // Form validation
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data for Formspree
      const submitData = new FormData();
      submitData.append('name', `${formData.firstName} ${formData.lastName}`.trim());
      submitData.append('company', formData.company);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('companyType', formData.companyType);
      submitData.append('message', formData.message);
      // Formspree honeypot field
      submitData.append('_gotcha', formData.website);

      // Prepare data for Supabase
      const supabaseData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        company_type: formData.companyType,
        message: formData.message
      };

      // Submit to both Formspree and Supabase in parallel
      const [formspreeResult, supabaseResult] = await Promise.allSettled([
        fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: submitData,
          headers: {
            'Accept': 'application/json'
          }
        }),
        createSubmission(supabaseData)
      ]);

      // Check Formspree result (primary for user notification)
      if (formspreeResult.status === 'fulfilled' && formspreeResult.value.ok) {
        setSubmitSuccess(true);
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          companyType: '',
          message: '',
          website: ''
        });
        setTermsAccepted(false);
      } else {
        const errorMsg = formspreeResult.status === 'rejected'
          ? 'Network error. Please check your connection.'
          : 'Something went wrong. Please try again.';
        setSubmitError(errorMsg);
      }

      // Log Supabase failures for debugging (don't show to user)
      if (supabaseResult.status === 'rejected') {
        console.error('Supabase submission failed:', supabaseResult.reason);
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-mist text-ink">
      {/* Navigation - matches Home page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-ink/10 backdrop-blur-sm shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3 md:py-4">
          <Link to="/" className="flex items-center">
            <img
              src="/nav-bar-image.jpg"
              alt="WMC Products"
              className="h-10 md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:gap-8 text-base font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : link === "About" ? "/about" : link === "Products" ? "/products" : link === "Vendors" ? "/vendors" : link === "Locations" ? "/locations" : "#"}
                className="text-ink/70 transition hover:text-ink"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-4 md:gap-5">
            <Link to="/partner" className="rounded-full bg-ink px-4 md:px-5 py-2 text-sm md:text-base font-semibold text-white shadow-soft hover:bg-ink/90 transition">
              Contact Us
            </Link>
            <span className="text-ink/70 font-medium">Have any questions?</span>{' '}
            <a href="tel:714-923-1027" className="text-ocean hover:text-ocean/80 transition font-medium">
              (714) 923-1027
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-ink transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-ink/10">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : link === "About" ? "/about" : link === "Products" ? "/products" : link === "Vendors" ? "/vendors" : link === "Locations" ? "/locations" : "#"}
                  className="block w-full text-left px-4 py-3 text-ink/70 hover:text-ink hover:bg-ink/5 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <a
                href="tel:714-923-1027"
                className="block w-full text-left px-4 py-3 text-ink font-medium hover:bg-ink/5 rounded-lg transition"
              >
                Have any questions? (714) 923-1027
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding top to account for fixed navbar */}
      <div className="pt-16">

      <main className="mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-ink">
            CONTACT US
          </h1>
          <p className="mt-4 text-[1.3rem] text-ink/70">
            Join our network of leading contractors, consultants, and architects.
          </p>
          <p className="mt-4 text-base md:text-lg font-semibold text-ink/70">
            OR
          </p>
          <p className="mt-2 text-base md:text-lg text-ink/70">
            Feel free to give us a call at{' '}
            <a href="tel:714-923-1027" className="text-ocean hover:text-ocean/80 font-medium transition">
              (714) 923-1027
            </a>
          </p>
        </div>

        <div className="mt-8 md:mt-12 rounded-2xl md:rounded-3xl border border-ink/10 bg-white p-6 md:p-8 lg:p-12 shadow-card">
          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm font-medium text-green-800">
                  Thank you! Your message has been sent successfully. We'll be in touch soon.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-sm font-medium text-red-800">{submitError}</p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from users, visible to bots */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-ink">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`mt-2 w-full rounded-xl border ${validationErrors.firstName ? 'border-red-400' : 'border-ink/20'} bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20`}
                  placeholder="John"
                  disabled={isSubmitting}
                />
                {validationErrors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  placeholder="Smith"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Company name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                placeholder="Your Company Inc."
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-2 w-full rounded-xl border ${validationErrors.email ? 'border-red-400' : 'border-ink/20'} bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20`}
                placeholder="john@company.com"
                disabled={isSubmitting}
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                placeholder="(555) 123-4567"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Company type
              </label>
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleInputChange}
                className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                disabled={isSubmitting}
              >
                <option value="">Select a type</option>
                <option value="distributor">Distributor</option>
                <option value="contractor">General Contractor</option>
                <option value="specialty">Specialty Contractor</option>
                <option value="supplier">Supplier</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Tell us about your business <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className={`mt-2 w-full rounded-xl border ${validationErrors.message ? 'border-red-400' : 'border-ink/20'} bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20`}
                placeholder="Share details about your operations, service areas, and why you'd like to partner with WMC products..."
                disabled={isSubmitting}
              />
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
              )}
            </div>

            <div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => {
                    setTermsAccepted(e.target.checked);
                    if (e.target.checked) setShowTermsError(false);
                  }}
                  className="mt-1 h-4 w-4 rounded border-ink/20 text-ocean focus:ring-ocean"
                  disabled={isSubmitting}
                />
                <label htmlFor="terms" className="text-sm text-ink/70">
                  I agree to the terms and conditions and acknowledge that WMC products
                  may contact me regarding partnership opportunities. <span className="text-red-500">*</span>
                </label>
              </div>
              {showTermsError && (
                <p className="mt-2 text-sm text-red-600">
                  You must agree to the terms and conditions to submit.
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-ocean px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ocean/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting && (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {isSubmitting ? 'Sending...' : 'Submit application'}
              </button>
              <Link
                to="/"
                className="rounded-full border border-ink/20 px-8 py-3 text-sm font-semibold transition hover:bg-mist"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
