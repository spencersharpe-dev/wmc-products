import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function AdminHome() {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-mist">
      {/* Header */}
      <header className="bg-white border-b border-ink/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/admin">
              <img src="/logo_clean_magic (1).png" alt="WMC" className="h-10" />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/admin/submissions"
                className="text-sm font-medium text-ink/70 hover:text-ink transition"
              >
                Form Submissions
              </Link>
            </nav>
          </div>
          <button
            onClick={() => signOut()}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium hover:bg-mist transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className="md:hidden bg-white border-b border-ink/10 px-6 py-3">
        <Link
          to="/admin/submissions"
          className="text-sm font-medium text-ink/70 hover:text-ink"
        >
          Form Submissions
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="/logo_clean_magic (1).png"
            alt="WMC Products Logo"
            className="h-32 md:h-40 mb-8"
          />
          <h1 className="text-3xl md:text-4xl font-semibold text-ink mb-4">
            Welcome to WMC Products
          </h1>
          <p className="text-ink/60 text-lg mb-8">
            Admin Dashboard
          </p>
          <Link
            to="/admin/submissions"
            className="rounded-full bg-ocean px-8 py-3 text-sm font-semibold text-white shadow-soft hover:bg-ocean/90 transition"
          >
            View Form Submissions
          </Link>
        </div>
      </main>
    </div>
  );
}
