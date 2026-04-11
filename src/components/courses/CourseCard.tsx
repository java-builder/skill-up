interface CourseCardProps {
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  thumbnail: string;
  category: string;
  level: string;
  color: string;
}

const colorMap: Record<string, { bg: string; text: string; badge: string; progress: string }> = {
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100', progress: 'bg-orange-600' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100', progress: 'bg-blue-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100', progress: 'bg-purple-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', badge: 'bg-emerald-100', progress: 'bg-emerald-600' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', badge: 'bg-rose-100', progress: 'bg-rose-600' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100', progress: 'bg-indigo-600' },
};

export default function CourseCard({
  title,
  instructor,
  progress,
  totalLessons,
  completedLessons,
  thumbnail,
  category,
  level,
  color,
}: CourseCardProps) {
  const colors = colorMap[color] || colorMap.orange;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`${colors.badge} ${colors.text} px-3 py-1 rounded-full text-xs font-bold`}>
            {category}
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
            {level}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
          {title}
        </h3>
        <p className="text-sm text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-base">person</span>
          <span className="truncate">{instructor}</span>
        </p>

        <div className="space-y-3 mt-auto">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 font-semibold">Tiến độ</span>
            <span className="font-bold text-slate-900">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.progress} transition-all rounded-full`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-600">
            <span className="whitespace-nowrap">
              {completedLessons}/{totalLessons} bài học
            </span>
            <button className={`${colors.text} font-bold hover:underline whitespace-nowrap ml-2`}>Tiếp tục →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
