const students = [
  {
    id: 1,
    name: 'Lê Nguyễn Minh',
    major: 'Công nghệ thông tin • Năm 3',
    level: 45,
    progress: 75,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUsK5qZ8bzDP0dlpnrPNcoChfYsky9dyJzqzG5LyWJLyST7d-cZ_yQBYwVgR0W0JRbVbLX3NOfaozVGHeoVjzqAqrhllTNHrnIR_BIA9xFLGm9Jbdb_u5D_IRVZzaElAhCAkL0ZagAaw72DqGW1Uu-9jYQydosHDa0W4fE7CeWX-1FvhBIJu9Y1AstN6AQ4GqN0eHYwMMt7k3cBctR0XEkSU_B8gFzWoSQWBJktapAYryWWxcEjix_M9z6gcg25QZF4WUK2lCP0oq7',
    bgColor: 'bg-orange-100',
  },
  {
    id: 2,
    name: 'Trần Hoàng Nam',
    major: 'Thiết kế • Năm 2',
    level: 32,
    progress: 40,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWwl9s_NT0zOiKvzYg1OSOS19_qwNbjKw6FkAwva-fp5OppOIASf3FGALSOgUlyXglCSC9mG4j-ltoY0jEuTJsILWj8lZDznrrihf28vtGvOLFdlSPFDgxofNJQy6Mq6c7clwq8wRcOjNYFlDI7VSXiR0Xv2aOjQKEpgag6S9MB2KiWTpSLdbqYwdisXw6Ptobht2sd7JRADmhzfI_rPdjrKIfxLfKSQfbidrWenDJAf7SwWI6U1oOnyaHNJcOJ-av6yJugmtOloEk',
    bgColor: 'bg-blue-100',
  },
  {
    id: 3,
    name: 'Phạm Thu Thảo',
    major: 'Kinh doanh • Năm 4',
    level: 58,
    progress: 95,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrvTNGFRQ7g3iPdg3hgb8eAq3eRrMbwDy1jOgFeBDXk-Oo0Fz-9sAROpwgNf1-tovE-KOa47PyM3beAHSHTdyeWlPjeOFGQBFxYJQNNq4oih9CTagrSgVb4QyW9n-jip5WIF_-UEDah718epl0uajPUz00vwFuO0kNhWNPKAZCYXBzIJpzR2lpgcbwftUwVjDgosBdYW-dmbAF5FIwniIatXwmEIn4SXRsiEm7bFV2U8U4EYzw046KD15Yg8_08baoGWeTKa1mMQqn',
    bgColor: 'bg-green-100',
  },
];

export default function StudentTable() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black">Quản lý sinh viên</h3>
        <div className="flex gap-2">
          <select className="bg-surface-container-low border-none rounded-full text-xs font-bold px-4 py-2 focus:ring-0 cursor-pointer">
            <option>Sắp xếp: Gần đây</option>
            <option>Sắp xếp: XP</option>
          </select>
          <button className="p-2 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-sm">filter_list</span>
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">Sinh viên</th>
              <th className="px-6 py-4">Cấp độ</th>
              <th className="px-6 py-4">Tiến độ</th>
              <th className="px-6 py-4">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student) => (
              <tr key={student.id} className="group hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-xl ${student.bgColor} overflow-hidden`}>
                      <img
                        alt={student.name}
                        className="w-full h-full object-cover"
                        src={student.avatar}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{student.name}</p>
                      <p className="text-xs text-on-surface-variant">{student.major}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-black rounded-full">
                    CẤP {student.level}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full max-w-[100px] bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary-container h-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-slate-200 rounded-full transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-slate-400">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-surface-container-low/30 text-center">
          <button className="text-sm font-bold text-orange-600 hover:underline cursor-pointer">
            Xem tất cả 1,842 sinh viên
          </button>
        </div>
      </div>
    </div>
  );
}
