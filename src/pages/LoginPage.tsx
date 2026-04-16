import { useState } from 'react';
import HeroSection from '../components/auth/HeroSection';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import ThemeToggle from '../components/layout/ThemeToggle';

type AuthMode = 'login' | 'register';

export default function LoginPage() {
  const [authMode, setAuthMode] = useState<AuthMode>('login');

  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full bg-white dark:bg-slate-900 transition-colors">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection />
      
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 py-8 lg:py-0 bg-slate-50 dark:bg-slate-800 transition-colors">
        <div className="w-full max-w-md">
          {authMode === 'login' ? (
            <LoginForm onSwitchToRegister={() => setAuthMode('register')} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setAuthMode('login')} />
          )}
        </div>
      </section>
    </main>
  );
}
