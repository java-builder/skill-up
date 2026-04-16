import DashboardLayout from '../components/layout/DashboardLayout';
import { useState } from 'react';
import AnswerCard from '../components/qa/AnswerCard';
import toast, { Toaster } from 'react-hot-toast';

export default function QADetailPage() {
  const [newAnswer, setNewAnswer] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(true);
  const [likes, setLikes] = useState(18);

  const question = {
    id: 1,
    title: 'Làm thế nào để tối ưu hóa query trong SQL?',
    content: `Mình đang gặp vấn đề với query chạy rất chậm khi join nhiều bảng. Cụ thể là mình có 3 bảng: users, orders, và products. 

Khi mình join cả 3 bảng và filter theo ngày tháng, query mất tới 5-6 giây mới trả về kết quả. Database có khoảng 100k records.

Có cách nào để tối ưu không ạ? Mình đã thử thêm index nhưng vẫn chậm.`,
    author: {
      name: 'Nguyễn Văn B',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUNiHci1KbTdJsavcsLe_3mAWwaCBw_7s98UDoUJ-7XafTmjuztgQCMp1A49Dm2_N7XHqHIl1bzrCYoDgQdLISeGAzPKFdU06tkd3GA9y-_MAn6ADKwivVaAFQYTxI0qBLXj0Pdz6_O17ptxpr-bpD6b6msar-_engdX15HKOFhDXNaQ7WGqoHvsBpLvyTAJkSi4kQ7AgnGVIvF9F2Rcl0K1nTh_uUxiBJ5WPr8q2eYyE3ZEo_GbbQp3as32tKnOb6gw7YZ6pjYiim',
      role: 'Sinh viên',
    },
    tags: ['SQL', 'Performance', 'Database'],
    views: 245,
    createdAt: '2 giờ trước',
  };

  const answers = [
    {
      id: 1,
      content: `Có một số cách để tối ưu query của bạn:

1. **Sử dụng EXPLAIN** để xem execution plan
2. **Tạo composite index** cho các cột thường dùng trong JOIN và WHERE
3. **Tránh SELECT *** - chỉ lấy các cột cần thiết
4. **Sử dụng LIMIT** nếu không cần tất cả kết quả
5. **Cân nhắc denormalization** nếu cần thiết

Bạn có thể share query của bạn để mình xem cụ thể hơn không?`,
      author: {
        name: 'TS. Nguyễn Văn A',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP02HBhpykolzapq5rJfNyRPDLR07kqXYg13i3a9LPq_UKmUjjAlKCE05bRWKm5lUsda2jB-VTwBp-97ztJr1lp-9t9_L5PjVtCIfLiYcmGcMWwzt-T45hXUADoi4yOlKPm-dDuz0O3blp8_9ILGslFZCIRZ9nvX3Ip2Y9MVsvXTZSOdg0VLLdR1nSkL8Si1ZxdV1EMpo3rdSDMXZQcPduXvr8ziBP9fKiL0LZYG5EXQBgGQMAVq-h2IEWoufzRCsUS4ISBDZG-cKQ',
        role: 'Giảng viên',
      },
      likes: 24,
      isAccepted: true,
      createdAt: '1 giờ trước',
      comments: [
        {
          id: 1,
          content: 'Cảm ơn thầy! Em sẽ thử EXPLAIN xem sao ạ.',
          author: {
            name: 'Nguyễn Văn B',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUNiHci1KbTdJsavcsLe_3mAWwaCBw_7s98UDoUJ-7XafTmjuztgQCMp1A49Dm2_N7XHqHIl1bzrCYoDgQdLISeGAzPKFdU06tkd3GA9y-_MAn6ADKwivVaAFQYTxI0qBLXj0Pdz6_O17ptxpr-bpD6b6msar-_engdX15HKOFhDXNaQ7WGqoHvsBpLvyTAJkSi4kQ7AgnGVIvF9F2Rcl0K1nTh_uUxiBJ5WPr8q2eYyE3ZEo_GbbQp3as32tKnOb6gw7YZ6pjYiim',
          },
          createdAt: '45 phút trước',
        },
      ],
    },
    {
      id: 2,
      content: `Thêm vào câu trả lời của thầy, bạn cũng nên:

- Kiểm tra xem index có đang được sử dụng không (dùng EXPLAIN ANALYZE)
- Cân nhắc partition table nếu data quá lớn
- Cache kết quả nếu data không thay đổi thường xuyên

Mình từng gặp vấn đề tương tự và sau khi tạo composite index thì query nhanh hơn rất nhiều.`,
      author: {
        name: 'Trần Văn C',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNXRWHz6TMJhSbhPhb4uB_zsPgDeEpV2a8IOJ9a74Pj0Yry1SHRU2CKoBDl8oX9K-jx590u_XFA7W0qXItYURAnyJKSmOYaO4rJnfL6ZlCP9kTaCqjOVPL7JtGGvUOWIG3QCgjgPn9P3vB7EG7TiDIoE4XDPqEZZZw-06WfOEltkRvomuWedegGKk8WhPbh1-J_MbmYz2W2olQN8YcbyRtrH_RSFSxE681l9yxaHfpvUWdl56IkqZerIa_DwgkoSngqot3xifZBXOf',
        role: 'Sinh viên',
      },
      likes: 12,
      isAccepted: false,
      createdAt: '30 phút trước',
      comments: [],
    },
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    
    if (!isLiked) {
      toast.success('Đã thích câu hỏi');
    } else {
      toast('Đã bỏ thích câu hỏi');
    }
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    
    if (!isFavorited) {
      toast.success('Đã thêm vào yêu thích');
    } else {
      toast('Đã xóa khỏi yêu thích');
    }
  };

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAnswer.trim()) {
      console.log('New answer:', newAnswer);
      toast.success('Đã gửi câu trả lời');
      setNewAnswer('');
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Question */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex gap-6">
            {/* Vote Column */}
            <div className="flex flex-col items-center gap-4 min-w-[60px]">
              <button
                onClick={handleLike}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors cursor-pointer ${
                  isLiked ? 'bg-orange-50 text-orange-500' : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">thumb_up</span>
                <span className="text-sm font-bold">{likes}</span>
              </button>
              <button
                onClick={handleFavorite}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isFavorited ? 'bg-orange-50 text-orange-500' : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {isFavorited ? 'bookmark' : 'bookmark_border'}
                </span>
              </button>
              <div className="text-center text-slate-500 dark:text-slate-400">
                <div className="text-sm font-bold">{question.views}</div>
                <div className="text-xs">lượt xem</div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1">
              <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-4">{question.title}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={question.author.avatar}
                  alt={question.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{question.author.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{question.author.role} • {question.createdAt}</div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line">{question.content}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-orange-50 hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Answers */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">{answers.length} câu trả lời</h2>

          {answers.map((answer) => (
            <AnswerCard key={answer.id} {...answer} />
          ))}
        </div>

        {/* Answer Form */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Câu trả lời của bạn</h3>
          <form onSubmit={handleSubmitAnswer}>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              className="w-full p-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              rows={6}
              placeholder="Viết câu trả lời của bạn..."
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setNewAnswer('')}
                className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:border-orange-300 transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors cursor-pointer"
              >
                Gửi câu trả lời
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </DashboardLayout>
  );
}