import { Layers } from "lucide-react";
import { projects } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects & initiatives"
          title="Infrastructure implementations and key deliverables"
          description="Selected platform builds, migrations and modernization programmes delivered end to end."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="panel panel-hover flex flex-col p-6">
              <Layers className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-base leading-snug font-semibold">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.outcome}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="pill">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
