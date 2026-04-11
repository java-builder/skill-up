interface BrandHeaderProps {
  title: string;
  subtitle: string;
}

export default function BrandHeader({ title, subtitle }: BrandHeaderProps) {
  return (
    <div className="mb-10 text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-white text-3xl">bolt</span>
        </div>
        <h2 className="text-3xl font-black text-on-surface tracking-tighter">Academic Pulse</h2>
      </div>
      <h3 className="text-2xl font-bold text-on-surface mb-2">{title}</h3>
      <p className="text-on-surface-variant">{subtitle}</p>
    </div>
  );
}
