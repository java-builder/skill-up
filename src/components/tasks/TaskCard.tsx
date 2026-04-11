interface TaskCardProps {
  xp: number;
  xpBg?: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  difficulty: string;
  difficultyColor: string;
  title: string;
  description: string;
  duration: string;
  buttonText: string;
  buttonColor: string;
  buttonIcon: string;
  shadowColor: string;
}

export default function TaskCard({
  xp,
  xpBg = 'tertiary-container',
  icon,
  iconBg,
  iconColor,
  difficulty,
  difficultyColor,
  title,
  description,
  duration,
  buttonText,
  buttonColor,
  buttonIcon,
  shadowColor,
}: TaskCardProps) {
  return (
    <div className={`group relative bg-surface-container-lowest rounded-2xl p-6 transition-all hover:shadow-2xl ${shadowColor} flex flex-col h-full`}>
      <div className={`absolute -top-3 -right-3 px-4 py-1.5 ${xpBg} text-white font-bold text-xs rounded-full shadow-lg transform group-hover:scale-110 transition-transform`}>
        +{xp} XP
      </div>
      <div className="flex items-start justify-between mb-6">
        <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center`}>
          <span className={`material-symbols-outlined ${iconColor} text-2xl`}>{icon}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
            Độ khó
          </span>
          <span className={`text-sm font-bold ${difficultyColor}`}>{difficulty}</span>
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-2 group-hover:${difficultyColor} transition-colors`}>
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-base">timer</span>
            <span className="text-xs font-bold">{duration}</span>
          </div>
        </div>
        <button className={`flex items-center gap-2 ${buttonColor} font-black text-sm uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity`}>
          {buttonText}
          <span className="material-symbols-outlined text-base">{buttonIcon}</span>
        </button>
      </div>
    </div>
  );
}
