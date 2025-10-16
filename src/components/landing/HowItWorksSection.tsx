import { Headphones, HeartPulse, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
    {
        icon: <Headphones className="w-10 h-10 text-primary mb-4" />,
        title: "Paso 1: Escucha",
        description: "Ponte tus auriculares y dale play. La frecuencia está diseñada para ser escuchada en un estado de relajación."
    },
    {
        icon: <HeartPulse className="w-10 h-10 text-primary mb-4" />,
        title: "Paso 2: Siente",
        description: "Permite que las ondas sonoras calibren tu energía. Visualiza la conexión que deseas restaurar."
    },
    {
        icon: <Sparkles className="w-10 h-10 text-primary mb-4" />,
        title: "Paso 3: Observa",
        description: "Nota los cambios en tu estado de ánimo y cómo los demás, especialmente él, responden a tu nueva vibración."
    }
];

export function HowItWorksSection() {
    return (
        <section className="py-12 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-headline font-bold mb-4">
                        ¿Cómo Funciona "Pulso del Amor"?
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
                        Es más simple de lo que imaginas. No necesitas meditar por horas ni hacer rituales complicados.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <Card key={index} className="bg-card border-border text-center p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-2">
                            <CardHeader className="p-0 flex flex-col items-center">
                                {step.icon}
                                <CardTitle className="font-headline text-xl md:text-2xl text-white">{step.title}</CardTitle>
                                <CardDescription className="font-body text-white/70 leading-relaxed mt-2 text-base">{step.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
