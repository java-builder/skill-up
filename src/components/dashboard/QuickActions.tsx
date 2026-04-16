const actions = [
  { icon: 'quiz', label: 'Tạo Quiz' },
  { icon: 'military_tech', label: 'Tặng XP', filled: true },
  { icon: 'campaign', label: 'Thông báo' },
  { icon: 'lock_reset', label: 'Mở khóa' },
];

export default function QuickActions() {
  return (
    <div className="bg-gradient-to-br from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-500 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden transition-colors">
      <div className="relative z-10">
        <h3 className="text-xl font-black mb-4">Hành động nhanh</h3>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <button
              key={action.label}
              className="p-4 bg-white/20 backdrop-blur-md rounded-2xl flex flex-col items-center gap-2 hover:bg-white/30 transition-all cursor-pointer"
            >
              <span
                className="material-symbols-outlined"
                style={action.filled ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {action.icon}
              </span>
              <span className="text-[10px] font-bold uppercase">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}
