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
          Dependable. <span className="text-gradient">Certified.</span> Ready to Work.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm Phillip Groves — a hands-on professional with OSHA-10, forklift, and commercial driving certifications
          backed by years of experience in retail, warehouse, and automotive environments. I show up on time,
          work hard, and take pride in doing the job right. I'm looking for a part-time position in the Tulsa area
          where I can put my skills to work and be a reliable member of your team from day one.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
