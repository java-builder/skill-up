import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import CourseCard from '../components/courses/CourseCard';

const courses = [
  {
    id: 1,
    title: 'Phát triển Web nâng cao',
    instructor: 'TS. Nguyễn Văn A',
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABWO58q0vhKlI75-Mf72jfPwdShIxLm7bil-CLozwOP2n5IlNcCz6z-hrIALKchvaFxmrh1o1OQOrk0ux1BE68Sw7FY7AcQyiGlOaLkDTp1Xp7F2lTU9jle4qqLc0gl64rR2T33FXea8g2vP8Ovm93vQjsZxIs77qMOLYg5HtpLoyuym-7C_rHJ9XFBv7yA1lb_YUeVpPDq5G2Ls857Y9Xjqi7Vix2Y3l1_r605l-0tdY8HEdzWaaHngQndPSJHVsDOFrQCshdzcNu',
    category: 'Lập trình',
    level: 'Nâng cao',
    color: 'orange',
  },
  {
    id: 2,
    title: 'Thiết kế UX/UI hiện đại',
    instructor: 'ThS. Trần Thị B',
    progress: 45,
    totalLessons: 20,
    completedLessons: 9,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrvTNGFRQ7g3iPdg3hgb8eAq3eRrMbwDy1jOgFeBDXk-Oo0Fz-9sAROpwgNf1-tovE-KOa47PyM3beAHSHTdyeWlPjeOFGQBFxYJQNNq4oih9CTagrSgVb4QyW9n-jip5WIF_-UEDah718epl0uajPUz00vwFuO0kNhWNPKAZCYXBzIJpzR2lpgcbwftUwVjDgosBdYW-dmbAF5FIwniIatXwmEIn4SXRsiEm7bFV2U8U4EYzw046KD15Yg8_08baoGWeTKa1mMQqn',
    category: 'Thiết kế',
    level: 'Trung cấp',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Cấu trúc dữ liệu & Giải thuật',
    instructor: 'PGS. Lê Văn C',
    progress: 90,
    totalLessons: 30,
    completedLessons: 27,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUsK5qZ8bzDP0dlpnrPNcoChfYsky9dyJzqzG5LyWJLyST7d-cZ_yQBYwVgR0W0JRbVbLX3NOfaozVGHeoVjzqAqrhllTNHrnIR_BIA9xFLGm9Jbdb_u5D_IRVZzaElAhCAkL0ZagAaw72DqGW1Uu-9jYQydosHDa0W4fE7CeWX-1FvhBIJu9Y1AstN6AQ4GqN0eHYwMMt7k3cBctR0XEkSU_B8gFzWoSQWBJktapAYryWWxcEjix_M9z6gcg25QZF4WUK2lCP0oq7',
    category: 'Lập trình',
    level: 'Nâng cao',
    color: 'purple',
  },
  {
    id: 4,
    title: 'Kỹ năng giao tiếp và thuyết trình',
    instructor: 'ThS. Phạm Thị D',
    progress: 30,
    totalLessons: 16,
    completedLessons: 5,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWwl9s_NT0zOiKvzYg1OSOS19_qwNbjKw6FkAwva-fp5OppOIASf3FGALSOgUlyXglCSC9mG4j-ltoY0jEuTJsILWj8lZDznrrihf28vtGvOLFdlSPFDgxofNJQy6Mq6c7clwq8wRcOjNYFlDI7VSXiR0Xv2aOjQKEpgag6S9MB2KiWTpSLdbqYwdisXw6Ptobht2sd7JRADmhzfI_rPdjrKIfxLfKSQfbidrWenDJAf7SwWI6U1oOnyaHNJcOJ-av6yJugmtOloEk',
    category: 'Kỹ năng mềm',
    level: 'Cơ bản',
    color: 'emerald',
  },
  {
    id: 5,
    title: 'Tiếng Nhật kinh doanh',
    instructor: 'Sensei Tanaka',
    progress: 60,
    totalLessons: 40,
    completedLessons: 24,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNXRWHz6TMJhSbhPhb4uB_zsPgDeEpV2a8IOJ9a74Pj0Yry1SHRU2CKoBDl8oX9K-jx590u_XFA7W0qXItYURAnyJKSmOYaO4rJnfL6ZlCP9kTaCqjOVPL7JtGGvUOWIG3QCgjgPn9P3vB7EG7TiDIoE4XDPqEZZZw-06WfOEltkRvomuWedegGKk8WhPbh1-J_MbmYz2W2olQN8YcbyRtrH_RSFSxE681l9yxaHfpvUWdl56IkqZerIa_DwgkoSngqot3xifZBXOf',
    category: 'Ngôn ngữ',
    level: 'Trung cấp',
    color: 'rose',
  },
  {
    id: 6,
    title: 'Làm việc nhóm hiệu quả',
    instructor: 'ThS. Hoàng Văn E',
    progress: 15,
    totalLessons: 12,
    completedLessons: 2,
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP02HBhpykolzapq5rJfNyRPDLR07kqXYg13i3a9LPq_UKmUjjAlKCE05bRWKm5lUsda2jB-VTwBp-97ztJr1lp-9t9_L5PjVtCIfLiYcmGcMWwzt-T45hXUADoi4yOlKPm-dDuz0O3blp8_9ILGslFZCIRZ9nvX3Ip2Y9MVsvXTZSOdg0VLLdR1nSkL8Si1ZxdV1EMpo3rdSDMXZQcPduXvr8ziBP9fKiL0LZYG5EXQBgGQMAVq-h2IEWoufzRCsUS4ISBDZG-cKQ',
    category: 'Kỹ năng mềm',
    level: 'Cơ bản',
    color: 'indigo',
  },
];

const filters = [
  { id: 'all', label: 'Tất cả khóa học', count: 6 },
  { id: 'enrolled', label: 'Đã tham gia', count: 3 },
  { id: 'programming', label: 'Lập trình', count: 2 },
  { id: 'design', label: 'Thiết kế', count: 1 },
  { id: 'business', label: 'Kinh doanh', count: 2 },
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Khóa học</h2>
            <p className="text-slate-500 mt-1 text-sm sm:text-base">
              Khám phá và đăng ký các khóa học tại FPT University
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 sm:px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-orange-300 transition-all cursor-pointer text-sm">
              <span className="material-symbols-outlined text-lg">bookmark</span>
              <span className="hidden sm:inline">Đã lưu</span>
            </button>
            <button className="flex-1 sm:flex-none px-4 sm:px-6 py-3 bg-orange-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all shadow-lg cursor-pointer text-sm">
              <span className="material-symbols-outlined text-lg">school</span>
              <span className="hidden sm:inline">Khóa của tôi</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 w-full lg:w-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-orange-300'
                }`}
              >
                {filter.label}
                <span className="ml-2 opacity-60">({filter.count})</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <select className="flex-1 lg:flex-none bg-white border border-slate-200 rounded-xl text-sm font-bold px-4 py-2 focus:ring-2 focus:ring-orange-500 cursor-pointer">
              <option>Tiến độ: Tất cả</option>
              <option>Đang học</option>
              <option>Hoàn thành</option>
              <option>Chưa bắt đầu</option>
            </select>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-orange-300 transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">tune</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
