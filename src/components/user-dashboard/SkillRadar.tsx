export default function SkillRadar() {
  return (
    <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm">
      <h3 className="text-lg font-bold mb-6">Phân tích điểm kỹ năng</h3>
      <div className="aspect-square relative flex items-center justify-center">
        <div className="absolute inset-0 border-[1px] border-slate-100 rounded-full"></div>
        <div className="absolute inset-[15%] border-[1px] border-slate-100 rounded-full"></div>
        <div className="absolute inset-[30%] border-[1px] border-slate-100 rounded-full"></div>
        
        <div
          className="w-full h-full opacity-20 bg-primary"
          style={{ clipPath: 'polygon(50% 10%, 85% 35%, 80% 75%, 20% 75%, 15% 35%)' }}
        ></div>
        <div
          className="absolute w-full h-full border-2 border-primary"
          style={{ clipPath: 'polygon(50% 10%, 85% 35%, 80% 75%, 20% 75%, 15% 35%)' }}
        ></div>
        
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
          LOGIC
        </div>
        <div className="absolute top-[35%] right-2 text-[10px] font-bold text-slate-400">THIẾT KẾ</div>
        <div className="absolute bottom-[20%] right-10 text-[10px] font-bold text-slate-400">
          KỸ NĂNG MỀM
        </div>
        <div className="absolute bottom-[20%] left-10 text-[10px] font-bold text-slate-400">
          CÔNG NGHỆ
        </div>
        <div className="absolute top-[35%] left-2 text-[10px] font-bold text-slate-400">XÃ HỘI</div>
      </div>
      <div className="mt-8 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Điểm mạnh cốt lõi</span>
          <span className="font-bold text-primary">Giải quyết vấn đề</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-500">Xếp hạng toàn cầu</span>
          <span className="font-bold">Top 5%</span>
        </div>
      </div>
    </div>
  );
}
