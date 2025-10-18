import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Pulso del Amor',
  description: 'Activa el interruptor de arrepentimiento en el cerebro masculino.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        
        {/* Wistia Scripts */}
        <Script src="https://fast.wistia.com/assets/external/E-v1.js" async />
        <Script src="https://fast.wistia.com/player.js" async />

        {/* Utmify Scripts */}
        <Script
          id="utmify-base"
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
        <Script id="utmify-pixel-tracker">
          {`
(function() {
  // Configurações
  var TRACKING_URL = "https://tracking.utmify.com.br/tracking/v1/events";
  window.pixelId = "68f31b1b41bbf871c3c5652f";

  // Helper para pegar UTMs (exemplo simples)
  function getUTMs() {
    var search = new URLSearchParams(location.search || "");
    return {
      utm_source: search.get("utm_source") || "",
      utm_medium: search.get("utm_medium") || "",
      utm_campaign: search.get("utm_campaign") || "",
      utm_term: search.get("utm_term") || "",
      utm_content: search.get("utm_content") || ""
    };
  }

  // Função que envia evento de forma segura
  async function sendTrackingEvent(eventName, eventData) {
    try {
      if (!window.pixelId || typeof window.pixelId !== "string" || !window.pixelId.trim()) {
        console.warn("UTMify: pixelId indefinido — evento não será enviado:", eventName);
        return;
      }

      // Monta payload com validações mínimas
      var payload = {
        pixel_id: window.pixelId,
        event: eventName || "page_view",
        timestamp: new Date().toISOString(),
        url: location.href,
        referrer: document.referrer || "",
        utm: getUTMs(),
        data: eventData || {}
      };

      // Debug (apenas em dev)
      if (location.hostname.includes("dev") || location.hostname.includes("localhost") || location.hostname.includes("firebaseapp") || location.hostname.includes("workstations.dev")) {
        console.info("UTMify -> enviando payload:", payload);
      }

      var resp = await fetch(TRACKING_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        credentials: "omit"
      });

      var text = await resp.text();
      var json;
      try {
        json = text ? JSON.parse(text) : null;
      } catch (err) {
        console.warn("UTMify -> resposta não é JSON:", text);
      }

      if (!resp.ok) {
        console.error("UTMify -> status:", resp.status, "response:", text);
        return;
      }

      if (json && typeof json === "object" && json._id) {
        console.info("UTMify -> evento registrado, id:", json._id);
      } else if (json) {
        console.warn("UTMify -> resposta válida mas sem _id:", json);
      } else {
        console.warn("UTMify -> resposta OK mas body vazio ou não-JSON");
      }
    } catch (err) {
      console.error("UTMify -> erro no envio de evento:", err);
    }
  }

  // Enviar evento page_view quando a página estiver pronta
  if (document.readyState === 'complete') {
    sendTrackingEvent("page_view", { hostname: location.hostname });
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      sendTrackingEvent("page_view", { hostname: location.hostname });
    });
  }

  // Expor função para o resto do app
  window.utmifySendEvent = sendTrackingEvent;
})();
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1253340903259145');
fbq('track', 'PageView');
fbq('track', 'ViewContent');
`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=1253340903259145&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
