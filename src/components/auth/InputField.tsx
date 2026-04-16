interface InputFieldProps {
  id: string;
  label?: string;
  type: string;
  placeholder: string;
  icon: string;
  rightIcon?: string;
  onRightIconClick?: () => void;
}

export default function InputField({
  id,
  label,
  type,
  placeholder,
  icon,
  rightIcon,
  onRightIconClick,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-bold text-slate-600 dark:text-slate-400 ml-1 transition-colors" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 group-focus-within:text-orange-500 dark:group-focus-within:text-orange-400 transition-colors">
          {icon}
        </span>
        <input
          className="w-full pl-12 pr-12 py-4 bg-white dark:bg-slate-800 border-0 rounded-2xl focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-orange-400/20 focus:bg-white dark:focus:bg-slate-700 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm ring-1 ring-slate-200 dark:ring-slate-700"
          id={id}
          placeholder={placeholder}
          type={type}
        />
        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
          >
            {rightIcon}
          </button>
        )}
      </div>
    </div>
  );
}
