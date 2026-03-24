'use client';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const delaySeconds = 380;

  useEffect(() => {
    const startTime = Date.now();
    const durationMs = delaySeconds * 1000;

    const timer = setTimeout(() => {
      setShowContent(true);
    }, durationMs);

    // Atualização a cada 50ms para um movimento ultra fluido (sensação de "rápido")
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const currentProgress = Math.min((elapsed / durationMs) * 100, 100);
      
      setProgress(currentProgress);

      if (elapsed >= durationMs) {
        clearInterval(interval);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (showContent) {
    return null;
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-8 px-4">
      <p className="text-center text-primary mb-3 font-bold animate-pulse text-sm md:text-base">
        Sincronizando frecuencias energéticas... ¡No cierres esta página!
      </p>
      <div className="relative">
        <Progress value={progress} className="w-full h-3 bg-neutral-800 border border-white/5 rounded-full overflow-hidden" />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-20 h-full animate-[shimmer_2s_infinite]"
          style={{ left: `${progress}%`, display: progress >= 100 ? 'none' : 'block' }}
        />
      </div>
      <div className="flex justify-between items-center mt-2 px-1">
         <p className="text-muted-foreground text-[10px] uppercase tracking-[0.2em]">Calculando compatibilidad...</p>
         <p className="text-primary font-bold tabular-nums text-sm">{Math.floor(progress)}%</p>
      </div>
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
      `}</style>
    </div>
  );
}
