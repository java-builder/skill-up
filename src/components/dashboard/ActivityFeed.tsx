const activities = [
  {
    id: 1,
    type: 'submission',
    color: 'bg-orange-500',
    student: 'Minh Lê',
    action: 'đã nộp',
    target: 'Thiết kế cuối kỳ',
    course: 'UX Design III',
    time: '12 phút trước',
    hasActions: true,
  },
  {
    id: 2,
    type: 'module',
    color: 'bg-blue-500',
    student: 'Module mới',
    action: 'được xuất bản bởi',
    target: 'Admin-Bot',
    course: 'Advanced React Hooks',
    time: '2 giờ trước',
    hasActions: false,
  },
  {
    id: 3,
    type: 'achievement',
    color: 'bg-emerald-500',
    student: 'Thảo Phạm',
    action: 'đạt',
    target: 'Hạng Kim cương',
    course: 'Đạt 5,000 XP tuần',
    time: '5 giờ trước',
    hasActions: false,
  },
];

export default function ActivityFeed() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="font-black text-lg">Hoạt động gần đây</h3>
        <span className="material-symbols-outlined text-slate-300">history</span>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex gap-4 p-4 bg-surface-container-low rounded-3xl items-start"
          >
            <div className={`w-2 h-12 ${activity.color} rounded-full`}></div>
            <div className="flex-1">
              <p className="text-sm font-bold">
                <span className={activity.color.replace('bg-', 'text-')}>{activity.student}</span>{' '}
                {activity.action}{' '}
                <span className={activity.color.replace('bg-', 'text-')}>{activity.target}</span>
              </p>
              <p className="text-xs text-on-surface-variant mt-1">
                {activity.course} • {activity.time}
              </p>
              {activity.hasActions && (
                <div className="mt-2 flex gap-2">
                  <button className="px-3 py-1 bg-white text-[10px] font-bold rounded-lg border border-slate-200 cursor-pointer">
                    Xem xét
                  </button>
                  <button className="px-3 py-1 bg-white text-[10px] font-bold rounded-lg border border-slate-200 cursor-pointer">
                    Từ chối
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
