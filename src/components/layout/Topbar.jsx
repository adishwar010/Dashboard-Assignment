import { useTheme } from '../../hooks/useTheme';
import Icon from '../ui/Icon';

export default function Topbar({ onMenuClick, onNotificationsClick }) {
  const { theme, toggle } = useTheme();

  return (
    <header
      className="
        sticky top-0 z-40
        bg-white/95 dark:bg-bg-elevated/90
        border-b border-gray-200 dark:border-white/5
        backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-bg-elevated/70
      "
    >
      <div className="h-14 px-4 lg:px-6 flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-text dark:hover:bg-white/5"
          aria-label="Open sidebar"
        >
          <Icon name="Menu" />
        </button>

        <nav
          aria-label="Breadcrumb"
          className="text-sm text-gray-600 dark:text-text-muted"
        >
          <span className="text-gray-700 dark:text-text">Dashboards</span>
          <span className="mx-1 text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white">Default</span>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <Icon
              name="Search"
              className="w-4 h-4 absolute left-2 top-2.5 text-gray-400 dark:text-text-muted"
            />
            <input
              placeholder="Search"
              aria-label="Search"
              className="
                rounded-lg pl-8 pr-3 py-2 text-sm focus-ring
                bg-gray-100 text-gray-900 placeholder:text-gray-400 border border-gray-200
                dark:bg-bg-subtle dark:text-text dark:placeholder:text-text-muted dark:border-white/10
              "
            />
          </div>

          <button
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-text dark:hover:bg-white/5"
            aria-label="Shortcuts"
          >
            <Icon name="Keyboard" />
          </button>

          <button
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-text dark:hover:bg-white/5"
            aria-label="Theme"
            onClick={toggle}
          >
            <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} />
          </button>

          <button
            onClick={onNotificationsClick}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-text dark:hover:bg-white/5"
            aria-label="Notifications"
          >
            <Icon name="Bell" />
          </button>

          <button
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-text dark:hover:bg-white/5"
            aria-label="Settings"
          >
            <Icon name="Settings" />
          </button>

          <button
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-text dark:hover:bg-white/5"
            aria-label="Profile"
          >
            <Icon name="UserRound" />
          </button>
        </div>
      </div>
    </header>
  );
}
