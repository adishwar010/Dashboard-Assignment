export default function Badge({ tone = 'default', children }) {
  const map = {
    default: 'bg-white/5 text-text',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
    info: 'bg-brand/10 text-brand',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${map[tone]}`}>
      {children}
    </span>
  );
}
