import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getSubmissions, updateSubmission, deleteSubmission } from '../services/submissionsService';

const STATUS_OPTIONS = [
  { value: 'new', label: 'New', color: 'bg-blue-100 text-blue-800' },
  { value: 'reviewed', label: 'Reviewed', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'contacted', label: 'Contacted', color: 'bg-green-100 text-green-800' },
  { value: 'archived', label: 'Archived', color: 'bg-gray-100 text-gray-800' }
];

export default function SubmissionsList() {
  const { signOut } = useAuth();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  useEffect(() => {
    loadSubmissions();
  }, [filterStatus]);

  const loadSubmissions = async () => {
    try {
      setLoading(true);
      const { submissions } = await getSubmissions({
        status: filterStatus || null
      });
      setSubmissions(submissions);
    } catch (err) {
      setError('Failed to load submissions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateSubmission(id, { status: newStatus });
      setSubmissions(prev =>
        prev.map(s => s.id === id ? { ...s, status: newStatus } : s)
      );
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return;
    try {
      await deleteSubmission(id);
      setSubmissions(prev => prev.filter(s => s.id !== id));
      setSelectedSubmission(null);
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const getStatusStyle = (status) => {
    return STATUS_OPTIONS.find(s => s.value === status)?.color || 'bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-mist">
      {/* Header */}
      <header className="bg-white border-b border-ink/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/nav-bar-image.jpg" alt="WMC" className="h-10" />
            </Link>
            <span className="text-lg font-semibold text-ink">Admin Dashboard</span>
          </div>
          <button
            onClick={() => signOut()}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium hover:bg-mist transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-ink">Form Submissions</h1>
          <div className="flex items-center gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-xl border border-ink/20 bg-white px-4 py-2 text-sm focus:border-ocean focus:outline-none"
            >
              <option value="">All Status</option>
              {STATUS_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <button
              onClick={loadSubmissions}
              className="rounded-xl border border-ink/20 px-4 py-2 text-sm hover:bg-white transition"
            >
              Refresh
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin h-8 w-8 border-4 border-ocean border-t-transparent rounded-full" />
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-ink/10">
            <p className="text-ink/60">No submissions found</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-ink/10 overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-mist border-b border-ink/10">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink">Date</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink">Name</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink">Email</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink">Company</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {submissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-mist/50 transition">
                      <td className="px-6 py-4 text-sm text-ink/70">
                        {formatDate(sub.created_at)}
                      </td>
                      <td className="px-6 py-4 text-sm text-ink font-medium">
                        {sub.first_name} {sub.last_name}
                      </td>
                      <td className="px-6 py-4 text-sm text-ink/70">
                        <a href={`mailto:${sub.email}`} className="text-ocean hover:underline">
                          {sub.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-ink/70">
                        {sub.company || '-'}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={sub.status}
                          onChange={(e) => handleStatusChange(sub.id, e.target.value)}
                          className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(sub.status)} border-0 cursor-pointer`}
                        >
                          {STATUS_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedSubmission(sub)}
                            className="text-ocean hover:text-ocean/80 text-sm font-medium"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(sub.id)}
                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Detail Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-semibold text-ink">Submission Details</h2>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-ink/60 hover:text-ink text-2xl leading-none"
                >
                  &times;
                </button>
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-ink/60">Date</dt>
                  <dd className="mt-1 text-ink">{formatDate(selectedSubmission.created_at)}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink/60">Name</dt>
                  <dd className="mt-1 text-ink">{selectedSubmission.first_name} {selectedSubmission.last_name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink/60">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${selectedSubmission.email}`} className="text-ocean hover:underline">
                      {selectedSubmission.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink/60">Phone</dt>
                  <dd className="mt-1 text-ink">{selectedSubmission.phone || '-'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink/60">Company</dt>
                  <dd className="mt-1 text-ink">{selectedSubmission.company || '-'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink/60">Company Type</dt>
                  <dd className="mt-1 text-ink capitalize">{selectedSubmission.company_type || '-'}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink/60">Message</dt>
                  <dd className="mt-1 text-ink whitespace-pre-wrap bg-mist rounded-xl p-4">
                    {selectedSubmission.message}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="rounded-full border border-ink/20 px-6 py-2 text-sm font-medium hover:bg-mist transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
