import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = ["Platform", "Vendors", "Products", "Locations", "About"];

const vendorsData = [
  {
    id: 1,
    name: "Koster",
    logo: "/Koster_product_image.png",
    url: "https://www.kosterusa.com/us_en/"
  },
  {
    id: 2,
    name: "Lucas",
    logo: "/lucas_vendor_image.png",
    url: "https://rmlucas.com/"
  },
  {
    id: 3,
    name: "Ameripolish",
    logo: "/ameripolish_vendor_image_new.JPG",
    url: "https://ameripolish.com/"
  },
  {
    id: 4,
    name: "Evonik",
    logo: "/evonik_vendor_image.jpg",
    url: "https://www.evonik.com/en.html"
  },
  {
    id: 5,
    name: "ASC",
    logo: "/asc_vendor_image.png",
    url: "https://asc-bm.com/"
  },
  {
    id: 6,
    name: "SET",
    logo: "/set_vendor_image.jpg",
    url: "https://setmaterials.com/"
  },
  {
    id: 7,
    name: "Wetsuit",
    logo: "/wetsuit_vendor_image.jpg"
  },
  {
    id: 8,
    name: "Neptune",
    logo: "/neptune_vendor_image.jpg",
    url: "https://www.neptunecoatings.com/"
  },
  {
    id: 9,
    name: "Manta",
    logo: "/manta_vendor_image.png",
    url: "https://mantaroof.com/"
  },
  {
    id: 10,
    name: "Precision Measuring Co",
    logo: "https://via.placeholder.com/200x200/16a085/ffffff?text=Precision"
  },
  {
    id: 11,
    name: "Heavy Equipment Depot",
    logo: "https://via.placeholder.com/200x200/c0392b/ffffff?text=Heavy"
  },
  {
    id: 12,
    name: "Masonry Masters",
    logo: "https://via.placeholder.com/200x200/8e44ad/ffffff?text=Masonry"
  },
  {
    id: 13,
    name: "Ladder & Scaffold Systems",
    logo: "https://via.placeholder.com/200x200/2980b9/ffffff?text=Ladder"
  },
  {
    id: 14,
    name: "Paint & Coating Specialists",
    logo: "https://via.placeholder.com/200x200/d35400/ffffff?text=Paint"
  },
  {
    id: 15,
    name: "Industrial Hardware Hub",
    logo: "https://via.placeholder.com/200x200/7f8c8d/ffffff?text=Hardware"
  },
  {
    id: 16,
    name: "BuildRight Distributors",
    logo: "https://via.placeholder.com/200x200/2c3e50/ffffff?text=BuildRight"
  }
];

export default function Vendors() {
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
                to={link === "About" ? "/about" : link === "Products" ? "/products" : link === "Vendors" ? "/vendors" : link === "Locations" ? "/locations" : "#"}
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
                  to={link === "About" ? "/about" : link === "Products" ? "/products" : link === "Vendors" ? "/vendors" : link === "Locations" ? "/locations" : "#"}
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

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-ink">
            Our Vendors
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink/70">
            Trusted partners in construction supply
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {vendorsData.map((vendor) => {
            const CardContent = (
              <>
                <img
                  src={vendor.logo}
                  alt={vendor.name}
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-ink">{vendor.name}</h3>
              </>
            );

            return vendor.url ? (
              <a
                key={vendor.id}
                href={vendor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-card hover:shadow-lg transition-shadow cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={vendor.id}
                className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-card hover:shadow-lg transition-shadow"
              >
                {CardContent}
              </div>
            );
          })}
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
