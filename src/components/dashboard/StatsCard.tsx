interface StatsCardProps {
  icon: string;
  iconBg: string;
  iconColor: string;
  badge: string;
  badgeColor: string;
  title: string;
  value: string;
  decorIcon: string;
}

export default function StatsCard({
  icon,
  iconBg,
  iconColor,
  badge,
  badgeColor,
  title,
  value,
  decorIcon,
}: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl relative overflow-hidden group border border-slate-200 dark:border-slate-700 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 ${iconBg} ${iconColor} rounded-2xl transition-colors`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`text-xs font-bold ${badgeColor} px-2 py-1 rounded-lg transition-colors`}>{badge}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider transition-colors">{title}</p>
      <h3 className="text-3xl font-black mt-1 text-slate-900 dark:text-slate-100 transition-colors">{value}</h3>
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-9xl">{decorIcon}</span>
      </div>
    </div>
  );
}
