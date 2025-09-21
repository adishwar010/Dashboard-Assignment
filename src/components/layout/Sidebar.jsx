// import Icon from '../ui/Icon';

// export default function Sidebar({ mobileOpen, setMobileOpen }) {
//   const SectionTitle = ({ children }) => (
//     <p className="mb-2 text-xs uppercase tracking-wider text-gray-500 dark:text-text-muted">
//       {children}
//     </p>
//   );

//   const Item = ({ icon, label, active }) => (
//     <a
//       href="#"
//       className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
//         active
//           ? 'bg-gray-200 text-gray-900 dark:bg-white/5 dark:text-white'
//           : 'text-gray-700 hover:bg-gray-100 dark:text-text-muted dark:hover:bg-white/5'
//       }`}
//       onClick={() => setMobileOpen(false)}
//     >
//       <Icon name={icon} />
//       <span>{label}</span>
//     </a>
//   );

//   return (
//     <>
//       {/* Desktop sidebar */}
//       <aside className="hidden lg:flex flex-col w-64 shrink-0 p-4 gap-3 border-r border-gray-200 bg-gray-50 text-gray-900 dark:border-white/5 dark:bg-bg dark:text-text">
//         <div className="flex items-center gap-2 px-2 py-1">
//           <div className="size-8 rounded-full bg-gray-200 dark:bg-white/10 grid place-items-center font-bold">
//             Q
//           </div>
//           <span className="font-semibold">ByeWind</span>
//         </div>

//         <nav className="mt-2 space-y-5">
//           <div>
//             <SectionTitle>Favorites</SectionTitle>
//             <div className="space-y-1">
//               <Item icon="House" label="Overview" />
//               <Item icon="Folder" label="Projects" />
//             </div>
//           </div>

//           <div>
//             <SectionTitle>Dashboards</SectionTitle>
//             <div className="space-y-1">
//               <Item icon="LayoutDashboard" label="Default" active />
//               <Item icon="ShoppingCart" label="eCommerce" />
//               <Item icon="Wrench" label="Projects" />
//               <Item icon="GraduationCap" label="Online Courses" />
//             </div>
//           </div>

//           <div>
//             <SectionTitle>Pages</SectionTitle>
//             <div className="space-y-1">
//               <Item icon="User" label="User Profile" />
//               <Item icon="Settings" label="Account" />
//               <Item icon="Building2" label="Corporate" />
//               <Item icon="Newspaper" label="Blog" />
//               <Item icon="Share2" label="Social" />
//             </div>
//           </div>
//         </nav>

//         <div className="mt-auto text-xs text-gray-500 dark:text-text-muted px-2">
//           © 2025 ByeWind
//         </div>
//       </aside>

//       {/* Mobile drawer */}
//       <div
//         className={`lg:hidden fixed inset-0 z-50 ${mobileOpen ? '' : 'pointer-events-none'}`}
//       >
//         <div
//           onClick={() => setMobileOpen(false)}
//           className={`absolute inset-0 bg-black/40 transition-opacity ${
//             mobileOpen ? 'opacity-100' : 'opacity-0'
//           }`}
//         />
//         <aside
//           className={`absolute left-0 top-0 h-full w-72 p-4 bg-gray-50 text-gray-900 border-r border-gray-200 dark:bg-bg dark:text-text dark:border-white/5 transition-transform ${
//             mobileOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <span className="font-semibold">ByeWind</span>
//             <button
//               onClick={() => setMobileOpen(false)}
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
//               aria-label="Close sidebar"
//             >
//               ✕
//             </button>
//           </div>

//           <nav className="space-y-5">
//             <div>
//               <SectionTitle>Favorites</SectionTitle>
//               <div className="space-y-1">
//                 <Item icon="House" label="Overview" />
//                 <Item icon="Folder" label="Projects" />
//               </div>
//             </div>
//             <div>
//               <SectionTitle>Dashboards</SectionTitle>
//               <div className="space-y-1">
//                 <Item icon="LayoutDashboard" label="Default" active />
//                 <Item icon="ShoppingCart" label="eCommerce" />
//                 <Item icon="Wrench" label="Projects" />
//                 <Item icon="GraduationCap" label="Online Courses" />
//               </div>
//             </div>
//             <div>
//               <SectionTitle>Pages</SectionTitle>
//               <div className="space-y-1">
//                 <Item icon="User" label="User Profile" />
//                 <Item icon="Settings" label="Account" />
//                 <Item icon="Building2" label="Corporate" />
//                 <Item icon="Newspaper" label="Blog" />
//                 <Item icon="Share2" label="Social" />
//               </div>
//             </div>
//           </nav>
//         </aside>
//       </div>
//     </>
//   );
// }

import { NavLink } from 'react-router-dom';
import Icon from '../ui/Icon';

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const SectionTitle = ({ children }) => (
    <p className="mb-2 text-xs uppercase tracking-wider text-gray-500 dark:text-text-muted">
      {children}
    </p>
  );

  const Item = ({ to, icon, label }) => (
    <NavLink
      to={to}
      onClick={() => setMobileOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
          isActive
            ? 'bg-gray-200 text-gray-900 dark:bg-white/5 dark:text-white'
            : 'text-gray-700 hover:bg-gray-100 dark:text-text-muted dark:hover:bg-white/5'
        }`
      }
    >
      <Icon name={icon} />
      <span>{label}</span>
    </NavLink>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 p-4 gap-3 border-r border-gray-200 bg-gray-50 text-gray-900 dark:border-white/5 dark:bg-bg dark:text-text">
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="size-8 rounded-full bg-gray-200 dark:bg-white/10 grid place-items-center font-bold">
            Q
          </div>
          <span className="font-semibold">ByeWind</span>
        </div>

        <nav className="mt-2 space-y-5">
          <div>
            <SectionTitle>Favorites</SectionTitle>
            <div className="space-y-1">
              <Item to="/dashboard" icon="House" label="Overview" />
              <Item to="/projects" icon="Folder" label="Projects" />
            </div>
          </div>

          <div>
            <SectionTitle>Dashboards</SectionTitle>
            <div className="space-y-1">
              <Item to="/dashboard" icon="LayoutDashboard" label="Default" />
              <Item to="/ecommerce" icon="ShoppingCart" label="eCommerce" />
              <Item to="/projects" icon="Wrench" label="Projects" />
              <Item to="/courses" icon="GraduationCap" label="Online Courses" />
            </div>
          </div>

          <div>
            <SectionTitle>Pages</SectionTitle>
            <div className="space-y-1">
              <Item to="/profile" icon="User" label="User Profile" />
              <Item to="/account" icon="Settings" label="Account" />
              <Item to="/corporate" icon="Building2" label="Corporate" />
              <Item to="/blog" icon="Newspaper" label="Blog" />
              <Item to="/social" icon="Share2" label="Social" />
            </div>
          </div>
        </nav>

        <div className="mt-auto text-xs text-gray-500 dark:text-text-muted px-2">
          © 2025 ByeWind
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 ${mobileOpen ? '' : 'pointer-events-none'}`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-72 p-4 bg-gray-50 text-gray-900 border-r border-gray-200 dark:bg-bg dark:text-text dark:border-white/5 transition-transform ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">ByeWind</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-5">
            <div>
              <SectionTitle>Dashboards</SectionTitle>
              <div className="space-y-1">
                <Item to="/dashboard" icon="LayoutDashboard" label="Default" />
                <Item to="/ecommerce" icon="ShoppingCart" label="eCommerce" />
                <Item to="/orders" icon="List" label="Orders" />
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
