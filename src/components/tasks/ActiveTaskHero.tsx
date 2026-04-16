export default function ActiveTaskHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-500 text-white transition-colors">
      <div className="relative z-10 max-w-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Đang tiến hành
          </span>
        </div>
        <h2 className="text-4xl font-black mb-4 tracking-tight">
          Bài kiểm tra cấu trúc dữ liệu nâng cao
        </h2>
        <p className="text-white/80 text-lg mb-8 font-medium">
          Làm chủ độ phức tạp của B-Trees và Graphs để mở khóa huy hiệu 'Kiến trúc sư logic'.
        </p>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold">Tiến độ hiện tại</span>
            <span className="text-sm font-black">65%</span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white w-[65%] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
          </div>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span className="text-xs font-bold">Còn 12 phút</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">monetization_on</span>
              <span className="text-xs font-bold">+450 XP</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">
        <img
          alt="Nền trừu tượng"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl45dRpudvyjlbXJ7d-Bo2oesFt1VkOjTRn9rnRfU7_w7EiaTWqrnfQubQft9MxZjzMfxYRV8ORV-vnIf3H0NPRyTpLu5lEDGqN7RQO2lC_7Re63ZAntb88QdiLE6Ua-k8j6HZKB48E6xsxWbbITwlKzPnvCKp6RE0vgWVCDWp1pzLRGM5v9DgaaK1SfOij4GUpRmgIHoERtQKmdkiwXQK29DNP70WB2m_9b1ZpLjTToSjCFzHHKCTKKcbGt_NrxouieO96EwG9OCX"
        />
      </div>
    </section>
  );
}
