import DashboardLayout from '../components/layout/DashboardLayout';
import StatsCard from '../components/dashboard/StatsCard';
import StudentTable from '../components/dashboard/StudentTable';
import QuickActions from '../components/dashboard/QuickActions';
import ActivityFeed from '../components/dashboard/ActivityFeed';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black text-on-surface tracking-tight">Bảng điều khiển</h2>
            <p className="text-on-surface-variant font-medium mt-1">
              Phân tích hiệu suất thời gian thực cho chi nhánh FPT Đà Nẵng
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-secondary-container text-on-secondary-container rounded-3xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-sm cursor-pointer">
              <span className="material-symbols-outlined">download</span>
              Xuất báo cáo
            </button>
            <button className="px-6 py-3 bg-primary text-on-primary rounded-3xl font-bold flex items-center gap-2 hover:scale-[1.02] transition-all shadow-lg shadow-orange-500/20 cursor-pointer">
              <span className="material-symbols-outlined">add</span>
              Bài tập mới
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatsCard
            icon="school"
            iconBg="bg-orange-100"
            iconColor="text-orange-500"
            badge="+12.5%"
            badgeColor="text-green-600 bg-green-50"
            title="XP trung bình sinh viên"
            value="14,280"
            decorIcon="military_tech"
          />
          <StatsCard
            icon="task_alt"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            badge="88% Mục tiêu"
            badgeColor="text-orange-500 bg-orange-50"
            title="Tỷ lệ hoàn thành"
            value="92.4%"
            decorIcon="analytics"
          />
          <StatsCard
            icon="group"
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
            badge="Đang hoạt động"
            badgeColor="text-slate-400 bg-slate-50"
            title="Sinh viên hoạt động"
            value="1,842"
            decorIcon="bolt"
          />
          <StatsCard
            icon="verified"
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
            badge="+32 Mới"
            badgeColor="text-green-600 bg-green-50"
            title="Chứng chỉ đã cấp"
            value="456"
            decorIcon="card_membership"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <StudentTable />
          </div>

          <div className="space-y-8">
            <QuickActions />
            <ActivityFeed />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
            <div className="z-10 flex-1">
              <h4 className="text-2xl font-black mb-2">Tiến độ mục tiêu tuần</h4>
              <p className="text-on-surface-variant text-sm mb-6">
                Tổng hợp hoàn thành mục tiêu của sinh viên trên tất cả các đơn vị đang hoạt động.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>Tiến độ chương trình</span>
                  <span>78%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 w-[78%] transition-all"></div>
                </div>
              </div>
            </div>
            <div className="w-48 h-48 bg-orange-50 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 bg-orange-500/5 rounded-full scale-110 blur-xl"></div>
              <span className="material-symbols-outlined text-7xl text-orange-500">trending_up</span>
            </div>
          </div>

          <div className="bg-secondary-container/20 p-8 rounded-[2rem] border-2 border-white flex justify-between overflow-hidden relative group">
            <div className="z-10">
              <span className="inline-block px-3 py-1 bg-secondary text-white text-[10px] font-black rounded-full mb-4">
                MẸO HAY
              </span>
              <h4 className="text-2xl font-black mb-4">Tương tác sinh viên XP thấp</h4>
              <p className="text-on-surface-variant text-sm max-w-xs">
                12% sinh viên chưa đăng nhập trong 3 ngày. Gửi thông báo "Spark" tự động để tăng tỷ lệ giữ chân.
              </p>
              <button className="mt-6 px-6 py-2 bg-secondary text-white rounded-2xl font-bold hover:scale-105 transition-all cursor-pointer">
                Gửi thông báo
              </button>
            </div>
            <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <span className="material-symbols-outlined text-[15rem] text-secondary">bolt</span>
            </div>
          </div>
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 cursor-pointer">
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          magic_button
        </span>
      </button>
    </DashboardLayout>
  );
}
