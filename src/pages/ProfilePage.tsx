import DashboardLayout from '../components/layout/DashboardLayout';

const badges = [
  {
    id: 1,
    name: 'Code Phoenix',
    description: 'Hoàn thành 100 module không lỗi',
    icon: 'local_fire_department',
    color: 'bg-orange-50 text-orange-600',
    rarity: 'LEGENDARY',
    rarityColor: 'bg-orange-600',
    unlocked: true,
  },
  {
    id: 2,
    name: 'Thủ thư',
    description: 'Truy cập 50 tài nguyên thư viện khác nhau',
    icon: 'menu_book',
    color: 'bg-blue-50 text-blue-600',
    unlocked: true,
  },
  {
    id: 3,
    name: 'Người kết nối',
    description: 'Cộng tác trong 10 dự án nhóm',
    icon: 'hub',
    color: 'bg-indigo-50 text-indigo-600',
    rarity: 'EPIC',
    rarityColor: 'bg-indigo-600',
    unlocked: true,
  },
  {
    id: 4,
    name: '???',
    description: 'Thành tích bí ẩn đã khóa',
    icon: 'lock',
    color: 'bg-slate-100 text-slate-400',
    unlocked: false,
  },
  {
    id: 5,
    name: 'Chim sớm',
    description: 'Đăng nhập trước 7 giờ sáng trong 7 ngày',
    icon: 'verified',
    color: 'bg-green-50 text-green-600',
    unlocked: true,
  },
  {
    id: 6,
    name: 'Bậc thầy Quiz',
    description: 'Điểm tuyệt đối trong 5 bài quiz liên tiếp',
    icon: 'star',
    color: 'bg-amber-50 text-amber-600',
    unlocked: true,
  },
];

const skills = [
  { name: 'Kỹ thuật phần mềm', progress: 88 },
  { name: 'Cấu trúc dữ liệu & Giải thuật', progress: 94 },
  { name: 'Nền tảng UX/UI', progress: 76 },
  { name: 'Tiếng Anh (IELTS)', progress: 85 },
];

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        {/* Profile Header */}
        <section className="relative">
          <div className="h-48 w-full rounded-2xl bg-gradient-to-br from-primary to-primary-container overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
            <div className="absolute -bottom-12 right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="flex flex-col md:flex-row items-end gap-8 -mt-16 px-8 relative z-10">
            <div className="w-40 h-40 rounded-2xl border-8 border-surface bg-surface-container-lowest overflow-hidden shadow-2xl">
              <img
                alt="Avatar sinh viên"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjykx0fqNuiG-ag8P9-dU4r0gDw8uthfEX_mkx6Fxg2KueiFOIVWUaIcGPoZUJEioE_LqiNRdcA5Yi4s9Ddj4seNJkYCRo88qnb_HC13N8_5fHO88xGfaqsqUivmcimHzGc03EcwjkWEeTQxDc8lrH5ylz0VQSAysjmeEYTw2jdu3QG-etfRjFDE8fRHnQYleB6TlLrgElA8zdBHYHD0QR0GTMS2vL2BJxGPNfen27pvSpc52VRIAImGASN-9GlsdIM0wxUt750QQS"
              />
            </div>

            <div className="flex-1 pb-4">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-4xl font-extrabold tracking-tight">Nguyễn Văn An</h2>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-lg text-xs font-bold uppercase tracking-wider">
                  Sinh viên Danh dự
                </span>
              </div>
              <div className="flex items-center gap-6 text-on-surface-variant font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">id_card</span>
                  DE170001
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  Cơ sở Đà Nẵng
                </span>
                <span className="flex items-center gap-1.5 text-orange-600 font-bold">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_fire_department
                  </span>
                  Chuỗi 14 ngày
                </span>
              </div>
            </div>

            <div className="pb-4">
              <button className="px-6 py-3 bg-surface-container-lowest text-on-surface font-bold rounded-xl shadow-md border border-outline-variant/10 hover:bg-surface-container hover:-translate-y-1 transition-all flex items-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">edit</span>
                Chỉnh sửa hồ sơ
              </button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Academic Competencies */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold">Năng lực học thuật</h3>
                <p className="text-on-surface-variant text-sm mt-1">
                  Dựa trên hoàn thành khóa học và kết quả bài kiểm tra
                </p>
              </div>
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold">
                Cập nhật hôm nay
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Radar Chart Placeholder */}
              <div className="relative w-80 h-80 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-8 rounded-full border-[16px] border-surface-container-low"></div>
                <div className="absolute inset-12 rounded-full border-[12px] border-orange-100"></div>
                <div className="absolute inset-16 rounded-full border-[8px] border-orange-200"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-container rounded-full shadow-lg flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-black">92</span>
                  <span className="text-[10px] font-bold uppercase">Chỉ số</span>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 font-bold text-sm">Lập trình</div>
                <div className="absolute top-1/4 -right-2 font-bold text-sm">Toán</div>
                <div className="absolute bottom-1/4 -right-2 font-bold text-sm">Logic</div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-bold text-sm">Thiết kế</div>
                <div className="absolute bottom-1/4 -left-4 font-bold text-sm">Kỹ năng mềm</div>
                <div className="absolute top-1/4 left-6 font-bold text-sm">AI</div>
              </div>

              {/* Skills Progress */}
              <div className="flex-1 w-full space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gamified Stats */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-8">
            <div className="bg-secondary-container/30 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">trophy</span>
              </div>
              <p className="text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-1">
                Xếp hạng trong lớp
              </p>
              <h4 className="text-4xl font-black text-on-secondary-container">Top 3%</h4>
              <p className="text-on-secondary-container/70 text-sm mt-4">
                Vượt qua 142 sinh viên tuần này.
              </p>
            </div>

            <div className="bg-tertiary-container p-8 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <span className="material-symbols-outlined text-6xl">auto_awesome</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Điểm thành tích</p>
              <h4 className="text-4xl font-black">12,840</h4>
              <button className="mt-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl text-xs font-bold hover:bg-white/30 transition-all cursor-pointer">
                Xem bảng xếp hạng
              </button>
            </div>
          </div>

          {/* Badge Collection */}
          <div className="col-span-12 bg-surface-container-low p-8 rounded-2xl">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h3 className="text-2xl font-black">Bộ sưu tập huy hiệu</h3>
                <p className="text-on-surface-variant">24/60 vật phẩm hiếm đã khám phá</p>
              </div>
              <button className="text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer">
                Xem toàn bộ
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm text-center relative group cursor-help border border-transparent hover:border-primary/20 transition-all ${
                    !badge.unlocked ? 'opacity-50 grayscale' : ''
                  }`}
                >
                  {badge.rarity && badge.unlocked && (
                    <div
                      className={`absolute top-0 right-0 translate-x-2 -translate-y-2 ${badge.rarityColor} text-white text-[10px] px-2 py-0.5 rounded-full font-black`}
                    >
                      {badge.rarity}
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 ${badge.color} rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {badge.icon}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold">{badge.name}</h5>
                  <p className="text-[10px] text-on-surface-variant mt-1 leading-tight">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">settings</span>
              Tùy chọn tài khoản
            </h3>

            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <label className="text-sm font-bold">Thông báo</label>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 bg-surface-container rounded-xl cursor-pointer hover:bg-surface-container-high transition-colors">
                    <div className="flex gap-4 items-center">
                      <span className="material-symbols-outlined text-primary">bolt</span>
                      <div>
                        <p className="font-bold text-sm">Nhắc nhở học tập</p>
                        <p className="text-[10px] text-on-surface-variant">Nhắc tôi khi đến giờ học</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="form-checkbox h-5 w-5 text-primary rounded border-none bg-white focus:ring-0 cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between p-4 bg-surface-container rounded-xl cursor-pointer hover:bg-surface-container-high transition-colors">
                    <div className="flex gap-4 items-center">
                      <span className="material-symbols-outlined text-secondary">group</span>
                      <div>
                        <p className="font-bold text-sm">Nhắc đến cộng đồng</p>
                        <p className="text-[10px] text-on-surface-variant">
                          Thông báo khi đồng đội tag tôi trong dự án
                        </p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="form-checkbox h-5 w-5 text-primary rounded border-none bg-white focus:ring-0 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-bold block mb-4">Quyền riêng tư</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 px-4 bg-primary text-white font-bold rounded-xl text-sm cursor-pointer">
                    Công khai
                  </button>
                  <button className="flex-1 py-3 px-4 bg-surface-container text-on-surface font-bold rounded-xl text-sm border border-transparent hover:border-outline-variant cursor-pointer">
                    Ẩn danh
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Progress */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-black">Mục tiêu XP tuần</h4>
                <span className="text-primary font-bold">85%</span>
              </div>
              <div className="flex gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div key={day} className="flex-1 h-12 bg-primary rounded-lg"></div>
                ))}
                <div className="flex-1 h-12 bg-surface-container-high rounded-lg relative">
                  <div className="absolute inset-0 bg-primary w-1/2 rounded-l-lg"></div>
                </div>
                <div className="flex-1 h-12 bg-surface-container-high rounded-lg"></div>
              </div>
              <p className="text-xs text-on-surface-variant italic">
                Chỉ còn 450 XP nữa để đạt phần thưởng chuỗi tuần! Tiếp tục nào, An.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
              <h4 className="font-bold mb-4">Tiến độ chứng chỉ</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Nền tảng Cloud</span>
                      <span>Đã khóa</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-orange-500"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Đạo đức kinh doanh toàn cầu</span>
                      <span>Cấp 2</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-orange-500"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 border border-white/20 rounded-xl text-xs font-bold hover:bg-white/5 transition-colors cursor-pointer">
                Xem điều kiện
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
