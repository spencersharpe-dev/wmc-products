import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = ["Platform", "Industries", "Network", "Products", "About"];

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
                to={link === "About" ? "/about" : link === "Products" ? "/products" : "#"}
                className="text-ink/70 transition hover:text-ink"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-2 md:gap-3">
            <Link to="/partner" className="rounded-full bg-ink px-4 md:px-5 py-2 text-sm md:text-base font-semibold text-white shadow-soft hover:bg-ink/90 transition">
              Contact Us
            </Link>
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
                  to={link === "About" ? "/about" : link === "Products" ? "/products" : "#"}
                  className="block w-full text-left px-4 py-3 text-ink/70 hover:text-ink hover:bg-ink/5 rounded-lg transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
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
            Building the future of construction supply chains, one jobsite at a time.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Mission Section */}
          <div className="rounded-2xl md:rounded-3xl border border-ink/10 bg-white p-6 md:p-8 lg:p-12 shadow-card">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">Our Mission</h2>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              At WMC products, our mission is to revolutionize the construction industry by creating
              seamless connections between contractors, distributors, and suppliers. We believe that
              every project deserves access to reliable materials, transparent pricing, and efficient
              logistics. Through our innovative platform, we're eliminating delays, reducing waste,
              and empowering teams to focus on what they do best—building the future.
            </p>
          </div>

          {/* Story Section */}
          <div className="rounded-2xl md:rounded-3xl border border-ink/10 bg-white p-6 md:p-8 lg:p-12 shadow-card">
            <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">Our Story</h2>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed mb-4">
              Founded in 2018, WMC products began when three construction veterans recognized a
              critical gap in the industry: the lack of a centralized, efficient system for sourcing
              and delivering construction materials. After years of experiencing firsthand the
              frustrations of delayed shipments, inconsistent quality, and unclear communication,
              they set out to build a better solution.
            </p>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              Today, we serve over 38,000 partners across North America, processing 9.6 million
              orders annually through our network of 240+ distribution centers. Our technology-driven
              approach combines real-time inventory tracking, predictive analytics, and streamlined
              logistics to ensure materials arrive exactly when and where they're needed.
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
                  We continuously invest in technology that makes sourcing and logistics smarter,
                  faster, and more sustainable.
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

          {/* Impact Section */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-ink/10 bg-gradient-to-br from-ocean/10 to-ocean/5 p-6 text-center shadow-card">
              <p className="text-3xl md:text-4xl font-semibold text-ink">$2.4B</p>
              <p className="mt-2 text-sm md:text-base text-ink/60">Annual materials processed</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-gradient-to-br from-ocean/10 to-ocean/5 p-6 text-center shadow-card">
              <p className="text-3xl md:text-4xl font-semibold text-ink">99.2%</p>
              <p className="mt-2 text-sm md:text-base text-ink/60">On-time delivery rate</p>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-gradient-to-br from-ocean/10 to-ocean/5 p-6 text-center shadow-card">
              <p className="text-3xl md:text-4xl font-semibold text-ink">850+</p>
              <p className="mt-2 text-sm md:text-base text-ink/60">Team members nationwide</p>
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

      <footer className="mt-16 border-t border-ink/10 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-ink/60">
          <p>&copy; 2026 WMC products. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
