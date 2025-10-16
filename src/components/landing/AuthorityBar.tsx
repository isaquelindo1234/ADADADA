const logos = [
  { name: 'Infobae', src: 'https://i.postimg.cc/PqYp2sDF/infobae.png', alt: 'Infobae logo' },
  { name: 'BBC World News', src: 'https://toppng.com/uploads/preview/bbc-news-logo-png-bbc-world-channel-logo-11563049882jqyf96g6u7.png', alt: 'BBC World News logo' },
  { name: 'Univision', src: 'https://e7.pngegg.com/pngimages/518/905/png-clipart-univision-communications-logo-univision-deportes-network-unimas-odessatx-purple-television.png', alt: 'Univision logo' },
  { name: 'El Universal', src: 'https://mexico.mom-gmr.org/uploads/tx_lfrogmom/media/11534-1329_import.png', alt: 'El Universal logo' },
];

export function AuthorityBar() {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          Como Visto En
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-6 md:h-8 object-contain"
                style={{ filter: 'grayscale(1) brightness(1.5)' }}
                data-ai-hint="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
