import { useMemo, useState } from 'react';
import Icon from '../ui/Icon';

const STATUS_TW = {
  Completed: 'bg-emerald-600/15 text-emerald-400 ring-1 ring-emerald-500/30',
  Pending: 'bg-amber-600/15 text-amber-400 ring-1 ring-amber-500/30',
  Cancelled: 'bg-gray-500/15 text-gray-200 ring-1 ring-white/10',
  Rejected: 'bg-rose-600/15 text-rose-400 ring-1 ring-rose-500/30',
  Approved: 'bg-sky-600/15 text-sky-400 ring-1 ring-sky-500/30',
};

function SortIcon({ dir }) {
  if (!dir) return <Icon name="ChevronsUpDown" className="w-4 h-4 opacity-60" />;
  return dir === 'asc' ? (
    <Icon name="ChevronUp" className="w-4 h-4" />
  ) : (
    <Icon name="ChevronDown" className="w-4 h-4" />
  );
}

function Th({ children, onClick, sorted, dir, className = '' }) {
  return (
    <th
      onClick={onClick}
      className={`px-4 py-3 select-none whitespace-nowrap font-medium text-gray-600 dark:text-text-muted ${
        onClick ? 'cursor-pointer hover:text-gray-900 dark:hover:text-white' : ''
      } ${className}`}
    >
      <span className="inline-flex items-center gap-1">
        {children}
        {onClick && <SortIcon dir={sorted ? dir : undefined} />}
      </span>
    </th>
  );
}

function getVal(row, key) {
  if (!key.includes('.')) return row[key];
  return key.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), row);
}

export default function DataTable({ rows = [], pageSize = 6, className = '' }) {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState('date');
  const [sortDir, setSortDir] = useState('desc');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    const base =
      q.length === 0
        ? rows
        : rows.filter((r) =>
            [
              r.orderId,
              r.user?.name,
              r.user?.role,
              r.project?.title ?? r.project,
              r.project?.subtitle,
              r.address?.line1 ?? r.address,
              r.address?.line2,
              r.status,
              r.date,
            ]
              .filter(Boolean)
              .some((v) => String(v).toLowerCase().includes(q)),
          );

    const sorted = [...base].sort((a, b) => {
      const va = getVal(a, sortKey);
      const vb = getVal(b, sortKey);
      if (va === vb) return 0;
      if (sortKey === 'date') {
        return sortDir === 'asc'
          ? new Date(va) - new Date(vb)
          : new Date(vb) - new Date(va);
      }
      return sortDir === 'asc'
        ? String(va ?? '').localeCompare(String(vb ?? ''))
        : String(vb ?? '').localeCompare(String(va ?? ''));
    });
    return sorted;
  }, [rows, query, sortKey, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  function toggleSort(key) {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setSortDir('asc');
    }
    setPage(1);
  }

  const renderProject = (p) => {
    if (!p) return null;
    if (typeof p === 'string') return <p className="title break-words">{p}</p>;
    return (
      <>
        <p className="title break-words">{p.title}</p>
        {p.subtitle && <p className="muted text-xs break-words">{p.subtitle}</p>}
      </>
    );
  };

  const renderAddress = (a) => {
    if (!a) return null;
    if (typeof a === 'string') return <p className="muted break-words">{a}</p>;
    return (
      <>
        {a.line1 && <p className="muted break-words">{a.line1}</p>}
        {a.line2 && <p className="muted text-xs break-words">{a.line2}</p>}
      </>
    );
  };

  return (
    <div className={`card p-4 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between mb-4">
        <h3 className="text-lg font-semibold title">Order List</h3>
        <div className="relative w-full sm:w-64">
          <Icon
            name="Search"
            className="w-4 h-4 absolute left-2 top-2.5 text-gray-400 dark:text-text-muted"
          />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search"
            className="w-full bg-gray-100 border border-gray-200 text-gray-900 placeholder:text-gray-400
                       dark:bg-bg-elevated dark:border-white/5 dark:text-text dark:placeholder:text-text-muted
                       rounded-lg pl-8 pr-3 py-2 text-sm focus-ring"
            aria-label="Search orders"
          />
        </div>
      </div>

      {/* mobile cards */}
      <div className="md:hidden space-y-3">
        {pageRows.map((r) => (
          <div
            key={r.orderId}
            className="rounded-lg border border-gray-200 dark:border-white/5 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="title font-semibold leading-5">{r.user?.name}</p>
                <p className="muted text-xs leading-4">{r.user?.role}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${STATUS_TW[r.status] || ''}`}
              >
                {r.status}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <div className="muted">Order</div>
              <div className="title text-right">{r.orderId}</div>
              <div className="muted">Project</div>
              <div className="text-right">
                {typeof r.project === 'string' ? r.project : r.project?.title}
              </div>
              <div className="muted">Address</div>
              <div className="text-right truncate">
                {typeof r.address === 'string' ? r.address : r.address?.line1}
              </div>
              <div className="muted">Date</div>
              <div className="text-right">{r.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* desktop table */}
      <div className="hidden md:block rounded-xl border border-gray-200 dark:border-white/5 overflow-hidden">
        <table className="w-full table-fixed text-sm">
          {/* widened Date & Status to prevent collision */}
          <colgroup>
            <col className="w-[12%]" />
            <col className="w-[22%]" />
            <col className="w-[20%]" />
            <col className="w-[20%]" />
            <col className="w-[12%]" /> {/* Date wider */}
            <col className="w-[12%]" /> {/* Status wider */}
            <col className="w-[2%]" />
          </colgroup>

          <thead className="bg-gray-50/60 dark:bg-white/5">
            <tr className="text-left">
              <Th
                onClick={() => toggleSort('orderId')}
                sorted={sortKey === 'orderId'}
                dir={sortDir}
              >
                Order ID
              </Th>
              <Th
                onClick={() => toggleSort('user.name')}
                sorted={sortKey === 'user.name'}
                dir={sortDir}
              >
                User
              </Th>
              <Th
                onClick={() => toggleSort('project.title')}
                sorted={sortKey === 'project.title'}
                dir={sortDir}
                className="hidden lg:table-cell"
              >
                Project
              </Th>
              <Th
                onClick={() => toggleSort('address.line1')}
                sorted={sortKey === 'address.line1'}
                dir={sortDir}
                className="hidden lg:table-cell"
              >
                Address
              </Th>
              <Th
                onClick={() => toggleSort('date')}
                sorted={sortKey === 'date'}
                dir={sortDir}
                className="text-right pr-8"
              >
                Date
              </Th>
              <Th
                onClick={() => toggleSort('status')}
                sorted={sortKey === 'status'}
                dir={sortDir}
                className="text-right pl-4"
              >
                Status
              </Th>
              <th className="px-4 py-3" />
            </tr>
          </thead>

          <tbody>
            {pageRows.map((r) => (
              <tr
                key={r.orderId}
                className="border-t border-gray-200/70 dark:border-white/5 hover:bg-gray-50/80 dark:hover:bg-white/5 transition"
              >
                <td className="px-4 py-4 title font-medium align-top whitespace-nowrap">
                  {r.orderId}
                </td>

                <td className="px-4 py-4 align-top">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-white/10 bg-white/10 shrink-0 mt-0.5">
                      {r.user?.avatar ? (
                        <img
                          src={r.user.avatar}
                          alt={r.user.name}
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <p className="title font-semibold leading-5 break-words">
                        {r.user?.name}
                      </p>
                      <p className="muted text-xs leading-4 break-words">
                        {r.user?.role}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 align-top whitespace-normal break-words hidden lg:table-cell">
                  {renderProject(r.project)}
                </td>
                <td className="px-4 py-4 align-top whitespace-normal break-words hidden lg:table-cell">
                  {renderAddress(r.address)}
                </td>

                <td className="px-5 py-4 align-top muted whitespace-nowrap text-right">
                  {r.date}
                </td>

                <td className="px-5 py-4 align-top whitespace-nowrap text-left">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_TW[r.status] || ''}`}
                  >
                    {r.status}
                  </span>
                </td>

                <td className="px-4 py-4 align-top text-right">
                  <button
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
                    aria-label="More"
                  >
                    <Icon name="MoreHorizontal" />
                  </button>
                </td>
              </tr>
            ))}

            {pageRows.length === 0 && (
              <tr>
                <td className="px-4 py-10 text-center muted" colSpan={7}>
                  No results
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          className="h-9 w-9 grid place-items-center rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 disabled:opacity-40"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={current === 1}
          aria-label="Prev"
        >
          <Icon name="ChevronLeft" />
        </button>
        <span className="h-9 min-w-9 grid place-items-center rounded-md bg-gray-900 text-white dark:bg-white/10 px-3 text-sm">
          {current}
        </span>
        <button
          className="h-9 w-9 grid place-items-center rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 disabled:opacity-40"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={current === totalPages}
          aria-label="Next"
        >
          <Icon name="ChevronRight" />
        </button>
      </div>
    </div>
  );
}
