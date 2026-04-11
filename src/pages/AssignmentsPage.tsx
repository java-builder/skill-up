import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const assignments = [
  {
    id: 1,
    title: 'Bài tập tuần 5: React Hooks nâng cao',
    course: 'Phát triển Web nâng cao',
    dueDate: '2024-10-15',
    dueTime: '23:59',
    status: 'pending',
    priority: 'high',
    description: 'Xây dựng ứng dụng Todo List sử dụng useReducer và Context API',
    points: 100,
    submitted: false,
  },
  {
    id: 2,
    title: 'Thiết kế giao diện Mobile App',
    course: 'Thiết kế UX/UI hiện đại',
    dueDate: '2024-10-18',
    dueTime: '17:00',
    status: 'in-progress',
    priority: 'medium',
    description: 'Tạo wireframe và mockup cho ứng dụng đặt đồ ăn',
    points: 80,
    submitted: false,
    progress: 60,
  },
  {
    id: 3,
    title: 'Thuật toán sắp xếp và tìm kiếm',
    course: 'Cấu trúc dữ liệu & Giải thuật',
    dueDate: '2024-10-12',
    dueTime: '14:00',
    status: 'overdue',
    priority: 'high',
    description: 'Cài đặt và phân tích độ phức tạp của Quick Sort, Merge Sort',
    points: 120,
    submitted: false,
  },
  {
    id: 4,
    title: 'Bài thuyết trình nhóm',
    course: 'Kỹ năng giao tiếp và thuyết trình',
    dueDate: '2024-10-20',
    dueTime: '23:59',
    status: 'pending',
    priority: 'low',
    description: 'Chuẩn bị slide và thuyết trình về chủ đề "Làm việc nhóm hiệu quả"',
    points: 60,
    submitted: false,
  },
  {
    id: 5,
    title: 'Bài kiểm tra giữa kỳ',
    course: 'Cấu trúc dữ liệu & Giải thuật',
    dueDate: '2024-10-10',
    dueTime: '09:30',
    status: 'completed',
    priority: 'high',
    description: 'Kiểm tra trắc nghiệm 60 phút',
    points: 100,
    submitted: true,
    score: 85,
  },
];

const statusConfig: Record<string, { label: string; color: string; icon: string }> = {
  pending: { label: 'Chưa làm', color: 'bg-slate-100 text-slate-600', icon: 'schedule' },
  'in-progress': { label: 'Đang làm', color: 'bg-blue-100 text-blue-600', icon: 'pending' },
  overdue: { label: 'Quá hạn', color: 'bg-red-100 text-red-600', icon: 'error' },
  completed: { label: 'Hoàn thành', color: 'bg-green-100 text-green-600', icon: 'check_circle' },
};

const priorityConfig: Record<string, { label: string; color: string }> = {
  high: { label: 'Cao', color: 'text-red-600' },
  medium: { label: 'Trung bình', color: 'text-orange-600' },
  low: { label: 'Thấp', color: 'text-slate-600' },
};

export default function AssignmentsPage() {
  const [filter, setFilter] = useState('all');

  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === 'all') return true;
    return assignment.status === filter;
  });

  const stats = {
    total: assignments.length,
    pending: assignments.filter((a) => a.status === 'pending').length,
    inProgress: assignments.filter((a) => a.status === 'in-progress').length,
    overdue: assignments.filter((a) => a.status === 'overdue').length,
    completed: assignments.filter((a) => a.status === 'completed').length,
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Bài tập của tôi</h2>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              Quản lý và theo dõi tiến độ các bài tập được giao
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 sm:px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-orange-300 transition-all cursor-pointer text-sm">
              <span className="material-symbols-outlined text-lg">filter_list</span>
              <span className="hidden sm:inline">Lọc</span>
            </button>
            <button className="flex-1 sm:flex-none px-4 sm:px-6 py-3 bg-orange-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all shadow-lg cursor-pointer text-sm">
              <span className="material-symbols-outlined text-lg">upload</span>
              <span className="hidden sm:inline">Nộp bài</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-orange-300'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-black">{stats.total}</div>
            <div className="text-xs sm:text-sm font-semibold mt-1">Tất cả</div>
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all cursor-pointer ${
              filter === 'pending'
                ? 'bg-slate-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-black">{stats.pending}</div>
            <div className="text-xs sm:text-sm font-semibold mt-1">Chưa làm</div>
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all cursor-pointer ${
              filter === 'in-progress'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-blue-300'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-black">{stats.inProgress}</div>
            <div className="text-xs sm:text-sm font-semibold mt-1">Đang làm</div>
          </button>
          <button
            onClick={() => setFilter('overdue')}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all cursor-pointer ${
              filter === 'overdue'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-red-300'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-black">{stats.overdue}</div>
            <div className="text-xs sm:text-sm font-semibold mt-1">Quá hạn</div>
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all cursor-pointer ${
              filter === 'completed'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-green-300'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-black">{stats.completed}</div>
            <div className="text-xs sm:text-sm font-semibold mt-1">Hoàn thành</div>
          </button>
        </div>

        <div className="space-y-4">
          {filteredAssignments.map((assignment) => {
            const status = statusConfig[assignment.status];
            const priority = priorityConfig[assignment.priority];

            return (
              <div
                key={assignment.id}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-4">
                  <div className="flex-1 w-full">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${status.color}`}>
                        <span className="material-symbols-outlined text-xs mr-1 align-middle">
                          {status.icon}
                        </span>
                        {status.label}
                      </span>
                      <span className={`text-xs font-bold ${priority.color}`}>
                        Ưu tiên: {priority.label}
                      </span>
                      <span className="text-xs text-on-surface-variant hidden sm:inline">• {assignment.course}</span>
                    </div>
                    <span className="text-xs text-slate-500 block sm:hidden mb-2">{assignment.course}</span>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                      {assignment.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">{assignment.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-slate-500">
                          event
                        </span>
                        <span className="font-semibold text-slate-700 text-xs sm:text-sm">
                          Hạn nộp: {assignment.dueDate} lúc {assignment.dueTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-orange-600">
                          stars
                        </span>
                        <span className="font-semibold text-slate-700 text-xs sm:text-sm">{assignment.points} điểm</span>
                      </div>
                      {assignment.submitted && assignment.score !== undefined && (
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-green-600">
                            grade
                          </span>
                          <span className="font-semibold text-green-600 text-xs sm:text-sm">
                            Điểm: {assignment.score}/{assignment.points}
                          </span>
                        </div>
                      )}
                    </div>
                    {assignment.progress !== undefined && (
                      <div className="mt-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-500 font-semibold">Tiến độ</span>
                          <span className="font-bold text-slate-900">{assignment.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 transition-all"
                            style={{ width: `${assignment.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex lg:flex-col gap-2 w-full lg:w-auto lg:ml-6">
                    {!assignment.submitted ? (
                      <>
                        <button className="flex-1 lg:flex-none px-4 sm:px-6 py-2 bg-orange-600 text-white rounded-xl font-bold text-sm hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap">
                          Làm bài
                        </button>
                        {assignment.status === 'in-progress' && (
                          <button className="flex-1 lg:flex-none px-4 sm:px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:border-orange-300 transition-colors cursor-pointer whitespace-nowrap">
                            Tiếp tục
                          </button>
                        )}
                      </>
                    ) : (
                      <button className="flex-1 lg:flex-none px-4 sm:px-6 py-2 bg-green-100 text-green-600 rounded-xl font-bold text-sm cursor-pointer whitespace-nowrap">
                        Đã nộp
                      </button>
                    )}
                    <button className="flex-1 lg:flex-none px-4 sm:px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:border-orange-300 transition-colors cursor-pointer whitespace-nowrap"
                      onClick={() => window.location.href = `/assignments/${assignment.id}`}>
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
