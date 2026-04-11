import { useState } from 'react';
import toast from 'react-hot-toast';

interface Comment {
  id: number;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
}

interface AnswerCardProps {
  id: number;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  likes: number;
  isAccepted: boolean;
  createdAt: string;
  comments: Comment[];
}

export default function AnswerCard(props: AnswerCardProps) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    
    if (!isLiked) {
      toast.success('Đã thích câu trả lời');
    } else {
      toast('Đã bỏ thích câu trả lời');
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      console.log('New comment:', newComment);
      toast.success('Đã gửi bình luận');
      setNewComment('');
      setShowCommentForm(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex gap-6">
        {/* Vote Column */}
        <div className="flex flex-col items-center gap-3 min-w-[60px]">
          <button
            onClick={handleLike}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors cursor-pointer ${
              isLiked
                ? 'bg-orange-50 text-orange-600'
                : 'bg-slate-50 text-slate-600 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            <span className="material-symbols-outlined text-xl">thumb_up</span>
            <span className="text-sm font-bold">{likes}</span>
          </button>
          {props.isAccepted && (
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
            </div>
          )}
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={props.author.avatar}
              alt={props.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-bold text-slate-900">{props.author.name}</div>
              <div className="text-xs text-slate-500">{props.author.role} • {props.createdAt}</div>
            </div>
            {props.isAccepted && (
              <span className="ml-auto px-3 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-bold">
                Câu trả lời được chấp nhận
              </span>
            )}
          </div>

          <div className="prose prose-slate max-w-none mb-4">
            <p className="text-slate-700 whitespace-pre-line">{props.content}</p>
          </div>

          {/* Comments */}
          {props.comments.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
              {props.comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 bg-slate-50 p-3 rounded-lg">
                  <img
                    src={comment.author.avatar}
                    alt={comment.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-900">{comment.author.name}</div>
                    <p className="text-sm text-slate-700 mt-1">{comment.content}</p>
                    <span className="text-xs text-slate-500 mt-1 block">{comment.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Comment Form */}
          {showCommentForm ? (
            <form onSubmit={handleSubmitComment} className="mt-4 pt-4 border-t border-slate-100">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                rows={3}
                placeholder="Viết bình luận..."
                autoFocus
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowCommentForm(false)}
                  className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors cursor-pointer"
                >
                  Gửi
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setShowCommentForm(true)}
              className="mt-4 text-sm font-bold text-orange-600 hover:underline cursor-pointer"
            >
              Thêm bình luận
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
