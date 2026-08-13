import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional timeline"
          description="Twelve years across DevOps, SRE, SaaS architecture and infrastructure operations in the UAE, Europe and Pakistan."
        />

        <ol className="relative mt-12 space-y-8 border-l border-border pl-6 md:pl-10">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute top-7 -left-[31px] flex size-3 items-center justify-center rounded-full bg-primary ring-4 ring-background md:-left-[47px]" />
              <article className="panel panel-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-primary">
                      <Briefcase className="size-4" /> {job.company}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="size-3.5" /> {job.location}
                    </p>
                  </div>
                  <span className="pill font-mono">{job.period}</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point.slice(0, 40)}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="absolute top-[0.5rem] left-0 size-1.5 rounded-full bg-emerald/80" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li key={tag} className="pill">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
