import { Timer } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="bg-primary py-2 px-4 text-center border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <Timer className="h-4 w-4 text-primary-foreground animate-pulse hidden xs:block" />
        <p className="text-[10px] sm:text-xs md:text-sm font-bold text-primary-foreground uppercase tracking-wider">
          Este acceso solo está disponible ahora. Mañana puede ser demasiado tarde.
        </p>
      </div>
    </div>
  );
}
