import { motion } from "framer-motion";
import { GraduationCap, MapPin, Terminal, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white">About Me</h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-invert lg:prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Salman Irfan — a Computer Science student continuously expanding my knowledge in software development, web technologies, and digital content creation.
                </p>
                <p>
                  I'm passionate about technology, content creation, and building digital solutions that combine technical expertise with creativity. My journey involves balancing academics, internships, and personal projects to continuously evolve as a professional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">Computer Science, Undergraduate<br/>Lahore Garrison University</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/20 text-secondary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Lahore, Pakistan<br/>Available for Remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">The Mission</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To craft digital experiences that are not only functional and efficient, but aesthetically memorable and deeply impactful.
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                <Award className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">The Drive</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consistently pushing boundaries, exploring new technologies, and maintaining a high standard of professional conduct.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
