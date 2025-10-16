import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
const faqs = [
    {
        question: "¿Cómo y cuándo recibiré el acceso?",
        answer: "El acceso es inmediato. Justo después de confirmar tu pago, recibirás un correo electrónico con tu enlace único para acceder a todo el material en nuestra área de miembros."
    },
    {
        question: "¿Es seguro mi pago?",
        answer: "Absolutamente. Usamos una de las plataformas de pago más grandes y seguras del mundo, que utiliza cifrado de nivel bancario para proteger tus datos. Tu compra es 100% segura."
    },
    {
        question: "¿Tengo alguna garantía?",
        answer: "Sí, tienes una Garantía Incondicional de 30 Días. Si por cualquier motivo no estás 100% satisfecha, solo envíanos un correo y te devolveremos todo tu dinero, sin preguntas."
    },
    {
        question: "¿Este es un pago único?",
        answer: "Sí, es un único pago. No existen mensualidades ni cobros recurrentes. Con este pago tienes acceso de por vida a todo el contenido y a futuras actualizaciones."
    },
    {
        question: "¿Funciona si ya ha pasado mucho tiempo desde la ruptura?",
        answer: "Sí. La energía y las vibraciones no entienden de tiempo lineal. Estas frecuencias actúan sobre la memoria emocional y el campo energético, sin importar si han pasado semanas, meses o incluso años."
    },
    {
        question: "¿Necesito algún equipo especial?",
        answer: "Solo necesitas un par de auriculares (audífonos) y un dispositivo capaz de reproducir audio, como tu celular o computadora. Recomendamos auriculares para una experiencia más inmersiva."
    },
    {
        question: "¿Y si él ya está con otra persona?",
        answer: "Las frecuencias de 'Pulso del Amor' trabajan para realinear tu energía y elevar tu vibración, haciéndote magnéticamente atractiva. Esto puede influir en la dinámica energética entre tú y él, independientemente de su situación actual."
    }
]

export function FaqSection() {
    return (
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-headline font-bold mb-4">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-xl border border-border px-4 md:px-6">
                        <AccordionTrigger className="text-left font-semibold font-body text-base md:text-lg text-white hover:no-underline py-4 md:py-5">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-4 md:pb-5 text-sm md:text-base">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
