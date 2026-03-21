import { ShieldCheck } from "lucide-react";

export default function CertifiedBadge() {
  return (
    <div className="hidden lg:block animate-bounce-slow">
      <div className="relative bg-white/10 backdrop-blur-md border rounded-2xl px-5 py-4 text-white flex items-center gap-3 shadow-xl">
        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center shrink-0 ring-2 ring-primary-300/40">
          <ShieldCheck size={20} />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-primary-950 font-semibold mb-0.5">Certifié</div>
          <div className="font-bold text-sm leading-tight text-primary-950">Rénovation Tous Corps<br />d&apos;États</div>
        </div>
        <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow">
          Certifié
        </span>
      </div>
    </div>
  );
}
