import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-card/30">
      <div ref={ref} className="container mx-auto px-6 max-w-3xl text-center scroll-reveal">
        <p className="text-primary font-display font-semibold tracking-widest uppercase text-sm mb-4">
          About Me
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Dependable. <span className="text-gradient">Detail-Oriented.</span> Ready to Work.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Hi, I'm Phillip — a reliable, detail-oriented worker with experience in retail, inventory, customer service, 
          and facility upkeep. I follow instructions accurately, work well independently after clear direction, and 
          take pride in keeping spaces clean, safe, and organized.
        </p>
        <div className="bg-card border border-border rounded-xl p-6 text-left">
          <h3 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
            Accommodations & Work Environment
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I use a personal mobility device (scooter) to conserve stamina and maintain a steady work pace. 
            In environments with adequate aisle or lobby space, I have demonstrated that I can complete all 
            essential job duties efficiently and safely with this accommodation. A step stool or ladder can 
            help safely reach higher shelves when needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
