export const AUTH_CONSTANTS = {
  REMEMBER_ME_DAYS: 30,
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 50,
  STUDENT_ID_PATTERN: /^[A-Z]{2}\d{6}$/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Trường này là bắt buộc',
  INVALID_EMAIL: 'Email không hợp lệ',
  INVALID_STUDENT_ID: 'Mã sinh viên không hợp lệ (VD: DE170001)',
  PASSWORD_TOO_SHORT: `Mật khẩu phải có ít nhất ${AUTH_CONSTANTS.MIN_PASSWORD_LENGTH} ký tự`,
  PASSWORD_MISMATCH: 'Mật khẩu xác nhận không khớp',
  LOGIN_FAILED: 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.',
  REGISTER_FAILED: 'Đăng ký thất bại. Vui lòng thử lại.',
  NETWORK_ERROR: 'Lỗi kết nối. Vui lòng kiểm tra internet.',
} as const;

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Đăng nhập thành công!',
  REGISTER_SUCCESS: 'Đăng ký thành công! Chào mừng bạn đến với Academic Pulse.',
  LOGOUT_SUCCESS: 'Đăng xuất thành công.',
} as const;

export const SOCIAL_AUTH_PROVIDERS = {
  FPT_MAIL: {
    name: 'FPT Mail',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfz-nZAmIgL1svBdUgqeE81go5y0AI20hGBh9zkE9ccIRO_Q84KrFNMnNAOfNDA1O2xBBIIQddBi9JdM_ruREwRk-NKMbv80uCSKJz8mjrN8XX1lpjDideFvHPjO57MdAV4MVD1MnCgah_zuSGidBJbkbKAZBqxbVZKdp-cUCPulYlni-9wsZMsoy82xN1g5pva9z99DZa9MDZEWlIrTasWLs0Ua5VpX4yHkIwCyMoCPLOWzk6ijT381X6mzWhJ8kKLvB1wG_lf817',
  },
  FACEBOOK: {
    name: 'Facebook',
    icon: 'social_leaderboard',
    color: '#1877F2',
  },
} as const;
