import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Dashboard from './pages/Dashboard';
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Notifications from './components/overlay/Notifications';

const seed = [
  { id: 'n1', title: 'New user registered', time: '2m ago', unread: true },
  {
    id: 'n2',
    title: 'You have a bug that needs attention',
    time: '20m ago',
    unread: true,
  },
  { id: 'n3', title: 'Released a new version', time: '1h ago', unread: false },
  { id: 'n4', title: 'Submitted a bug', time: '3h ago', unread: false },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifItems, setNotifItems] = useState(seed);

  const unreadCount = notifItems.filter((n) => n.unread).length;

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900 dark:bg-bg dark:text-text">
        <div className="grid lg:grid-cols-[16rem_1fr]">
          <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          <div className="flex flex-col min-w-0">
            <Topbar
              onMenuClick={() => setMobileOpen(true)}
              onNotificationsClick={() => setNotifOpen(true)}
              unreadCount={unreadCount}
            />
            <main className="flex-1 min-w-0">
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>

        <Notifications
          open={notifOpen}
          onClose={() => setNotifOpen(false)}
          items={notifItems}
          setItems={setNotifItems}
        />
      </div>
    </BrowserRouter>
  );
}
