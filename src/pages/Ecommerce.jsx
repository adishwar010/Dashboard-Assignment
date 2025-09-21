import StatCard from '../components/ui/StatCard';
import LineAreaChart from '../components/charts/LineAreaChart';
import BarCompare from '../components/charts/BarCompare';
import DonutChart from '../components/charts/DonutChart';
import DataTable from '../components/table/DataTable';
import { revSeries, bars, sales, orders } from '../data/mock';

export default function Dashboard() {
  return (
    <div className="p-4 lg:p-6 space-y-6 min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Revenue" value="$58,211" delta="+12%" icon="DollarSign" />
        <StatCard
          title="Orders"
          value="1,245"
          delta="+8%"
          icon="ShoppingCart"
          to="/orders"
        />
        <StatCard title="Customers" value="867" delta="+5%" icon="Users2" />
        <StatCard
          title="Refunds"
          value="36"
          delta="-2%"
          icon="RotateCcw"
          deltaTone="danger"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start auto-rows-min min-w-0">
        <div className="lg:col-span-2 card p-4 min-w-0 overflow-hidden">
          <LineAreaChart data={revSeries} legend={{ current: 58211, previous: 68768 }} />
        </div>
        <div className="card p-4 min-w-0">
          <BarCompare data={bars} />
        </div>
      </div>

      {/* IMPORTANT: min-w-0 on the column that holds the table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start auto-rows-min min-w-0">
        <div className="lg:col-span-2 min-w-0">
          <div className="min-w-0 max-w-full">
            <DataTable rows={orders} />
          </div>
        </div>

        <div className="card p-4 self-start min-w-0">
          <DonutChart data={sales} />
        </div>
      </div>
    </div>
  );
}
