import { ArrowRight, Download, Linkedin, MapPin, Mail } from "lucide-react";
import { profile, stats } from "@/data/resume";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="grid-backdrop relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-shell">
        <span className="eyebrow">
          <span className="size-1.5 rounded-full bg-emerald" /> Available for new roles
        </span>

        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold sm:text-5xl md:text-6xl">
          <span className="text-gradient">Senior DevOps &amp; Site Reliability Engineer</span>
          <br />
          building resilient cloud-native platforms.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-primary" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="size-4 text-primary" /> {profile.email}
          </a>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg">
            <a href="#experience">
              View Experience <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={resumeAsset.url} download="Noman_Ahmed_CV.pdf">
              <Download className="size-4" /> Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="size-4" /> Connect on LinkedIn
            </a>
          </Button>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="panel panel-hover p-5">
              <dt className="font-display text-3xl font-semibold text-primary">{stat.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
