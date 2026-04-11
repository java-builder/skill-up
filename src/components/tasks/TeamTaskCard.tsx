const teamMembers = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCUNiHci1KbTdJsavcsLe_3mAWwaCBw_7s98UDoUJ-7XafTmjuztgQCMp1A49Dm2_N7XHqHIl1bzrCYoDgQdLISeGAzPKFdU06tkd3GA9y-_MAn6ADKwivVaAFQYTxI0qBLXj0Pdz6_O17ptxpr-bpD6b6msar-_engdX15HKOFhDXNaQ7WGqoHvsBpLvyTAJkSi4kQ7AgnGVIvF9F2Rcl0K1nTh_uUxiBJ5WPr8q2eYyE3ZEo_GbbQp3as32tKnOb6gw7YZ6pjYiim',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCP02HBhpykolzapq5rJfNyRPDLR07kqXYg13i3a9LPq_UKmUjjAlKCE05bRWKm5lUsda2jB-VTwBp-97ztJr1lp-9t9_L5PjVtCIfLiYcmGcMWwzt-T45hXUADoi4yOlKPm-dDuz0O3blp8_9ILGslFZCIRZ9nvX3Ip2Y9MVsvXTZSOdg0VLLdR1nSkL8Si1ZxdV1EMpo3rdSDMXZQcPduXvr8ziBP9fKiL0LZYG5EXQBgGQMAVq-h2IEWoufzRCsUS4ISBDZG-cKQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCNXRWHz6TMJhSbhPhb4uB_zsPgDeEpV2a8IOJ9a74Pj0Yry1SHRU2CKoBDl8oX9K-jx590u_XFA7W0qXItYURAnyJKSmOYaO4rJnfL6ZlCP9kTaCqjOVPL7JtGGvUOWIG3QCgjgPn9P3vB7EG7TiDIoE4XDPqEZZZw-06WfOEltkRvomuWedegGKk8WhPbh1-J_MbmYz2W2olQN8YcbyRtrH_RSFSxE681l9yxaHfpvUWdl56IkqZerIa_DwgkoSngqot3xifZBXOf',
];

export default function TeamTaskCard() {
  return (
    <div className="md:col-span-2 group relative bg-surface-container-lowest rounded-2xl p-8 flex flex-col md:flex-row gap-8 transition-all hover:shadow-2xl">
      <div className="flex-shrink-0 w-full md:w-48 h-48 rounded-2xl overflow-hidden relative">
        <img
          alt="Học nhóm"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuABWO58q0vhKlI75-Mf72jfPwdShIxLm7bil-CLozwOP2n5IlNcCz6z-hrIALKchvaFxmrh1o1OQOrk0ux1BE68Sw7FY7AcQyiGlOaLkDTp1Xp7F2lTU9jle4qqLc0gl64rR2T33FXea8g2vP8Ovm93vQjsZxIs77qMOLYg5HtpLoyuym-7C_rHJ9XFBv7yA1lb_YUeVpPDq5G2Ls857Y9Xjqi7Vix2Y3l1_r605l-0tdY8HEdzWaaHngQndPSJHVsDOFrQCshdzcNu"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <span className="text-white text-xs font-bold">Nhiệm vụ nhóm</span>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
            Đang hoạt động
          </span>
          <span className="text-on-surface-variant text-xs font-medium">
            Hoạt động nhóm • Phòng #204
          </span>
        </div>
        <h3 className="text-2xl font-black mb-3">Workshop kiến trúc Front-end</h3>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
          Hợp tác với 3 sinh viên khác để thiết kế kiến trúc hệ thống thiết kế có thể mở rộng cho ứng dụng thương mại di động.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex -space-x-2">
            {teamMembers.map((avatar, index) => (
              <img
                key={index}
                alt={`Thành viên ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                src={avatar}
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">
              +1
            </div>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">stars</span>
            <span className="text-xs font-bold">Nhận danh hiệu 'Kiến trúc sư trưởng'</span>
          </div>
          <button className="ml-auto bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-xl font-bold text-sm transform active:scale-95 transition-all cursor-pointer">
            Bắt đầu Workshop
          </button>
        </div>
      </div>
    </div>
  );
}
