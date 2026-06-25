import { motion } from "framer-motion";
import { Trophy, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Best Intern of the Month",
    subtitle: "GAO Tek Inc.",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    title: "Git & GitHub Certification",
    subtitle: "Professional Credential",
    icon: CheckCircle,
    color: "text-primary"
  },
  {
    title: "SEO Tools Certification",
    subtitle: "Professional Credential",
    icon: CheckCircle,
    color: "text-primary"
  },
  {
    title: "Multiple Medium Articles",
    subtitle: "Published Author",
    icon: Star,
    color: "text-secondary"
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Milestones & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A track record of balancing academics, professional internships, and personal projects successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="bg-card border-white/5 hover:border-white/20 transition-all group overflow-hidden">
                  <CardContent className="p-8 text-center relative z-10 flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
