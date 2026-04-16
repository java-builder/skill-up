import DashboardLayout from '../components/layout/DashboardLayout';
import { Link } from 'react-router-dom';

const upcomingDeadlines = [
  {
    id: 1,
    type: 'assignment',
    title: 'Bài tập lớn: Xây dựng hệ thống quản lý',
    course: 'Lập trình Web',
    deadline: '2 ngày nữa',
    date: '15/04/2026',
    time: '23:59',
    priority: 'high',
    status: 'Chưa nộp',
  },
  {
    id: 2,
    type: 'exam',
    title: 'Kiểm tra giữa kỳ',
    course: 'Cấu trúc dữ liệu & Giải thuật',
    deadline: '5 ngày nữa',
    date: '18/04/2026',
    time: '14:00',
    priority: 'high',
    status: 'Sắp diễn ra',
  },
  {
    id: 3,
    type: 'assignment',
    title: 'Bài tập tuần 8',
    course: 'Cơ sở dữ liệu',
    deadline: '1 tuần nữa',
    date: '20/04/2026',
    time: '23:59',
    priority: 'medium',
    status: 'Đang làm',
  },
];

const activeCourses = [
  {
    id: 1,
    name: 'Lập trình Web',
    code: 'PRJ301',
    progress: 65,
    nextClass: 'Thứ 2, 13:30',
    instructor: 'TS. Nguyễn Văn A',
    assignments: 2,
  },
  {
    id: 2,
    name: 'Cấu trúc dữ liệu & Giải thuật',
    code: 'DSA201',
    progress: 78,
    nextClass: 'Thứ 3, 09:00',
    instructor: 'ThS. Trần Thị B',
    assignments: 1,
  },
  {
    id: 3,
    name: 'Cơ sở dữ liệu',
    code: 'DBI202',
    progress: 52,
    nextClass: 'Thứ 4, 15:00',
    instructor: 'TS. Lê Văn C',
    assignments: 1,
  },
];

const recentActivities = [
  {
    id: 1,
    icon: 'check_circle',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    title: 'Hoàn thành bài tập',
    description: 'Bài tập tuần 7 - Lập trình Web',
    time: '2 giờ trước',
    xp: '+50 XP',
  },
  {
    id: 2,
    icon: 'workspace_premium',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    title: 'Đạt thành tích mới',
    description: 'Code Master - Hoàn thành 10 bài tập không lỗi',
    time: '1 ngày trước',
    xp: '+100 XP',
  },
  {
    id: 3,
    icon: 'comment',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    title: 'Nhận xét từ giảng viên',
    description: 'Bài tập tuần 6 - Cấu trúc dữ liệu',
    time: '2 ngày trước',
    xp: '',
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-500 p-8 rounded-3xl text-white">
          <div className="relative z-10">
            <h1 className="text-3xl font-black mb-2">Xin chào, Nguyễn Văn An! 👋</h1>
            <p className="text-white/90 text-lg">Hôm nay là Thứ 7, 11 tháng 4 năm 2026</p>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white dark:bg-slate-800/10 rounded-full blur-3xl"></div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="material-symbols-outlined text-orange-500 text-3xl">assignment</span>
              <span className="px-2 py-1 bg-orange-50 text-orange-500 rounded-lg text-xs font-bold">Cần làm</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">4</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Bài tập chưa nộp</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="material-symbols-outlined text-blue-600 text-3xl">school</span>
              <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">Đang học</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">6</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Khóa học học kỳ này</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
              <span className="material-symbols-outlined text-green-600 text-3xl">trending_up</span>
              <span className="px-2 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-bold">GPA</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-slate-100">3.65</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Điểm trung bình tích lũy</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-500 p-6 rounded-2xl shadow-sm text-white">
            <div className="flex items-center justify-between mb-3">
              <span className="material-symbols-outlined text-3xl">local_fire_department</span>
              <span className="px-2 py-1 bg-white dark:bg-slate-800/20 rounded-lg text-xs font-bold">Streak</span>
            </div>
            <h3 className="text-3xl font-black">14 ngày</h3>
            <p className="text-white/80 text-sm mt-1">Chuỗi học liên tục</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Deadlines */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 dark:text-orange-400">schedule</span>
                Deadline sắp tới
              </h2>
              <Link
                to="/assignments"
                className="text-orange-500 dark:text-orange-400 text-sm font-bold hover:underline cursor-pointer"
              >
                Xem tất cả
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingDeadlines.map((item) => (
                <div
                  key={item.id}
                  className={`p-5 rounded-xl border-l-4 ${
                    item.priority === 'high' 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/10 dark:border-red-400' 
                      : 'border-orange-500 bg-orange-50 dark:bg-orange-900/10 dark:border-orange-400'
                  } hover:shadow-md transition-all cursor-pointer`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`material-symbols-outlined text-sm ${
                            item.type === 'exam' ? 'text-red-600 dark:text-red-400' : 'text-orange-500 dark:text-orange-400'
                          }`}
                        >
                          {item.type === 'exam' ? 'quiz' : 'assignment'}
                        </span>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase">{item.course}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">calendar_today</span>
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {item.time}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-black ${
                          item.priority === 'high' ? 'text-red-600 dark:text-red-400' : 'text-orange-500 dark:text-orange-400'
                        }`}
                      >
                        {item.deadline}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{item.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500 dark:text-orange-400">history</span>
              Hoạt động gần đây
            </h2>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className={`w-10 h-10 rounded-xl ${activity.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <span className={`material-symbols-outlined text-lg ${activity.iconColor}`}>
                      {activity.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{activity.title}</h4>
                      {activity.xp && (
                        <span className="text-xs font-bold text-orange-500 whitespace-nowrap">{activity.xp}</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 line-clamp-2">{activity.description}</p>
                    <span className="text-xs text-slate-500 dark:text-slate-500 mt-1 block">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
              Xem tất cả hoạt động
            </button>
          </div>
        </div>

        {/* Active Courses */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500 dark:text-orange-400">school</span>
              Khóa học đang học
            </h2>
            <Link to="/courses" className="text-orange-500 dark:text-orange-400 text-sm font-bold hover:underline cursor-pointer">
              Xem tất cả
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <div
                key={course.id}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-orange-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded">
                      {course.code}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mt-2">{course.name}</h3>
                  </div>
                  {course.assignments > 0 && (
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {course.assignments}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500 dark:text-slate-400">Tiến độ</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-sm">person</span>
                      {course.instructor}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-orange-500">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      Buổi học tiếp: {course.nextClass}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
