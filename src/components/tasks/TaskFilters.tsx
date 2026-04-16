import { useState } from 'react';

const filters = ['Tất cả thử thách', 'Lập trình', 'Kỹ năng mềm', 'Ngôn ngữ'];

export default function TaskFilters() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="flex items-center justify-between">
      <div className="flex gap-4">
        {filters.map((filter, index) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(index)}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-colors cursor-pointer ${
              activeFilter === index
                ? 'bg-gradient-to-br from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-500 text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 transition-colors">
        <span className="text-xs font-bold uppercase tracking-widest">Sắp xếp:</span>
        <button className="flex items-center gap-1 font-bold text-sm text-slate-900 dark:text-slate-100 cursor-pointer hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
          Phần thưởng cao
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
    </section>
  );
}
