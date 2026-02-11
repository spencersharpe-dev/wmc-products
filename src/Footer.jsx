import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
            Concrete & waterproofing building envelope specialist
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
            <li><Link to="/vendors" className="hover:text-white transition">Vendors</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/locations" className="hover:text-white transition">Locations</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Get in touch
          </p>
          <p className="mt-4 text-sm text-white/70">hello@wmcproducts.com</p>
          <Link to="/partner" className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink hover:bg-white/90 transition">
            Contact sales
          </Link>
        </div>
      </div>
    </footer>
  );
}
