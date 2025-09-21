// KPI cards
export const kpis = [
  { title: 'Revenue', value: '$58,211', delta: '+12%', icon: 'DollarSign' },
  { title: 'Orders', value: '1,245', delta: '+8%', icon: 'ShoppingCart' },
  { title: 'Customers', value: '867', delta: '+5%', icon: 'Users' },
  { title: 'Refunds', value: '36', delta: '-2%', icon: 'RotateCcw' },
];

// Line area chart series
export const revSeries = [
  { name: 'Jan', current: 2400, previous: 4000 },
  { name: 'Feb', current: 2300, previous: 3000 },
  { name: 'Mar', current: 2350, previous: 2100 },
  { name: 'Apr', current: 2000, previous: 2800 },
  { name: 'May', current: 2150, previous: 2000 },
  { name: 'Jun', current: 2450, previous: 2400 },
  { name: 'Jul', current: 2100, previous: 3600 },
];

// Bar chart (Projections vs Actuals)
export const bars = [
  { name: 'Mon', value: 300 },
  { name: 'Tue', value: 220 },
  { name: 'Wed', value: 140 },
  { name: 'Thu', value: 260 },
  { name: 'Fri', value: 180 },
  { name: 'Sat', value: 230 },
  { name: 'Sun', value: 310 },
];

// Donut chart data
export const sales = [
  { name: 'Electronics', value: 4000 },
  { name: 'Home', value: 2000 },
  { name: 'Apparel', value: 3000 },
  { name: 'Sports', value: 2780 },
  { name: 'Books', value: 1890 },
];

// Orders table
export const orders = [
  {
    orderId: 'ORD-1005',
    user: {
      name: 'Ethan Brown',
      role: 'QA Engineer',
      avatar: 'https://i.pravatar.cc/80?img=11',
    },
    project: { title: 'API Integration' },
    address: { line1: '654 Queen St' },
    date: '2025-09-14',
    status: 'Completed',
  },
  {
    orderId: 'ORD-1004',
    user: {
      name: 'Diana Adams',
      role: 'Analyst',
      avatar: 'https://i.pravatar.cc/80?img=12',
    },
    project: { title: 'Dashboard', subtitle: 'Upgrade' },
    address: { line1: '321 King St' },
    date: '2025-09-12',
    status: 'Cancelled',
  },
  {
    orderId: 'ORD-1003',
    user: {
      name: 'Charlie Lee',
      role: 'Designer',
      avatar: 'https://i.pravatar.cc/80?img=13',
    },
    project: { title: 'Mobile App' },
    address: { line1: '789 Broadway' },
    date: '2025-09-09',
    status: 'Completed',
  },
  {
    orderId: 'ORD-1002',
    user: {
      name: 'Bob Smith',
      role: 'Developer',
      avatar: 'https://i.pravatar.cc/80?img=14',
    },
    project: { title: 'Website', subtitle: 'Launch' },
    address: { line1: '456 Market St' },
    date: '2025-09-05',
    status: 'Pending',
  },
  {
    orderId: 'ORD-1001',
    user: {
      name: 'Alice Johnson',
      role: 'Manager',
      avatar: 'https://i.pravatar.cc/80?img=15',
    },
    project: { title: 'CRM Redesign' },
    address: { line1: '123 Main St' },
    date: '2025-09-01',
    status: 'Completed',
  },
];

// Right panel data
export const sideNotifications = [
  { id: 'sn1', title: 'You have a bug that needs attention', time: 'Just now' },
  { id: 'sn2', title: 'New user registered', time: '59 minutes ago' },
  { id: 'sn3', title: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM' },
];

export const sideActivities = [
  { id: 'sa1', title: 'Released a new version', time: '1 hour ago' },
  { id: 'sa2', title: 'Submitted a bug', time: '12 hours ago' },
  { id: 'sa3', title: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
  { id: 'sa4', title: 'Deleted a page in Project X', time: 'Feb 2, 2023' },
];

export const sideContacts = [
  { id: 'c1', name: 'Natali Craig', color: 'bg-sky-400' },
  { id: 'c2', name: 'Drew Cano', color: 'bg-pink-400' },
  { id: 'c3', name: 'Orlando Diggs', color: 'bg-amber-400' },
  { id: 'c4', name: 'Andi Lane', color: 'bg-emerald-400' },
  { id: 'c5', name: 'Kate Morrison', color: 'bg-indigo-400' },
  { id: 'c6', name: 'Koray Okumus', color: 'bg-violet-400' },
];

// Revenue by location (right rail)
export const locationRevenue = [
  { name: 'New York', value: 72000 },
  { name: 'San Francisco', value: 39000 },
  { name: 'Sydney', value: 25000 },
  { name: 'Singapore', value: 61000 },
];
