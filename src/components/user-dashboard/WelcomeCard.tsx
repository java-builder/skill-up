export default function WelcomeCard() {
  return (
    <div className="md:col-span-8 relative overflow-hidden bg-gradient-to-br from-primary to-primary-container p-10 rounded-[2rem] text-on-primary flex flex-col justify-between min-h-[320px]">
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">Chào mừng trở lại, Nguyên!</h2>
        <p className="text-on-primary/80 max-w-md font-medium">
          Bạn chỉ còn 450 XP nữa là đạt Cấp 13. Chuỗi ngày hiện tại của bạn là 12 ngày!
        </p>
      </div>
      <div className="relative z-10 space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-sm font-bold uppercase tracking-widest opacity-80">Tiến độ mùa</span>
          <span className="text-2xl font-black">75%</span>
        </div>
        <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-3/4 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        </div>
      </div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
}
