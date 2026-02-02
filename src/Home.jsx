import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = ["Platform", "Industries", "Vendors", "Products", "About"];

const heroStats = [
  { label: "Distribution centers", value: "240+" },
  { label: "Pro partners", value: "38k" },
  { label: "Annual orders", value: "9.6M" }
];

const solutionCards = [
  {
    title: "Smart procurement",
    body: "Consolidate SKUs, pricing, and service tiers into a single, adaptive workflow.",
    tone: "bg-surf"
  },
  {
    title: "Jobsite intelligence",
    body: "Track spend, delivery windows, and crew preferences with live data feeds.",
    tone: "bg-tide"
  },
  {
    title: "Vendor performance",
    body: "Scorecard suppliers with visibility across fulfillment, quality, and returns.",
    tone: "bg-white"
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

const newsItems = [
  {
    title: "WMC products expands West Coast network",
    date: "January 22, 2026",
    tag: "News"
  },
  {
    title: "How contractors are rethinking inventory",
    date: "January 12, 2026",
    tag: "Insights"
  },
  {
    title: "New digital jobsite toolkit launches",
    date: "December 18, 2025",
    tag: "Release"
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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

      <header className="relative h-screen w-full">

        {/* Full-screen Hero Image */}
        <img
          className="absolute inset-0 h-full w-full object-contain"
          src="/hero-image.jpg"
          alt="Hero image"
        />

        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />


        {/* Stats at bottom */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10">
          <div className="mx-auto grid max-w-4xl grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 px-4 md:px-6 text-center text-white">
            {heroStats.map((stat) => (
              <div key={stat.label} className="backdrop-blur-sm bg-white/10 rounded-xl md:rounded-2xl p-3 md:p-4">
                <p className="text-xl md:text-2xl font-semibold drop-shadow">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/80 drop-shadow">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
              What we solve
            </p>
            <h2 className="mt-4 text-3xl font-semibold">Integrated services for every jobsite.</h2>
          </div>
          <p className="max-w-xl text-ink/60">
            Replace fragmented buying with one connected ecosystem. We help teams source
            smarter, deliver faster, and stay aligned across every phase of the project.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl border border-white/70 p-6 shadow-card ${card.tone}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                <span className="text-lg font-semibold">WMC</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-ink/70">{card.body}</p>
              <button className="mt-6 text-sm font-semibold text-ocean">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
              The WMC Method
            </p>
            <h2 className="mt-4 text-3xl font-semibold">A smarter supply chain stack.</h2>
            <p className="mt-4 text-ink/70">
              Bring data, purchasing, and fulfillment into a single view. We combine
              distribution know-how with intelligent software so teams can focus on
              building, not chasing materials.
            </p>
            <div className="mt-8 space-y-6">
              {advantageItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-pine" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-ink/60">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            {capabilityCards.map((capability) => (
              <div
                key={capability.title}
                className="rounded-3xl border border-ink/10 bg-mist p-6 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                  {capability.badge}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{capability.title}</h3>
                <p className="mt-3 text-ink/60">{capability.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="rounded-3xl bg-gradient-to-br from-ink to-ink/80 p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Field enablement
            </p>
            <h2 className="mt-4 text-3xl font-semibold">A mobile command center.</h2>
            <p className="mt-4 text-white/70">
              Give crews a single app for ordering, approvals, live ETA tracking, and
              onsite documentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">
                App Store
              </button>
              <button className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold">
                Google Play
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-[360px] w-full rounded-3xl object-cover shadow-soft"
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
              alt="Engineer reviewing plans"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-xs shadow-card">
              <p className="font-semibold">Live tracking</p>
              <p className="text-ink/60">Real-time ETAs with crew alerts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surf">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
                Network reach
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Built with the best in the business.</h2>
            </div>
            <button className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold">
              Explore the network
            </button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {["Atlas Supply", "Ironline", "Northbridge", "Crest Industrial", "Summit Steel", "Junction", "Everlow", "ForgeWorks"].map(
              (brand) => (
                <div
                  key={brand}
                  className="rounded-2xl bg-white/70 px-5 py-4 text-center text-sm font-semibold shadow-card"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-card">
            <h3 className="text-2xl font-semibold">Ready to streamline materials?</h3>
            <p className="mt-3 text-ink/70">
              Join our partner network and bring visibility to every phase of the build.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
                Get started
              </button>
              <button className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold">
                Talk to sales
              </button>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-pine to-ocean p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Impact
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Reduce waste. Increase speed.</h3>
            <p className="mt-3 text-white/70">
              Data-driven delivery planning cuts idle time by 24% and improves crew
              productivity.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <p className="text-2xl font-semibold">24%</p>
                <p className="text-sm text-white/70">Less idle time</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">18%</p>
                <p className="text-sm text-white/70">Fewer returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
                Careers
              </p>
              <h2 className="mt-4 text-3xl font-semibold">Build with a team that cares.</h2>
              <p className="mt-3 max-w-xl text-ink/70">
                We are hiring across operations, engineering, and field enablement.
              </p>
            </div>
            <button className="rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white">
              View openings
            </button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { label: "Teams", value: "12" },
              { label: "Locations", value: "28" },
              { label: "Growth", value: "+42%" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-ink/10 bg-mist p-6 text-center shadow-card"
              >
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="text-sm text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
              Latest updates
            </p>
            <h2 className="mt-4 text-3xl font-semibold">News from the network.</h2>
          </div>
          <button className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold">
            Visit newsroom
          </button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                {item.tag}
              </p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm text-ink/60">{item.date}</p>
              <button className="mt-6 text-sm font-semibold text-ocean">Read more →</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-ink text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="rounded-full bg-white px-3 py-1 font-display text-base tracking-widest text-ink">
                WMC
              </span>
              <span>products</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Building the connected infrastructure for modern construction teams.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Platform
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Procurement</li>
              <li>Delivery ops</li>
              <li>Analytics</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Company
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>About</li>
              <li>Leadership</li>
              <li>Newsroom</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Get in touch
            </p>
            <p className="mt-4 text-sm text-white/70">hello@wmcproducts.com</p>
            <button className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink">
              Contact sales
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
