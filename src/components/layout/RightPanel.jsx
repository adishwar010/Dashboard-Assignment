import { memo } from 'react';
import Icon from '../ui/Icon';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import {
  sideNotifications as defaultsNotifs,
  sideActivities as defaultsActs,
  sideContacts as defaultsContacts,
  locationRevenue as defaultsRegions,
} from '../../data/mock';

function Section({ title, children }) {
  return (
    <div className="card p-4">
      <h3 className="text-sm font-semibold title mb-3">{title}</h3>
      {children}
    </div>
  );
}

const Item = ({ title, meta, icon }) => (
  <li className="flex items-start gap-3 py-2">
    <div className="shrink-0 mt-0.5 text-gray-400 dark:text-text-muted">
      <Icon name={icon} />
    </div>
    <div className="min-w-0">
      <p className="text-sm title truncate">{title}</p>
      <p className="text-xs muted">{meta}</p>
    </div>
  </li>
);

const Contact = ({ name, color = 'bg-gray-300' }) => (
  <li className="flex items-center justify-between py-2">
    <div className="flex items-center gap-3 min-w-0">
      <span className={`inline-flex h-7 w-7 rounded-full ${color}`} />
      <p className="text-sm title truncate">{name}</p>
    </div>
    <button className="px-2 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10">
      View
    </button>
  </li>
);

function RevenueByLocation({ regions }) {
  return (
    <Section title="Revenue by Location">
      <div className="h-40">
        <ResponsiveContainer>
          <BarChart data={regions} margin={{ top: 8, left: 0, right: 0, bottom: 0 }}>
            <XAxis
              dataKey="name"
              tick={{ fill: 'currentColor', opacity: 0.7 }}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#a5b4fc" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-3 space-y-1 text-sm">
        {regions.map((r) => (
          <li key={r.name} className="flex justify-between">
            <span className="muted">{r.name}</span>
            <span className="title">${r.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function RightPanel({
  notifications = defaultsNotifs,
  activities = defaultsActs,
  contacts = defaultsContacts,
  regions = defaultsRegions,
}) {
  console.log('[RightPanel] render', {
    notifications: notifications.length,
    activities: activities.length,
    contacts: contacts.length,
    regions: regions.length,
  });

  return (
    <div className="space-y-4">
      <Section title="Notifications">
        <ul>
          {notifications.map((n) => (
            <Item key={n.id} title={n.title} meta={n.time} icon="Bell" />
          ))}
          {notifications.length === 0 && (
            <li className="text-sm muted py-2">No notifications</li>
          )}
        </ul>
      </Section>

      <Section title="Activities">
        <ul>
          {activities.map((a) => (
            <Item key={a.id} title={a.title} meta={a.time} icon="Activity" />
          ))}
          {activities.length === 0 && (
            <li className="text-sm muted py-2">No recent activity</li>
          )}
        </ul>
      </Section>

      <RevenueByLocation regions={regions} />

      <Section title="Contacts">
        <ul>
          {contacts.map((c) => (
            <Contact key={c.id} name={c.name} color={c.color} />
          ))}
          {contacts.length === 0 && <li className="text-sm muted py-2">No contacts</li>}
        </ul>
      </Section>
    </div>
  );
}

export default memo(RightPanel);
