import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import ChatbotButton from '../chatbot/ChatbotButton';

interface DashboardLayoutProps {
  children: ReactNode;
}

interface SidebarContextType {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within DashboardLayout');
  }
  return context;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      <div className="min-h-screen bg-surface">
        <Sidebar />
        <TopNav />
        <main className="lg:ml-64 p-4 sm:p-6 lg:p-8 min-h-screen">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
        <ChatbotButton />
      </div>
    </SidebarContext.Provider>
  );
}
