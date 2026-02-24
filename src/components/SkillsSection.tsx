import { Wrench, SprayCan, HardHat, Shield, Monitor } from "lucide-react";

const skills = [
  {
    icon: Wrench,
    title: "Operations",
    items: [
      "Retail stocking and facing",
      "Inventory control and cycle counting",
      "Merchandising and shelf organization",
      "Backroom and sales floor replenishment",
    ],
  },
  {
    icon: SprayCan,
    title: "Facility & Lobby",
    items: [
      "Dining room and lobby cleaning",
      "Table and surface sanitizing",
      "Sweeping, spot mopping, and floor care",
      "Trash removal and restocking supplies",
    ],
  },
  {
    icon: HardHat,
    title: "Equipment & Tools",
    items: [
      "Forklift operation training (NSC)",
      "Pallet jacks, rolling carts, U-boats",
      "RF scanners and handheld devices",
      "Step stools and ladders",
    ],
  },
  {
    icon: Shield,
    title: "Safety",
    items: [
      "OSHA-10 certified",
      "Chemical and cleaning safety",
      "Hazard awareness (wet floors, lifting, carts)",
      "Proper PPE usage",
    ],
  },
  {
    icon: Monitor,
    title: "Technical & Soft Skills",
    items: [
      "Microsoft Office and Windows",
      "Basic computer troubleshooting",
      "Punctuality and consistent attendance",
      "Follows verbal instructions and feedback",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Core <span className="text-gradient">Competencies</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-lg">
          A diverse skill set built across retail, facility maintenance, and logistics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-colors shadow-card group"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-3">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
