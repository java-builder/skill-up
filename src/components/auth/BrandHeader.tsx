interface BrandHeaderProps {
  title: string;
  subtitle: string;
}

export default function BrandHeader({ title, subtitle }: BrandHeaderProps) {
  return (
    <div className="mb-10 text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-orange-500 dark:bg-orange-400 flex items-center justify-center shadow-lg shadow-orange-500/20 dark:shadow-orange-400/20 transition-colors">
          <span className="material-symbols-outlined text-white text-3xl">bolt</span>
        </div>
        <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tighter transition-colors">Academic Pulse</h2>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 transition-colors">{subtitle}</p>
    </div>
  );
}
