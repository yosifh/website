import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  Github,
  Globe,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import {
  clients,
  images,
  navItems,
  profile,
  projects,
  services,
  skillGroups,
  stats,
} from "@/data";

/**
 * فلسفة الصفحة: أرضية بيضاء، والأخضر #01BC6D هو لون الفعل الوحيد.
 * الحركة تخدم القراءة: دخول متدرّج للواجهة، وكشف هادئ عند التمرير.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, suffix }: { value: string; suffix?: string }) {
  const target = Number(value);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? target : 0);

  useEffect(() => {
    if (!inView || reduced || Number.isNaN(target)) return;
    let frame = 0;
    const duration = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, target]);

  return (
    <strong ref={ref} dir="ltr">
      {Number.isNaN(target) ? value : shown}
      {suffix}
    </strong>
  );
}

function SectionHead({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: React.ReactNode;
  note?: string;
}) {
  return (
    <Reveal className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="display">{title}</h2>
      </div>
      {note && <p className="section-head-note">{note}</p>}
    </Reveal>
  );
}

type Filter = "all" | "apps" | "websites";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectFilter, setProjectFilter] = useState<Filter>("all");
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  const filteredProjects = projects.filter((project) => {
    if (projectFilter === "all") return true;
    if (projectFilter === "apps") return project.category.includes("تطبيق");
    if (projectFilter === "websites") return project.category.includes("موقع") || project.category.includes("منصة") || project.category.includes("SaaS");
    return true;
  });

  return (
    <main className="site-shell" dir="rtl">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      {/* ─── الترويسة ─────────────────────────────────────────────── */}
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="frame header-inner">
          <a href="#top" className="brand-lockup" aria-label={profile.name}>
            <img src={images.wordmark} alt={profile.name} className="brand-wordmark" />
            <span className="brand-caption">
              MAKE THE
              <br />
              IDEA WORK
            </span>
          </a>

          <nav
            className={`site-nav ${menuOpen ? "site-nav-open" : ""}`}
            aria-label="التنقل الرئيسي"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              لنتحدث <ArrowLeft size={15} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ─── الواجهة ──────────────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="frame">
          <div className="hero-inner">
            <div>
              <motion.span className="availability" {...rise(0.05)}>
                <span className="pulse-dot" aria-hidden="true" />
                {profile.availability}
              </motion.span>

              <motion.h1 className="display" {...rise(0.14)}>
                {profile.headline[0]}
                <span className="accent">{profile.headline[1]}</span>
              </motion.h1>

              <motion.p className="hero-lede" {...rise(0.24)}>
                {profile.lede}
              </motion.p>

              <motion.div className="hero-actions" {...rise(0.32)}>
                <a href="#work" className="btn btn-primary">
                  شوف الأعمال <ArrowLeft size={17} />
                </a>
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <MessageCircle size={17} /> راسلني على واتساب
                </a>
              </motion.div>

              <motion.div className="hero-meta" {...rise(0.4)}>
                <span>{profile.role}</span>
                <span className="dash" aria-hidden="true" />
                <span>KARBALA, IRAQ</span>
              </motion.div>
            </div>

            <motion.div
              className="hero-portrait"
              initial={reduced ? false : { opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.18, ease: EASE }}
            >
              <div className="portrait-plate" aria-hidden="true" />
              <figure className="portrait-figure">
                <img src={images.profile} alt={`صورة ${profile.name}`} />
                <figcaption className="portrait-bar">
                  <strong>{profile.name}</strong>
                  <span>{profile.sloganEn}</span>
                </figcaption>
              </figure>
              <div className="portrait-badge" aria-hidden="true">
                <img src={images.markBlack} alt="" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
            </motion.div>
          </div>

          {/* الأرقام */}
          <Reveal className="stats" delay={0.1}>
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <CountUp value={stat.value} suffix={stat.suffix} />
                <span>{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── الأعمال ──────────────────────────────────────────────── */}
      <section className="section" id="work">
        <div className="frame">
          <SectionHead
            eyebrow="الأعمال"
            title={
              <>
                مشاريع <em>تشتغل فعلاً</em> — لا صور مشاريع.
              </>
            }
            note="كل عمل هنا وصل إلى مستخدميه: على متجر التطبيقات، أو على نطاق العميل، أو على سيرفر يعمل الآن. والحالة مكتوبة بصراحة على كل بطاقة."
          />

          <Reveal delay={0.05}>
            <div className="projects-filter">
              <button
                className={`filter-btn ${projectFilter === "all" ? "active" : ""}`}
                onClick={() => setProjectFilter("all")}
              >
                الكل
              </button>
              <button
                className={`filter-btn ${projectFilter === "apps" ? "active" : ""}`}
                onClick={() => setProjectFilter("apps")}
              >
                تطبيقات
              </button>
              <button
                className={`filter-btn ${projectFilter === "websites" ? "active" : ""}`}
                onClick={() => setProjectFilter("websites")}
              >
                مواقع ومنصات
              </button>
            </div>
          </Reveal>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.08}>
                <article className="project-card">
                  <div className={`project-cover cover-${project.fit}`}>
                    <span className={`status-pill status-${project.tone}`}>{project.status}</span>
                    <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  </div>

                  <div className="project-body">
                    <span className="project-client">{project.client}</span>
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.href ? (
                      <a
                        href={project.href}
                        className="project-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.linkLabel ?? "زُر المشروع"} <ArrowUpLeft size={17} />
                      </a>
                    ) : (
                      <span className="project-note">عرض خاص عند الطلب</span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── الخدمات ──────────────────────────────────────────────── */}
      <section className="section section-tinted" id="services">
        <div className="frame">
          <SectionHead
            eyebrow="الخدمات"
            title={
              <>
                من التحليل حتى <em>أول مستخدم.</em>
              </>
            }
            note="تستطيع أن تأخذ خدمة واحدة، أو تسلّمني المشروع كاملاً وتستلمه شغّالاً."
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 2) * 0.08}>
                <article className="service-card">
                  <div className="service-index latin">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-points">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── عنّي ─────────────────────────────────────────────────── */}
      <section className="section" id="about">
        <div className="frame">
          <SectionHead eyebrow="عنّي" title="مطوّر واحد، مسؤولية كاملة." />

          <div className="about-grid">
            <Reveal>
              <figure className="about-figure" style={{ margin: 0 }}>
                <img src={images.profileAlt} alt={`صورة ${profile.name}`} loading="lazy" />
                <div className="about-slogan">
                  <strong>{profile.slogan}</strong>
                  <span>{profile.sloganEn}</span>
                </div>
              </figure>
            </Reveal>

            <Reveal delay={0.1} className="about-copy">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}

              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.group}>
                    <h4>
                      {group.group} <span>{group.caption}</span>
                    </h4>
                    <div className="skill-chips">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── العملاء ──────────────────────────────────────────────── */}
      <section className="section section-tinted" id="clients">
        <div className="frame">
          <SectionHead
            eyebrow="العملاء"
            title={
              <>
                جهات وثقت بي — <em>في العراق وخارجه.</em>
              </>
            }
            note="من عيادة في شارع بيكر بلندن، إلى شركة مقاولات في بغداد، إلى مؤسسات تعليمية في العراق."
          />

          <div className="clients-grid">
            {clients.map((client, index) => {
              const Tile = client.href ? "a" : "div";
              return (
                <Reveal key={client.name} delay={(index % 4) * 0.06}>
                  <Tile
                    className="client-tile"
                    {...(client.href
                      ? { href: client.href, target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    <div className="client-logo">
                      {client.logo ? (
                        <img src={client.logo} alt={client.name} loading="lazy" />
                      ) : (
                        <span className="client-logo-text">{client.name}</span>
                      )}
                    </div>
                    <div className="client-meta">
                      <div>
                        <strong>{client.name}</strong>
                        <span>{client.sector}</span>
                      </div>
                      {client.href && <ArrowUpLeft size={17} className="client-arrow" />}
                    </div>
                  </Tile>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── تواصل ────────────────────────────────────────────────── */}
      <section className="section" id="contact">
        <div className="frame">
          <Reveal className="contact-panel">
            <div className="contact-grid">
              <div className="contact-copy">
                <span className="eyebrow">تواصل</span>
                <h2 className="display">
                  عندك فكرة؟ <em>خلّينا نشغّلها.</em>
                </h2>
                <p>
                  اكتب لي بجملة واحدة عن مشروعك، وأرد عليك بخطوة عملية واضحة — بلا التزام وبلا
                  مصطلحات تقنية.
                </p>
                <div className="contact-actions">
                  <a
                    href={`https://wa.me/${profile.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light"
                  >
                    <MessageCircle size={17} /> واتساب مباشر
                  </a>
                  <a href={`mailto:${profile.email}`} className="btn btn-outline">
                    <Mail size={17} /> أرسل بريداً
                  </a>
                </div>
              </div>

              <div className="contact-channels">
                <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="channel">
                  <span className="channel-icon">
                    <Phone size={19} />
                  </span>
                  <span className="channel-text">
                    <span>PHONE</span>
                    <strong>{profile.phone}</strong>
                  </span>
                </a>
                <a href={`mailto:${profile.email}`} className="channel">
                  <span className="channel-icon">
                    <Mail size={19} />
                  </span>
                  <span className="channel-text">
                    <span>EMAIL</span>
                    <strong>{profile.email}</strong>
                  </span>
                </a>
                <a
                  href={`https://instagram.com/${profile.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="channel"
                >
                  <span className="channel-icon">
                    <Instagram size={19} />
                  </span>
                  <span className="channel-text">
                    <span>INSTAGRAM</span>
                    <strong>@{profile.instagram}</strong>
                  </span>
                </a>
                <div className="channel">
                  <span className="channel-icon">
                    <MapPin size={19} />
                  </span>
                  <span className="channel-text">
                    <span>BASED IN</span>
                    <strong style={{ direction: "rtl" }}>{profile.location}</strong>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── التذييل ──────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="frame footer-inner">
          <div className="footer-brand">
            <img src={images.wordmark} alt={profile.name} />
            <span>{profile.sloganEn}</span>
          </div>

          <div className="footer-social">
            <a
              href={`https://instagram.com/${profile.instagram}`}
              target="_blank"
              rel="noreferrer"
              aria-label="إنستغرام"
            >
              <Instagram size={18} />
            </a>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noreferrer"
              aria-label="غيت هب"
            >
              <Github size={18} />
            </a>
            <a href={`https://${profile.website}`} aria-label="الموقع">
              <Globe size={18} />
            </a>
            <a href="#top" aria-label="العودة إلى الأعلى">
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="footer-copy">
            © 2026 {profile.name} — جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </main>
  );
}
