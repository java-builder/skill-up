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
    <div className="bg-surface-container-lowest p-6 rounded-3xl relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 ${iconBg} ${iconColor} rounded-2xl`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`text-xs font-bold ${badgeColor} px-2 py-1 rounded-lg`}>{badge}</span>
      </div>
      <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-wider">{title}</p>
      <h3 className="text-3xl font-black mt-1">{value}</h3>
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-9xl">{decorIcon}</span>
      </div>
    </div>
  );
}
