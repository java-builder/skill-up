import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSidebarContext } from './DashboardLayout';

const menuItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Tổng quan' },
  { path: '/assignments', icon: 'assignment', label: 'Bài tập' },
  { path: '/tasks', icon: 'task_alt', label: 'Nhiệm vụ' },
  { path: '/courses', icon: 'school', label: 'Khóa học' },
  { path: '/qa', icon: 'forum', label: 'Hỏi đáp' },
  { path: '/certificates', icon: 'workspace_premium', label: 'Chứng chỉ' },
  { path: '/profile', icon: 'person', label: 'Hồ sơ' },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useSidebarContext();

  const handleLogout = () => {
    // Clear any auth data if needed
    // localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[45] backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 flex flex-col bg-slate-50 z-[55] transition-transform duration-300 shadow-xl lg:shadow-none ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 lg:p-8">
          <h1 className="text-xl font-black text-orange-600 tracking-tight">Academic Pulse</h1>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-1 opacity-60">
            Đại học FPT Đà Nẵng
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'text-orange-600 font-bold border-r-4 border-orange-600 bg-orange-50'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-orange-50'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200/50">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors w-full cursor-pointer"
          >
            <span className="material-symbols-outlined">logout</span>
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>
    </>
  );
}
