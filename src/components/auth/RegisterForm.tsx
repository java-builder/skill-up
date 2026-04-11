import { useState } from 'react';
import BrandHeader from './BrandHeader';
import RoleToggle from './RoleToggle';
import InputField from './InputField';
import SocialButtons from './SocialButtons';

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const [role, setRole] = useState<'student' | 'lecturer'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý đăng ký
  };

  return (
    <>
      <BrandHeader
        title="Tạo tài khoản"
        subtitle="Bắt đầu hành trình học tập của bạn tại FPT University."
      />

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

        <InputField
          id="confirm-password"
          label="Xác nhận mật khẩu"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="••••••••"
          icon="lock"
          rightIcon={showConfirmPassword ? 'visibility_off' : 'visibility'}
          onRightIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
        />

        <div className="flex items-center gap-2 px-1">
          <input
            className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20"
            id="terms"
            type="checkbox"
            required
          />
          <label className="text-sm font-medium text-on-surface-variant" htmlFor="terms">
            Tôi đồng ý với{' '}
            <a href="#" className="text-primary hover:underline">
              Điều khoản dịch vụ
            </a>{' '}
            và{' '}
            <a href="#" className="text-primary hover:underline">
              Chính sách bảo mật
            </a>
          </label>
        </div>

        <button
          className="w-full bg-primary text-on-primary py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          type="submit"
        >
          Đăng ký
        </button>
      </form>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant/30"></div>
        </div>
        <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <span className="bg-surface px-4">Hoặc đăng ký với</span>
        </div>
      </div>

      <SocialButtons />

      <p className="text-center text-on-surface-variant text-sm font-medium mt-10">
        Đã có tài khoản?{' '}
        <button
          onClick={onSwitchToLogin}
          className="text-primary font-bold hover:underline cursor-pointer"
        >
          Đăng nhập ngay
        </button>
      </p>
    </>
  );
}
