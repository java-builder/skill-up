const deadlines = [
  {
    id: 1,
    title: 'Giai đoạn nghiên cứu UX/UI',
    subtitle: 'Thiết kế ứng dụng di động',
    date: '12 Th10',
    time: '14:00',
    borderColor: 'border-error',
    timeColor: 'text-error',
  },
  {
    id: 2,
    title: 'Giữa kỳ cấu trúc dữ liệu',
    subtitle: 'Cổng Quiz trực tuyến',
    date: '15 Th10',
    time: '09:30',
    borderColor: 'border-primary',
    timeColor: 'text-on-surface',
  },
  {
    id: 3,
    title: 'Thuyết trình chiến lược Marketing',
    subtitle: 'Phòng 302, Tòa nhà Alpha',
    date: '18 Th10',
    time: '11:00',
    borderColor: 'border-secondary',
    timeColor: 'text-on-surface',
  },
];

export default function UpcomingDeadlines() {
  return (
    <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm">
      <h3 className="text-xl font-bold mb-6">Sắp tới</h3>
      <div className="space-y-6">
        {deadlines.map((deadline) => (
          <div key={deadline.id} className={`flex gap-4 items-start border-l-4 ${deadline.borderColor} pl-4`}>
            <div className="flex-1">
              <h4 className="text-sm font-bold">{deadline.title}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{deadline.subtitle}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] block font-black text-slate-400 uppercase">{deadline.date}</span>
              <span className={`text-xs font-bold ${deadline.timeColor}`}>{deadline.time}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-8 py-3 outline outline-1 outline-outline-variant/30 text-on-surface-variant font-bold rounded-xl text-xs hover:bg-slate-50 transition-colors cursor-pointer">
        Đồng bộ lịch
      </button>
    </div>
  );
}
