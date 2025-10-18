'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function UtmifyPixel() {
  useEffect(() => {
    const handleScriptLoad = () => {
      // @ts-ignore
      window.pixelId = "68f415f05f4cc7ef59d44a55";
      const pixelScript = document.createElement("script");
      pixelScript.id = "utmify-pixel-script";
      pixelScript.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
      pixelScript.async = true;
      pixelScript.defer = true;
      document.head.appendChild(pixelScript);
    };

    const baseScript = document.getElementById('utmify-base-script');
    if (baseScript) {
      baseScript.addEventListener('load', handleScriptLoad);
    }
    
    return () => {
      if (baseScript) {
        baseScript.removeEventListener('load', handleScriptLoad);
      }
    }
  }, []);

  return (
    <Script
      id="utmify-base-script"
      src="https://cdn.utmify.com.br/scripts/utms/latest.js"
      data-utmify-prevent-xcod-sck
      data-utmify-prevent-subids
    />
  );
}
