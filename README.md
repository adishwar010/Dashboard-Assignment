# ByeWind React Dashboard (Figma → Code)

A polished, responsive dashboard built with **React + Vite**, **Tailwind CSS**, **Recharts**, and **Framer Motion**. It includes a persistent **light/dark theme**, a responsive **sidebar with mobile drawer**, **Topbar** with search and theme toggle, **KPI cards**, **line/area + bar + donut charts**, and a **paginated, sortable, filterable orders table**. Routing is powered by **React Router**.

<p align="center">
  <img src="public/preview-dark.png" alt="Dashboard preview" width="900">
</p>

## ✨ Features

- **Responsive layout**
  - Desktop sidebar + mobile hamburger drawer
  - Content grid that adapts from 1 → 3 columns
- **Theme**
  - Dark/Light theme with `localStorage` persistence
- **Charts**
  - Line/Area (current vs previous)
  - Bar (Projections vs Actuals)
  - Donut (Total Sales)
- **Data Table**
  - Search, sort (multi-columns), pagination
  - Word-wrapped cells on small screens, table layout on wide
- **Routing**
  - `Dashboard` (default), `Orders` (table-only)
  - KPI “Orders” card links to `/orders`

## 🧱 Tech Stack

- **React 18**, **Vite**
- **Tailwind CSS**
- **Recharts** (charts)
- **Framer Motion** (tiny animations)
- **React Router v6**
- ESLint + Prettier, modern project structure

## 📦 Project Structure

figma-dashboard/
├─ package.json
├─ vite.config.js
├─ postcss.config.js
├─ tailwind.config.js
├─ .eslintrc.cjs
├─ .prettierrc
├─ index.html
├─ README.md
└─ src/
├─ main.jsx
├─ App.jsx
├─ index.css
├─ data/mock.js
├─ hooks/useLocalStorage.js
├─ context/ThemeContext.jsx
├─ hooks/useTheme.js
├─ components/
│ ├─ layout/Sidebar.jsx
│ ├─ layout/Topbar.jsx
│ ├─ layout/RightPanel.jsx <!-- optional; currently not mounted -->
│ ├─ ui/Avatar.jsx
│ ├─ ui/Badge.jsx
│ ├─ ui/Icon.jsx
│ ├─ ui/StatCard.jsx
│ ├─ charts/LineAreaChart.jsx
│ ├─ charts/BarCompare.jsx
│ ├─ charts/DonutChart.jsx
│ └─ table/DataTable.jsx
└─ pages/
├─ Dashboard.jsx
└─ Orders.jsx

## 🚀 Getting Started

```bash
# install
npm install

# dev
npm run dev

# lint
npm run lint

# build
npm run build

# preview production build
npm run preview
⚙️ Environment
No external APIs required. Everything runs locally from src/data/mock.js.

🔗 Routing
/ → Dashboard

/orders → Orders table (same dataset, full-width table experience)

The Orders KPI card on the dashboard links to /orders.

🧪 Notes on Accessibility & UX
Focus rings via Tailwind utility (focus-ring) for interactive elements

Icons from lucide-react

Tooltips from Recharts use high-contrast backgrounds in dark mode

🛠️ Development Scripts
npm run dev – Vite dev server with HMR

npm run build – production build (outputs to dist/)

npm run preview – serves the built app locally

npm run lint – ESLint across src

📄 License

MIT © Adishwar Sharma
```
