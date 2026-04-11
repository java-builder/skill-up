import DashboardLayout from '../components/layout/DashboardLayout';
import { useState } from 'react';
import CreateQuestionModal from '../components/qa/CreateQuestionModal';
import QuestionCard from '../components/qa/QuestionCard';
import { Toaster } from 'react-hot-toast';

const categories = [
  { id: 'all', name: 'Tất cả', icon: 'forum' },
  { id: 'programming', name: 'Lập trình', icon: 'code' },
  { id: 'database', name: 'Cơ sở dữ liệu', icon: 'storage' },
  { id: 'design', name: 'Thiết kế', icon: 'palette' },
  { id: 'other', name: 'Khác', icon: 'help' },
];

const questions = [
  {
    id: 1,
    title: 'Làm thế nào để tối ưu hóa query trong SQL?',
    content: 'Mình đang gặp vấn đề với query chạy rất chậm khi join nhiều bảng. Có cách nào để tối ưu không ạ?',
    author: {
      name: 'Nguyễn Văn B',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUNiHci1KbTdJsavcsLe_3mAWwaCBw_7s98UDoUJ-7XafTmjuztgQCMp1A49Dm2_N7XHqHIl1bzrCYoDgQdLISeGAzPKFdU06tkd3GA9y-_MAn6ADKwivVaAFQYTxI0qBLXj0Pdz6_O17ptxpr-bpD6b6msar-_engdX15HKOFhDXNaQ7WGqoHvsBpLvyTAJkSi4kQ7AgnGVIvF9F2Rcl0K1nTh_uUxiBJ5WPr8q2eYyE3ZEo_GbbQp3as32tKnOb6gw7YZ6pjYiim',
      role: 'Sinh viên',
    },
    category: 'database',
    tags: ['SQL', 'Performance', 'Database'],
    answers: 12,
    views: 245,
    likes: 18,
    isLiked: false,
    isFavorited: true,
    hasAcceptedAnswer: true,
    createdAt: '2 giờ trước',
  },
  {
    id: 2,
    title: 'React hooks useEffect chạy nhiều lần?',
    content: 'Em dùng useEffect nhưng nó cứ chạy liên tục, làm sao để nó chỉ chạy 1 lần khi component mount?',
    author: {
      name: 'Trần Thị C',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP02HBhpykolzapq5rJfNyRPDLR07kqXYg13i3a9LPq_UKmUjjAlKCE05bRWKm5lUsda2jB-VTwBp-97ztJr1lp-9t9_L5PjVtCIfLiYcmGcMWwzt-T45hXUADoi4yOlKPm-dDuz0O3blp8_9ILGslFZCIRZ9nvX3Ip2Y9MVsvXTZSOdg0VLLdR1nSkL8Si1ZxdV1EMpo3rdSDMXZQcPduXvr8ziBP9fKiL0LZYG5EXQBgGQMAVq-h2IEWoufzRCsUS4ISBDZG-cKQ',
      role: 'Sinh viên',
    },
    category: 'programming',
    tags: ['React', 'Hooks', 'JavaScript'],
    answers: 8,
    views: 156,
    likes: 24,
    isLiked: true,
    isFavorited: false,
    hasAcceptedAnswer: true,
    createdAt: '5 giờ trước',
  },
  {
    id: 3,
    title: 'Cách thiết kế UI/UX cho mobile app?',
    content: 'Mình đang làm đồ án mobile app, có ai có kinh nghiệm về thiết kế UI/UX cho mobile không ạ? Cần lời khuyên về layout và navigation.',
    author: {
      name: 'Lê Văn D',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNXRWHz6TMJhSbhPhb4uB_zsPgDeEpV2a8IOJ9a74Pj0Yry1SHRU2CKoBDl8oX9K-jx590u_XFA7W0qXItYURAnyJKSmOYaO4rJnfL6ZlCP9kTaCqjOVPL7JtGGvUOWIG3QCgjgPn9P3vB7EG7TiDIoE4XDPqEZZZw-06WfOEltkRvomuWedegGKk8WhPbh1-J_MbmYz2W2olQN8YcbyRtrH_RSFSxE681l9yxaHfpvUWdl56IkqZerIa_DwgkoSngqot3xifZBXOf',
      role: 'Sinh viên',
    },
    category: 'design',
    tags: ['UI/UX', 'Mobile', 'Design'],
    answers: 5,
    views: 89,
    likes: 12,
    isLiked: false,
    isFavorited: false,
    hasAcceptedAnswer: false,
    createdAt: '1 ngày trước',
  },
  {
    id: 4,
    title: 'Giải thích về Big O notation?',
    content: 'Thầy có thể giải thích rõ hơn về Big O notation không ạ? Em chưa hiểu lắm về cách tính độ phức tạp thuật toán.',
    author: {
      name: 'Phạm Thị E',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_KM2cEyWMeroEb3cugluuUaxafQzR1kgriCIFDduUhGt2Q6YsysgnjZSTlRiUkEhXggFcFCzocwnDz7NhXMMbFc6fypg4d6IzSxuVhN5wnIyb3jsy0S3z6c8RIx8gFoj2iYWXOeUljd1OQJlWkItlEji1uXVtiZMsUbQB02DqrAyq7cQ9SJva1tKZvcr15nKbKAePNR2PfKu8AMmJ6e4HG7msOL1R8nQsLyn_9CYNfnrwh8pQw3RWBP9Hpx_c_4L6lUGyPCYw4jV6',
      role: 'Sinh viên',
    },
    category: 'programming',
    tags: ['Algorithm', 'Data Structure', 'Theory'],
    answers: 15,
    views: 320,
    likes: 45,
    isLiked: true,
    isFavorited: true,
    hasAcceptedAnswer: true,
    createdAt: '2 ngày trước',
  },
];

export default function QAPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredQuestions = activeCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === activeCategory);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Hỏi đáp</h1>
            <p className="text-slate-500 mt-1">Đặt câu hỏi và nhận câu trả lời từ cộng đồng</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined">add</span>
            Đặt câu hỏi
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-orange-600 text-2xl">forum</span>
              <span className="text-xs font-bold text-slate-500">Tổng số</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">248</h3>
            <p className="text-slate-500 text-sm mt-1">Câu hỏi</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
              <span className="text-xs font-bold text-slate-500">Đã giải quyết</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">186</h3>
            <p className="text-slate-500 text-sm mt-1">Câu trả lời được chấp nhận</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-blue-600 text-2xl">people</span>
              <span className="text-xs font-bold text-slate-500">Thành viên</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900">1,245</h3>
            <p className="text-slate-500 text-sm mt-1">Người tham gia</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl shadow-sm text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-2xl">star</span>
              <span className="text-xs font-bold">Câu hỏi của bạn</span>
            </div>
            <h3 className="text-3xl font-black">12</h3>
            <p className="text-white/80 text-sm mt-1">Đã đặt</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="recent">Mới nhất</option>
            <option value="popular">Phổ biến</option>
            <option value="unanswered">Chưa trả lời</option>
            <option value="solved">Đã giải quyết</option>
          </select>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} {...question} />
          ))}
        </div>
      </div>

      <CreateQuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Toaster position="top-right" />
    </DashboardLayout>
  );
}
