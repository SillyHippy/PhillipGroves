import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 bg-card/50" id="contact">
      <div ref={ref} className="container mx-auto px-6 text-center scroll-reveal">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
          Phillip is available for part-time positions in the Tulsa, OK area. Reach out to discuss opportunities.
        </p>
        <p className="text-sm text-foreground font-medium mb-10 max-w-lg mx-auto">
          Eager, reliable, and ready to start immediately — Phillip would love the opportunity to prove his value on your team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="shadow-glow">
            <a href="mailto:pgroves1066@gmail.com">
              <Mail className="w-5 h-5" />
              Email Phillip
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="tel:9186883730">
              <Phone className="w-5 h-5" />
              (918) 688-3730
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/Phillip_Groves_Resume.pdf" download>
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Based in Tulsa, Oklahoma
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
