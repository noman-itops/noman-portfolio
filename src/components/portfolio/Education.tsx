import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Education & certifications" title="Academic and professional credentials" />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="panel p-6">
            <h3 className="inline-flex items-center gap-2 font-display text-base font-semibold">
              <GraduationCap className="size-5 text-primary" /> Education
            </h3>
            <ul className="mt-5 space-y-4">
              {education.map((item) => (
                <li key={item.degree} className="border-l border-border pl-4">
                  <p className="text-sm font-medium">{item.degree}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.school}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6">
            <h3 className="inline-flex items-center gap-2 font-display text-base font-semibold">
              <Award className="size-5 text-primary" /> Certifications & Training
            </h3>
            <ul className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="absolute top-2 left-0 size-1.5 rounded-full bg-emerald/80" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
