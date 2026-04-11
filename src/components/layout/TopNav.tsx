import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <header className="w-full h-16 sticky top-0 z-40 flex justify-between items-center px-8 bg-white/80 backdrop-blur-md ml-64 max-w-[calc(100%-16rem)]">
      <div className="flex items-center gap-6">
        <div className="relative w-64">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            <span className="material-symbols-outlined text-sm">search</span>
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-orange-600/20"
            placeholder="Tìm kiếm..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-orange-600">notifications</span>
          <div className="flex flex-col text-right">
            <span className="text-orange-600 font-black text-sm">2,450 XP</span>
            <span className="text-slate-500 text-[10px] font-bold">Cấp 12</span>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-orange-600/20 cursor-pointer">
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
