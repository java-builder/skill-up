import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';

const assignmentData: Record<string, any> = {
  '1': {
    id: 1,
    title: 'Bài tập tuần 5: React Hooks nâng cao',
    course: 'Phát triển Web nâng cao',
    instructor: 'TS. Nguyễn Văn A',
    dueDate: '2024-10-15',
    dueTime: '23:59',
    status: 'pending',
    priority: 'high',
    description: 'Xây dựng ứng dụng Todo List sử dụng useReducer và Context API',
    points: 100,
    submitted: false,
    requirements: [
      'Sử dụng React Hooks (useState, useReducer, useContext)',
      'Implement CRUD operations cho todo items',
      'Có chức năng filter và search',
      'Responsive design cho mobile và desktop',
      'Code phải clean và có comments',
    ],
    resources: [
      { name: 'React Hooks Documentation', url: '#' },
      { name: 'Context API Guide', url: '#' },
      { name: 'Sample Code Repository', url: '#' },
    ],
    submissions: [],
  },
  '2': {
    id: 2,
    title: 'Thiết kế giao diện Mobile App',
    course: 'Thiết kế UX/UI hiện đại',
    instructor: 'ThS. Trần Thị B',
    dueDate: '2024-10-18',
    dueTime: '17:00',
    status: 'in-progress',
    priority: 'medium',
    description: 'Tạo wireframe và mockup cho ứng dụng đặt đồ ăn',
    points: 80,
    submitted: false,
    progress: 60,
    requirements: [
      'Wireframe cho ít nhất 5 màn hình chính',
      'High-fidelity mockup cho 3 màn hình',
      'Design system với color palette và typography',
      'Prototype có thể tương tác',
      'Presentation slide giải thích design decisions',
    ],
    resources: [
      { name: 'Figma Template', url: '#' },
      { name: 'Design Inspiration', url: '#' },
      { name: 'UI Kit', url: '#' },
    ],
    submissions: [
      { date: '2024-10-10', file: 'wireframe-v1.fig', status: 'draft' },
    ],
  },
};

export default function AssignmentDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const assignment = assignmentData[id || '1'];

  if (!assignment) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Không tìm thấy bài tập</h2>
          <button
            onClick={() => navigate('/assignments')}
            className="mt-4 px-6 py-3 bg-primary text-white rounded-xl font-bold cursor-pointer"
          >
            Quay lại danh sách
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/assignments')}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-500">
                {assignment.course}
              </span>
              <span className="text-sm text-on-surface-variant">• {assignment.instructor}</span>
            </div>
            <h1 className="text-4xl font-black text-on-surface tracking-tight">{assignment.title}</h1>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-surface-container-low text-on-surface rounded-3xl font-bold flex items-center gap-2 hover:bg-surface-container transition-all cursor-pointer">
              <span className="material-symbols-outlined">bookmark</span>
              Lưu
            </button>
            <button className="px-6 py-3 bg-primary text-on-primary rounded-3xl font-bold flex items-center gap-2 hover:scale-[1.02] transition-all shadow-lg shadow-orange-500/20 cursor-pointer">
              <span className="material-symbols-outlined">upload</span>
              Nộp bài
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Mô tả bài tập</h2>
              <p className="text-on-surface-variant leading-relaxed">{assignment.description}</p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Yêu cầu</h2>
              <ul className="space-y-3">
                {assignment.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                    <span className="text-on-surface-variant">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Tài liệu tham khảo</h2>
              <div className="space-y-3">
                {assignment.resources.map((resource: any, index: number) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="font-semibold">{resource.name}</span>
                    <span className="material-symbols-outlined ml-auto text-on-surface-variant">
                      open_in_new
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {assignment.submissions && assignment.submissions.length > 0 && (
              <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Lịch sử nộp bài</h2>
                <div className="space-y-3">
                  {assignment.submissions.map((submission: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-600">draft</span>
                        <div>
                          <p className="font-semibold">{submission.file}</p>
                          <p className="text-xs text-on-surface-variant">{submission.date}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-600">
                        {submission.status === 'draft' ? 'Bản nháp' : 'Đã nộp'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-3xl text-white shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined">event</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">Hạn nộp</span>
              </div>
              <div className="text-3xl font-black mb-1">{assignment.dueDate}</div>
              <div className="text-lg font-semibold opacity-90">Lúc {assignment.dueTime}</div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Thời gian còn lại</span>
                  <span className="text-sm font-black">3 ngày</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[60%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-on-surface-variant">Điểm số</span>
                <span className="text-2xl font-black text-orange-500">{assignment.points}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-on-surface-variant">Độ ưu tiên</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600">
                  {assignment.priority === 'high' ? 'Cao' : assignment.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-on-surface-variant">Trạng thái</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                  {assignment.status === 'pending'
                    ? 'Chưa làm'
                    : assignment.status === 'in-progress'
                    ? 'Đang làm'
                    : assignment.status === 'completed'
                    ? 'Hoàn thành'
                    : 'Quá hạn'}
                </span>
              </div>
            </div>

            {assignment.progress !== undefined && (
              <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-on-surface-variant">Tiến độ</span>
                  <span className="text-xl font-black">{assignment.progress}%</span>
                </div>
                <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all"
                    style={{ width: `${assignment.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-on-surface-variant mt-3">
                  Bạn đã hoàn thành {assignment.progress}% bài tập này
                </p>
              </div>
            )}

            <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm">
              <h3 className="font-bold mb-4">Hành động</h3>
              <div className="space-y-2">
                <button className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity cursor-pointer">
                  Bắt đầu làm bài
                </button>
                <button className="w-full py-3 bg-surface-container text-on-surface rounded-xl font-bold hover:bg-surface-container-high transition-colors cursor-pointer">
                  Lưu bản nháp
                </button>
                <button className="w-full py-3 bg-surface-container text-on-surface rounded-xl font-bold hover:bg-surface-container-high transition-colors cursor-pointer">
                  Hỏi giảng viên
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
