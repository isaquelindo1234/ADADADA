'use client';
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const delaySeconds = 120;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, delaySeconds * 1000);

    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 100 / delaySeconds;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (showContent) {
    return null;
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <p className="text-center text-primary mb-2">Tu oferta especial se está cargando... ¡Sigue viendo!</p>
      <Progress value={progress} className="w-full h-2 bg-neutral-800" />
      <p className="text-center text-muted-foreground text-sm mt-2">{Math.round(progress)}%</p>
    </div>
  );
}
