import { useEffect, useMemo, useState } from 'react';

const seed = [
  { id: 'n1', title: 'New user registered', time: '2m ago', unread: true },
  {
    id: 'n2',
    title: 'You have a bug that needs attention',
    time: '20m ago',
    unread: true,
  },
  { id: 'n3', title: 'Released a new version', time: '1h ago', unread: false },
  { id: 'n4', title: 'Submitted a bug', time: '3h ago', unread: false },
];

export default function Notifications({ open, onClose }) {
  const [items, setItems] = useState(seed);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const unreadCount = useMemo(() => items.filter((i) => i.unread).length, [items]);

  const markRead = (id) =>
    setItems((xs) => xs.map((x) => (x.id === id ? { ...x, unread: false } : x)));
  const markUnread = (id) =>
    setItems((xs) => xs.map((x) => (x.id === id ? { ...x, unread: true } : x)));
  const dismiss = (id) => setItems((xs) => xs.filter((x) => x.id !== id));
  const markAllRead = () => setItems((xs) => xs.map((x) => ({ ...x, unread: false })));
  const clearAll = () => setItems([]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-96 bg-white text-gray-900 dark:bg-bg dark:text-text
                    border-l border-gray-200 dark:border-white/5 p-4 transition-transform ${
                      open ? 'translate-x-0' : 'translate-x-full'
                    }`}
        role="dialog"
        aria-modal="true"
        aria-label="Notifications"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Notifications</h2>
            {unreadCount > 0 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-blue-600 text-white">
                {unreadCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
            aria-label="Close notifications"
          >
            ✕
          </button>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={markAllRead}
            className="px-3 py-1.5 text-sm rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10"
          >
            Mark all read
          </button>
          <button
            onClick={clearAll}
            className="px-3 py-1.5 text-sm rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10"
          >
            Clear all
          </button>
        </div>

        {items.length === 0 ? (
          <div className="mt-10 text-sm text-gray-600 dark:text-text-muted">
            You’re all caught up 🎉
          </div>
        ) : (
          <ul className="space-y-2">
            {items.map((n) => (
              <li
                key={n.id}
                className={`p-3 rounded-lg border border-gray-200 dark:border-white/5 ${
                  n.unread
                    ? 'bg-blue-50 dark:bg-white/5'
                    : 'bg-gray-50 dark:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{n.title}</p>
                    <p className="text-xs text-gray-500 dark:text-text-muted mt-0.5">
                      {n.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {n.unread ? (
                      <button
                        onClick={() => markRead(n.id)}
                        className="px-2 py-1 text-xs rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        aria-label="Mark as read"
                        title="Mark as read"
                      >
                        Read
                      </button>
                    ) : (
                      <button
                        onClick={() => markUnread(n.id)}
                        className="px-2 py-1 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-100 dark:bg-white/10 dark:border-white/15"
                        aria-label="Mark as unread"
                        title="Mark as unread"
                      >
                        Unread
                      </button>
                    )}
                    <button
                      onClick={() => dismiss(n.id)}
                      className="px-2 py-1 text-xs rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/15"
                      aria-label="Dismiss"
                      title="Dismiss"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
