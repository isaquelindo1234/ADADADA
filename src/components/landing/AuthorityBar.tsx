const logos = [
  { name: 'Infobae', src: 'https://i.postimg.cc/PqYp2sDF/infobae.png', alt: 'Infobae logo' },
  { name: 'BBC World News', src: 'https://i.postimg.cc/t4G23YJx/bbc.png', alt: 'BBC World News logo' },
  { name: 'Univision', src: 'https://i.postimg.cc/VvCVV2S4/univision.png', alt: 'Univision logo' },
  { name: 'El Universal', src: 'https://i.postimg.cc/0j0Hys3T/eluniversal.png', alt: 'El Universal logo' },
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
