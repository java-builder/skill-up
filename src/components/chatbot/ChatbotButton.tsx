import { useState } from 'react';
import ChatbotWindow from './ChatbotWindow';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Window */}
      {isOpen && <ChatbotWindow onClose={() => setIsOpen(false)} />}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 hover:scale-110 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Open AI Chatbot"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">
            smart_toy
          </span>
          
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-20"></span>
        </button>
      )}
    </>
  );
}
