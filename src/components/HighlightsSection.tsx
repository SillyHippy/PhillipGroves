import { ShieldCheck, Clock, Users, CheckCircle, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Clock,
    title: "Reliable & Consistent",
    description: "Strong work ethic with consistent attendance and punctuality",
  },
  {
    icon: ShieldCheck,
    title: "OSHA-10 Certified",
    description: "Safety trained with experience around chemicals, ladders, carts, and cleaning",
  },
  {
    icon: Users,
    title: "Professional & Courteous",
    description: "Comfortable interacting with customers and coworkers",
  },
  {
    icon: CheckCircle,
    title: "Works Independently",
    description: "Follows verbal instructions with minimal supervision needed",
  },
  {
    icon: Sparkles,
    title: "Clean & Organized",
    description: "Maintains clean, organized, and safe work areas in busy environments",
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
            Key <span className="text-gradient">Strengths</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
