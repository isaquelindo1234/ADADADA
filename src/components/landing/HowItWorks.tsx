import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Headphones, Mail, MessageSquareHeart } from "lucide-react";

const steps = [
    {
        icon: <Mail className="w-8 h-8 text-primary" />,
        title: "Paso #01",
        description: "Después de generar tu Pulso del Amor personalizado, toma tus auriculares, ya que cada oído captura una frecuencia específica."
    },
    {
        icon: <Headphones className="w-8 h-8 text-primary" />,
        title: "Paso #02",
        description: "Escucha una vez al despertar y otra antes de dormir para atraer a tu ex o conquistar a la persona que te gusta aún más rápido."
    },
    {
        icon: <MessageSquareHeart className="w-8 h-8 text-primary" />,
        title: "Paso #03",
        description: "En pocos días, recibirás un mensaje o incluso podrían aparecer en tu puerta. La forma en que las personas te miran cambiará."
    }
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Mira qué sencillo es...
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 hover:bg-accent transition-all transform hover:-translate-y-1">
                        <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                            {step.icon}
                            <CardTitle className="text-xl">{step.title}</CardTitle>
                            <CardDescription className="text-base">{step.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
