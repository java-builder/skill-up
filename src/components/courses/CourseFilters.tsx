import { useState } from 'react';

const filters = [
  { id: 'all', label: 'Tất cả', count: 6 },
  { id: 'programming', label: 'Lập trình', count: 2 },
  { id: 'design', label: 'Thiết kế', count: 1 },
  { id: 'business', label: 'Kinh doanh', count: 2 },
  { id: 'language', label: 'Ngôn ngữ', count: 1 },
];

export default function CourseFilters() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
              activeFilter === filter.id
                ? 'bg-orange-500 dark:bg-orange-500 text-white shadow-lg shadow-orange-500/20 dark:shadow-orange-500/30'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {filter.label}
            <span className="ml-2 opacity-60">({filter.count})</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <select className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold px-4 py-2 focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-orange-400/20 cursor-pointer text-slate-900 dark:text-slate-100 transition-colors">
          <option>Tiến độ: Tất cả</option>
          <option>Đang học</option>
          <option>Hoàn thành</option>
          <option>Chưa bắt đầu</option>
        </select>
        <button className="p-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-sm text-slate-600 dark:text-slate-400">tune</span>
        </button>
      </div>
    </div>
  );
}
