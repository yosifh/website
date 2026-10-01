/**
 * ملف البيانات المركزي — كل محتوى الموقع من هنا.
 * Central content file — edit everything from this one place.
 */

// ─── أنواع البيانات | Types ──────────────────────────────────────────────────

export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  role: string;
  slogan: string;
  sloganEn: string;
  headline: [string, string];
  lede: string;
  about: string[];
  location: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  instagram: string;
  github: string;
  availability: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
}

export interface SkillGroup {
  group: string;
  caption: string;
  items: string[];
}

/** نمط عرض صورة المشروع:
 *  wide = لقطة أفقية تملأ البطاقة | tall = لقطة هاتف | mark = شعار داخل إطار */
export type CoverFit = "wide" | "tall" | "mark";
export type StatusTone = "live" | "progress" | "demo";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  fit: CoverFit;
  status: string;
  tone: StatusTone;
  tags: string[];
  href?: string;
  linkLabel?: string;
  featured?: boolean;
}

export interface Client {
  name: string;
  /** اتركه فارغاً وسيُعرض الاسم كشعار نصّي */
  logo?: string;
  sector: string;
  href?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// ─── الصور | Images ──────────────────────────────────────────────────────────

export const images = {
  wordmark: "/assets/wordmark-black.svg",
  wordmarkGreen: "/assets/wordmark-green.svg",
  mark: "/assets/mark-green.svg",
  markBlack: "/assets/mark-black.svg",
  profile: "/assets/profile.jpg",
  profileAlt: "/assets/profile-alt.jpg",
};

// ─── الملف الشخصي | Profile ──────────────────────────────────────────────────

export const profile: Profile = {
  name: "يوسف محمد",
  nameEn: "Yousif Mohammed",
  title: "مطوّر Full Stack ومهندس منتجات رقمية",
  role: "FULL STACK DEVELOPER / IT SOLUTIONS",
  slogan: "خلّي الفكرة تشتغل",
  sloganEn: "MAKE THE IDEA WORK",
  headline: ["أحوّل فكرة عملك", "إلى منتج يشتغل."],
  lede:
    "موقع، نظام، أو تطبيق على المتاجر — من التحليل والتصميم حتى النشر والتشغيل. أسلّم منتجاً يعمل بين يدي عميلك، لا ملف كود.",
  about: [
    "أنا يوسف محمد، مطوّر Full Stack من كربلاء. أشتغل مع أصحاب أعمال يريدون رقمنة شيء حقيقي: عيادة تحجز مواعيدها، مدرسة تتابع طلابها، محل يضبط حساباته، أو شركة تحتاج واجهة تليق بها.",
    "الفرق في طريقة عملي أنني لا أتوقف عند تسليم الملفات. أحلّل الحالة، أصمّم التجربة، أبني الواجهة والخلفية، أنشر على سيرفر أديره، وأتابع التطبيق حتى تتم الموافقة عليه في App Store و Google Play. مسؤولية واحدة من أول سطر حتى أول مستخدم.",
    "أبني عربيّاً أولاً — كل ما أسلّمه يعمل بالعربية RTL بشكل صحيح، وثنائي أو ثلاثي اللغة عند الحاجة. عملت مع عملاء في العراق وبريطانيا، وأتحدث مع كل واحد منهم بلغته.",
  ],
  location: "كربلاء، العراق",
  phone: "+964 773 560 0797",
  whatsapp: "9647735600797",
  email: "contact@yousifdev.net",
  website: "www.yousifdev.net",
  instagram: "yousif.developer",
  github: "yosifh",
  availability: "متاح لمشاريع جديدة",
};

// ─── الأرقام | Stats ─────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: "15", suffix: "+", label: "مشروعاً منفَّذاً" },
  { value: "2", label: "تطبيقاً منشوراً على المتاجر" },
  { value: "100", label: "نتيجة Lighthouse لموقع صروح بابل" },
  { value: "4", suffix: "+", label: "سنوات في التطوير" },
];

// ─── الخدمات | Services ──────────────────────────────────────────────────────

export const services: Service[] = [
  {
    title: "مواقع وواجهات رقمية",
    description:
      "موقع يعرض عملك كما هو فعلاً: سريع، عربي أولاً، ومكتوب ليقنع الزائر أن يتصل بك.",
    points: ["تصميم وهوية", "عربي/إنجليزي RTL", "سرعة وSEO"],
  },
  {
    title: "أنظمة إدارة وتطبيقات ويب",
    description:
      "نظام يدير عملك اليومي — حجوزات، حسابات، موظفين، مخزون — بدل الورق وجداول Excel.",
    points: ["صلاحيات وأدوار", "تقارير ولوحات", "أرشفة ونسخ احتياطي"],
  },
  {
    title: "تطبيقات موبايل حتى المتجر",
    description:
      "تطبيق iOS وأندرويد، وأنا من يتولّى الرفع والمراجعة حتى يصبح متاحاً للتحميل فعلاً.",
    points: ["iOS و Android", "إشعارات فورية", "متابعة مراجعة المتاجر"],
  },
  {
    title: "تشغيل وصيانة",
    description:
      "سيرفرات، نشر، نسخ احتياطي، ومتابعة بعد الإطلاق — لأن عمل المنتج يبدأ يوم إطلاقه لا ينتهي.",
    points: ["سيرفر وشهادات SSL", "نسخ احتياطي يومي", "تحديثات ودعم"],
  },
];

// ─── المهارات | Skills ───────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    group: "الواجهات",
    caption: "FRONTEND",
    items: ["React", "SvelteKit", "Flutter", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "الخلفية والبيانات",
    caption: "BACKEND",
    items: ["Go", "Python", "Node.js", "PostgreSQL", "Supabase"],
  },
  {
    group: "التشغيل والبنية",
    caption: "INFRASTRUCTURE",
    items: ["Docker", "Linux / VPS", "Nginx", "CI/CD", "Stripe"],
  },
  {
    group: "النشر على المتاجر",
    caption: "RELEASE",
    items: ["App Store", "Google Play", "TestFlight", "الإشعارات", "مراجعات المتاجر"],
  },
];

// ─── الأعمال | Projects ─────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "masari-sky",
    title: "مساري سكاي",
    client: "سكاي كروب",
    category: "تطبيق موبايل · ذكاء اصطناعي",
    description:
      "تطبيق يساعد خرّيج الثانوية العراقي على اختيار جامعته وتخصصه: فحص ميول من ٤٨ سؤالاً باللهجة العراقية، ومحرّك توصيات يرتّب الكليات حسب ميوله ومعدّله. رافقتُه من أول شاشة حتى الموافقة على App Store.",
    image: "/assets/work/masari-sky.jpg",
    imageAlt: "لقطة من تطبيق مساري سكاي على App Store",
    fit: "tall",
    status: "منشور على App Store",
    tone: "live",
    tags: ["Flutter", "Supabase", "AI"],
    href: "https://apps.apple.com/iq/app/id6790124693",
    linkLabel: "افتحه على App Store",
    featured: true,
  },
  {
    slug: "al-qusoor",
    title: "القصور الذكية",
    client: "حسن طرف — مؤسسة تعليمية",
    category: "تطبيق موبايل · تعليم",
    description:
      "بوابة أولياء الأمور لنظام إدارة تعليمية: حضور الطالب ودرجاته وجدوله الأسبوعي، وإشعار يصل الأب لحظة تسجيل الغياب. يعمل اليوم ببيانات مدرسية حقيقية على المتجرين.",
    image: "/assets/work/al-qusoor.jpg",
    imageAlt: "لقطة من تطبيق القصور الذكية",
    fit: "tall",
    status: "App Store و Google Play",
    tone: "live",
    tags: ["Flutter", "Supabase", "إشعارات"],
    href: "https://apps.apple.com/us/app/id6790401659",
    linkLabel: "افتحه على App Store",
  },
  {
    slug: "mdc",
    title: "منصة MDC للحجز وإدارة المرضى",
    client: "Marylebone Diagnostic Centre — لندن",
    category: "منصة ويب · رعاية صحية",
    description:
      "منصة كاملة تُغني عيادة تشخيصية في شارع بيكر عن نظام حجز خارجي مدفوع: حجز ودفع، ملفات مرضى، مسار عمل سريري من الفحص حتى تقرير الطبيب، ومتابعات آلية. ومعها إعادة بناء موقع العيادة كاملاً — ١٬١٩١ صفحة بمطابقة بصرية ١٠٠٪.",
    image: "/assets/work/mdc-platform.jpg",
    imageAlt: "استقبال عيادة Marylebone Diagnostic Centre في لندن",
    fit: "wide",
    status: "قيد التسليم النهائي",
    tone: "progress",
    tags: ["Go", "PostgreSQL", "SvelteKit", "Stripe"],
    href: "https://www.marylebonediagnosticcentre.com/",
    linkLabel: "موقع العميل",
    featured: true,
  },
  {
    slug: "sorooh-babil",
    title: "صروح بابل",
    client: "صروح بابل للمقاولات والتجارة العامة",
    category: "موقع شركة",
    description:
      "إعادة بناء كاملة لموقع شركة مقاولات بغدادية: عربي وإنجليزي، صور معالَجة بدقة، ونتيجة ١٠٠/١٠٠ في Lighthouse على كل المحاور. الموقع اليوم واجهة الشركة في كسب العقود.",
    image: "/assets/work/sorooh-babil.jpg",
    imageAlt: "موقع صروح بابل للمقاولات",
    fit: "wide",
    status: "مباشر · Lighthouse 100",
    tone: "live",
    tags: ["React", "أداء", "SEO"],
    href: "https://www.sorooh-babil.com/",
    linkLabel: "زُر الموقع",
  },
  {
    slug: "al-naser",
    title: "الناصر للتجارة العامة",
    client: "شركة الناصر",
    category: "موقع شركة · تجارة دولية",
    description:
      "موقع بثلاث لغات — عربي وإنجليزي وصيني — لشركة تستورد أنظمة الطاقة الشمسية والمعدات الزراعية، مع تحقّق من هوية المُرسِل قبل أن تصل أي رسالة إلى صاحب الشركة.",
    image: "/assets/work/al-naser.jpg",
    imageAlt: "موقع شركة الناصر للتجارة العامة",
    fit: "wide",
    status: "مباشر",
    tone: "live",
    tags: ["ثلاث لغات", "FastAPI", "تحقّق OTP"],
    href: "https://alnaser-company.com/",
    linkLabel: "زُر الموقع",
  },
  {
    slug: "vita",
    title: "فيتا العراق",
    client: "منتج خاص · Vita Iraq",
    category: "منصة صحية",
    description:
      "منصة صحية عراقية تربط المريض بالطبيب والصيدلية والمختبر في نظام واحد: حجز، استشارات، إحالات، ومتجر مستلزمات طبية — ببنية تحتية أملكها وأشغّلها بنفسي.",
    image: "/assets/work/vita-site.jpg",
    imageAlt: "منصة فيتا العراق الصحية",
    fit: "wide",
    status: "المنصة تعمل · التطبيق قيد المراجعة",
    tone: "progress",
    tags: ["React Native", "FastAPI", "MongoDB"],
    href: "https://www.iraq-vita.com/",
    linkLabel: "زُر المنصة",
  },
  {
    slug: "zimam",
    title: "زِمام",
    client: "منتج خاص",
    category: "SaaS · إدارة وكالات",
    description:
      "نظام يدير وكالة التسويق بدل مجموعات واتساب: سبعة أدوار، خط إنتاج محتوى من الفكرة حتى النشر، حصص محدّدة لكل عميل، ومالية وإحصاءات — مع تطبيق موبايل لفريق الميدان.",
    image: "/assets/work/zimam.svg",
    imageAlt: "شعار نظام زِمام",
    fit: "mark",
    status: "قيد الإطلاق",
    tone: "progress",
    tags: ["Go", "SvelteKit", "Flutter"],
  },
  {
    slug: "maras-karbala",
    title: "مراس كربلاء",
    client: "مراس كربلاء للاستثمار العقاري",
    category: "موقع عقاري",
    description:
      "موقع لبرج سكني فاخر على بُعد ٥٠٠ م من الحرم الحسيني: هوية بصرية كاملة استُخرجت من حضور العميل الرقمي، ورسوم مبنية بالكود بلا صور — حتى لا يُعرض البرج قبل اكتماله بصورة غير حقيقية.",
    image: "/assets/work/maras-karbala.jpg",
    imageAlt: "موقع مراس كربلاء العقاري",
    fit: "wide",
    status: "نموذج مباشر",
    tone: "demo",
    tags: ["SvelteKit", "هوية بصرية", "رسوم SVG"],
    href: "https://maraskarbala.vercel.app/",
    linkLabel: "شاهد النموذج",
  },
];

// ─── العملاء | Clients ──────────────────────────────────────────────────────

export const clients: Client[] = [
  {
    name: "Marylebone Diagnostic Centre",
    logo: "/assets/clients/mdc.png",
    sector: "عيادة تشخيصية — لندن",
    href: "https://www.marylebonediagnosticcentre.com/",
  },
  {
    name: "سكاي كروب",
    logo: "/assets/clients/sky-group.png",
    sector: "مجموعة تعليمية — العراق",
    href: "https://apps.apple.com/iq/app/id6790124693",
  },
  {
    name: "حسن طرف",
    logo: "/assets/clients/hasan-taraf.jpg",
    sector: "مؤسسة تعليمية — العراق",
    href: "https://apps.apple.com/us/app/id6790401659",
  },
  {
    name: "صروح بابل",
    logo: "/assets/clients/sorooh-babil.svg",
    sector: "مقاولات وتجارة عامة — بغداد",
    href: "https://www.sorooh-babil.com/",
  },
  {
    name: "الناصر للتجارة العامة",
    logo: "/assets/clients/al-naser.png",
    sector: "طاقة شمسية ومعدات — العراق",
    href: "https://alnaser-company.com/",
  },
  {
    name: "مراس كربلاء",
    logo: "/assets/clients/maras-karbala.svg",
    sector: "استثمار عقاري — كربلاء",
    href: "https://maraskarbala.vercel.app/",
  },
  {
    name: "MASAAH",
    sector: "هدايا فاخرة — بريطانيا",
  },
  {
    name: "DentCent",
    logo: "/assets/clients/dentcent.png",
    sector: "عيادة أسنان — كركوك",
  },
];

// ─── التنقل | Navigation ────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "الأعمال", href: "#work" },
  { label: "الخدمات", href: "#services" },
  { label: "عنّي", href: "#about" },
  { label: "العملاء", href: "#clients" },
];
