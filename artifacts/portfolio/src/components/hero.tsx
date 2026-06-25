import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/IMG_20240101_001117_893.jpg_1782371794438.jpeg";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm mb-6">
              Hello, I'm Salman Irfan
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital</span> Experiences.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Computer Science Student, Web Developer & Content Creator.
              Bridging the gap between technical expertise and creative expression.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="h-14 px-8 text-base rounded-full font-semibold" asChild data-testid="button-view-work">
                <a href="#experience">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full font-semibold border-white/10 hover:bg-white/5" asChild data-testid="button-contact">
                <a href="#contact">
                  Let's Talk
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-8 text-base rounded-full font-semibold text-muted-foreground hover:text-white hover:bg-white/5" asChild data-testid="button-download-cv">
                <a href="/salman-irfan-resume.pdf" download="Salman-Irfan-Resume.pdf">
                  <Download className="mr-2 h-5 w-5" /> Download CV
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-primary/25 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-secondary/20 animate-[spin_18s_linear_infinite_reverse]" />

              {/* Glow behind photo */}
              <div className="absolute inset-6 rounded-full bg-primary/20 blur-2xl" />

              {/* Profile photo */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Salman Irfan"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile-hero"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-card/80 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-2xl shadow-xl"
              >
                <span className="font-mono text-xs text-primary">web_dev</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-8 bg-card/80 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-2xl shadow-xl"
              >
                <span className="font-mono text-xs text-secondary">creative</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-8 -left-4 bg-card/80 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-2xl shadow-xl"
              >
                <span className="font-mono text-xs text-primary/80">cs_student</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
