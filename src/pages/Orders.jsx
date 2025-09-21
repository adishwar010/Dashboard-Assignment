import DataTable from '../components/table/DataTable';
import { orders } from '../data/mock';

export default function Orders() {
  return (
    <div className="px-4 lg:px-6 py-4">
      <div className="card p-4">
        <DataTable rows={orders} />
      </div>
    </div>
  );
}
