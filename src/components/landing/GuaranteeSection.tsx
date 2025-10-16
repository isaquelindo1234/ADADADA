import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background border border-border rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative text-center">
                <img
                  src="https://i.postimg.cc/hG12wWfv/garantia.png"
                  alt="Garantía de 30 Días"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="mx-auto drop-shadow-[0_0_15px_hsl(var(--secondary))]"
                />
              </div>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-white text-xl md:text-2xl font-headline font-bold">
                Garantía de 30 Días: Tu Pulso o Tu Dinero
              </h3>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-base">
                <p>
                  Estoy tan segura del poder de "Pulso del Amor" que asumo todo el riesgo por ti. Tienes 30 días completos para usar las frecuencias y ver los cambios por ti misma.
                </p>
                <p>
                  Si en ese tiempo no sientes una transformación en tu energía o si no estás 100% satisfecha por cualquier motivo, solo envía un correo electrónico y te devolveremos cada centavo de tu inversión. Sin preguntas, sin demoras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
