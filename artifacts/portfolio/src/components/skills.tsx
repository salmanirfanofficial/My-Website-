import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Share2, PenTool } from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["HTML5", "CSS3", "WordPress Development", "Website Management"]
  },
  {
    title: "Digital & Content",
    icon: PenTool,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    skills: ["Content Writing", "Digital Content Creation", "Social Media Management", "Technical Research"]
  },
  {
    title: "Tools & Growth",
    icon: MonitorSmartphone,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    skills: ["Git & GitHub", "Search Engine Optimization (SEO)"]
  },
  {
    title: "Soft Skills",
    icon: Share2,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    skills: ["Communication Skills", "Team Collaboration", "Problem Solving"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-end gap-4 mb-16">
            <div className="h-px bg-white/10 flex-grow" />
            <h2 className="text-3xl md:text-5xl font-bold text-white text-right">Technical Arsenal</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 md:p-8 rounded-3xl bg-card border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none`} />
                
                <div className={`w-12 h-12 rounded-2xl ${cat.bgColor} flex items-center justify-center mb-6`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">{cat.title}</h3>
                
                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-muted-foreground text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
