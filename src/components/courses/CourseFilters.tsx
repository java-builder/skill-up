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
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            }`}
          >
            {filter.label}
            <span className="ml-2 opacity-60">({filter.count})</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <select className="bg-surface-container-low border-none rounded-full text-sm font-bold px-4 py-2 focus:ring-2 focus:ring-primary/20 cursor-pointer">
          <option>Tiến độ: Tất cả</option>
          <option>Đang học</option>
          <option>Hoàn thành</option>
          <option>Chưa bắt đầu</option>
        </select>
        <button className="p-2.5 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors cursor-pointer">
          <span className="material-symbols-outlined text-sm">tune</span>
        </button>
      </div>
    </div>
  );
}
