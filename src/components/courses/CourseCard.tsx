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

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', badge: 'bg-orange-100' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', badge: 'bg-blue-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', badge: 'bg-purple-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', badge: 'bg-emerald-100' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-600', badge: 'bg-rose-100' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', badge: 'bg-indigo-100' },
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
    <div className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
      <div className="relative h-48 overflow-hidden">
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

      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-on-surface-variant mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-base">person</span>
          {instructor}
        </p>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-on-surface-variant font-semibold">Tiến độ</span>
            <span className="font-bold">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.bg} ${colors.text} transition-all`}
              style={{ width: `${progress}%`, backgroundColor: 'currentColor' }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-xs text-on-surface-variant">
            <span>
              {completedLessons}/{totalLessons} bài học
            </span>
            <button className={`${colors.text} font-bold hover:underline`}>Tiếp tục →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
