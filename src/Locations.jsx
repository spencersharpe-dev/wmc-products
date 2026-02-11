import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const navLinks = ["Home", "Vendors", "Products", "Locations", "About"];

const locationsData = [
  {
    id: 1,
    name: "Southern California",
    address: "1518 North Endeavor Lane, Unit A",
    city: "Anaheim, CA 92801",
    phone: "(714) 923-1027",
    description: "Headquarters - Serving all of Southern, Central, and Northern California",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=1518+North+Endeavor+Lane+Unit+A+Anaheim+CA+92801"
  },
  {
    id: 2,
    name: "Location 2",
    address: "Address Line 1",
    city: "City, State ZIP",
    phone: "(000) 000-0000",
    description: "Description for location 2",
    mapsUrl: ""
  },
  {
    id: 3,
    name: "Location 3",
    address: "Address Line 1",
    city: "City, State ZIP",
    phone: "(000) 000-0000",
    description: "Description for location 3",
    mapsUrl: ""
  },
  {
    id: 4,
    name: "Location 4",
    address: "Address Line 1",
    city: "City, State ZIP",
    phone: "(000) 000-0000",
    description: "Description for location 4",
    mapsUrl: ""
  }
];

export default function Locations() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-mist text-ink">
      {/* Navigation - matches other pages */}
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

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-ink">
            Our Locations
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink/70">
            Serving California with quality waterproofing solutions
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {locationsData.map((location) => (
            <div
              key={location.id}
              className="rounded-2xl border border-ink/10 bg-white p-6 md:p-8 shadow-card hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">{location.name}</h3>
              <p className="text-ink/70 mb-4">{location.description}</p>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-ink/80">Address:</p>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-ocean hover:text-ocean/80 transition"
                >
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </a>
                <a
                  href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-block text-ocean hover:text-ocean/80 font-medium transition mt-2"
                >
                  {location.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">Need Help Finding Us?</h2>
          <p className="text-base md:text-lg text-ink/70 mb-6 max-w-2xl mx-auto">
            Contact us today and our team will help you find the nearest location to serve your waterproofing needs.
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
