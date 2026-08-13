import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/resume";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          Noman<span className="text-primary">.</span>Ahmed
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href={resumeAsset.url} download="Noman_Ahmed_CV.pdf">
              <Download className="size-4" /> Resume
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary/60 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild size="sm">
                <a href={resumeAsset.url} download="Noman_Ahmed_CV.pdf">
                  <Download className="size-4" /> Download Resume
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
