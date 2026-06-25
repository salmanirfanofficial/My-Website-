import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, MapPin, Terminal, Award, ChevronLeft, ChevronRight } from "lucide-react";
import photo1 from "@assets/IMG_20240101_001117_893.jpg_1782371794438.jpeg";
import photo2 from "@assets/1704903009815.jpg_1782371794437.jpeg";
import photo3 from "@assets/IMG_20231222_144357_439_1782371794437.webp";
import photo4 from "@assets/1764992571000.jpg_1782371794436.jpeg";

const photos = [photo1, photo2, photo3, photo4];

export function About() {
  const [activePhoto, setActivePhoto] = useState(0);

  const prev = () => setActivePhoto((p) => (p - 1 + photos.length) % photos.length);
  const next = () => setActivePhoto((p) => (p + 1) % photos.length);

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
            {/* Text content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="prose prose-invert lg:prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Salman Irfan — a Computer Science student at Lahore Garrison University continuously expanding my knowledge in software development, web technologies, and digital content creation.
                </p>
                <p>
                  I've gained practical experience through internships at ISPR and GAO Tek Inc., earning the Best Intern of the Month Award. I'm passionate about technology, content creation, and building digital solutions that combine technical expertise with creativity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">Computer Science, Undergraduate<br />Lahore Garrison University</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/20 text-secondary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Lahore, Pakistan<br />Available for Remote</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <Terminal className="w-7 h-7 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">The Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To craft digital experiences that are not only functional and efficient, but aesthetically memorable and deeply impactful.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20">
                  <Award className="w-7 h-7 text-secondary mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">The Drive</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Consistently pushing boundaries, exploring new technologies, and maintaining a high standard of professional conduct.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo gallery */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center gap-4">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activePhoto}
                    src={photos[activePhoto]}
                    alt={`Salman Irfan photo ${activePhoto + 1}`}
                    className="w-full h-full object-cover object-top"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    data-testid={`img-about-photo-${activePhoto}`}
                  />
                </AnimatePresence>

                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Nav arrows */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Previous photo"
                  data-testid="button-photo-prev"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  aria-label="Next photo"
                  data-testid="button-photo-next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dot indicators + thumbnails */}
              <div className="flex gap-3 mt-1">
                {photos.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${i === activePhoto ? "border-primary scale-110" : "border-white/10 opacity-50 hover:opacity-75"}`}
                    aria-label={`View photo ${i + 1}`}
                    data-testid={`button-photo-thumb-${i}`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
