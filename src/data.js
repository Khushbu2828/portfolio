// All portfolio content lives here, so you can update text without touching components.

const img = (file) => `${import.meta.env.BASE_URL}assets/images/${file}`;

export const profile = {
  name: "Khushbu Kumawat",
  title: "Frontend Developer",
  avatar: img("Khushbu-PP.png"),
  email: "09khushbukumawat2@gmail.com",
  phone: "+91 90249 85300",
  phoneHref: "tel:+919024985300",
  availability: "Immediate joiner",
  location: "Bengaluru, Karnataka, India",
  socials: [
    { label: "GitHub", href: "https://github.com/Khushbu2828", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/khushbu-kumawat-1045a4235/", icon: "linkedin" }, // TODO: add your LinkedIn URL
  ],
};

export const about = [
  "I'm a Frontend Engineer based in Bengaluru with 3+ years of experience building responsive, high-performance web interfaces with React.js, Next.js, TypeScript and modern JavaScript.",
  "I turn UI/UX designs into clean, reusable components, integrate REST APIs, manage application state with Redux Toolkit, and optimise load speed and runtime performance. I enjoy debugging tricky issues and working closely with product managers, designers and backend engineers to ship seamless, mobile-friendly experiences.",
];

export const services = [
  { icon: img("icon-dev.svg"), alt: "Web development icon", title: "Frontend development", text: "Production web apps with React.js, Next.js (SSR/SSG/ISR) and TypeScript." },
  { icon: img("icon-design.svg"), alt: "Design icon", title: "Design to code", text: "Figma designs turned into reusable, accessible component libraries." },
  { icon: img("icon-speed.svg"), alt: "Performance icon", title: "Performance optimisation", text: "Code splitting, lazy loading, memoization and Core Web Vitals tuning." },
  { icon: img("icon-test.svg"), alt: "Testing icon", title: "Testing & quality", text: "Jest and React Testing Library suites that keep release regressions near zero." },
];

export const experience = [
  {
    title: "Associate Frontend Developer · Byteflow Innovations",
    period: "May 2025 — Sep 2026",
    text: "Architected a React + TypeScript component library that cut codebase redundancy by 40%. Redesigned admin dashboards, reducing task completion time by 30%, and lowered page load times by 35% for 10,000+ daily users. Implemented JWT authentication with role-based route guards.",
  },
  {
    title: "Software Developer · Web4Next",
    period: "Oct 2023 — Jan 2025",
    text: "Built and deployed Next.js SSR applications, cutting client manual data processing by 30%. Integrated Strapi headless CMS, reviewed code for 4 junior developers and wrote Jest + RTL tests.",
  },
  {
    title: "Software Developer Intern · Web4Next",
    period: "Apr 2023 — Sep 2023",
    text: "Built responsive, cross-browser React components for screens from 320px to 1440px and joined architecture planning for 3+ products.",
  },
];

export const education = [
  {
    title: "Bachelor of Science · Shekhawati University",
    period: "2018 — 2020",
    text: "Rajasthan, India. Languages: English (professional proficiency), Hindi (native).",
  },
];

// Adjust these percentages to your own self-assessment.
export const skills = [
  { name: "React.js & Next.js", value: 90 },
  { name: "JavaScript & TypeScript", value: 85 },
  { name: "Redux Toolkit & REST APIs", value: 85 },
  { name: "Tailwind CSS, MUI & Ant Design", value: 85 },
  { name: "Jest & React Testing Library", value: 75 },
];

export const projectCategories = ["All", "AI", "React", "Next.js"];

export const projects = [
  { title: "FinTax Experts", category: "Next.js", label: "Next.js · Personal project", image: img("project-fintax.svg"), href: "https://fintax-experts.vercel.app" },
  { title: "Dynamic Filter Component System", category: "React", label: "React · TypeScript", image: img("project-filters.svg"), href: "https://dynamic-filter-component-system-tau.vercel.app" },
  { title: "Real-Time Streaming AI Interface", category: "AI", label: "AI · React + Gemini", image: img("project-streaming-ai.svg"), href: "https://real-time-streaming-ai-dynamic-inte.vercel.app/" },
  { title: "AI Assistant", category: "AI", label: "AI · React + Express", image: img("project-ai-assistant.svg"), href: "https://github.com/Khushbu2828/Ai-practice-project" },
  { title: "UI Component Library", category: "React", label: "React · Byteflow", image: img("project-uilib.svg"), href: "#" },
  { title: "Admin Dashboards", category: "React", label: "React · Byteflow", image: img("project-admin.svg"), href: "#" },
  { title: "Next.js + Strapi Apps", category: "Next.js", label: "Next.js · Web4Next", image: img("project-cms.svg"), href: "#" },
];
