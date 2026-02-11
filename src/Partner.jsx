import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = ["Home", "Vendors", "Products", "Locations", "About"];

export default function Partner() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
            <a href="tel:714-923-1027" className="text-ink/70 hover:text-ink transition font-medium">
              Have any questions? (714)-923-1027
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
                Have any questions? (714)-923-1027
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
          <p className="mt-4 text-base md:text-lg text-ink/70">
            Join our network of leading distributors and contractors.
          </p>
          <p className="mt-4 text-base md:text-lg font-semibold text-ink/70">
            OR
          </p>
          <p className="mt-2 text-base md:text-lg text-ink/70">
            Feel free to give us a call at{' '}
            <a href="tel:714-923-1027" className="text-ocean hover:text-ocean/80 font-medium transition">
              (714)-923-1027
            </a>
            !
          </p>
        </div>

        <div className="mt-8 md:mt-12 rounded-2xl md:rounded-3xl border border-ink/10 bg-white p-6 md:p-8 lg:p-12 shadow-card">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-ink">
                  First name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink">
                  Last name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Company name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                placeholder="Your Company Inc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Email address
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Phone number
              </label>
              <input
                type="tel"
                className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink">
                Company type
              </label>
              <select className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20">
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
                Tell us about your business
              </label>
              <textarea
                rows="4"
                className="mt-2 w-full rounded-xl border border-ink/20 bg-mist px-4 py-3 text-sm focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                placeholder="Share details about your operations, service areas, and why you'd like to partner with WMC products..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 h-4 w-4 rounded border-ink/20 text-ocean focus:ring-ocean"
              />
              <label htmlFor="terms" className="text-sm text-ink/70">
                I agree to the terms and conditions and acknowledge that WMC products
                may contact me regarding partnership opportunities.
              </label>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="submit"
                className="rounded-full bg-ocean px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ocean/90"
              >
                Submit application
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-card">
            <p className="text-2xl font-semibold">38k+</p>
            <p className="mt-2 text-sm text-ink/60">Active partners</p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-card">
            <p className="text-2xl font-semibold">240+</p>
            <p className="mt-2 text-sm text-ink/60">Distribution centers</p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-card">
            <p className="text-2xl font-semibold">9.6M</p>
            <p className="mt-2 text-sm text-ink/60">Annual orders</p>
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-ink/10 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-ink/60">
          <p>&copy; 2026 WMC products. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
