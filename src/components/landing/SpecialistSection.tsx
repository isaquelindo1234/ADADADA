export function SpecialistSection() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-headline font-bold">
              Palabra de la Especialista
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <img
                src="https://i.postimg.cc/HL9k0Vz1/Elena-Navarro.png"
                alt="Elena Navarro"
                width={250}
                height={250}
                loading="lazy"
                className="rounded-full object-cover aspect-square w-48 h-48 md:w-full md:h-auto"
                data-ai-hint="woman portrait"
              />
            </div>
            <div className="md:col-span-2 space-y-4 text-center md:text-left">
              <p className="text-muted-foreground italic text-lg">
                "Durante años, vi a mujeres brillantes sufrir por desamor, atrapadas en ciclos de dolor. La ciencia nos muestra que la atracción va más allá de las palabras; reside en nuestra energía. Creé 'Pulso del Amor' para darles una herramienta real y poderosa, basada en la física de las frecuencias, para reclamar su poder y reescribir su historia de amor."
              </p>
              <div>
                <img
                  src="https://i.postimg.cc/tJn5g031/firma.png"
                  alt="Firma de Elena Navarro"
                  width={150}
                  height={75}
                  loading="lazy"
                  className="mx-auto md:mx-0"
                  data-ai-hint="signature"
                />
                <p className="font-semibold text-white">Elena Navarro</p>
                <p className="text-sm text-primary">Especialista en Bio-frecuencias y Relaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
