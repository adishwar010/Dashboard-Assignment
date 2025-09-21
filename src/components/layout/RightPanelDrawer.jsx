import { useEffect } from 'react';
import RightPanel from './RightPanel';

export default function RightPanelDrawer({ open, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-[22rem] bg-white dark:bg-bg-elevated border-l border-gray-200 dark:border-white/5 p-4 overflow-y-auto transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold title">Notifications</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 focus-ring"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <RightPanel />
      </aside>
    </div>
  );
}
