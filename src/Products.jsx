import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const navLinks = ["Home", "Vendors", "Products", "Locations", "About"];

const productsData = [
  {
    id: 1,
    name: "View all Koster products",
    description: "Take a look at all Koster has to offer",
    image: "/Koster_product_image.png",
    url: "https://www.kosterusa.com/us_en/m-137/products+a+to+z.html"
  },
  {
    id: 2,
    name: "Professional Safety Helmet",
    description: "Impact-resistant hard hat with adjustable suspension system",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Safety+Helmet"
  },
  {
    id: 3,
    name: "High-Visibility Safety Vest",
    description: "Reflective vest meeting ANSI standards for jobsite visibility",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Safety+Vest"
  },
  {
    id: 4,
    name: "Cordless Power Drill",
    description: "20V lithium-ion drill with variable speed and LED work light",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Power+Drill"
  },
  {
    id: 5,
    name: "Circular Saw Kit",
    description: "7.25-inch blade saw with laser guide and dust blower",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Circular+Saw"
  },
  {
    id: 6,
    name: "Professional Tool Belt",
    description: "Heavy-duty leather tool belt with reinforced stitching and multiple pockets",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Tool+Belt"
  },
  {
    id: 7,
    name: "Precision Level Set",
    description: "3-piece torpedo, box, and magnetic level set for accurate measurements",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Level+Set"
  },
  {
    id: 8,
    name: "Adjustable Wrench Set",
    description: "Chrome-plated steel wrenches in 6, 8, and 10-inch sizes",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Wrench+Set"
  },
  {
    id: 9,
    name: "Professional Hammer",
    description: "16oz claw hammer with fiberglass handle and shock-absorbing grip",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Hammer"
  },
  {
    id: 10,
    name: "Extension Ladder",
    description: "24-foot aluminum ladder with 300-pound load capacity",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Ladder"
  },
  {
    id: 11,
    name: "Utility Cart",
    description: "Heavy-duty steel cart with 500-pound capacity and pneumatic wheels",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Utility+Cart"
  },
  {
    id: 12,
    name: "Paint Sprayer Pro",
    description: "Airless paint sprayer with adjustable pressure for interior and exterior use",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Paint+Sprayer"
  },
  {
    id: 13,
    name: "Jobsite Radio",
    description: "Bluetooth-enabled radio with weather-resistant housing and AC/DC power",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Jobsite+Radio"
  },
  {
    id: 14,
    name: "Concrete Mixer",
    description: "Portable electric mixer with 2.2 cubic feet capacity and steel drum",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Mixer"
  },
  {
    id: 15,
    name: "Measuring Tape 25ft",
    description: "Heavy-duty tape measure with magnetic hook and belt clip",
    image: "https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Tape+Measure"
  }
];

export default function Products() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const productsPerPage = 9;
  const totalPages = Math.ceil(productsData.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

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

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase leading-tight text-ink">
            Our Products
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink/70">
            High quality materials for your professional needs
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product) => {
            const CardContent = (
              <>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-xl mb-4 bg-ink/5"
                />
                <h3 className="text-xl font-semibold text-ink mb-2">{product.name}</h3>
                <p className="text-sm text-ink/70">{product.description}</p>
              </>
            );

            return product.url ? (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card hover:shadow-lg transition-shadow cursor-pointer"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={product.id}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card hover:shadow-lg transition-shadow"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full border border-ink/20 text-sm font-semibold transition ${
              currentPage === 1
                ? 'text-ink/30 cursor-not-allowed'
                : 'text-ink hover:bg-ink/5'
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition ${
                currentPage === i + 1
                  ? 'bg-ink text-white'
                  : 'text-ink hover:bg-ink/5 border border-ink/20'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full border border-ink/20 text-sm font-semibold transition ${
              currentPage === totalPages
                ? 'text-ink/30 cursor-not-allowed'
                : 'text-ink hover:bg-ink/5'
            }`}
          >
            Next
          </button>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
