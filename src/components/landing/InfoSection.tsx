'use client';

import { PlaceHolderImages } from "@/lib/placeholder-images";

export function InfoSection() {
  const headphonesWoman = PlaceHolderImages.find(p => p.id === 'benefit-woman');

  return (
    <section className="bg-background">
      {/* First Info Block */}
      <div className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Essa melodia é tão poderosa, que te dá uma <span className="text-white font-semibold">"vantagem injusta"</span> sobre os homens, e eu já te adianto. Se você não gosta de chamar atenção, ser vista e notada pelas pessoas, ou ser cortejada pelo seu homem é melhor não escutar...
              </p>
              <p>
                Chega de perder tempo com coisas que não funcionam, contato zero, mensagem para conquistar, livros de autoajuda, ebooks que só te contam teorias vazias! Isso não vai te ajudar em nada, eu já fiz tudo o que você imaginou, até descobrir isso.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
              {headphonesWoman && (
                <img
                  src={headphonesWoman.imageUrl}
                  alt={headphonesWoman.description}
                  width={500}
                  height={600}
                  className="relative rounded-2xl object-cover w-full shadow-2xl"
                  data-ai-hint={headphonesWoman.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Second Info Block (Reversed) */}
      <div className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Se seu relacionamento está por um fio, ou ele te abandonou...</p>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white">
              Eu sei exatamente como você se sente...<br/>eu já passei por isso!
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black">
                <video
                  src="https://i.imgur.com/hK7FIIM.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                Durante muito tempo eu vi minhas amigas, parentes próximos e pessoas que acompanho nas redes sociais com relacionamentos tão incríveis, pedidos de casamentos, flores, viagens...
              </p>
              <p>
                E eu me questionava, será que o meu relacionamento vai ser assim algum dia?.. Em meio a tantas brigas e desentendimentos, será que o problema está em mim? Eu nasci para ter um relacionamento arruinado?
              </p>
              <p className="text-white font-medium italic">
                Não, isso vai mudar a partir de hoje, se você ouvir essa MELODIA DO AMOR que ativa o interruptor da atração amorosa em você, é provável que ele te mande mensagem de forma quase que imediata.
              </p>
              <p>
                A Melodia do amor aumenta instantaneamente o seu campo energético que está desalinhado, o verdadeiro motivo pelo o qual você está enfrentando desafios no seu relacionamento, como brigas, separações e até ter dificuldade para encontrar alguém.
              </p>
              <p className="text-primary font-semibold">
                Essa Melodia é tão poderosa, que é praticamente como se você tivesse o "Controle Mental Masculino", e menos de 2% das mulheres sabem que isso existe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
