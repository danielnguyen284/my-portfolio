"use client";

import { motion, Variants } from "framer-motion";
import {
  Terminal,
  Code,
  ArrowRight,
  Database,
  Layout,
  Server,
  Wrench,
  User,
  Share2,
  Mail,
  GraduationCap,
  Briefcase,
  ArrowUp,
  Phone,
  ChevronDown
} from "lucide-react";
import { SiJavascript, SiDotnet } from "react-icons/si";
import { FaJava, FaDatabase, FaServer, FaRobot, FaFacebook, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import { translations } from "./translations";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [language, setLanguage] = useState<'EN' | 'VI'>('VI');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // reset after 5 seconds
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
      // scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillsData = [
    {
      category: "JavaScript / TS",
      icon: <SiJavascript className="w-10 h-10 text-primary mb-6" />,
      items: [
        { name: "React / Next.js", score: 9 },
        { name: "AngularJS", score: 9 },
        { name: "Vue.js", score: 6 },
        { name: "Node.js", score: 9 },
        { name: "NestJS", score: 9 },
        { name: "Frontend UI / Styling", score: 8 },
      ]
    },
    {
      category: ".NET Ecosystem",
      icon: <SiDotnet className="w-10 h-10 text-primary mb-6" />,
      items: [
        { name: "C# / .NET Core 8", score: 8 },
        { name: "ASP.NET Web API", score: 7 },
        { name: "Entity Framework", score: 7 },
        { name: "WPF / Desktop", score: 6 },
      ]
    },
    {
      category: "Java Ecosystem",
      icon: <FaJava className="w-10 h-10 text-primary mb-6" />,
      items: [
        { name: "Java Core", score: 8 },
        { name: "Spring Boot", score: 8 },
        { name: "Spring Security", score: 7 },
        { name: "Hibernate / JPA", score: 7 },
      ]
    },
    {
      category: "Databases",
      icon: <FaDatabase className="w-10 h-10 text-primary mb-6" />,
      items: [
        { name: "PostgreSQL", score: 8 },
        { name: "MySQL", score: 8 },
        { name: "MongoDB", score: 7 },
        { name: "SQL Server", score: 8 },
      ]
    },
    {
      category: "DevOps & System",
      icon: <FaServer className="w-10 h-10 text-primary mb-6" />,
      items: [
        { name: "AWS (EC2, S3, RDS)", score: 8 },
        { name: "Azure Cloud", score: 7 },
        { name: "Linux VPS Admin", score: 8 },
        { name: "Docker", score: 8 },
        { name: "CI/CD Pipelines", score: 7 },
        { name: "Git / GitHub Actions", score: 9 },
      ]
    },
    {
      category: "Vibe Coding Tools",
      icon: <FaRobot className="w-10 h-10 text-primary mb-6" />,
      items: [
        { name: "Codex", score: 9 },
        { name: "Antigravity", score: 8 },
        { name: "Cursor", score: 7 },
        { name: "Claude", score: 7 },
      ]
    }
  ];

  return (
    <div className="bg-transparent text-on-surface">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20 flex justify-between items-center px-margin-page h-24">
        <div className="flex items-center gap-4">
          <Terminal className="text-primary w-8 h-8" />
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tighter text-primary uppercase">
            {translations[language].hero.name}
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-12">
          {(["about", "skills", "experience", "projects", "contact"] as const).map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`font-label-sm text-label-sm uppercase tracking-widest transition-colors duration-300 ${
                activeSection === item
                  ? "text-primary border-b border-primary pb-1 font-medium"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {translations[language].nav[item]}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(lang => lang === 'EN' ? 'VI' : 'EN')}
            className="flex items-center gap-1.5 text-primary cursor-pointer hover:opacity-80 transition-all duration-300 font-label-sm tracking-wider"
            title="Toggle Language"
          >
            <span className={language === 'EN' ? 'font-bold underline underline-offset-4' : 'opacity-60'}>EN</span>
            <span className="opacity-40">|</span>
            <span className={language === 'VI' ? 'font-bold underline underline-offset-4' : 'opacity-60'}>VI</span>
          </button>
          <Terminal className="text-primary cursor-pointer hover:opacity-80 transition-all duration-300 w-6 h-6" />
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-24 px-margin-page overflow-hidden">
        {/* Technical Grid/Patterns in BG */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid overlay with radial mask so it fades out at the edges */}
          <div 
            className="absolute inset-0 bg-grid opacity-[0.12]"
            style={{
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}
          />
          
          {/* Glowing background shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-outline rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary rounded-full blur-2xl opacity-10"></div>

          {/* Dynamic blinking intersections */}
          {[
            { top: '20%', left: '30%', delay: 0 },
            { top: '25%', left: '70%', delay: 1.5 },
            { top: '40%', left: '15%', delay: 0.8 },
            { top: '45%', left: '85%', delay: 2.2 },
            { top: '60%', left: '45%', delay: 1.2 },
            { top: '70%', left: '25%', delay: 0.3 },
            { top: '75%', left: '65%', delay: 1.9 },
            { top: '85%', left: '50%', delay: 0.5 },
          ].map((dot, idx) => (
            <motion.div
              key={idx}
              className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ top: dot.top, left: dot.left }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 w-full items-center gap-stack-lg z-10">
          {/* Image Area */}
          <div className="md:col-span-5 relative flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              <img
                alt="Professional portrait"
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0"
                src="/avatar.jpg"
              />
              <div className="absolute -inset-4 border border-outline-variant/30 -z-10"></div>
            </div>

            {/* Socials vertical */}
            <div className="absolute left-[-2rem] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8">
              <Link href="https://github.com/dungnguyen284" target="_blank" title="GitHub" className="text-on-surface-variant hover:text-primary transition-colors"><FaGithub className="w-6 h-6" /></Link>
              <Link href="https://www.facebook.com/danielnguyen284" target="_blank" title="Facebook" className="text-on-surface-variant hover:text-primary transition-colors"><FaFacebook className="w-6 h-6" /></Link>
              <Link href="https://zalo.me/0388188526" target="_blank" title="Zalo: 038 818 8526" className="text-on-surface-variant hover:text-primary transition-colors"><Phone className="w-6 h-6" /></Link>
              <Link href="mailto:danielnguyen.developer@gmail.com" title="Email" className="text-on-surface-variant hover:text-primary transition-colors"><Mail className="w-6 h-6" /></Link>
            </div>
          </div>

          {/* Content Area */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-7 flex flex-col items-start order-1 md:order-2"
          >
            <h2 className="font-display-lg text-[64px] md:text-display-lg leading-none text-primary uppercase tracking-widest">
              {translations[language].hero.role1}
            </h2>
            <h3 className="font-display-lg text-[48px] md:text-headline-lg leading-tight text-primary uppercase tracking-[0.2em] opacity-80 mt-2">
              {translations[language].hero.role2}
            </h3>
            <div className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-stack-md border-l-2 border-primary pl-6 py-2 space-y-4">
              <p>
                {translations[language].hero.description}
              </p>
              <p>
                <strong className="text-on-surface font-medium">{translations[language].hero.shortTerm}</strong> {translations[language].hero.shortTermDesc}
              </p>
              <p>
                <strong className="text-on-surface font-medium">{translations[language].hero.longTerm}</strong> {translations[language].hero.longTermDesc}
              </p>
            </div>
            <div className="mt-stack-lg flex flex-wrap gap-stack-md">
              <Link href="#contact" className="px-8 py-3 border border-primary text-primary font-label-sm text-label-sm uppercase hover:bg-primary hover:text-background transition-all duration-300">
                {translations[language].hero.contact}
              </Link>
              <Link href="#projects" className="px-8 py-3 text-primary font-label-sm text-label-sm uppercase flex items-center gap-2 group">
                {translations[language].hero.viewWork}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="https://github.com/dungnguyen284" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-on-surface-variant font-label-sm text-label-sm uppercase flex items-center gap-2 hover:text-primary transition-colors">
                <Code className="w-5 h-5" />
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-8 hidden md:flex flex-col items-end gap-3">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="w-5 h-5 text-primary opacity-90" />
            <ChevronDown className="w-5 h-5 text-primary opacity-50 -mt-3" />
          </motion.div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest rotate-90 origin-bottom-right mt-2">
            {translations[language].hero.scrollDown}
          </span>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-section-gap px-margin-page bg-transparent border-t border-outline-variant/20" id="skills">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-stack-lg"
        >
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.3em]">{translations[language].skills.subtitle}</span>
          <h2 className="font-headline-lg text-headline-lg text-primary uppercase mt-2">{translations[language].skills.title}</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-grid"
        >
          {skillsData.map((group, groupIdx) => (
            <motion.div key={groupIdx} variants={fadeUp} className="p-stack-md border border-outline-variant/20 bg-background hover:border-primary transition-colors flex flex-col">
              {group.icon}
              <h3 className="font-title-md text-title-md text-primary uppercase mb-8">{group.category}</h3>
              <div className="space-y-6 flex-1">
                {group.items.map((skill, idx) => (
                  <div key={idx} className="w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body-md text-on-surface-variant uppercase tracking-widest text-sm">{skill.name}</span>
                      <span className="font-label-sm text-primary">{skill.score}/10</span>
                    </div>
                    <div className="h-1.5 w-full bg-outline-variant/20 rounded-full overflow-hidden flex gap-[2px]">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-full flex-1 rounded-sm ${i < skill.score ? 'bg-primary' : 'bg-transparent'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-section-gap px-margin-page bg-transparent border-t border-outline-variant/20" id="experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-stack-md">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="font-headline-lg text-[32px] text-primary uppercase">{translations[language].experience.educationTitle}</h2>
            </div>
            
            <div className="relative pl-8 space-y-12">
              {/* Animated vertical line */}
              <motion.div
                className="absolute left-0 top-0 w-px bg-outline-variant/30 origin-top"
                initial={{ scaleY: 0, height: "100%" }}
                whileInView={{ scaleY: 1, height: "100%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                <h3 className="font-title-md text-title-md text-primary uppercase">FPT University</h3>
                <p className="font-label-sm text-label-sm text-primary/70 tracking-widest mt-1 mb-3">{translations[language].experience.fptuGraduated}</p>
                <p className="font-body-md text-on-surface-variant">
                  {translations[language].experience.fptuDesc1}<br/>
                  {translations[language].experience.fptuDesc2}<br/>
                  {translations[language].experience.fptuDesc3}<br/>
                  {translations[language].experience.fptuDesc4}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-stack-md">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="font-headline-lg text-[32px] text-primary uppercase">{translations[language].experience.experienceTitle}</h2>
            </div>
            
            <div className="relative pl-8 space-y-12">
              {/* Animated vertical line */}
              <motion.div
                className="absolute left-0 top-0 w-px bg-outline-variant/30 origin-top"
                initial={{ scaleY: 0, height: "100%" }}
                whileInView={{ scaleY: 1, height: "100%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                <h3 className="font-title-md text-title-md text-primary uppercase">{translations[language].experience.freelanceRole}</h3>
                <h4 className="font-body-md text-on-surface font-medium">{translations[language].experience.freelanceCompany}</h4>
                <p className="font-label-sm text-label-sm text-primary/70 tracking-widest mt-1 mb-3">{translations[language].experience.freelanceTime}</p>
                <ul className="list-none space-y-2 font-body-md text-on-surface-variant">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong className="text-on-surface font-medium">{translations[language].experience.freelanceRoleLabel}</strong> {translations[language].experience.freelanceRoleDesc}
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong className="text-on-surface font-medium">{translations[language].experience.freelanceDescLabel}</strong> {translations[language].experience.freelanceDesc}
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                <h3 className="font-title-md text-title-md text-primary uppercase">{translations[language].experience.fptRole}</h3>
                <h4 className="font-body-md text-on-surface font-medium">{translations[language].experience.fptCompany}</h4>
                <p className="font-label-sm text-label-sm text-primary/70 tracking-widest mt-1 mb-3">{translations[language].experience.fptTime}</p>
                <ul className="list-none space-y-2 font-body-md text-on-surface-variant">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong className="text-on-surface font-medium">{translations[language].experience.fptDescLabel}</strong> {translations[language].experience.fptDesc}
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong className="text-on-surface font-medium">{translations[language].experience.fptFeatureLabel}</strong> {translations[language].experience.fptFeature}
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong className="text-on-surface font-medium">{translations[language].experience.fptTechLabel}</strong> {translations[language].experience.fptTech}
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                <h3 className="font-title-md text-title-md text-primary uppercase">{translations[language].experience.vtiRole}</h3>
                <h4 className="font-body-md text-on-surface font-medium">{translations[language].experience.vtiCompany}</h4>
                <p className="font-label-sm text-label-sm text-primary/70 tracking-widest mt-1 mb-3">{translations[language].experience.vtiTime}</p>
                <ul className="list-none space-y-2 font-body-md text-on-surface-variant">
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong className="text-on-surface font-medium">{translations[language].experience.vtiDescLabel}</strong> {translations[language].experience.vtiDesc}
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong className="text-on-surface font-medium">{translations[language].experience.vtiTechLabel}</strong> {translations[language].experience.vtiTech}
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Projects Section */}
      <section className="py-section-gap px-margin-page bg-transparent border-t border-outline-variant/20" id="projects">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex justify-between items-end mb-stack-lg"
        >
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.3em]">{translations[language].projects.subtitle}</span>
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase mt-2">{translations[language].projects.title}</h2>
          </div>
          <Link href="https://github.com/dungnguyen284" target="_blank" className="hidden md:block font-label-sm text-label-sm text-primary uppercase border-b border-primary pb-1">
            {translations[language].projects.viewGithub}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          {[
            {
              title: "Chứng Khoán Thịnh Vượng",
              tech: "NextJS • Node.js • PostgreSQL",
              year: "2026",
              teamSize: "1 (Solo)",
              role: "Fullstack Developer",
              description: {
                VI: "Nền tảng đầu tư và giao dịch chứng khoán hàng đầu Việt Nam. Cung cấp giải pháp tài chính toàn diện, quản lý danh mục đầu tư và bài viết phân tích tích hợp từ Google Blogger API.",
                EN: "Vietnam's leading stock investment and trading platform. Provides comprehensive financial solutions, portfolio management, and integrated analysis articles from the Google Blogger API."
              }[language],
              link: "https://www.chungkhoanthinhvuong.com/",
              deployTech: "VPS + Docker Image",
              img: "/projects/chungkhoan.png",
            },
            {
              title: "Aplus Billiards",
              tech: "ReactJS • Node.js • MongoDB",
              year: "2026",
              teamSize: "1 (Solo)",
              role: "Fullstack Developer",
              description: {
                VI: "Nền tảng thương mại điện tử chuyên cung cấp và quản lý dịch vụ Billiards. Bao gồm tính năng đặt bàn, quản lý sản phẩm và hỗ trợ trực tuyến.",
                EN: "E-commerce platform specialized in providing and managing Billiards services. Includes table booking, product management, and online support features."
              }[language],
              link: "https://aplusbilliards.vn/",
              deployTech: "VPS + GitHub Actions",
              img: "/projects/aplus.png",
              offset: true,
            },
            {
              title: "Evit Org",
              tech: "Next.js • Tailwind CSS • TypeScript • Headless CMS Wordpress",
              year: "5/2026 - Now",
              teamSize: "1 (Solo)",
              role: "Frontend Developer",
              description: {
                VI: "Hệ thống chuyên cung cấp giải pháp chuyển đổi số và tối ưu hóa doanh nghiệp bằng các hệ thống sales & lead generation hiệu quả. Tích hợp hệ thống Blog và đặt lịch họp thông minh",
                EN: "Specialized system providing digital transformation and business optimization solutions through effective sales & lead generation systems. Integrated with a Blog system and smart meeting scheduling."
              }[language],
              link: "https://evit-org.vercel.app/",
              deployTech: "Vercel",
              img: "/projects/evit.png",
            },
            {
              title: "Badminton Court Management",
              tech: ".NET Entity Framework Core • NextJS • MySQL",
              year: "2025",
              teamSize: "5",
              role: "Backend & Frontend",
              description: {
                VI: "Đồ án xây dựng hệ thống quản lý sân cầu lông toàn diện. Hỗ trợ tính năng đặt lịch, quản lý khách hàng, thanh toán và báo cáo doanh thu trực quan.",
                EN: "Capstone project building a comprehensive badminton court management system. Supports scheduling, customer management, payments, and visual revenue reporting."
              }[language],
              link: "https://github.com/hoaht-8203/Badminton_Court_Management_System",
              deployTech: "Azure + Digital Ocean",
              img: "/projects/badminton_wide.png",
              offset: true,
            },
          ].map((project, idx) => (
             <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`group cursor-pointer ${project.offset ? "md:mt-24" : ""}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden border border-outline-variant/20 bg-surface-container-high">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={project.img}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-background text-label-sm uppercase hover:bg-primary/90 transition-colors">
                    {translations[language].projects.viewProject}
                  </a>
                </div>
              </div>
              <div className="mt-stack-md flex flex-col gap-3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-title-md text-primary uppercase leading-tight">{project.title}</h3>
                  <span className="text-label-sm text-on-surface-variant whitespace-nowrap">{project.year}</span>
                </div>
                
                <div className="flex flex-col gap-2 text-body-sm text-on-surface-variant">
                  <p><strong className="text-primary">{translations[language].projects.description}</strong> {project.description}</p>
                  <p><strong className="text-primary">{translations[language].projects.teamSize}</strong> {project.teamSize}</p>
                  <p><strong className="text-primary">{translations[language].projects.role}</strong> {project.role}</p>
                  <p><strong className="text-primary">{translations[language].projects.techStack}</strong> {project.tech}</p>
                  <p><strong className="text-primary">{translations[language].projects.deploy}</strong> {project.deployTech}</p>
                  <p><strong className="text-primary">{translations[language].projects.link}</strong> <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors">{project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section-gap px-margin-page bg-transparent border-t border-outline-variant/20" id="contact">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          <h2 className="text-[36px] md:text-[64px] font-display-lg text-primary uppercase leading-tight mb-12">
            {translations[language].contact.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mb-section-gap">
            {/* Contact Info - Left Column */}
            <div className="flex flex-col gap-10 items-start justify-center">
              <div className="flex flex-col items-start text-left border-l-2 border-primary/50 pl-6">
                <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">{translations[language].contact.emailLabel}</span>
                <a href="mailto:danielnguyen.developer@gmail.com" className="text-title-md text-primary mt-1 hover:opacity-70 transition-opacity break-all">
                  danielnguyen.developer@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-start text-left border-l-2 border-primary/50 pl-6">
                <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">{translations[language].contact.phoneLabel}</span>
                <a href="https://zalo.me/0388188526" target="_blank" rel="noopener noreferrer" className="text-title-md text-primary mt-1 hover:opacity-70 transition-opacity">038 818 8526</a>
              </div>
              <div className="flex flex-col items-start text-left border-l-2 border-primary/50 pl-6">
                <span className="text-label-sm text-on-surface-variant uppercase tracking-widest">GitHub</span>
                <a href="https://github.com/dungnguyen284" target="_blank" rel="noopener noreferrer" className="text-title-md text-primary mt-1 hover:opacity-70 transition-opacity break-all">
                  github.com/dungnguyen284
                </a>
              </div>
            </div>

            {/* Contact Form - Right Column */}
            <div className="w-full text-left bg-surface-container-low border border-outline-variant/20 p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-title-lg text-primary uppercase mb-2">{translations[language].contact.sentTitle}</h3>
                  <p className="text-body-md text-on-surface-variant">
                    {translations[language].contact.sentMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder={translations[language].contact.namePlaceholder}
                      required
                      className="w-full bg-background border border-outline-variant/50 px-6 py-4 font-body-md text-on-surface focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder={translations[language].contact.emailPlaceholder}
                      required
                      className="w-full bg-background border border-outline-variant/50 px-6 py-4 font-body-md text-on-surface focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={4}
                      placeholder={translations[language].contact.messagePlaceholder}
                      required
                      className="w-full bg-background border border-outline-variant/50 px-6 py-4 font-body-md text-on-surface focus:border-primary focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary text-background font-label-sm text-label-sm uppercase px-8 py-4 hover:opacity-90 transition-opacity"
                  >
                    {translations[language].contact.sendButton}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Floating Widget - Back to Top with scroll progress ring */}
      <div className="fixed bottom-8 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-primary shadow-2xl backdrop-blur-md hover:bg-primary hover:text-background transition-all duration-300"
          title="Back to Top"
        >
          {/* SVG Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Track */}
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-outline-variant/30" />
            {/* Progress */}
            <circle
              cx="24" cy="24" r="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-primary transition-all duration-100"
              strokeDasharray={`${2 * Math.PI * 22}`}
              strokeDashoffset={`${2 * Math.PI * 22 * (1 - scrollProgress)}`}
            />
          </svg>
          <ArrowUp className="w-5 h-5 relative z-10" />
        </button>
      </div>
    </div>
  );
}
