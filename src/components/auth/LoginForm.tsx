import { useState } from 'react';
import RoleToggle from './RoleToggle';
import InputField from './InputField';
import SocialButtons from './SocialButtons';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [role, setRole] = useState<'student' | 'lecturer'>('student');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng nhập
  };

  return (
    <>
      <div className="mb-10 text-center lg:text-left">
        <h3 className="text-2xl font-bold text-on-surface mb-2">Chào mừng trở lại</h3>
        <p className="text-on-surface-variant">Truy cập bảng điều khiển và hồ sơ học tập của bạn.</p>
      </div>

      <RoleToggle
        activeRole={role}
        onRoleChange={setRole}
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="id"
          label={role === 'student' ? 'Mã sinh viên hoặc Email' : 'Email giảng viên'}
          type="text"
          placeholder={role === 'student' ? 'VD: DE170001' : 'VD: giang.vien@fpt.edu.vn'}
          icon="person"
        />

        <div className="space-y-2">
          <div className="flex justify-between items-center px-1">
            <label className="text-sm font-bold text-on-surface-variant" htmlFor="password">
              Mật khẩu
            </label>
            <a className="text-xs font-bold text-orange-600 hover:underline" href="#">
              Quên mật khẩu?
            </a>
          </div>
          <InputField
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            icon="lock"
            rightIcon={showPassword ? 'visibility_off' : 'visibility'}
            onRightIconClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button
          className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          type="submit"
        >
          Đăng nhập
        </button>
      </form>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant/30"></div>
        </div>
        <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <span className="bg-surface px-4">Hoặc tiếp tục với</span>
        </div>
      </div>

      <SocialButtons />

      <p className="text-center text-on-surface-variant text-sm font-medium mt-10">
        Mới tham gia Academic Pulse?{' '}
        <button
          onClick={onSwitchToRegister}
          className="text-orange-600 font-bold hover:underline cursor-pointer"
        >
          Tạo tài khoản
        </button>
      </p>
    </>
  );
}
