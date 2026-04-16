import { useState } from 'react';
import toast from 'react-hot-toast';

interface CreateQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateQuestionModal({ isOpen, onClose }: CreateQuestionModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('programming');
  const [tags, setTags] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, content, category, tags });
    toast.success('Đã đăng câu hỏi thành công');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">Đặt câu hỏi mới</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Tiêu đề câu hỏi
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ví dụ: Làm thế nào để tối ưu hóa query trong SQL?"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Danh mục
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
            >
              <option value="programming">Lập trình</option>
              <option value="database">Cơ sở dữ liệu</option>
              <option value="design">Thiết kế</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Nội dung chi tiết
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              rows={8}
              placeholder="Mô tả chi tiết vấn đề của bạn..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-900 mb-2">
              Tags (phân cách bằng dấu phẩy)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ví dụ: SQL, Performance, Database"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:border-orange-300 transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors cursor-pointer"
            >
              Đăng câu hỏi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
