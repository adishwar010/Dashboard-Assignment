import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

export default function BarCompare({ data, title = 'Projections vs Actuals' }) {
  return (
    <div className="relative w-full h-80">
      <div className="absolute left-4 right-4 top-0 flex items-center justify-between py-3 pointer-events-none">
        <h3 className="text-lg font-semibold title">{title}</h3>
      </div>

      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 72, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid stroke="currentColor" opacity={0.08} />
          {/* Use 'name' if your mock uses that; change to 'label' only if your data keys use label */}
          <XAxis
            dataKey="name"
            stroke="currentColor"
            tick={{ fill: 'currentColor', opacity: 0.6 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis stroke="currentColor" tick={{ fill: 'currentColor', opacity: 0.6 }} />
          <Tooltip
            contentStyle={{
              background: 'rgba(17,17,20,0.9)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'white',
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#a5b4fc" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
