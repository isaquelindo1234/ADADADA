export function AuthorityLogos() {
    const logos = [
      { name: "Vogue", src: "https://i.postimg.cc/SxbyLNHP/vogue.png" },
      { name: "Marie Claire", src: "https://i.postimg.cc/qMk4p3rB/marieclaire.png" },
      { name: "Cosmopolitan", src: "https://i.postimg.cc/L6HyhJcQ/cosmopolitan.png" },
      { name: "Elle", src: "https://i.postimg.cc/SNqfC9s2/elle.png" },
    ];
  
    return (
      <div className="py-4">
        <p className="text-center text-sm text-muted-foreground mb-4">COMO VISTO EN:</p>
        <div className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-8 sm:h-10 object-contain grayscale opacity-60"
            />
          ))}
        </div>
      </div>
    );
  }
  