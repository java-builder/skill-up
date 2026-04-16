import { useState } from 'react';
import RoleToggle from './RoleToggle';
import InputField from './InputField';
import SocialButtons from './SocialButtons';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [role, setRole] = useState<'student' | 'lecturer'>('student');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng ký
  };

  return (
    <>
      <div className="mb-10 text-center lg:text-left">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors">Tạo tài khoản</h3>
        <p className="text-slate-600 dark:text-slate-400 transition-colors">Bắt đầu hành trình học tập của bạn tại FPT University.</p>
      </div>

      <RoleToggle
        activeRole={role}
        onRoleChange={setRole}
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="fullname"
          label="Họ và tên"
          type="text"
          placeholder="VD: Nguyễn Văn A"
          icon="badge"
        />

        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder={role === 'student' ? 'VD: ten.sv@fpt.edu.vn' : 'VD: giang.vien@fpt.edu.vn'}
          icon="mail"
        />

        {role === 'student' && (
          <InputField
            id="student-id"
            label="Mã sinh viên"
            type="text"
            placeholder="VD: DE170001"
            icon="person"
          />
        )}

        <InputField
          id="password"
          label="Mật khẩu"
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          icon="lock"
          rightIcon={showPassword ? 'visibility_off' : 'visibility'}
          onRightIconClick={() => setShowPassword(!showPassword)}
        />

        <button
          className="w-full bg-orange-500 dark:bg-orange-500 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 dark:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          type="submit"
        >
          Đăng ký
        </button>
      </form>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700 transition-colors"></div>
        </div>
        <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 transition-colors">
          <span className="bg-white dark:bg-slate-800 px-4 transition-colors">Hoặc đăng ký với</span>
        </div>
      </div>

      <SocialButtons />

      <p className="text-center text-slate-600 dark:text-slate-400 text-sm font-medium mt-10 transition-colors">
        Đã có tài khoản?{' '}
        <button
          onClick={onSwitchToLogin}
          className="text-orange-500 dark:text-orange-400 font-bold hover:underline cursor-pointer transition-colors"
        >
          Đăng nhập ngay
        </button>
      </p>
    </>
  );
}
