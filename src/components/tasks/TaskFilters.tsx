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
                ? 'bg-gradient-to-br from-primary to-primary-container text-white'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
        <span className="text-xs font-bold uppercase tracking-widest">Sắp xếp:</span>
        <button className="flex items-center gap-1 font-bold text-sm text-on-surface cursor-pointer hover:text-primary transition-colors">
          Phần thưởng cao
          <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
    </section>
  );
}
