import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "GAO Tek Inc.",
    date: "Recent",
    highlight: "Awarded Best Intern of the Month",
    points: [
      "Worked on comprehensive web development-related tasks and projects.",
      "Collaborated with professionals from different countries in an international environment.",
      "Improved technical, communication, and teamwork skills.",
      "Recognized for outstanding performance and dedication."
    ]
  },
  {
    role: "Intern",
    company: "ISPR",
    date: "Past",
    points: [
      "Gained valuable professional workplace experience.",
      "Developed advanced organizational and communication skills.",
      "Learned the importance of discipline, teamwork, and professional conduct in high-stakes environments."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-37px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-background border border-primary flex items-center justify-center z-10 box-glow">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-left" : "md:pl-16 md:text-right"}`}>
                    <div className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Briefcase className="w-24 h-24" />
                      </div>
                      
                      <div className={`inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-muted-foreground mb-4 ${index % 2 !== 0 ? "md:float-right" : ""}`}>
                        {exp.date}
                      </div>
                      <div className="clear-both" />

                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <h4 className="text-lg text-primary font-medium mb-6">{exp.company}</h4>

                      {exp.highlight && (
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/10 text-secondary text-sm font-semibold mb-6 ${index % 2 !== 0 ? "md:float-right" : ""}`}>
                          {exp.highlight}
                        </div>
                      )}
                      <div className="clear-both" />

                      <ul className={`space-y-3 ${index % 2 !== 0 ? "md:text-right" : "text-left"}`}>
                        {exp.points.map((point, i) => (
                          <li key={i} className={`flex items-start gap-3 text-muted-foreground text-sm ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
