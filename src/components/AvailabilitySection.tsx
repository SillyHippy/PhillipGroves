import { CalendarDays, Sun, Moon, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: CalendarDays, text: "Open to part-time positions with flexible scheduling" },
  { icon: Sun, text: "Available for daytime, evening, and weekend shifts" },
  { icon: MapPin, text: "Tulsa area and nearby communities" },
];

const AvailabilitySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-16 bg-background" id="availability">
      <div ref={ref} className="container mx-auto px-6 scroll-reveal">
        <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
            <span className="text-gradient">Availability</span>
          </h2>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.text} className="flex items-center gap-3 justify-center text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
