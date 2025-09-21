import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function LineAreaChart({ data, legend }) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <h3 className="text-lg font-semibold title">Revenue</h3>
        {legend && (
          <div className="text-xs muted flex flex-wrap gap-x-4 gap-y-1">
            <span>
              • Current Week{' '}
              <span className="title font-semibold">
                ${legend.current.toLocaleString()}
              </span>
            </span>
            <span>
              • Previous Week{' '}
              <span className="title font-semibold">
                ${legend.previous.toLocaleString()}
              </span>
            </span>
          </div>
        )}
      </div>

      <div className="h-64 sm:h-80">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="currentColor" opacity={0.08} />
            <XAxis
              dataKey="name"
              stroke="currentColor"
              tick={{ fill: 'currentColor', opacity: 0.6 }}
            />
            <YAxis stroke="currentColor" tick={{ fill: 'currentColor', opacity: 0.6 }} />
            <Tooltip
              contentStyle={{
                background: 'rgba(17,17,20,0.9)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'white',
              }}
            />
            <Area
              type="monotone"
              dataKey="current"
              stroke="#8b5cf6"
              fill="url(#g1)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="previous"
              stroke="#60a5fa"
              fill="url(#g2)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
