export default function FloatingBadge() {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce lg:flex hidden">
      <div className="relative bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-100 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 overflow-visible transition-colors">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 dark:bg-orange-500 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg transition-colors">
          <span
            className="material-symbols-outlined text-white text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            workspace_premium
          </span>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest font-black opacity-60 leading-none mb-1">
            Học bổng
          </p>
          <p className="font-bold text-sm">Mở đơn Thu 2024</p>
        </div>
        <span className="material-symbols-outlined opacity-50">
          chevron_right
        </span>
      </div>
    </div>
  );
}
