import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ExternalLink, X } from "lucide-react";
import certDigitalMarketing from "@assets/CERTIFICATE_OF_DIGITAL_MARKETING_-_Salman_Irfan_1782372710914.jpg";
import certInternship from "@assets/CERTIFICATE_OF_INTERNSHIP_-_Salman_Irfan_1782372710914.jpg";
import certWebDev from "@assets/CERTIFICATE_OF_WEB_DEVELOPMENT_-_Salman_Irfan_1782372710915.jpg";
import certBestIntern from "@assets/Salman-Certificate_Of_Achievement-Best_Intern_of_the_-Month_pa_1782372710916.jpg";

const certifications = [
  {
    title: "Best Intern of the Month",
    issuer: "GAO Tek Inc.",
    date: "Oct 8, 2025",
    id: "GAO-IRFAN-20250714",
    image: certBestIntern,
    highlight: true,
  },
  {
    title: "Certificate of Training in Web Development",
    issuer: "GAO Tek Inc.",
    date: "Dec 4, 2025",
    id: "GAO-IRFAN-SAL-20250714-BRY",
    image: certWebDev,
  },
  {
    title: "Certificate of Training in Digital Marketing",
    issuer: "GAO Tek Inc.",
    date: "Dec 4, 2025",
    id: "GAO-IRFAN-SAL-20250714-BRY",
    image: certDigitalMarketing,
  },
  {
    title: "Certificate of Completion — Internship",
    issuer: "GAO Tek Inc.",
    date: "Dec 4, 2025",
    id: "GAO-IRFAN-SAL-20250714-BRY",
    image: certInternship,
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google · Coursera",
    date: "Jun 20, 2026",
    verifyUrl: "https://coursera.org/verify/T6Z5OWJCGC15",
    image: null,
  },
  {
    title: "Boost SEO Tools",
    issuer: "LearningMate · Coursera",
    date: "Jun 21, 2026",
    verifyUrl: "https://coursera.org/verify/N5XVB998IP30",
    image: null,
  },
];

const CourseraIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8" fill="currentColor">
    <circle cx="16" cy="16" r="16" className="fill-blue-500" />
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">C</text>
  </svg>
);

export function Achievements() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certifications & Awards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Verified credentials from GAO Tek Inc. and Coursera — click any certificate to view it in full.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative rounded-2xl border overflow-hidden cursor-pointer transition-all hover:scale-[1.02] ${
                  cert.highlight
                    ? "border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 to-transparent"
                    : "border-white/10 bg-card hover:border-primary/30"
                }`}
                onClick={() => cert.image && setLightbox(cert.image)}
                data-testid={`card-cert-${index}`}
              >
                {/* Certificate image preview */}
                {cert.image ? (
                  <div className="relative h-44 overflow-hidden bg-white">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                    {cert.highlight && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-yellow-500/90 text-black text-xs font-bold px-2 py-1 rounded-full">
                        <Trophy className="w-3 h-3" /> Best Intern
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-44 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                    <CourseraIcon />
                  </div>
                )}

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                  <p className="text-primary text-xs mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">{cert.date}</span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-primary text-xs hover:underline"
                        data-testid={`link-verify-cert-${index}`}
                      >
                        Verify <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {cert.id && (
                      <span className="text-muted-foreground text-xs font-mono truncate max-w-[130px]">{cert.id}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                data-testid="button-close-lightbox"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={lightbox}
                alt="Certificate"
                className="w-full rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
