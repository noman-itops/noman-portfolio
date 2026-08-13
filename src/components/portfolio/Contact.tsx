import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send the message.");
  };

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your infrastructure"
          description="Open to DevOps, SRE and platform engineering roles — full-time, hybrid or remote, worldwide."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <form onSubmit={handleSubmit} className="panel space-y-5 p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Send className="size-4" /> Send message
            </Button>
          </form>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="panel panel-hover flex items-center gap-4 p-5"
            >
              <Mail className="size-5 text-primary" />
              <span>
                <span className="block text-sm font-medium">Email</span>
                <span className="block text-sm text-muted-foreground">{profile.email}</span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="panel panel-hover flex items-center gap-4 p-5"
            >
              <Linkedin className="size-5 text-primary" />
              <span>
                <span className="block text-sm font-medium">LinkedIn</span>
                <span className="block text-sm text-muted-foreground">in/nomanahmedit</span>
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="panel panel-hover flex items-center gap-4 p-5"
            >
              <Phone className="size-5 text-primary" />
              <span>
                <span className="block text-sm font-medium">Phone</span>
                <span className="block text-sm text-muted-foreground">{profile.phone}</span>
              </span>
            </a>
            <div className="panel flex items-center gap-4 p-5">
              <MapPin className="size-5 text-primary" />
              <span>
                <span className="block text-sm font-medium">Location</span>
                <span className="block text-sm text-muted-foreground">{profile.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
