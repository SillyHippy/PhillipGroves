import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-hero-gradient min-h-[70vh] flex items-center relative overflow-hidden pt-16">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-display font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
            Available for Part-Time Positions
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up">
            Phillip<br />
            <span className="text-gradient">Groves</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Reliable, physically capable professional with certifications in OSHA-10, forklift operation, and commercial driving. Ready to contribute from day one.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <Button asChild size="lg" className="shadow-glow">
              <a href="/Phillip_Groves_Resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Phillip</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <a href="mailto:plgroves66@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              plgroves66@gmail.com
            </a>
            <a href="tel:9186883730" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              (918) 688-3730
            </a>
            <span className="flex items-center gap-2 text-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Tulsa, OK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
