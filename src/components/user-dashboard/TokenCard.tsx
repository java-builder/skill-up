export default function TokenCard() {
  return (
    <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex justify-between items-start">
          <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">
            Tài sản số
          </span>
          <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
        </div>
        <div className="mt-4">
          <h3 className="text-4xl font-black text-on-surface">1,280</h3>
          <p className="text-slate-500 text-sm mt-1">FPT Pulse Tokens</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-colors">
          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-orange-600 text-sm">shopping_bag</span>
          </div>
          <span className="text-xs font-semibold">Đổi quà tặng</span>
        </div>
        <button className="w-full py-3 bg-secondary-container text-on-secondary-container font-bold rounded-xl text-sm hover:opacity-90 transition-opacity cursor-pointer">
          Mở cửa hàng Token
        </button>
      </div>
    </div>
  );
}
