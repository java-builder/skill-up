export default function HeroSection() {
  return (
    <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-secondary">
      <img
        alt="Khuôn viên Đại học FPT hiện đại"
        className="absolute inset-0 object-cover w-full h-full opacity-80 brightness-75"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcKVgHtbyxgSKi-vfOawXBoU7qfk62hWWDW7e5OOxliQM-Xjv8pAe3FPdv2qshzMCqaov74E1zY8VVhDEyAXhhyny03AvJJ2Kwlizi5zQCWGbefPUXVnh-Tc378yKGQuyVgBeJVr3ZkOnCem0CtzEhIYtx0UU4LyiwxbyRyUGi0Z6qOayngBOSocgF3MpesSX0GNo5FBK1x46OMzDx572EZlQY5IhESSeFxhoC9mNHNQNodwrcnWspK63CyrofbYkLjlWpaUWnvZgn"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 mix-blend-multiply"></div>
      
      <div className="relative z-10 flex flex-col justify-between p-12 w-full h-full">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/20 text-on-surface font-bold text-sm">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            Nâng tầm hành trình học tập
          </span>
        </div>

        <div className="max-w-md">
          <h1 className="text-5xl font-black text-white leading-tight mb-6 tracking-tight">
            Trải nghiệm <span className="text-primary-container">nhịp đập</span> của Đại học FPT.
          </h1>
          <p className="text-white/80 text-lg leading-relaxed font-medium">
            Tham gia hệ sinh thái học thuật hàng đầu Đà Nẵng, nơi sự đổi mới gặp gỡ truyền thống tại trung tâm miền Trung Việt Nam.
          </p>

          <div className="mt-12 flex gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">12k+</span>
              <span className="text-white/60 text-sm font-label">Sinh viên</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">450+</span>
              <span className="text-white/60 text-sm font-label">Giảng viên</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-white">98%</span>
              <span className="text-white/60 text-sm font-label">Việc làm</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/50 text-xs">
          <span>© 2024 Đại học FPT Đà Nẵng</span>
          <span className="w-1 h-1 rounded-full bg-white/30"></span>
          <span>Chính sách bảo mật</span>
          <span className="w-1 h-1 rounded-full bg-white/30"></span>
          <span>Trạng thái hệ thống</span>
        </div>
      </div>
    </section>
  );
}
