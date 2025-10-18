'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    _wapiq: any[];
    fbq: (...args: any[]) => void;
    gtag: (...args: any[]) => void;
    utmGlobal: {
      track: (eventName: string, eventData?: object) => void;
    };
  }
}

export function AdvancedTracking() {
  useEffect(() => {
    // Garante que o PageView da UTMify seja disparado imediatamente
    if (typeof window.utmGlobal?.track === 'function') {
      try {
        window.utmGlobal.track('PageView');
        console.log('AdvancedTracking: UTMify PageView event fired.');
      } catch (e) {
        console.error('AdvancedTracking: Error firing UTMify PageView.', e);
      }
    } else {
        // Tenta novamente após um pequeno delay se o utmGlobal não estiver pronto
        setTimeout(() => {
            if (typeof window.utmGlobal?.track === 'function') {
                try {
                    window.utmGlobal.track('PageView');
                    console.log('AdvancedTracking: UTMify PageView event fired after delay.');
                } catch (e) {
                    console.error('AdvancedTracking: Error firing UTMify PageView after delay.', e);
                }
            }
        }, 1000);
    }

    // Função para disparar eventos para todas as plataformas de tracking
    const trackEvent = (eventName: string, eventData: object = {}) => {
      console.log(`AdvancedTracking: Firing event "${eventName}" with data:`, eventData);
      
      // Meta Pixel (Facebook)
      if (typeof window.fbq === 'function') {
        window.fbq('track', eventName, eventData);
      }

      // Google Analytics / Google Ads (gtag.js)
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventData);
      }
      
      // UTMify
      if (typeof window.utmGlobal?.track === 'function') {
        window.utmGlobal.track(eventName, eventData);
      }
    };

    // Configuração para a API do Wistia
    window._wapiq = window._wapiq || [];
    window._wapiq.push((W: any) => {
      const video = W.api('335vqtv9ut');
      if (!video) {
        console.error('AdvancedTracking: Wistia video with hashed ID "335vqtv9ut" not found.');
        return;
      }
      
      console.log('AdvancedTracking: Wistia video API ready.');

      let milestones = { '25': false, '50': false, '75': false, '95': false };

      video.on('play', () => {
        console.log('AdvancedTracking: Video play event detected.');
        trackEvent('VSL_Play', { video_title: video.name() });
      });

      video.on('percentwatchedchanged', (percent: number, end: boolean) => {
        const checkMilestone = (milestone: keyof typeof milestones) => {
          if (percent * 100 >= parseInt(milestone) && !milestones[milestone]) {
            trackEvent(`VSL_Watched_${milestone}%`, { video_title: video.name(), video_percent_watched: milestone });
            milestones[milestone] = true;
          }
        };
        
        checkMilestone('25');
        checkMilestone('50');
        checkMilestone('75');
        
        if (percent >= 0.95 && !milestones['95']) {
            trackEvent('VSL_Finished', { video_title: video.name() });
            milestones['95'] = true;
        }

        return undefined;
      });
      
    });

  }, []);

  // Este componente não renderiza nada no DOM para não afetar o layout.
  return null;
}
