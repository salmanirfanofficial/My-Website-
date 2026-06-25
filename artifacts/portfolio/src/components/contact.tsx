import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiInstagram, SiMedium } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/salmanirfanofficial/", label: "LinkedIn" },
  { icon: SiGithub, href: "https://github.com/salmanirfanofficiall", label: "GitHub" },
  { icon: SiMedium, href: "https://salmanirfanofficial.medium.com/", label: "Medium" },
  { icon: SiInstagram, href: "https://www.instagram.com/salmanirfanofficial/", label: "Instagram" }
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Get in Touch</h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's build something amazing together.</h3>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities, collaborations, and exploring how we can work together.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-muted-foreground text-sm">Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-muted-foreground text-sm">salmanirfanofficial@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-white"
                      aria-label={social.label}
                      data-testid={`social-link-${social.label.toLowerCase()}`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-white/5 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">Subject</label>
                  <Input id="subject" placeholder="Project Inquiry" className="bg-white/5 border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                  <Textarea id="message" placeholder="Hello, I'd like to talk about..." rows={5} className="bg-white/5 border-white/10 text-white resize-none" />
                </div>
                <Button size="lg" className="w-full h-14 text-base font-semibold" data-testid="button-submit-contact">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
