import { ShieldCheck, Lock, CircleCheckBig } from 'lucide-react';

const trustElements = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    text: "Garantía de 30 Días",
  },
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    text: "Pago 100% Seguro",
  },
  {
    icon: <CircleCheckBig className="h-6 w-6 text-primary" />,
    text: "Acceso Inmediato",
  },
];

export function TrustBar() {
  return (
    <section className="py-6 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {trustElements.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              {item.icon}
              <span className="text-sm font-semibold text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
