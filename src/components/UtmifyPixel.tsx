'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function UtmifyPixel() {
  useEffect(() => {
    const baseScript = document.createElement('script');
    baseScript.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    baseScript.async = true;
    baseScript.defer = true;
    baseScript.setAttribute('data-utmify-prevent-xcod-sck', '');
    baseScript.setAttribute('data-utmify-prevent-subids', '');

    baseScript.onload = () => {
      // This code will run after the base script has loaded
      (window as any).pixelId = "68f415f05f4cc7ef59d44a55";
      const pixelScript = document.createElement("script");
      pixelScript.setAttribute("async", "");
      pixelScript.setAttribute("defer", "");
      pixelScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      document.head.appendChild(pixelScript);
    };

    document.head.appendChild(baseScript);

    // Cleanup function to remove scripts if the component unmounts
    return () => {
      // This cleanup is optional but good practice
    };
  }, []);

  return null; // This component doesn't render anything itself
}
