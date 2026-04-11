export type UserRole = 'student' | 'lecturer';

export interface LoginFormData {
  identifier: string; // Email hoặc mã sinh viên
  password: string;
  remember: boolean;
  role: UserRole;
}

export interface RegisterFormData {
  fullName: string;
  email: string;
  studentId?: string; // Chỉ cho sinh viên
  password: string;
  confirmPassword: string;
  role: UserRole;
  acceptTerms: boolean;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  studentId?: string;
  avatar?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}
