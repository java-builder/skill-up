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

const statusConfig = {
  pending: { label: 'Chưa làm', color: 'bg-slate-100 text-slate-600', icon: 'schedule' },
  'in-progress': { label: 'Đang làm', color: 'bg-blue-100 text-blue-600', icon: 'pending' },
  overdue: { label: 'Quá hạn', color: 'bg-red-100 text-red-600', icon: 'error' },
  completed: { label: 'Hoàn thành', color: 'bg-green-100 text-green-600', icon: 'check_circle' },
};

const priorityConfig = {
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
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-slate-900">Bài tập của tôi</h2>
            <p className="text-slate-500 mt-1">
              Quản lý và theo dõi tiến độ các bài tập được giao
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold flex items-center gap-2 hover:border-orange-300 transition-all cursor-pointer">
              <span className="material-symbols-outlined">filter_list</span>
              Lọc
            </button>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-orange-700 transition-all shadow-lg cursor-pointer">
              <span className="material-symbols-outlined">upload</span>
              Nộp bài
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`p-4 rounded-2xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-orange-300'
            }`}
          >
            <div className="text-3xl font-black">{stats.total}</div>
            <div className="text-sm font-semibold mt-1">Tất cả</div>
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`p-4 rounded-2xl transition-all cursor-pointer ${
              filter === 'pending'
                ? 'bg-slate-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="text-3xl font-black">{stats.pending}</div>
            <div className="text-sm font-semibold mt-1">Chưa làm</div>
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`p-4 rounded-2xl transition-all cursor-pointer ${
              filter === 'in-progress'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-blue-300'
            }`}
          >
            <div className="text-3xl font-black">{stats.inProgress}</div>
            <div className="text-sm font-semibold mt-1">Đang làm</div>
          </button>
          <button
            onClick={() => setFilter('overdue')}
            className={`p-4 rounded-2xl transition-all cursor-pointer ${
              filter === 'overdue'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-red-300'
            }`}
          >
            <div className="text-3xl font-black">{stats.overdue}</div>
            <div className="text-sm font-semibold mt-1">Quá hạn</div>
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`p-4 rounded-2xl transition-all cursor-pointer ${
              filter === 'completed'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white border border-slate-200 hover:border-green-300'
            }`}
          >
            <div className="text-3xl font-black">{stats.completed}</div>
            <div className="text-sm font-semibold mt-1">Hoàn thành</div>
          </button>
        </div>

        <div className="space-y-4">
          {filteredAssignments.map((assignment) => {
            const status = statusConfig[assignment.status];
            const priority = priorityConfig[assignment.priority];

            return (
              <div
                key={assignment.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${status.color}`}>
                        <span className="material-symbols-outlined text-xs mr-1 align-middle">
                          {status.icon}
                        </span>
                        {status.label}
                      </span>
                      <span className={`text-xs font-bold ${priority.color}`}>
                        Ưu tiên: {priority.label}
                      </span>
                      <span className="text-xs text-on-surface-variant">• {assignment.course}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                      {assignment.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">{assignment.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-slate-500">
                          event
                        </span>
                        <span className="font-semibold text-slate-700">
                          Hạn nộp: {assignment.dueDate} lúc {assignment.dueTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base text-orange-600">
                          stars
                        </span>
                        <span className="font-semibold text-slate-700">{assignment.points} điểm</span>
                      </div>
                      {assignment.submitted && assignment.score !== undefined && (
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-green-600">
                            grade
                          </span>
                          <span className="font-semibold text-green-600">
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
                  <div className="flex flex-col gap-2 ml-6">
                    {!assignment.submitted ? (
                      <>
                        <button className="px-6 py-2 bg-orange-600 text-white rounded-xl font-bold text-sm hover:bg-orange-700 transition-colors cursor-pointer">
                          Làm bài
                        </button>
                        {assignment.status === 'in-progress' && (
                          <button className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:border-orange-300 transition-colors cursor-pointer">
                            Tiếp tục
                          </button>
                        )}
                      </>
                    ) : (
                      <button className="px-6 py-2 bg-green-100 text-green-600 rounded-xl font-bold text-sm cursor-pointer">
                        Đã nộp
                      </button>
                    )}
                    <button className="px-6 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:border-orange-300 transition-colors cursor-pointer"
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
