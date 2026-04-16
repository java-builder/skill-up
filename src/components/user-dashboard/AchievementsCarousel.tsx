const achievements = [
  {
    id: 1,
    icon: 'military_tech',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-500',
    title: 'Chim sớm',
    description: 'Nộp 5 bài tập sớm 24h',
  },
  {
    id: 2,
    icon: 'auto_awesome',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Lập trình viên sạch',
    description: '0 lỗi lint trong dự án JS',
  },
  {
    id: 3,
    icon: 'group',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    title: 'Người hướng dẫn nhóm',
    description: 'Được bình chọn là người đánh giá tốt nhất',
  },
  {
    id: 4,
    icon: 'bolt',
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Bậc thầy Sprint',
    description: '100% tham dự Labs',
  },
];

export default function AchievementsCarousel() {
  return (
    <div className="lg:col-span-2 bg-surface-container-low rounded-[2rem] p-8 overflow-hidden relative">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <h3 className="text-xl font-bold">Thành tích gần đây</h3>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-400 hover:text-primary cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-400 hover:text-primary cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide relative z-10">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="min-w-[180px] bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm"
          >
            <div
              className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mb-4 translate-y-[-8px]`}
              style={{ filter: 'drop-shadow(0px 10px 15px rgba(160, 65, 0, 0.15))' }}
            >
              <span
                className={`material-symbols-outlined text-3xl ${achievement.iconColor}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {achievement.icon}
              </span>
            </div>
            <span className="text-xs font-bold text-slate-800">{achievement.title}</span>
            <span className="text-[10px] text-slate-400 mt-1">{achievement.description}</span>
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[200px]">trophy</span>
      </div>
    </div>
  );
}
