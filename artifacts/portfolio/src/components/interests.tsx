import { motion } from "framer-motion";
import { Compass } from "lucide-react";

const interests = [
  "Web Development",
  "Technology & Innovation",
  "Football",
  "Gaming",
  "Content Creation",
  "Writing",
  "Singing",
  "Social Media Marketing",
  "SEO"
];

export function Interests() {
  return (
    <section id="interests" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-[100%] blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 mb-8">
            <Compass className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Beyond the Screen</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:-translate-y-1 transition-all cursor-default shadow-lg"
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
