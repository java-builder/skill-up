import { useSidebarContext } from './DashboardLayout';

export default function TopNav() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useSidebarContext();

  return (
    <header className="sticky top-0 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 lg:ml-64 lg:w-[calc(100%-16rem)] w-full z-30">
      {/* Mobile Menu Button - only visible on mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden p-2 hover:bg-slate-50 rounded-xl transition-all cursor-pointer"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
          <span className={`w-full h-0.5 bg-orange-600 rounded-full transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-full h-0.5 bg-orange-600 rounded-full transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`w-full h-0.5 bg-orange-600 rounded-full transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </div>
      </button>

      {/* Spacer - pushes right content when hamburger is hidden on desktop */}
      <div className="flex-1"></div>

      <div className="flex items-center gap-3 lg:gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-orange-600">notifications</span>
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-orange-600 font-black text-sm">2,450 XP</span>
            <span className="text-slate-500 text-[10px] font-bold">Cấp 12</span>
          </div>
        </div>
        <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-600/20 cursor-pointer">
          <img
            alt="Avatar sinh viên"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_KM2cEyWMeroEb3cugluuUaxafQzR1kgriCIFDduUhGt2Q6YsysgnjZSTlRiUkEhXggFcFCzocwnDz7NhXMMbFc6fypg4d6IzSxuVhN5wnIyb3jsy0S3z6c8RIx8gFoj2iYWXOeUljd1OQJlWkItlEji1uXVtiZMsUbQB02DqrAyq7cQ9SJva1tKZvcr15nKbKAePNR2PfKu8AMmJ6e4HG7msOL1R8nQsLyn_9CYNfnrwh8pQw3RWBP9Hpx_c_4L6lUGyPCYw4jV6"
          />
        </div>
      </div>
    </header>
  );
}
