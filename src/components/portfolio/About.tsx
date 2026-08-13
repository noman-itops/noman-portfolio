import { Cpu, GitBranch, Radar, ShieldCheck } from "lucide-react";
import { aboutParagraphs, profile } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

const focus = [
  {
    icon: Cpu,
    title: "Platform Architecture",
    body: "Multi-cluster Kubernetes on Proxmox VE and cloud, shared services with Kong, Keycloak and Kafka.",
  },
  {
    icon: GitBranch,
    title: "Automation & CI/CD",
    body: "Terraform, Ansible and Helm with Azure DevOps, Jenkins and GitLab pipelines for zero-downtime releases.",
  },
  {
    icon: Radar,
    title: "Observability & SRE",
    body: "Prometheus, Grafana, OpenTelemetry and the LGTM stack — cutting MTTR by 40% across product lines.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Security",
    body: "Patroni PostgreSQL HA, DR automation, OS hardening, image scanning and ITIL-aligned incident response.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="About me" title="Engineering for uptime, scale and clarity" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 30)} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="panel p-5">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Availability:</span>{" "}
                {profile.availability}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Languages:</span> {profile.languages}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focus.map((item) => (
              <div key={item.title} className="panel panel-hover p-5">
                <item.icon className="size-5 text-primary" />
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
