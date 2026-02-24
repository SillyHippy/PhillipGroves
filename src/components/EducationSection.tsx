import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 bg-background" id="education">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">
          Education & <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 border border-border shadow-card">
            <GraduationCap className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-1">Professional Truck Driver Program</h3>
            <p className="text-sm text-muted-foreground">Tulsa Tech · Broken Arrow, OK</p>
            <span className="inline-block mt-3 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Completed</span>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-card">
            <Award className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-1">OSHA-10 Certified</h3>
            <p className="text-sm text-muted-foreground">Occupational Safety & Health Administration</p>
            <span className="inline-block mt-3 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Active</span>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-card">
            <Award className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-semibold text-foreground mb-1">Forklift Operator (NSC)</h3>
            <p className="text-sm text-muted-foreground">National Safety Council Certified</p>
            <span className="inline-block mt-3 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
