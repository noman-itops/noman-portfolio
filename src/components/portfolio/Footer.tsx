import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
