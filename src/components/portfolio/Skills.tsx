import { skillGroups } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills & stack"
          title="Technical stack across cloud, containers and reliability"
          description="A full toolchain built over 12+ years of hands-on infrastructure, automation and operations work."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="panel panel-hover p-5">
              <h3 className="font-display text-sm font-semibold tracking-wide text-primary uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="pill">
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
}
