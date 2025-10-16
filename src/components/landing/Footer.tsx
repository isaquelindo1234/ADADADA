import { Music4, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-2 items-start">
            <a href="#" className="flex items-center gap-2 mb-2">
              <Music4 className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold tracking-tight text-white">
                Pulso del Amor
              </span>
            </a>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          
          {/* Social */}
          <div className="md:justify-self-center">
            <h4 className="font-semibold text-white mb-3">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
            </div>
          </div>

          {/* Links */}
          <div className="md:justify-self-center">
             <h4 className="font-semibold text-white mb-3">Links</h4>
             <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Política de Privacidad</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Términos de Uso</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contacto</a></li>
             </ul>
          </div>
          
          {/* Disclaimer */}
          <div className="text-xs text-muted-foreground/70">
            <p>Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook. Facebook es una marca registrada de Facebook, Inc. Los resultados mencionados no son típicos y pueden variar. Actúa con diligencia y consulta a profesionales antes de tomar decisiones financieras o de vida.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
