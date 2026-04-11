import { useState } from 'react';
import HeroSection from '../components/auth/HeroSection';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import FloatingBadge from '../components/auth/FloatingBadge';

type AuthMode = 'login' | 'register';

export default function LoginPage() {
  const [authMode, setAuthMode] = useState<AuthMode>('login');

  return (
    <main className="flex h-screen w-screen">
      <HeroSection />
      
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-20 bg-surface">
        <div className="w-full max-w-md">
          {authMode === 'login' ? (
            <LoginForm onSwitchToRegister={() => setAuthMode('register')} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setAuthMode('login')} />
          )}
        </div>
      </section>

      <FloatingBadge />
    </main>
  );
}
