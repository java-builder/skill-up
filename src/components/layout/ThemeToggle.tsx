import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
      aria-label="Chuyển đổi giao diện"
    >
      <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-xl">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {theme === 'light' ? 'Tối' : 'Sáng'}
      </span>
    </button>
  );
}
