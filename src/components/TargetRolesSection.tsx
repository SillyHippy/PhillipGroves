import { ShoppingCart, UtensilsCrossed, Building2, Package } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const roles = [
  {
    icon: ShoppingCart,
    title: "Retail",
    items: [
      "Stocker",
      "Sales associate",
      "Inventory / merchandise associate",
      "Lobby or front-of-store attendant",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant / Hospitality",
    items: [
      "Lobby attendant",
      "Dining room attendant / busser",
      "Host support",
      "Restroom / condiment station upkeep",
    ],
  },
  {
    icon: Building2,
    title: "Facility / Building Support",
    items: [
      "Light custodial support",
      "Common-area cleaning",
      "Trash and recycling collection",
      "Basic facility checks",
    ],
  },
  {
    icon: Package,
    title: "Light Warehouse / Backroom",
    items: [
      "Shelf stocking",
      "Organizing inventory",
      "Cycle counts",
      "Staging product, manual carts / pallet jacks",
    ],
  },
];

const TargetRolesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-20 bg-background" id="roles">
      <div className="container mx-auto px-6">
        <div ref={ref} className="text-center mb-12 scroll-reveal">
          <p className="text-primary font-display font-semibold tracking-widest uppercase text-sm mb-4">
            Open To
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Target Part-Time <span className="text-gradient">Roles</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Currently seeking these types of part-time positions and similar roles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors shadow-card group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <role.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-3">{role.title}</h3>
              <ul className="space-y-2">
                {role.items.map((item) => (
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

export default TargetRolesSection;
