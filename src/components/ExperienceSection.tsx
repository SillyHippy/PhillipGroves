const experiences = [
  {
    title: "Retail Sales Associate",
    company: "Advance Auto Parts",
    location: "Owasso, OK",
    period: "2015 – 2019",
    bullets: [
      "Assisted walk-in and phone customers with parts lookups and basic product questions",
      "Installed batteries and wiper blades and performed basic system testing",
      "Managed inventory through accurate stocking, cycle counts, and back stock moves",
      "Delivered parts safely and on time to commercial customers",
    ],
  },
  {
    title: "Regulatory Compliance Coordinator",
    company: "Video Gaming Technologies, Inc.",
    location: "Tulsa, OK",
    period: "2011 – 2016",
    bullets: [
      "Coordinated software shipments in line with State and Tribal regulations",
      "Ordered supplies and materials to support ongoing operations",
      "Created simple flow charts to help coworkers understand new procedures and workflows",
    ],
  },
];

const training = [
  {
    title: "Lobby Attendant (Trainee)",
    company: "Tacos 4 Life",
    location: "Tulsa, OK",
    period: "December 2025",
    bullets: [
      "Maintained cleanliness and organization of the dining area during peak hours",
      "Sanitized tables, chairs, and high-touch surfaces promptly after guest use",
      "Swept and spot-mopped floors to remove debris and reduce slip hazards",
      "Emptied trash receptacles and replaced liners as needed",
      "Restocked condiment stations, napkins, and supplies to keep service running smoothly",
    ],
  },
  {
    title: "Retail Stocker (Trainee)",
    company: "Gabe's",
    location: "Tulsa, OK",
    period: "November 2025",
    bullets: [
      "Stocked merchandise on shelves at various heights while maintaining store standards",
      "Followed specific verbal directions for product placement and organization",
      "Kept aisles clear and safe for customers while using inventory carts",
      "Demonstrated ability to stay on task and work independently after instructions",
    ],
  },
];

const TimelineItem = ({
  item,
}: {
  item: { title: string; company: string; location: string; period: string; bullets: string[] };
}) => (
  <div className="relative pl-8 pb-10 last:pb-0 group">
    <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-transparent" />
    <div className="absolute left-0 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-primary shadow-glow" />

    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
      <div>
        <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
        <p className="text-primary text-sm font-medium">
          {item.company} <span className="text-muted-foreground">· {item.location}</span>
        </p>
      </div>
      <span className="text-xs text-muted-foreground font-mono mt-1 sm:mt-0 shrink-0">{item.period}</span>
    </div>
    <ul className="space-y-1.5 mt-3">
      {item.bullets.map((b, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-card/50" id="experience">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Professional roles demonstrating reliability and capability.
            </p>
            <div>
              {experiences.map((exp) => (
                <TimelineItem key={exp.title + exp.company} item={exp} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Recent <span className="text-gradient">Training</span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Hands-on vocational training in current roles.
            </p>
            <div>
              {training.map((t) => (
                <TimelineItem key={t.title + t.company} item={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
