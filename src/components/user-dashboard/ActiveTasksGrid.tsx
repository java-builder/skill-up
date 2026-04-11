const tasks = [
  {
    id: 1,
    icon: 'code',
    iconBg: 'bg-orange-50',
    iconColor: 'text-primary',
    iconHoverBg: 'group-hover:bg-primary',
    iconHoverColor: 'group-hover:text-white',
    progress: 80,
    progressColor: '#f26f21',
    title: 'Kiểm tra hiệu suất React',
    description: 'Hoàn thành điểm Lighthouse và sửa tất cả vấn đề CLS trong repo dự án cuối kỳ.',
    deadline: 'CÒN 2 NGÀY',
    deadlineColor: 'text-slate-400',
  },
  {
    id: 2,
    icon: 'history_edu',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    iconHoverBg: 'group-hover:bg-blue-600',
    iconHoverColor: 'group-hover:text-white',
    progress: 40,
    progressColor: '#345681',
    title: 'Bài luận đạo đức số',
    description: 'Nghiên cứu tác động của AI đến thị trường việc làm khu vực, đặc biệt tại Đà Nẵng.',
    deadline: 'HẾT HẠN HÔM NAY',
    deadlineColor: 'text-error',
  },
];

export default function ActiveTasksGrid() {
  return (
    <div className="lg:col-span-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Nhiệm vụ đang hoạt động</h3>
        <a className="text-primary text-sm font-bold flex items-center gap-1 cursor-pointer hover:underline" href="#">
          Xem tất cả
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm border border-transparent hover:border-outline-variant/20 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`w-12 h-12 rounded-2xl ${task.iconBg} flex items-center justify-center ${task.iconColor} ${task.iconHoverBg} ${task.iconHoverColor} transition-colors`}
              >
                <span className="material-symbols-outlined">{task.icon}</span>
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="24" cy="24" fill="transparent" r="20" stroke="#f3f4f5" strokeWidth="4"></circle>
                  <circle
                    cx="24"
                    cy="24"
                    fill="transparent"
                    r="20"
                    stroke={task.progressColor}
                    strokeDasharray="125"
                    strokeDashoffset={125 - (125 * task.progress) / 100}
                    strokeWidth="4"
                  ></circle>
                </svg>
                <span className="absolute text-[10px] font-bold">{task.progress}%</span>
              </div>
            </div>
            <h4 className="font-bold text-lg">{task.title}</h4>
            <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">{task.description}</p>
            <div className={`mt-6 flex items-center gap-2 text-[10px] font-black tracking-widest ${task.deadlineColor}`}>
              <span className="material-symbols-outlined text-sm">
                {task.deadlineColor === 'text-error' ? 'priority_high' : 'schedule'}
              </span>
              <span>{task.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
