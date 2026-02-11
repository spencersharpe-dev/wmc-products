import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const navLinks = ["Home", "Vendors", "Locations", "About"];

export default function About() {
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
            <span className="text-ink/70 font-medium">Have any questions?</span>{' '}
            <a href="tel:714-923-1027" className="text-ocean hover:text-ocean/80 transition font-medium">
              (714)-923-1027
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

      <main className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-ink">
            About WMC products
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink/70 max-w-3xl mx-auto">
            Protecting structures from the ground up with proven waterproofing and concrete protection solutions.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Mission Section */}
          <div className="rounded-2xl md:rounded-3xl border border-ink/10 bg-white p-6 md:p-8 lg:p-12 shadow-card">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">Our Mission</h2>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              At WMC products, our mission is to revolutionize the construction industry by creating
              seamless connections between contractors, consultants, and architects. We believe that
              every project deserves access to reliable materials, transparent pricing, and efficient
              logistics. Through our innovative platform, we're eliminating delays, reducing waste,
              and empowering teams to focus on what they do best—building the future.
            </p>
          </div>

          {/* Story Section */}
          <div className="rounded-2xl md:rounded-3xl border border-ink/10 bg-white p-6 md:p-8 lg:p-12 shadow-card">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">Our Story</h2>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              Water Mitigation Concepts is the leader in California, Arizona and Nevada for Koster American, RM Lucas Co, AmeriPolish Coatings, Neptune Coatings, American Standard Coatings, Evonik Industries and Surface Engineered Technologies. The company's expertise in water vapor mitigation products, injection grouts, self-leveling, below grade, between slab waterproofing, urethane pedestrian and traffic decking coatings and silicone roofing systems is unsurpassed. The WMC team of professionals is dedicated to quality service with the upmost integrity. With over 40 years of experience in the industry, WMC understands the needs and concerns of any individual working on both small and large scaled projects.
            </p>
          </div>

          {/* Values Section */}
          <div className="rounded-2xl md:rounded-3xl border border-ink/10 bg-white p-6 md:p-8 lg:p-12 shadow-card">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-6">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">Reliability</h3>
                <p className="text-ink/70">
                  We understand that construction timelines are critical. Our 99.2% on-time delivery
                  rate reflects our commitment to keeping projects on schedule.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">Transparency</h3>
                <p className="text-ink/70">
                  No hidden fees, no surprises. We provide clear pricing, real-time tracking, and
                  open communication at every step.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">Innovation</h3>
                <p className="text-ink/70">
                  We remain committed to delivering advanced waterproofing and restoration solutions that protect structures for the long term.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink mb-2">Partnership</h3>
                <p className="text-ink/70">
                  Your success is our success. We work closely with our partners to understand their
                  needs and deliver tailored solutions.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">Ready to Join Us?</h2>
          <p className="text-base md:text-lg text-ink/70 mb-6 max-w-2xl mx-auto">
            Discover how WMC products can streamline your construction supply chain and keep your
            projects moving forward.
          </p>
          <Link
            to="/partner"
            className="inline-block rounded-full bg-ocean px-8 py-3 text-sm md:text-base font-semibold text-white shadow-soft transition hover:bg-ocean/90"
          >
            Contact Us
          </Link>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
