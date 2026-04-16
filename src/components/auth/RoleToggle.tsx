interface RoleToggleProps {
  activeRole: 'student' | 'lecturer';
  onRoleChange: (role: 'student' | 'lecturer') => void;
}

export default function RoleToggle({ activeRole, onRoleChange }: RoleToggleProps) {
  return (
    <div className="p-1 bg-slate-100 dark:bg-slate-700 rounded-2xl flex mb-8 transition-colors">
      <button
        type="button"
        onClick={() => onRoleChange('student')}
        className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
          activeRole === 'student'
            ? 'bg-white dark:bg-slate-800 shadow-sm text-orange-500 dark:text-orange-400'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
        }`}
      >
        Sinh viên
      </button>
      <button
        type="button"
        onClick={() => onRoleChange('lecturer')}
        className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
          activeRole === 'lecturer'
            ? 'bg-white dark:bg-slate-800 shadow-sm text-orange-500 dark:text-orange-400'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
        }`}
      >
        Giảng viên
      </button>
    </div>
  );
}
