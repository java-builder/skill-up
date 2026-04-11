import DashboardLayout from '../components/layout/DashboardLayout';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'Tất cả', count: 12 },
  { id: 'coding', name: 'Lập trình', count: 5 },
  { id: 'quiz', name: 'Kiểm tra', count: 4 },
  { id: 'practice', name: 'Thực hành', count: 3 },
];

const tasks = [
  {
    id: 1,
    category: 'coding',
    type: 'Bài tập lập trình',
    title: 'Thuật toán sắp xếp nâng cao',
    description: 'Cài đặt và so sánh hiệu suất của Quick Sort, Merge Sort và Heap Sort',
    course: 'Cấu trúc dữ liệu & Giải thuật',
    difficulty: 'Khó',
    difficultyColor: 'text-red-600',
    difficultyBg: 'bg-red-50',
    points: 100,
    timeEstimate: '90 phút',
    deadline: '3 ngày nữa',
    status: 'Chưa bắt đầu',
    statusColor: 'text-slate-500',
    participants: 0,
    icon: 'code',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    id: 2,
    category: 'quiz',
    type: 'Kiểm tra trắc nghiệm',
    title: 'Kiểm tra giữa kỳ - OOP',
    description: '30 câu hỏi về lập trình hướng đối tượng, kế thừa, đa hình',
    course: 'Lập trình Java',
    difficulty: 'Trung bình',
    difficultyColor: 'text-orange-600',
    difficultyBg: 'bg-orange-50',
    points: 150,
    timeEstimate: '45 phút',
    deadline: '5 ngày nữa',
    status: 'Đang làm',
    statusColor: 'text-blue-600',
    progress: 40,
    participants: 0,
    icon: 'quiz',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    category: 'practice',
    type: 'Thực hành',
    title: 'Xây dựng REST API với Spring Boot',
    description: 'Tạo API CRUD hoàn chỉnh với authentication và validation',
    course: 'Lập trình Web',
    difficulty: 'Trung bình',
    difficultyColor: 'text-orange-600',
    difficultyBg: 'bg-orange-50',
    points: 120,
    timeEstimate: '120 phút',
    deadline: '1 tuần nữa',
    status: 'Chưa bắt đầu',
    statusColor: 'text-slate-500',
    participants: 0,
    icon: 'api',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    id: 4,
    category: 'coding',
    type: 'Bài tập lập trình',
    title: 'Giải thuật tìm kiếm đường đi',
    description: 'Cài đặt thuật toán Dijkstra và A* để tìm đường đi ngắn nhất',
    course: 'Cấu trúc dữ liệu & Giải thuật',
    difficulty: 'Khó',
    difficultyColor: 'text-red-600',
    difficultyBg: 'bg-red-50',
    points: 130,
    timeEstimate: '100 phút',
    deadline: '4 ngày nữa',
    status: 'Chưa bắt đầu',
    statusColor: 'text-slate-500',
    participants: 0,
    icon: 'route',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 5,
    category: 'quiz',
    type: 'Kiểm tra trắc nghiệm',
    title: 'Quiz SQL cơ bản',
    description: '20 câu hỏi về SELECT, JOIN, GROUP BY và các câu lệnh SQL cơ bản',
    course: 'Cơ sở dữ liệu',
    difficulty: 'Dễ',
    difficultyColor: 'text-green-600',
    difficultyBg: 'bg-green-50',
    points: 80,
    timeEstimate: '30 phút',
    deadline: '2 ngày nữa',
    status: 'Hoàn thành',
    statusColor: 'text-green-600',
    score: 85,
    participants: 0,
    icon: 'storage',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 6,
    category: 'practice',
    type: 'Thực hành',
    title: 'Responsive Web Design',
    description: 'Thiết kế giao diện responsive cho trang web thương mại điện tử',
    course: 'Thiết kế giao diện',
    difficulty: 'Trung bình',
    difficultyColor: 'text-orange-600',
    difficultyBg: 'bg-orange-50',
    points: 90,
    timeEstimate: '60 phút',
    deadline: '6 ngày nữa',
    status: 'Chưa bắt đầu',
    statusColor: 'text-slate-500',
    participants: 0,
    icon: 'devices',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
];

export default function TasksPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('deadline');

  const filteredTasks = activeCategory === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === activeCategory);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Nhiệm vụ & Thử thách</h1>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">Hoàn thành các nhiệm vụ để kiếm điểm và nâng cao kỹ năng</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 sm:flex-none px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="deadline">Sắp hết hạn</option>
              <option value="points">Điểm cao nhất</option>
              <option value="difficulty">Độ khó</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-orange-600 text-2xl">task_alt</span>
              <span className="text-xs font-bold text-slate-500">Tổng số</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">12</h3>
            <p className="text-slate-500 text-sm mt-1">Nhiệm vụ khả dụng</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-blue-600 text-2xl">pending_actions</span>
              <span className="text-xs font-bold text-slate-500">Đang làm</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">3</h3>
            <p className="text-slate-500 text-sm mt-1">Nhiệm vụ chưa hoàn thành</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
              <span className="text-xs font-bold text-slate-500">Hoàn thành</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">8</h3>
            <p className="text-slate-500 text-sm mt-1">Nhiệm vụ đã xong</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl shadow-sm text-white">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-2xl">stars</span>
              <span className="text-xs font-bold">Tổng điểm</span>
            </div>
            <h3 className="text-3xl font-black">850</h3>
            <p className="text-white/80 text-sm mt-1">Điểm đã kiếm được</p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-slate-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${task.iconBg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined ${task.iconColor} text-2xl`}>
                    {task.icon}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold ${task.difficultyBg} ${task.difficultyColor}`}>
                    {task.difficulty}
                  </span>
                  <span className="text-orange-600 font-black text-sm">+{task.points} điểm</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase">{task.type}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-orange-600 transition-colors">
                  {task.title}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-3">{task.description}</p>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">school</span>
                  {task.course}
                </span>
              </div>

              {/* Progress (if applicable) */}
              {task.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Tiến độ</span>
                    <span className="font-bold text-slate-900">{task.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Score (if completed) */}
              {task.score !== undefined && (
                <div className="mb-4 p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-green-600">Điểm đạt được</span>
                    <span className="text-2xl font-black text-green-600">{task.score}/100</span>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {task.timeEstimate}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                    <span className="material-symbols-outlined text-sm">event</span>
                    {task.deadline}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${task.statusColor}`}>{task.status}</span>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-orange-600 transition-colors">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
