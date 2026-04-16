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
  orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-500 dark:text-orange-400', badge: 'bg-orange-100 dark:bg-orange-900/30', progress: 'bg-orange-500 dark:bg-orange-400' },
  blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-100 dark:bg-blue-900/30', progress: 'bg-blue-600 dark:bg-blue-400' },
  purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-100 dark:bg-purple-900/30', progress: 'bg-purple-600 dark:bg-purple-400' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-100 dark:bg-emerald-900/30', progress: 'bg-emerald-600 dark:bg-emerald-400' },
  rose: { bg: 'bg-rose-50 dark:bg-rose-900/20', text: 'text-rose-600 dark:text-rose-400', badge: 'bg-rose-100 dark:bg-rose-900/30', progress: 'bg-rose-600 dark:bg-rose-400' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-900/20', text: 'text-indigo-600 dark:text-indigo-400', badge: 'bg-indigo-100 dark:bg-indigo-900/30', progress: 'bg-indigo-600 dark:bg-indigo-400' },
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
    <div className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-500 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`${colors.badge} ${colors.text} px-3 py-1 rounded-full text-xs font-bold transition-colors`}>
            {category}
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
            {level}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-slate-900 dark:text-slate-100 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors min-h-[3.5rem]">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-base">person</span>
          <span className="truncate">{instructor}</span>
        </p>

        <div className="space-y-3 mt-auto">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-semibold transition-colors">Tiến độ</span>
            <span className="font-bold text-slate-900 dark:text-slate-100 transition-colors">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden transition-colors">
            <div
              className={`h-full ${colors.progress} transition-all rounded-full`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-400 transition-colors">
            <span className="whitespace-nowrap">
              {completedLessons}/{totalLessons} bài học
            </span>
            <button className={`${colors.text} font-bold hover:underline whitespace-nowrap ml-2 transition-colors`}>Tiếp tục →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
