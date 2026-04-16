import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface QuestionCardProps {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
  answers: number;
  views: number;
  likes: number;
  isLiked: boolean;
  isFavorited: boolean;
  hasAcceptedAnswer: boolean;
  createdAt: string;
}

export default function QuestionCard(props: QuestionCardProps) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const [isFavorited, setIsFavorited] = useState(props.isFavorited);
  const [likes, setLikes] = useState(props.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    
    if (!isLiked) {
      toast.success('Đã thích câu hỏi');
    } else {
      toast('Đã bỏ thích câu hỏi');
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    
    if (!isFavorited) {
      toast.success('Đã thêm vào yêu thích');
    } else {
      toast('Đã xóa khỏi yêu thích');
    }
  };

  const handleClick = () => {
    navigate(`/qa/${props.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-orange-300 dark:hover:border-orange-500 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex gap-6">
        {/* Stats Column */}
        <div className="flex flex-col items-center gap-3 min-w-[80px]">
          <div className="text-center">
            <div className="text-2xl font-black text-slate-900 dark:text-slate-100 transition-colors">{props.answers}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">câu trả lời</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-slate-600 dark:text-slate-400 transition-colors">{props.views}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">lượt xem</div>
          </div>
          {props.hasAcceptedAnswer && (
            <div className="w-8 h-8 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-lg transition-colors">check_circle</span>
            </div>
          )}
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            {props.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 transition-colors">{props.content}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={props.author.avatar}
                alt={props.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 transition-colors">{props.author.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 transition-colors">{props.author.role} • {props.createdAt}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  isLiked
                    ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400'
                    : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-500 dark:hover:text-orange-400'
                }`}
              >
                <span className="material-symbols-outlined text-lg">thumb_up</span>
                <span className="text-sm font-bold">{likes}</span>
              </button>
              <button
                onClick={handleFavorite}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isFavorited
                    ? 'bg-orange-50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400'
                    : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-500 dark:hover:text-orange-400'
                }`}
              >
                <span className="material-symbols-outlined text-lg">
                  {isFavorited ? 'bookmark' : 'bookmark_border'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
