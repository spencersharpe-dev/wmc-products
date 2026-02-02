import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = ["Platform", "Industries", "Vendors", "Products", "About"];

const vendorsData = [
  {
    id: 1,
    name: "BuildPro Supply Co.",
    logo: "https://via.placeholder.com/200x200/2c3e50/ffffff?text=BuildPro"
  },
  {
    id: 2,
    name: "Industrial Materials Group",
    logo: "https://via.placeholder.com/200x200/34495e/ffffff?text=IMG"
  },
  {
    id: 3,
    name: "SafetyFirst Equipment",
    logo: "https://via.placeholder.com/200x200/27ae60/ffffff?text=SafetyFirst"
  },
  {
    id: 4,
    name: "ProTool Manufacturing",
    logo: "https://via.placeholder.com/200x200/e74c3c/ffffff?text=ProTool"
  },
  {
    id: 5,
    name: "Concrete Solutions Inc",
    logo: "https://via.placeholder.com/200x200/3498db/ffffff?text=Concrete"
  },
  {
    id: 6,
    name: "PowerDrill Systems",
    logo: "https://via.placeholder.com/200x200/f39c12/ffffff?text=PowerDrill"
  },
  {
    id: 7,
    name: "Apex Construction Supply",
    logo: "https://via.placeholder.com/200x200/9b59b6/ffffff?text=Apex"
  },
  {
    id: 8,
    name: "Steel & Iron Works",
    logo: "https://via.placeholder.com/200x200/1abc9c/ffffff?text=Steel"
  },
  {
    id: 9,
    name: "ElectroPlumb Solutions",
    logo: "https://via.placeholder.com/200x200/e67e22/ffffff?text=ElectroPlumb"
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
                to={link === "About" ? "/about" : link === "Products" ? "/products" : link === "Vendors" ? "/vendors" : "#"}
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
                  to={link === "About" ? "/about" : link === "Products" ? "/products" : link === "Vendors" ? "/vendors" : "#"}
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
          {vendorsData.map((vendor) => (
            <div
              key={vendor.id}
              className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-card hover:shadow-lg transition-shadow"
            >
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-ink">{vendor.name}</h3>
            </div>
          ))}
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
