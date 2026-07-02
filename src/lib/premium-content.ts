import campusImg from "@/assets/campus.jpg";
import libraryImg from "@/assets/student-library.jpg";
import debateImg from "@/assets/student-debate.jpg";
import heroImage from "@/assets/hero-courtroom.webp";
import topperPortrait from "@/assets/topper-portrait.jpg";

export const visualAssets = { campusImg, libraryImg, debateImg, heroImage, topperPortrait };

export type Stat = { value: string; label: string; detail?: string };
export type PremiumCard = { title: string; text: string; tag?: string; image?: string };
export type FAQ = { q: string; a: string };

export type PremiumPage = {
  slug: string;
  layer: "Brand" | "Exam" | "Conversion";
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  stats: Stat[];
  quickFacts: Stat[];
  cards: PremiumCard[];
  timeline: PremiumCard[];
  faqs: FAQ[];
  cta: string;
};

const commonStats = [
  { value: "5,000+", label: "Students trained", detail: "Across online and offline programs" },
  { value: "AIR 1", label: "AILET result", detail: "Aspirational rank stories" },
  { value: "80+", label: "Mock tests", detail: "Full-length and sectional" },
  { value: "1:15", label: "Mentor ratio", detail: "Small batch attention" },
];

const commonFaqs = [
  { q: "How do I know which program is right?", a: "Start with free counselling. A mentor maps your class, mock score, exam target and schedule to the right batch." },
  { q: "Is this suitable for beginners?", a: "Yes. Every exam path starts with fundamentals, reading habits, guided practice and personal review." },
  { q: "Do parents get progress clarity?", a: "Yes. Progress reports, mentor calls and mock analysis are designed to make improvement visible at home." },
];

export const brandPages: Record<string, PremiumPage> = {
  about: {
    slug: "about",
    layer: "Brand",
    eyebrow: "About The Court Room",
    title: "India's student-first law entrance preparation platform.",
    subtitle: "Built for students who do not just want coaching — they want a clear path to their dream NLU, backed by mentors, analytics and a serious learning culture.",
    heroImage: libraryImg,
    stats: commonStats,
    quickFacts: [
      { value: "NLU", label: "Alumni-led faculty" },
      { value: "3", label: "Premium branches" },
      { value: "Hybrid", label: "Online + offline" },
      { value: "Daily", label: "Practice culture" },
    ],
    cards: [
      { title: "Small Batch Size", text: "Every student is visible, heard and reviewed.", image: debateImg },
      { title: "AI-Powered Learning", text: "Analytics turn mocks into next-week action plans.", image: heroImage },
      { title: "Personal Mentorship", text: "Students get a mentor, not just a lecture schedule.", image: topperPortrait },
      { title: "Current Affairs Engine", text: "News becomes exam-ready context, not scattered notes.", image: libraryImg },
    ],
    timeline: [
      { title: "The problem", text: "Students were drowning in notes, big batches and generic advice." },
      { title: "The mission", text: "Create a coaching room where every aspirant gets direction, confidence and accountability." },
      { title: "The system", text: "Mentors, mocks, analytics, daily practice and parent clarity work together." },
      { title: "The dream", text: "Make an NLU feel possible before it becomes real." },
    ],
    faqs: commonFaqs,
    cta: "Book free counselling",
  },
  "why-choose-us": {
    slug: "why-choose-us",
    layer: "Brand",
    eyebrow: "Why students choose us",
    title: "A premium coaching system designed to remove every objection.",
    subtitle: "Parents need trust. Students need energy. Our model delivers both through faculty, analytics, small batches and deep performance review.",
    heroImage: debateImg,
    stats: commonStats,
    quickFacts: [
      { value: "AI", label: "Performance analytics" },
      { value: "Unlimited", label: "Doubt support" },
      { value: "Recorded", label: "Revision classes" },
      { value: "Weekly", label: "Reports" },
    ],
    cards: [
      { title: "Expert Faculty", text: "Learn from mentors who understand NLU standards." },
      { title: "Structured Curriculum", text: "Every week has a goal, task and review." },
      { title: "AI Analytics", text: "Weak areas are identified before they become rank blockers." },
      { title: "Daily Practice", text: "Momentum is built through small, consistent wins." },
      { title: "Small Batches", text: "Less crowd, more correction." },
      { title: "Performance Reports", text: "Parents can see effort becoming progress." },
    ],
    timeline: [
      { title: "Typical coaching", text: "Large batches, generic mocks, limited feedback." },
      { title: "TCR system", text: "Personal reports, mentor reviews, unlimited doubts." },
      { title: "Student outcome", text: "Less confusion, better consistency, sharper exam confidence." },
    ],
    faqs: commonFaqs,
    cta: "Compare your current prep",
  },
  methodology: {
    slug: "methodology",
    layer: "Brand",
    eyebrow: "Our methodology",
    title: "Eight steps from concept clarity to final NLU confidence.",
    subtitle: "A visual learning process that turns raw ambition into measurable weekly improvement.",
    heroImage: heroImage,
    stats: commonStats,
    quickFacts: [
      { value: "01", label: "Concept building" },
      { value: "02", label: "Guided practice" },
      { value: "03", label: "Mock analysis" },
      { value: "04", label: "Final revision" },
    ],
    cards: [
      { title: "English", text: "Reading stamina, tone, inference and vocabulary in context." },
      { title: "Legal", text: "Principle-fact application with trap recognition." },
      { title: "Logical", text: "Timed reasoning, elimination and pattern clarity." },
      { title: "Current Affairs", text: "Issue-based notes that answer passage questions." },
    ],
    timeline: ["Concept Building", "Guided Practice", "Topic Tests", "Revision", "Mock Tests", "Detailed Analysis", "Weak Area Improvement", "Final Revision"].map((title) => ({ title, text: "A mentor-backed step that moves the student forward with clarity." })),
    faqs: commonFaqs,
    cta: "See your learning plan",
  },
  vision: {
    slug: "vision",
    layer: "Brand",
    eyebrow: "Our vision",
    title: "Make elite legal education feel reachable to every serious student.",
    subtitle: "Our future is digital, data-led and deeply human — scholarships, better access and stronger guidance for every aspirant.",
    heroImage: campusImg,
    stats: commonStats,
    quickFacts: [
      { value: "Mission", label: "Student-first prep" },
      { value: "Vision", label: "Accessible excellence" },
      { value: "Impact", label: "Scholarships" },
      { value: "Future", label: "Digital learning" },
    ],
    cards: [
      { title: "Core Values", text: "Clarity, discipline, ambition and fairness." },
      { title: "Social Impact", text: "Scholarship pathways for deserving aspirants." },
      { title: "Digital Learning", text: "Analytics, mobile learning and parent visibility." },
      { title: "Future Goals", text: "A national law entrance ecosystem for every major exam." },
    ],
    timeline: [
      { title: "Now", text: "Build premium outcomes in core law entrance exams." },
      { title: "Next", text: "Scale digital resources and scholarships." },
      { title: "Future", text: "Become India's most trusted law entrance platform." },
    ],
    faqs: commonFaqs,
    cta: "Join the mission",
  },
};

export const examPages: Record<string, PremiumPage> = {
  "clat-ug": {
    slug: "clat-ug",
    layer: "Exam",
    eyebrow: "Exam page · CLAT UG",
    title: "Crack CLAT UG with a system built for NLU dreams.",
    subtitle: "Understand the exam, syllabus, pattern, books, courses, faculty, resources and next batch — all in one cinematic landing page.",
    heroImage: campusImg,
    stats: commonStats,
    quickFacts: [
      { value: "120", label: "Questions" },
      { value: "2 hrs", label: "Duration" },
      { value: "UG", label: "Law entrance" },
      { value: "NLUs", label: "Target colleges" },
    ],
    cards: [
      { title: "What is CLAT UG?", text: "The national entrance test for undergraduate law programs at NLUs." },
      { title: "Eligibility", text: "Class 12 appearing or passed students can prepare for the UG pathway." },
      { title: "Syllabus", text: "English, current affairs, legal reasoning, logical reasoning and quantitative techniques." },
      { title: "Best course", text: "Foundation, two-year, one-year and test-series paths based on your starting point." },
    ],
    timeline: ["Overview", "Important Dates", "Exam Pattern", "Syllabus", "Strategy", "Courses", "Faculty", "Results"].map((title) => ({ title, text: "Structured section for SEO, AEO and student decision-making." })),
    faqs: commonFaqs,
    cta: "Start CLAT plan",
  },
  ailet: {
    slug: "ailet",
    layer: "Exam",
    eyebrow: "Exam page · AILET",
    title: "Train for NLU Delhi with speed, accuracy and pressure control.",
    subtitle: "AILET rewards fast decisions. This page explains exam facts, strategy, batches, faculty and result stories.",
    heroImage: topperPortrait,
    stats: commonStats,
    quickFacts: [
      { value: "NLU Delhi", label: "Conducting body" },
      { value: "Timed", label: "Speed-heavy" },
      { value: "UG", label: "Law entrance" },
      { value: "Mock", label: "Weekly test rhythm" },
    ],
    cards: [
      { title: "What is AILET?", text: "A dedicated entrance for NLU Delhi and one of India's most competitive law exams." },
      { title: "Strategy", text: "Timed drilling, option elimination and calm pressure management." },
      { title: "Faculty", text: "Legal and logical mentors focused on AILET-style traps." },
      { title: "Results", text: "Rank stories that make the dream visible." },
    ],
    timeline: ["Diagnostic", "Timed Drills", "Weekly Mocks", "Analysis", "Revision", "Final Sprint"].map((title) => ({ title, text: "AILET-specific step in the preparation journey." })),
    faqs: commonFaqs,
    cta: "Start AILET plan",
  },
  cuet: {
    slug: "cuet",
    layer: "Exam",
    eyebrow: "Exam page · CUET Law",
    title: "Build a smart CUET Law pathway with structured preparation.",
    subtitle: "For aspirants exploring law through CUET-linked universities, domain preparation and counselling clarity matter.",
    heroImage: libraryImg,
    stats: commonStats,
    quickFacts: [
      { value: "CUET", label: "University route" },
      { value: "Domain", label: "Subject prep" },
      { value: "Hybrid", label: "Course modes" },
      { value: "Counselling", label: "College guidance" },
    ],
    cards: [
      { title: "What is CUET Law?", text: "A university entrance pathway for students considering law programs beyond NLUs." },
      { title: "Preparation", text: "Balance language, domain knowledge, aptitude and application timelines." },
      { title: "Resources", text: "Use PYQs, daily quiz and counselling sheets for clarity." },
      { title: "Courses", text: "Weekend and hybrid plans for school-going students." },
    ],
    timeline: ["Eligibility", "Pattern", "Domain Prep", "Mocks", "Applications", "Counselling"].map((title) => ({ title, text: "CUET Law decision and preparation milestone." })),
    faqs: commonFaqs,
    cta: "Explore CUET Law",
  },
  aibe: {
    slug: "aibe",
    layer: "Exam",
    eyebrow: "Exam page · AIBE",
    title: "Prepare for AIBE with clean legal concepts and exam confidence.",
    subtitle: "AIBE preparation needs clarity, structured revision and subject-wise legal confidence.",
    heroImage: heroImage,
    stats: commonStats,
    quickFacts: [
      { value: "AIBE", label: "Bar exam" },
      { value: "Law grads", label: "Target audience" },
      { value: "Concept", label: "Revision-led" },
      { value: "Practice", label: "Question focus" },
    ],
    cards: [
      { title: "What is AIBE?", text: "A certification exam for law graduates to practice law in India." },
      { title: "Approach", text: "Subject revision, bare act familiarity and question practice." },
      { title: "Resources", text: "Use checklists, topic tables and previous papers." },
      { title: "Mentorship", text: "Get guided revision based on weak subjects." },
    ],
    timeline: ["Subjects", "Bare Acts", "PYQs", "Revision", "Mock", "Final Review"].map((title) => ({ title, text: "AIBE-focused preparation block." })),
    faqs: commonFaqs,
    cta: "Start AIBE prep",
  },
};

export const conversionPages: Record<string, PremiumPage> = {
  resources: {
    slug: "resources",
    layer: "Conversion",
    eyebrow: "Resource universe",
    title: "Free tools, downloads and practice systems for serious aspirants.",
    subtitle: "Current affairs, study material, PYQs, formula sheets, legal dictionary, vocabulary, mock tests and daily quizzes — built as a conversion-ready SEO hub.",
    heroImage: libraryImg,
    stats: commonStats,
    quickFacts: [
      { value: "PYQs", label: "Past papers" },
      { value: "GK", label: "Current affairs" },
      { value: "Quiz", label: "Daily practice" },
      { value: "Mock", label: "Free test" },
    ],
    cards: ["Current Affairs", "Study Material", "Blogs", "PYQs", "Formula Sheets", "Downloads", "Legal Dictionary", "Vocabulary", "Mock Tests", "Daily Quiz"].map((title) => ({ title, text: "Searchable, downloadable and internally linked resource category." })),
    timeline: ["Search", "Choose category", "Download", "Practice", "Book counselling"].map((title) => ({ title, text: "Conversion journey for free resources." })),
    faqs: commonFaqs,
    cta: "Get free resources",
  },
  faqs: {
    slug: "faqs",
    layer: "Conversion",
    eyebrow: "Answer center",
    title: "Every question a student or parent asks before joining.",
    subtitle: "Search admissions, fees, courses, scholarships, faculty, branches, mocks, online classes, certificates and payments.",
    heroImage: debateImg,
    stats: commonStats,
    quickFacts: [
      { value: "Fees", label: "Transparent answers" },
      { value: "Courses", label: "Program clarity" },
      { value: "Scholarship", label: "Support options" },
      { value: "Online", label: "Tech support" },
    ],
    cards: ["Admissions", "Fees", "Courses", "Scholarship", "Faculty", "Branches", "Mock Tests", "Online Classes", "Payments", "Technical"].map((title) => ({ title, text: "FAQ category designed for direct AEO answers." })),
    timeline: ["Search question", "Read answer", "Compare option", "Call mentor"].map((title) => ({ title, text: "Fast decision support for parents and students." })),
    faqs: commonFaqs,
    cta: "Ask your question",
  },
  contact: {
    slug: "contact",
    layer: "Conversion",
    eyebrow: "Contact TCR",
    title: "Your dream college conversation starts here.",
    subtitle: "Call, WhatsApp, email, book counselling, explore branches and choose the fastest path to a mentor.",
    heroImage: campusImg,
    stats: commonStats,
    quickFacts: [
      { value: "Call", label: "+91 92207 61399" },
      { value: "WhatsApp", label: "Fast response" },
      { value: "Branches", label: "Visit campus" },
      { value: "Hours", label: "8 AM–8 PM" },
    ],
    cards: ["Call", "WhatsApp", "Email", "Book Counselling", "Branch Visit", "Office Hours"].map((title) => ({ title, text: "Quick action designed for lead conversion." })),
    timeline: ["Send enquiry", "Talk to mentor", "Get plan", "Join batch"].map((title) => ({ title, text: "Simple conversion flow from interest to enrolment." })),
    faqs: commonFaqs,
    cta: "Book counselling now",
  },
};

export const allPremiumPages = { ...brandPages, ...examPages, ...conversionPages };