export default function SocialButtons() {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-outline-variant/30 rounded-2xl bg-white hover:bg-surface-container-low transition-colors shadow-sm cursor-pointer"
    >
      <img
        alt="Google"
        className="w-5 h-5"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfz-nZAmIgL1svBdUgqeE81go5y0AI20hGBh9zkE9ccIRO_Q84KrFNMnNAOfNDA1O2xBBIIQddBi9JdM_ruREwRk-NKMbv80uCSKJz8mjrN8XX1lpjDideFvHPjO57MdAV4MVD1MnCgah_zuSGidBJbkbKAZBqxbVZKdp-cUCPulYlni-9wsZMsoy82xN1g5pva9z99DZa9MDZEWlIrTasWLs0Ua5VpX4yHkIwCyMoCPLOWzk6ijT381X6mzWhJ8kKLvB1wG_lf817"
      />
      <span className="text-sm font-bold text-on-surface">Đăng nhập với Google</span>
    </button>
  );
}
