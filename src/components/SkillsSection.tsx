import { Shield, Wrench, Monitor, Users } from "lucide-react";

const skills = [
  {
    icon: Wrench,
    title: "Operations",
    items: ["Retail Stocking", "Inventory Control", "Cycle Counting", "Merchandising"],
  },
  {
    icon: Shield,
    title: "Safety & Certifications",
    items: ["OSHA-10 Certified", "Forklift (NSC)", "Chemical Safety", "Hazard Awareness"],
  },
  {
    icon: Monitor,
    title: "Technical",
    items: ["Microsoft Office", "Windows OS", "Computer Troubleshooting", "RF Scanners"],
  },
  {
    icon: Users,
    title: "Work Ethic",
    items: ["Punctual & Dependable", "Independent Worker", "Follows Instructions", "Team Player"],
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
          A diverse skill set built across retail, logistics, and facility operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
