'use client';

import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GuaranteeSection() {
    const scrollToOffer = () => {
        const offerSection = document.getElementById('offer');
        if (offerSection) {
            offerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <img 
                            src="https://i.postimg.cc/k40NQr5H/garantia-30-dias.png" 
                            alt="Sello de Garantía de 30 Días" 
                            width={150} 
                            height={150}
                            loading="lazy"
                            data-ai-hint="guarantee badge"
                        />
                    </div>
                    <h2 className="text-white text-3xl md:text-4xl font-headline font-bold mb-4">
                        Tu Inversión Está 100% Protegida
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base">
                        Tienes 30 días completos para probar "Pulso del Amor". Si no sientes un cambio radical en tu energía, si no ves cómo la dinámica con él se transforma, o si simplemente decides que no es para ti, solo envíame un correo. Te devolveré cada centavo, sin preguntas, sin complicaciones. El riesgo es todo mío.
                    </p>
                    <Button
                        size="lg"
                        className="w-full max-w-md mx-auto h-auto py-4 text-xl font-bold btn-glow btn-gradient"
                        onClick={scrollToOffer}
                    >
                        QUIERO MI ACCESO CON GARANTÍA
                    </Button>
                </div>
            </div>
        </section>
    );
}
