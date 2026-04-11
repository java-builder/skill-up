interface RoleToggleProps {
  activeRole: 'student' | 'lecturer';
  onRoleChange: (role: 'student' | 'lecturer') => void;
}

export default function RoleToggle({ activeRole, onRoleChange }: RoleToggleProps) {
  return (
    <div className="p-1 bg-surface-container-low rounded-2xl flex mb-8">
      <button
        type="button"
        onClick={() => onRoleChange('student')}
        className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
          activeRole === 'student'
            ? 'bg-white shadow-sm text-primary'
            : 'text-on-surface-variant hover:text-on-surface'
        }`}
      >
        Sinh viên
      </button>
      <button
        type="button"
        onClick={() => onRoleChange('lecturer')}
        className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
          activeRole === 'lecturer'
            ? 'bg-white shadow-sm text-primary'
            : 'text-on-surface-variant hover:text-on-surface'
        }`}
      >
        Giảng viên
      </button>
    </div>
  );
}
