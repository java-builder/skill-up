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
        <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline group-focus-within:text-orange-600 transition-colors">
          {icon}
        </span>
        <input
          className="w-full pl-12 pr-12 py-4 bg-surface-container-lowest border-0 rounded-2xl focus:ring-2 focus:ring-orange-600/20 focus:bg-white transition-all text-on-surface placeholder:text-outline-variant shadow-sm ring-1 ring-outline-variant/10"
          id={id}
          placeholder={placeholder}
          type={type}
        />
        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline hover:text-on-surface transition-colors cursor-pointer"
          >
            {rightIcon}
          </button>
        )}
      </div>
    </div>
  );
}
