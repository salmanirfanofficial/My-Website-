import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "public", "salman-irfan-resume.pdf");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 50, bottom: 50, left: 55, right: 55 },
  info: {
    Title: "Salman Irfan - Resume",
    Author: "Salman Irfan",
  },
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const NAVY = "#0a0f1e";
const PRIMARY = "#0ea5e9";
const GRAY = "#64748b";
const LIGHT_GRAY = "#f1f5f9";
const WHITE = "#ffffff";
const DARK = "#1e293b";

const W = 595 - 55 - 55;

// ─── Header bar ──────────────────────────────────────────────────────────────
doc.rect(0, 0, 595, 130).fill(NAVY);

doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(30).text("SALMAN IRFAN", 55, 38, { width: W });

doc.fillColor(PRIMARY).font("Helvetica").fontSize(11).text(
  "Computer Science Student  |  Web Development Intern  |  Content Creator",
  55, 76, { width: W }
);

doc.fillColor("#94a3b8").font("Helvetica").fontSize(9).text(
  "Lahore, Pakistan  ·  github.com/salmanirfanofficiall  ·  linkedin.com/in/salmanirfanofficial  ·  salmanirfanofficial.medium.com",
  55, 97, { width: W }
);

// ─── Helpers ─────────────────────────────────────────────────────────────────
let y = 150;
const LINE_H = 16;
const SECTION_GAP = 18;

function sectionTitle(title) {
  y += SECTION_GAP;
  doc.fillColor(PRIMARY).font("Helvetica-Bold").fontSize(11).text(title.toUpperCase(), 55, y, { width: W });
  y += 14;
  doc.moveTo(55, y).lineTo(540, y).strokeColor(PRIMARY).lineWidth(0.8).stroke();
  y += 10;
}

function boldText(text, indent = 0) {
  doc.fillColor(DARK).font("Helvetica-Bold").fontSize(10).text(text, 55 + indent, y, { width: W - indent });
  y += LINE_H;
}

function metaText(text, indent = 0) {
  doc.fillColor(GRAY).font("Helvetica-Oblique").fontSize(9).text(text, 55 + indent, y, { width: W - indent });
  y += LINE_H - 2;
}

function bodyText(text, indent = 0) {
  doc.fillColor(DARK).font("Helvetica").fontSize(9.5).text(text, 55 + indent, y, { width: W - indent });
  y += LINE_H;
}

function bullet(text, indent = 12) {
  doc.fillColor(PRIMARY).font("Helvetica-Bold").fontSize(9.5).text("•", 55 + indent, y);
  doc.fillColor(DARK).font("Helvetica").fontSize(9.5).text(text, 55 + indent + 10, y, { width: W - indent - 10 });
  y += LINE_H;
}

function skillPills(skills) {
  const pillH = 17;
  const pillPad = 10;
  let px = 55;

  skills.forEach((skill) => {
    const tw = doc.font("Helvetica").fontSize(8.5).widthOfString(skill);
    const pillW = tw + pillPad * 2;
    if (px + pillW > 540) { px = 55; y += pillH + 5; }
    doc.roundedRect(px, y, pillW, pillH, 4).fillAndStroke(LIGHT_GRAY, LIGHT_GRAY);
    doc.fillColor(DARK).font("Helvetica").fontSize(8.5).text(skill, px + pillPad, y + 4);
    px += pillW + 6;
  });
  y += pillH + 8;
}

function certRow(title, issuer, date, idOrUrl) {
  // Title
  doc.fillColor(DARK).font("Helvetica-Bold").fontSize(9.5).text(title, 55, y, { width: W - 120 });
  // Date on right
  doc.fillColor(GRAY).font("Helvetica").fontSize(8.5).text(date, 55 + W - 110, y, { width: 110, align: "right" });
  y += 13;
  // Issuer
  doc.fillColor(PRIMARY).font("Helvetica").fontSize(8.5).text(issuer, 55, y, { width: W - 120 });
  y += 11;
  // ID or verify URL
  if (idOrUrl) {
    doc.fillColor(GRAY).font("Helvetica-Oblique").fontSize(8).text(idOrUrl, 55, y, { width: W });
    y += 11;
  }
  y += 4;
}

// ─── About ───────────────────────────────────────────────────────────────────
sectionTitle("About Me");
const about =
  "Computer Science student at Lahore Garrison University with hands-on experience in web development and digital marketing through internships at ISPR and GAO Tek Inc. Passionate about building digital solutions, creating content, and continuously expanding technical and creative skills. Awarded Best Intern of the Month at GAO Tek Inc. for outstanding performance in an international team environment.";
doc.fillColor(DARK).font("Helvetica").fontSize(9.5).text(about, 55, y, { width: W, lineGap: 3 });
y += doc.heightOfString(about, { width: W, lineGap: 3 }) + 8;

// ─── Experience ──────────────────────────────────────────────────────────────
sectionTitle("Experience");

boldText("Web Development Intern — GAO Tek Inc.");
metaText("Four-Month Internship  ·  International Remote Collaboration  ·  Dec 2025");
bullet("Worked on web development tasks and projects in a professional international setting.");
bullet("Collaborated with team members from different countries, enhancing communication and teamwork.");
bullet("Awarded Best Intern of the Month (Certificate ID: GAO-IRFAN-20250714) for outstanding dedication.");
y += 5;

boldText("Digital Marketing Intern — GAO Tek Inc.");
metaText("Four-Month Internship  ·  Dec 2025  ·  Certificate ID: GAO-IRFAN-SAL-20250714-BRY");
bullet("Completed a structured four-month internship program in Digital Marketing.");
bullet("Applied SEO, content strategy, and social media management techniques.");
y += 5;

boldText("Intern — ISPR");
metaText("Professional Workplace Experience");
bullet("Gained professional exposure in a structured, disciplined organizational environment.");
bullet("Developed organizational, communication, and teamwork skills.");

// ─── Certifications ──────────────────────────────────────────────────────────
sectionTitle("Certifications & Awards");

certRow(
  "Certificate of Achievement — Best Intern of the Month",
  "GAO Tek Inc.  ·  Web Development Internship Program",
  "Oct 8, 2025",
  "Certificate ID: GAO-IRFAN-20250714"
);

certRow(
  "Certificate of Training in Web Development",
  "GAO Tek Inc.  ·  Four-Month Internship Program",
  "Dec 4, 2025",
  "Certificate ID: GAO-IRFAN-SAL-20250714-BRY"
);

certRow(
  "Certificate of Training in Digital Marketing",
  "GAO Tek Inc.  ·  Four-Month Internship Program",
  "Dec 4, 2025",
  "Certificate ID: GAO-IRFAN-SAL-20250714-BRY"
);

certRow(
  "Certificate of Completion — Internship Program",
  "GAO Tek Inc.",
  "Dec 4, 2025",
  "Certificate ID: GAO-IRFAN-SAL-20250714-BRY"
);

certRow(
  "Introduction to Git and GitHub",
  "Google  ·  Coursera",
  "Jun 20, 2026",
  "Verify: coursera.org/verify/T6Z5OWJCGC15"
);

certRow(
  "Boost SEO Tools",
  "LearningMate  ·  Coursera",
  "Jun 21, 2026",
  "Verify: coursera.org/verify/N5XVB998IP30"
);

// ─── Skills ──────────────────────────────────────────────────────────────────
sectionTitle("Skills");
skillPills([
  "HTML5", "CSS3", "WordPress Development", "Git & GitHub",
  "SEO (Search Engine Optimization)", "Website Management",
  "Digital Marketing", "Content Writing", "Technical Research",
  "Social Media Management", "Communication", "Team Collaboration",
  "Problem Solving", "Digital Content Creation",
]);

// ─── Education ───────────────────────────────────────────────────────────────
sectionTitle("Education");
boldText("Bachelor of Science in Computer Science");
metaText("Lahore Garrison University, Lahore, Pakistan  ·  In Progress");

// ─── Interests ───────────────────────────────────────────────────────────────
sectionTitle("Interests");
skillPills([
  "Web Development", "Technology & Innovation", "Football", "Gaming",
  "Content Creation", "Writing", "Singing", "Social Media Marketing", "SEO",
]);

// ─── Footer ──────────────────────────────────────────────────────────────────
doc.fillColor(GRAY).font("Helvetica").fontSize(8).text(
  "linkedin.com/in/salmanirfanofficial  ·  github.com/salmanirfanofficiall  ·  instagram.com/salmanirfanofficial",
  55, 800, { width: W, align: "center" }
);

doc.end();

stream.on("finish", () => console.log("Resume PDF generated at:", outputPath));
stream.on("error", (err) => { console.error(err); process.exit(1); });
