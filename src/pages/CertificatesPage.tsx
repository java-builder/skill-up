import { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';

const certificates = [
  {
    id: 1,
    title: 'React Master',
    type: 'earned',
    issueDate: '12/10/2023',
    description: 'Các mẫu component nâng cao, hooks và tối ưu hóa quản lý state cho ứng dụng quy mô lớn.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeTUwWQHSP5y_K1sasjaMEAUhpeM-eEOYDxdomaSAazUWgmRrs9EoEjs37ggrIDJPLQk4hiBtw18VJNns51xu-4dqIpBItRUx5J1GS_1tiA1nIHdyFQXAvokx3wmEAxVGTp-ynVUQ79VmgJJPhJG6CRcx6sBI9kjgGUU_IBEBwDf2CBvplEiqun2_06A6rJeJNfdk_RUynTo0-bbzkIlc_gYyda3DT1TRMkj81ebD1hYt8_OZXKbzgLMhW_v9zwKuBR8g9fzbhpY8w',
    category: 'development',
  },
  {
    id: 2,
    title: 'Thiết kế UX nâng cao',
    type: 'earned',
    issueDate: '24/08/2023',
    description: 'Phương pháp nghiên cứu người dùng, kiến trúc thông tin và tạo prototype độ trung thực cao với Figma.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDKt7c-R_rnFfrX-d3jTfcHUU8DxLHvUxI8OU3Edh4_5ywv6v2rosL4uemyYLiLlrPkp11OPLViEVtTkY-WQu55bazthOFnPAbVDnLQtTS4S5BzFifo0Eyb8vYclE1hUK9g7xNyamsI-q3ss9L_f6YEq1D5ZjsBmeQRoW_wHFOLSOMT-pCmwNRD04WMo96LO-0w9xhEXJ-4zLCy67RpwXZMExpD5y7zd9fVuA-uhJmEUxZW4_TfVzWKCZsF39NoreABksu7dBdoGKS',
    category: 'design',
  },
  {
    id: 3,
    title: 'Chuyên gia Khoa học Dữ liệu',
    type: 'earned',
    issueDate: '05/01/2024',
    description: 'Phân tích thống kê, Python cho khoa học dữ liệu và kỹ thuật mô hình hóa dự đoán.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBNaFULzpF5-6SeUZhwHxH5v0BKAj3pV0XpwO5lLla4IGv152rJKU9dgXpgewOoO8EJMwDru9F9BRJJqCydqfzLWaIuLx3AhbY4vCzIsMsN2_sLywDkA-vEQLN6X98DJUteAnXMqz8w17u5uCicbN9OaWU06vyCmBs5s2Laeqc-WjNfJAnuYpuDRzLzj_uaxx1dKOxvVziSG_RIxd7myUVGH8FVyC1E7TAjyb0R-zfJM0eRaP-rp2MQ8r1nJg0m0Of5S4ypKoMZGE-',
    category: 'development',
  },
  {
    id: 4,
    title: 'Kiến trúc Cloud',
    type: 'locked',
    requiredXP: 5000,
    currentXP: 3250,
    progress: 65,
    description: 'Làm chủ AWS, Azure và hệ thống phân tán quy mô lớn. Mở khóa bằng cách hoàn thành lộ trình "Cloud Fundamentals".',
    category: 'development',
  },
  {
    id: 5,
    title: 'Kỹ sư AI',
    type: 'premium',
    requiredTokens: 50,
    description: 'Deep Learning, Mạng Neural và chiến lược triển khai LLM. Dành riêng cho sinh viên Danh dự năm 4.',
    category: 'development',
  },
  {
    id: 6,
    title: 'Marketing số',
    type: 'locked',
    requiredXP: 3000,
    currentXP: 1200,
    progress: 40,
    description: 'Chiến lược marketing kỹ thuật số, SEO, và phân tích dữ liệu khách hàng.',
    category: 'business',
  },
];

export default function CertificatesPage() {
  const [filter, setFilter] = useState('all');

  const filteredCerts = certificates.filter((cert) => {
    if (filter === 'all') return true;
    if (filter === 'earned') return cert.type === 'earned';
    return cert.category === filter;
  });

  const earnedCount = certificates.filter((c) => c.type === 'earned').length;
  const lockedCount = certificates.filter((c) => c.type === 'locked' || c.type === 'premium').length;

  return (
    <DashboardLayout>
      <div className="space-y-12">
        <section className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-primary to-primary-container p-6 sm:p-12 text-on-primary">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
              <span className="material-symbols-outlined text-xs sm:text-sm">military_tech</span>
              Thành tích học thuật
            </div>
            <h1 className="text-3xl sm:text-5xl font-black mb-3 sm:mb-4 leading-tight">
              Làm chủ kỹ năng,
              <br />
              Nhận huy hiệu của bạn.
            </h1>
            <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8">
              Theo dõi tiến độ của bạn tại Đại học FPT. Mỗi cột mốc đưa bạn đến gần hơn với xác thực tiêu chuẩn ngành. Bạn có {earnedCount} chứng chỉ đang hoạt động và {lockedCount} đang chờ mở khóa.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer text-sm sm:text-base">
                <span className="material-symbols-outlined">share</span>
                <span className="hidden sm:inline">Chia sẻ thành tích</span>
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none hidden lg:block">
            <span
              className="material-symbols-outlined text-[20rem] absolute -right-20 -top-20"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              workspace_premium
            </span>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight">Kỹ năng đã xác minh</h2>
              <p className="text-on-surface-variant text-sm sm:text-base">
                Chứng chỉ số đã kiếm được và lộ trình học tập tương lai của bạn.
              </p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-surface-container-high'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setFilter('earned')}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap ${
                  filter === 'earned'
                    ? 'bg-surface-container-high'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Đã đạt
              </button>
              <button
                onClick={() => setFilter('design')}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap ${
                  filter === 'design'
                    ? 'bg-surface-container-high'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Thiết kế
              </button>
              <button
                onClick={() => setFilter('development')}
                className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap ${
                  filter === 'development'
                    ? 'bg-surface-container-high'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Lập trình
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCerts.map((cert) => {
              if (cert.type === 'earned') {
                return (
                  <div
                    key={cert.id}
                    className="group relative bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-transparent hover:border-outline-variant/30"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
                      <img
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={cert.thumbnail}
                      />
                      <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-lg">
                        Đã đạt
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                        <span className="material-symbols-outlined text-base">calendar_month</span>
                        Cấp ngày {cert.issueDate}
                      </div>
                      <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                        {cert.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-auto">
                      <button className="w-full py-4 bg-secondary-container text-on-secondary-container rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                        <span className="material-symbols-outlined">file_download</span>
                        Tải PDF
                      </button>
                    </div>
                  </div>
                );
              }

              if (cert.type === 'locked') {
                return (
                  <div
                    key={cert.id}
                    className="group relative bg-surface-container-low/50 rounded-[2rem] p-6 flex flex-col h-full border-2 border-dashed border-outline-variant/40"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-surface-container-high/40 flex items-center justify-center">
                      <div className="text-center space-y-3 opacity-40 group-hover:opacity-60 transition-opacity">
                        <span
                          className="material-symbols-outlined text-6xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          lock
                        </span>
                        <div className="font-bold uppercase tracking-widest text-xs">Đã khóa</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 to-transparent"></div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-on-surface-variant">{cert.title}</h3>
                        <div className="bg-surface-container-highest px-2 py-1 rounded-md text-[10px] font-bold text-on-surface-variant">
                          {cert.progress}% Yêu cầu
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                        <span className="material-symbols-outlined text-base">lock_clock</span>
                        Yêu cầu: {cert.requiredXP?.toLocaleString()} XP
                      </div>
                      <p className="text-sm text-on-surface-variant/60 leading-relaxed mb-6">
                        {cert.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-auto">
                      <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-4">
                        <div
                          className="bg-primary h-full transition-all"
                          style={{
                            width: `${cert.progress}%`,
                            boxShadow: '0 0 10px rgba(160, 65, 0, 0.4)',
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs font-bold text-on-surface-variant/50">
                        <span>
                          {cert.currentXP?.toLocaleString()} / {cert.requiredXP?.toLocaleString()} XP
                        </span>
                        <span>{cert.progress}%</span>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={cert.id}
                  className="group relative bg-surface-container-low/50 rounded-[2rem] p-6 flex flex-col h-full border-2 border-dashed border-outline-variant/40"
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-surface-container-high/40 flex items-center justify-center">
                    <div className="text-center space-y-3 opacity-40 group-hover:opacity-60 transition-opacity">
                      <span
                        className="material-symbols-outlined text-6xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        token
                      </span>
                      <div className="font-bold uppercase tracking-widest text-xs">Mở khóa Premium</div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-on-surface-variant">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                      <span className="material-symbols-outlined text-base">auto_awesome</span>
                      Yêu cầu: {cert.requiredTokens} Tokens
                    </div>
                    <p className="text-sm text-on-surface-variant/60 leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-auto">
                    <button className="w-full py-4 bg-outline/10 text-outline rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed">
                      <span className="material-symbols-outlined">lock</span>
                      Không đủ Tokens
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-secondary-fixed rounded-2xl sm:rounded-[3rem] p-6 sm:p-12 overflow-hidden">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-on-secondary-fixed leading-tight">
              Bảng điểm số của bạn được xác minh bởi FPT Blockchain.
            </h2>
            <p className="text-on-secondary-fixed-variant text-base sm:text-lg max-w-xl">
              Mỗi chứng chỉ bạn kiếm được sẽ tự động được tạo thành chứng chỉ số có thể xác minh, đảm bảo tính toàn vẹn học thuật của bạn được công nhận toàn cầu bởi các đối tác doanh nghiệp.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-secondary-fixed bg-slate-200 overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-orange-200 to-blue-200"></div>
                  </div>
                ))}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-secondary-fixed bg-primary text-white flex items-center justify-center font-bold text-xs">
                  +1.2k
                </div>
              </div>
              <span className="text-xs sm:text-sm font-bold text-on-secondary-fixed-variant">
                Sinh viên được cấp chứng chỉ tháng này
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-64 sm:w-72 h-80 sm:h-96 bg-white rounded-3xl shadow-2xl rotate-6 p-4 sm:p-6 space-y-4">
              <div className="w-full h-32 sm:h-40 bg-orange-50 rounded-xl flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-5xl sm:text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-3 sm:h-4 w-3/4 bg-slate-100 rounded"></div>
                <div className="h-3 sm:h-4 w-1/2 bg-slate-100 rounded"></div>
                <div className="h-16 sm:h-20 w-full bg-slate-50 rounded-xl mt-4"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-fixed via-transparent to-transparent"></div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
