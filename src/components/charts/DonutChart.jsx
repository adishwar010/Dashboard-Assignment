import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#22C55E', '#60A5FA', '#F59E0B', '#A78BFA', '#94A3B8'];

export default function DonutChart({ data, title = 'Total Sales' }) {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold title">{title}</h3>
      </div>

      <div className="h-56">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={50}
              outerRadius={80}
              strokeWidth={2}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: 'rgba(17,17,20,0.9)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'white',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-text-muted">
        {data.map((d) => (
          <li key={d.name} className="flex justify-between">
            <span>{d.name}</span>
            <span>${d.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
