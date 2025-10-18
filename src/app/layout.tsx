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
        <Script src="https://fast.wistia.com/assets/external/E-v1.js" async />
        <Script src="https://fast.wistia.com/player.js" async />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
        pixel_id: window.pixelId, // verificar se o endpoint espera 'pixel_id'
        event: eventName || "page_view",
        timestamp: new Date().toISOString(),
        url: location.href,
        referrer: document.referrer || "",
        utm: getUTMs(),
        data: eventData || {}
      };

      // Debug (apenas em dev). Remover em produção
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

      // Tenta parsear o body com cautela
      var text = await resp.text();
      var json;
      try {
        json = text ? JSON.parse(text) : null;
      } catch (err) {
        console.warn("UTMify -> resposta não é JSON:", text);
      }

      if (!resp.ok) {
        console.error("UTMify -> status:", resp.status, "response:", text);
        // Não acesse json._id sem checar
        return;
      }

      // Segurança: só acesse propriedades se json existir
      if (json && typeof json === "object") {
        if (json._id) {
          console.info("UTMify -> evento registrado, id:", json._id);
        } else {
          console.warn("UTMify -> resposta válida mas sem _id:", json);
        }
      } else {
        console.warn("UTMify -> resposta OK mas body vazio ou não-JSON");
      }
    } catch (err) {
      console.error("UTMify -> erro no envio de evento:", err);
    }
  }

  // Exemplo: enviar evento page_view após DOMContentLoaded
  if (document.readyState === 'complete') {
    sendTrackingEvent("page_view", { hostname: location.hostname });
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      sendTrackingEvent("page_view", { hostname: location.hostname });
    });
  }

  // Expor função para o resto do app (se necessário)
  window.utmifySendEvent = sendTrackingEvent;
})();
          `,
          }}
        />
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
