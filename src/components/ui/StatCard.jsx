import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function StatCard({
  title,
  value,
  delta,
  icon,
  to,
  onClick,
  className = '',
}) {
  const Wrapper = to ? Link : 'div';
  const wrapperProps = to ? { to } : { onClick };

  return (
    <Wrapper
      {...wrapperProps}
      className={`card p-5 text-left hover:shadow-md transition cursor-pointer focus-ring ${className}`}
      aria-label={to ? `${title} – open details` : title}
      tabIndex={0}
      role={to ? 'link' : 'button'}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm text-gray-600 dark:text-text-muted">{title}</p>
        {icon ? <Icon name={icon} className="w-5 h-5 opacity-70" /> : null}
      </div>

      <div className="mt-3 text-3xl font-semibold">{value}</div>

      {typeof delta === 'string' && delta.length > 0 ? (
        <div
          className={`mt-2 text-sm ${
            delta.trim().startsWith('-') ? 'text-red-500' : 'text-emerald-500'
          }`}
        >
          {delta}
        </div>
      ) : null}
    </Wrapper>
  );
}
