import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const navLinks = ["Home", "Vendors", "Locations", "About"];

const solutionCards = [
  {
    title: "WATERPROOFING",
    body: "High performance waterproofing systems designed for large-scale, high-traffic, or mission critical buildings including Hospitality, Educational, Government, Industrial, Commercial and Residential projects.",
    tone: "bg-surf"
  },
  {
    title: "CONCRETE RESTORATION",
    body: "Protect and restore concrete structures with durable solutions engineered for strength and longevity.",
    tone: "bg-tide"
  },
  {
    title: "ROOF COATINGS",
    body: "High-performance silicone and elastomeric roof coating systems designed to protect, seal, extend and restore aging roofing systems for commercial roofing.",
    tone: "bg-surf"
  },
  {
    title: "INJECTION GROUTS",
    body: "Flowable materials that are pumped (injected) into cracks, voids, joints, or soil to seal, stabilize, waterproof, or strengthen structures.",
    tone: "bg-tide"
  }
];

const advantageItems = [
  {
    title: "Unified catalog",
    body: "Product data, safety sheets, and pricing, curated under one intelligent catalog."
  },
  {
    title: "Predictive fill rate",
    body: "Forecast availability and recommend substitutions before delays happen."
  },
  {
    title: "Mobile-first crews",
    body: "Easy reorder, on-site approvals, and instant proof of delivery."
  }
];

const capabilityCards = [
  {
    title: "Pro-grade fulfillment",
    body: "Regional hubs, cross-docks, and last-mile partners tuned for jobsite timing.",
    badge: "Operations"
  },
  {
    title: "Integrated financing",
    body: "Flexible credit terms, consolidated billing, and pay-by-project options.",
    badge: "Finance"
  },
  {
    title: "Sustainability routing",
    body: "Reduce idle time and emissions with optimized delivery plans.",
    badge: "Impact"
  }
];

const vendorItems = [
  {
    title: "Koster Waterproofing Systems",
    image: "/Koster_product_image.png"
  },
  {
    title: "AmeriPolish",
    image: "/ameripolish_vendor_image_new.JPG"
  },
  {
    title: "ASC Coatings",
    image: "/asc_vendor_image.png"
  },
  {
    title: "Evonik",
    image: "/evonik_vendor_image.jpg"
  },
  {
    title: "RM Lucas",
    image: "/lucas_vendor_image.png"
  },
  {
    title: "Manta",
    image: "/manta_vendor_image.png"
  },
  {
    title: "Neptune Coatings",
    image: "/neptune_vendor_image.jpg"
  },
  {
    title: "SET",
    image: "/set_vendor_image.jpg"
  },
  {
    title: "Wetsuit",
    image: "/wetsuit_vendor_image.jpg"
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const vendorCarouselRef = React.useRef(null);

  const scrollVendors = (direction) => {
    const container = vendorCarouselRef.current;
    if (!container) return;
    const scrollAmount = Math.min(container.clientWidth, 420);
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen bg-mist text-ink">
      {/* Fixed Navigation - only fixed on desktop */}
      <nav className="absolute md:fixed top-0 left-0 right-0 z-50 bg-white border-b border-ink/10 backdrop-blur-sm shadow-sm">
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

      <header className="relative h-screen w-full">

        {/* Full-screen Hero Image */}
        <video
          className="absolute top-16 md:top-20 left-0 right-0 h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] w-full object-cover object-[50%_70%]"
          src="/water-drop-no-mark.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Hero background video"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Hero Text */}
        <div className="absolute top-16 md:top-20 bottom-24 left-0 right-0 flex flex-col items-center justify-center z-10 px-4">
          <img
            src="/logo_clean_magic (1).png"
            alt="WMC Logo"
            className="h-56 md:h-72 lg:h-96 w-auto object-contain mb-4"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg">
            WATER MITIGATION CONCEPTS
          </h1>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-white text-center drop-shadow-md">
            CONCRETE & WATERPROOFING BUILDING ENVELOPE SPECIALIST
          </p>
          <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-bold text-white text-center drop-shadow-md">
            OFFERING WATERPROOFING SOLUTIONS FROM OUR TRUSTED VENDORS
          </p>
        </div>


        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60C80 50 160 55 240 70C320 85 400 100 480 100C560 100 640 90 720 80C800 70 880 70 960 80C1040 90 1120 100 1200 100C1280 100 1360 80 1440 60V150H0Z"
              fill="#f0f4f8"
            />
          </svg>
        </div>
      </header>

      <section className="relative bg-gradient-to-b from-[#f0f4f8] to-mist">
        <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-ink/60">
              What we solve
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Integrated services for every jobsite.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl border border-white/70 p-6 shadow-card ${card.tone}`}
            >
              <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-ink/70">{card.body}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/construction-site-2.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/35" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.2em] text-ink/60">
              About Us
            </p>
            <h2 className="mt-4 text-center text-4xl font-semibold">
              Over 40 Years of Industry Experience
            </h2>
          </div>
          <p className="mt-6 mx-auto max-w-5xl text-center text-4xl font-medium text-ink">
            WMC Products is a leading supplier of waterproofing, concrete restoration, and protective coating systems serving California, Arizona, and Nevada. With over 40 years of industry experience, we provide contractors, consultants, and design professionals with high-performance products engineered to protect structures from water intrusion and long-term deterioration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
              OUR VENDORS
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Our trusted vendors</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/vendors"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-center"
            >
              View our Vendors
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollVendors("left")}
                className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold"
                aria-label="Scroll vendors left"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollVendors("right")}
                className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold"
                aria-label="Scroll vendors right"
              >
                →
              </button>
            </div>
          </div>
        </div>
        <div
          ref={vendorCarouselRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
        >
          {vendorItems.map((item) => (
            <div
              key={item.title}
              className="min-w-[260px] max-w-[260px] md:min-w-[300px] md:max-w-[300px] snap-start rounded-3xl border border-ink/10 bg-white p-6 shadow-card"
            >
              <div className="flex h-40 items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
