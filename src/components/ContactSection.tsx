import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-card/50" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Phillip is available for part-time positions in the Tulsa, OK area. Reach out to discuss opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:pgroves1066@gmail.com"
            className="flex items-center gap-3 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
          >
            <Mail className="w-5 h-5" />
            Email Phillip
          </a>
          <a
            href="tel:9186883730"
            className="flex items-center gap-3 bg-secondary text-secondary-foreground font-display font-semibold px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors border border-border"
          >
            <Phone className="w-5 h-5" />
            (918) 688-3730
          </a>
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
