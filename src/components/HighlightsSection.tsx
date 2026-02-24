import { ShieldCheck, Truck, Clock, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: ShieldCheck,
    title: "OSHA-10 Certified",
    description: "Workplace safety trained & certified",
  },
  {
    icon: Truck,
    title: "CDL Training",
    description: "Professional truck driver program completed",
  },
  {
    icon: Award,
    title: "8+ Years Experience",
    description: "Retail, warehouse & automotive roles",
  },
  {
    icon: Clock,
    title: "Available Now",
    description: "Ready for part-time positions immediately",
  },
];

const HighlightsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-12 scroll-reveal">
          <p className="text-primary font-display font-semibold tracking-widest uppercase text-sm mb-4">
            Why Hire Phillip
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Quick <span className="text-gradient">Facts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const cardRef = useScrollReveal();
            return (
              <div
                key={item.title}
                ref={cardRef}
                className="scroll-reveal group bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
