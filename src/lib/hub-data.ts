export type HubKind = "blog" | "courses" | "faculties" | "branches" | "toppers" | "testimonials";

export type HubItem = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badges: string[];
  facts: string[];
  summary: string[];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export type HubConfig = {
  kind: HubKind;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  searchPlaceholder: string;
  filters: string[];
  schema: "Article" | "Course" | "Person" | "LocalBusiness" | "Review";
  items: HubItem[];
};

const articleFaqs = [
  { q: "Who should read this?", a: "CLAT and AILET aspirants who want a clear, structured answer before choosing their next step." },
  { q: "Is this useful for beginners?", a: "Yes. Each guide starts with basics, key facts, and a practical action checklist." },
];

export const hubConfigs: Record<HubKind, HubConfig> = {
  blog: {
    kind: "blog",
    path: "/blog",
    eyebrow: "Learning center",
    title: "CLAT Learning Hub",
    description: "Preparation strategies, legal GK, current affairs, English, logical reasoning, study plans, and career guidance in one searchable hub.",
    searchPlaceholder: "Search articles, PYQs, current affairs...",
    filters: ["Latest", "Preparation", "Legal GK", "Current Affairs", "English", "Logical Reasoning", "Study Plans"],
    schema: "Article",
    items: [
      {
        slug: "how-to-read-newspaper-for-clat",
        title: "How to read the newspaper for CLAT 2027",
        subtitle: "A daily 35-minute routine for legal awareness, vocabulary, and current affairs retention.",
        category: "Study Plans",
        badges: ["12 min read", "Beginner", "Updated today"],
        facts: ["Best for Class 11–12 students", "Works for CLAT and AILET", "Needs one notebook and one newspaper"],
        summary: ["Read editorials with a legal lens.", "Make issue-based notes, not date-based notes.", "Revise every Sunday with mock passages."],
        sections: [
          { heading: "Definition", body: "CLAT newspaper reading means extracting legal, political, economic, and social issues that can become passage-based questions." },
          { heading: "Daily timeline", body: "Spend 10 minutes scanning headlines, 15 minutes reading one editorial, and 10 minutes writing five exam-ready bullet points." },
          { heading: "Common mistake", body: "Students copy facts without context. Instead, write why the issue matters and which constitutional value it connects to." },
        ],
        faqs: articleFaqs,
      },
      {
        slug: "clat-legal-reasoning-strategy",
        title: "CLAT legal reasoning strategy for first-time aspirants",
        subtitle: "Understand principles, facts, exceptions, and elimination without memorising law books.",
        category: "Legal GK",
        badges: ["10 min read", "Beginner", "Popular"],
        facts: ["No prior law knowledge needed", "Practice principle-fact mapping", "Review mistakes by rule type"],
        summary: ["Start with the rule, not the options.", "Mark exceptions in the passage.", "Eliminate choices that add outside assumptions."],
        sections: [
          { heading: "Definition", body: "Legal reasoning tests whether you can apply a given rule to a new situation, not whether you know case law." },
          { heading: "Method", body: "Underline the principle, identify the fact trigger, compare all options, and choose the least assumption-heavy answer." },
          { heading: "Practice plan", body: "Solve 20 questions daily and maintain a mistake log with rule, trigger, trap, and corrected reasoning." },
        ],
        faqs: articleFaqs,
      },
      {
        slug: "monthly-current-affairs-revision",
        title: "Monthly current affairs revision table for CLAT",
        subtitle: "A structured way to turn news into quick revision blocks and mock-ready memory.",
        category: "Current Affairs",
        badges: ["8 min read", "Revision", "Recently updated"],
        facts: ["Use weekly buckets", "Revise with themes", "Connect events to static GK"],
        summary: ["Group news by themes.", "Use one-page monthly sheets.", "Attach one sample question per issue."],
        sections: [
          { heading: "Key facts", body: "CLAT current affairs rewards depth, so one issue should include background, institution, controversy, and outcome." },
          { heading: "Table format", body: "Use columns for topic, why in news, static link, legal link, and likely question angle." },
          { heading: "Revision", body: "Revise monthly sheets on day 7, day 21, and before every full-length mock." },
        ],
        faqs: articleFaqs,
      },
    ],
  },
  courses: {
    kind: "courses",
    path: "/courses",
    eyebrow: "Programs",
    title: "CLAT, AILET and Foundation courses",
    description: "Compare mode, duration, batch start, eligibility, tests, mentorship, pricing direction, scholarships, and outcomes.",
    searchPlaceholder: "Search by exam, mode, class, duration...",
    filters: ["CLAT", "AILET", "Foundation", "Online", "Offline", "Hybrid", "Weekend"],
    schema: "Course",
    items: [
      {
        slug: "clat-two-year-program",
        title: "CLAT Two-Year Program",
        subtitle: "A reading-first hybrid program for Class 11 students targeting NLUs with time to build fundamentals.",
        category: "CLAT",
        badges: ["Hybrid", "2 years", "Seats limited"],
        facts: ["Mode: Online + Offline", "Batch starts: August", "Includes 80+ mocks"],
        summary: ["Best for early starters.", "Weekly mentor review included.", "Covers English, GK, legal, logic, and quant."],
        sections: [
          { heading: "Who should join", body: "Class 11 students who want a calm, long-term plan rather than last-minute exam pressure." },
          { heading: "Curriculum", body: "The program moves from reading habit and concepts to sectional drills, full mocks, analysis, and final counselling." },
          { heading: "Scholarship", body: "Merit scholarships are offered through periodic scholarship tests and counselling reviews." },
        ],
        faqs: [
          { q: "Is it online?", a: "Students can choose online, offline, or hybrid support depending on city and schedule." },
          { q: "How many tests are included?", a: "The sample structure includes sectional tests, topic tests, and 80+ full-length mocks." },
        ],
      },
      {
        slug: "ailet-intensive-program",
        title: "AILET Intensive Program",
        subtitle: "A speed and accuracy-focused track for NLU Delhi aspirants with frequent timed mocks.",
        category: "AILET",
        badges: ["1 year", "NLU Delhi", "Timed drills"],
        facts: ["Mode: Hybrid", "Batch starts: September", "Weekly full mock"],
        summary: ["Designed for speed.", "Focuses on difficult reasoning sets.", "Includes personal analysis."],
        sections: [
          { heading: "Who should join", body: "Students targeting AILET who need sharper speed, elimination, and pressure management." },
          { heading: "Tests", body: "Timed drills, full-length papers, and post-mock reviews are built into the weekly cycle." },
          { heading: "Faculty", body: "Legal and reasoning mentors guide students through AILET-style traps and answer selection." },
        ],
        faqs: [
          { q: "Is this different from CLAT prep?", a: "Yes. AILET needs a faster strategy and different mock rhythm." },
          { q: "Are recordings available?", a: "For hybrid batches, recordings can be provided for revision and missed classes." },
        ],
      },
      {
        slug: "foundation-class-9-11",
        title: "Foundation Program for Class 9–11",
        subtitle: "Build reading, vocabulary, reasoning, and confidence before the competitive exam year begins.",
        category: "Foundation",
        badges: ["Early start", "Weekend", "Parent reviews"],
        facts: ["Mode: Weekend", "Duration: yearly", "Best for early habits"],
        summary: ["No exam pressure at start.", "Builds habits gradually.", "Parents get progress clarity."],
        sections: [
          { heading: "Definition", body: "A foundation course prepares younger students through comprehension, vocabulary, logic, and awareness before formal CLAT prep." },
          { heading: "Schedule", body: "Weekend classes and light weekday practice keep school and coaching balanced." },
          { heading: "Outcome", body: "Students enter Class 12 with stronger reading speed and fewer basics to rebuild." },
        ],
        faqs: [
          { q: "Is Class 9 too early?", a: "The focus is not exam pressure; it is reading, reasoning, and confidence." },
          { q: "Will school suffer?", a: "The sample schedule is weekend-friendly and designed around school priorities." },
        ],
      },
    ],
  },
  faculties: {
    kind: "faculties",
    path: "/faculties",
    eyebrow: "Faculty hub",
    title: "Meet NLU alumni mentors",
    description: "Search by subject, experience, specialization, student reviews, courses taught, branches available, and demo lectures.",
    searchPlaceholder: "Search faculty by subject or NLU...",
    filters: ["Legal", "English", "Logical", "GK", "Quant", "Lucknow", "Online"],
    schema: "Person",
    items: [
      {
        slug: "ishaan-mehra",
        title: "Adv. Ishaan Mehra",
        subtitle: "Legal Reasoning mentor · NLSIU Bangalore · Constitution and principle-fact application.",
        category: "Legal Reasoning",
        badges: ["8 years", "4.9 rating", "2,000+ mentored"],
        facts: ["Education: NLSIU Bangalore", "Specialization: Legal reasoning", "Available: Lucknow + Online"],
        summary: ["Teaches through examples.", "Focuses on reading the rule carefully.", "Runs weekly legal doubt clinics."],
        sections: [
          { heading: "Teaching philosophy", body: "Law entrance preparation should train students to think clearly, not memorise random legal facts." },
          { heading: "Achievements", body: "Mentored multiple top-rank students through legal reasoning, mock analysis, and interview preparation." },
          { heading: "Courses taught", body: "CLAT two-year, AILET intensive, and foundation legal reasoning modules." },
        ],
        faqs: [
          { q: "Does he teach beginners?", a: "Yes. His classes start with rule reading and simple everyday examples." },
          { q: "Are demo lectures available?", a: "Demo lectures can be requested during counselling." },
        ],
      },
      {
        slug: "riya-kapoor",
        title: "Prof. Riya Kapoor",
        subtitle: "English and comprehension mentor · NALSAR Hyderabad · Editorial reading systems.",
        category: "English",
        badges: ["7 years", "Reading expert", "1,500+ students"],
        facts: ["Education: NALSAR Hyderabad", "Specialization: English", "Available: Online + Delhi"],
        summary: ["Builds vocabulary in context.", "Improves passage stamina.", "Uses daily reading logs."],
        sections: [
          { heading: "About", body: "Riya helps students move from slow, anxious reading to structured comprehension with evidence-based answer selection." },
          { heading: "Teaching method", body: "Classes include editorial breakdowns, tone recognition, vocabulary mapping, and timed passage review." },
          { heading: "Results produced", body: "Students improve reading speed and accuracy through measured weekly targets." },
        ],
        faqs: [
          { q: "Can weak English students join?", a: "Yes. The method is designed for gradual improvement." },
          { q: "Does she teach vocabulary?", a: "Yes, through context and revision sheets, not rote word lists." },
        ],
      },
    ],
  },
  branches: {
    kind: "branches",
    path: "/branches",
    eyebrow: "Local centers",
    title: "Find your nearest TCR branch",
    description: "Local SEO-ready branch profiles with address, phone, directions, hours, facilities, reviews, courses, and faculty.",
    searchPlaceholder: "Search by city, landmark, or state...",
    filters: ["Lucknow", "Delhi", "Bangalore", "Library", "Parking", "Weekend batches"],
    schema: "LocalBusiness",
    items: [
      {
        slug: "lucknow-hazratganj",
        title: "TCR Lucknow · Hazratganj",
        subtitle: "Central Lucknow branch near Hazratganj Metro with library, counselling room, and hybrid classrooms.",
        category: "Lucknow",
        badges: ["4.9 rating", "Open 8 AM–8 PM", "Metro nearby"],
        facts: ["Phone: +91 92207 61399", "Facilities: Library, AC classrooms", "Courses: CLAT, AILET, Foundation"],
        summary: ["Easy metro access.", "Parent counselling available.", "Weekly mock analysis rooms."],
        sections: [
          { heading: "Address", body: "Hazratganj, Lucknow. Full landmark and map embed can be connected in the next phase." },
          { heading: "Facilities", body: "Classrooms, reading room, counselling desk, doubt area, and test review support." },
          { heading: "Batch timings", body: "Morning, evening, and weekend batches can be displayed dynamically once the admin panel is added." },
        ],
        faqs: [
          { q: "Is parking available?", a: "Limited nearby parking is available depending on the batch time." },
          { q: "Can parents visit?", a: "Yes. Counselling slots can be booked before visiting." },
        ],
      },
      {
        slug: "delhi-karol-bagh",
        title: "TCR Delhi · Karol Bagh",
        subtitle: "Central Delhi classroom hub for CLAT and AILET students with weekend and evening batches.",
        category: "Delhi",
        badges: ["4.8 rating", "Weekend batches", "Directions ready"],
        facts: ["Phone: +91 92207 61399", "Facilities: AC classrooms", "Courses: CLAT, AILET"],
        summary: ["Designed for school students.", "Close to central transport.", "Hybrid support available."],
        sections: [
          { heading: "Nearby landmarks", body: "Karol Bagh metro and central coaching district landmarks can be added with geo coordinates." },
          { heading: "Courses", body: "CLAT two-year, AILET intensive, and crash revision batches." },
          { heading: "Reviews", body: "Student and parent reviews can be connected to this profile for local trust signals." },
        ],
        faqs: [
          { q: "Are weekend batches available?", a: "Yes, weekend options are part of the sample branch structure." },
          { q: "Is a demo class possible?", a: "A demo can be requested from the enquiry form." },
        ],
      },
    ],
  },
  toppers: {
    kind: "toppers",
    path: "/toppers",
    eyebrow: "Topper stories",
    title: "Ranks, routines and real study plans",
    description: "Topper profiles with AIR, score, course, branch, preparation time, interview, books used, mistakes, and teacher advice.",
    searchPlaceholder: "Search by rank, exam, year, course...",
    filters: ["AILET", "CLAT", "2026", "2025", "Foundation", "Lucknow"],
    schema: "Person",
    items: [
      {
        slug: "aaryan-singh-air-1-ailet-2026",
        title: "Aaryan Singh · AIR 1 AILET 2026",
        subtitle: "First-year TCR result with a structured mock review habit and daily legal reading routine.",
        category: "AILET 2026",
        badges: ["AIR 1", "AILET", "Lucknow"],
        facts: ["Course: AILET Intensive", "Preparation time: 11 months", "Branch: Lucknow"],
        summary: ["Focused on mock correction.", "Read editorials daily.", "Used mentor feedback every week."],
        sections: [
          { heading: "Daily routine", body: "Two reading blocks, one timed reasoning set, current affairs revision, and mock correction notes." },
          { heading: "Mistakes", body: "Early mistakes included rushing legal passages and ignoring option wording." },
          { heading: "Teacher advice", body: "Review every wrong answer until the trap becomes obvious." },
        ],
        faqs: [
          { q: "Which course did he take?", a: "The sample profile maps him to the AILET Intensive Program." },
          { q: "Can students follow his routine?", a: "Yes, but it should be adjusted by class, school hours, and current mock score." },
        ],
      },
      {
        slug: "meera-iyer-air-7-clat-2026",
        title: "Meera Iyer · AIR 7 CLAT 2026",
        subtitle: "A CLAT success story built on reading speed, sectional strategy, and calm revision.",
        category: "CLAT 2026",
        badges: ["AIR 7", "CLAT", "Hybrid"],
        facts: ["Course: CLAT Two-Year", "Score: 112+ sample", "Mode: Hybrid"],
        summary: ["Improved passage stamina.", "Kept a GK issue tracker.", "Reduced silly mistakes."],
        sections: [
          { heading: "Books used", body: "Editorial notes, TCR legal reasoning sheets, current affairs compilations, and full-length mock papers." },
          { heading: "Study plan", body: "Concept work in year one, mock volume and analysis in year two." },
          { heading: "Recommended course", body: "Students starting early should compare the CLAT Two-Year Program." },
        ],
        faqs: [
          { q: "Was she an early starter?", a: "Yes, this sample profile represents a two-year prep path." },
          { q: "What was the biggest improvement area?", a: "Reading speed and current affairs retention." },
        ],
      },
    ],
  },
  testimonials: {
    kind: "testimonials",
    path: "/testimonials",
    eyebrow: "Student voice",
    title: "Reviews from students and parents",
    description: "Detailed testimonial stories with course context, branch, mentor, result, review, and next-step links.",
    searchPlaceholder: "Search reviews by course, branch, mentor...",
    filters: ["Students", "Parents", "CLAT", "AILET", "Lucknow", "Online"],
    schema: "Review",
    items: [
      {
        slug: "parent-review-small-batches",
        title: "Parent review: small batches made progress visible",
        subtitle: "A parent explains how weekly feedback changed their child's consistency and confidence.",
        category: "Parent Review",
        badges: ["Parent", "Foundation", "Lucknow"],
        facts: ["Course: Foundation", "Focus: consistency", "Rating: 5/5"],
        summary: ["Regular feedback helped.", "Mentors spoke in simple language.", "Progress became measurable."],
        sections: [
          { heading: "Review", body: "The biggest change was clarity. We knew what our child had to read, revise, and improve every week." },
          { heading: "Why it worked", body: "Small batches allowed questions and parent counselling kept the home routine aligned." },
          { heading: "Recommended next step", body: "Parents can book counselling to understand the right batch and schedule." },
        ],
        faqs: [
          { q: "Are parent reviews included?", a: "Yes, this hub supports both student and parent testimonials." },
          { q: "Can testimonials link to courses?", a: "Yes, each story can link internally to courses, branches, and mentors." },
        ],
      },
      {
        slug: "student-review-legal-reasoning",
        title: "Student review: legal reasoning finally became clear",
        subtitle: "A CLAT aspirant shares how mentor-led mock analysis reduced confusion in legal passages.",
        category: "Student Review",
        badges: ["CLAT", "Legal", "Online"],
        facts: ["Course: CLAT", "Mentor: Ishaan Mehra", "Rating: 4.9/5"],
        summary: ["Mock reviews were specific.", "Legal traps became visible.", "Confidence improved."],
        sections: [
          { heading: "Review", body: "Earlier I guessed between two options. After reviews, I could explain why one option was wrong." },
          { heading: "Course link", body: "This testimonial can internally link to the CLAT Two-Year Program and legal reasoning faculty profile." },
          { heading: "Result", body: "The sample result is improved accuracy and stronger mock confidence." },
        ],
        faqs: [
          { q: "Does TCR review mocks?", a: "Yes, mock analysis is a core part of the sample course structure." },
          { q: "Can online students get support?", a: "Yes, online and hybrid students can receive structured review support." },
        ],
      },
    ],
  },
};

export const utilityHubs = {
  results: {
    eyebrow: "Results",
    title: "CLAT and AILET result center",
    description: "A filter-ready results hub for ranks, year, exam, course, branch, and verified student stories.",
    cards: ["AIR 1 · AILET 2026", "AIR 7 · CLAT 2026", "AIR 14 · AILET 2026", "AIR 22 · CLAT 2026"],
  },
  events: {
    eyebrow: "Events",
    title: "Webinars, mock tests and counselling events",
    description: "A calendar-style hub for demo classes, scholarship tests, parent sessions, and topper talks.",
    cards: ["CLAT strategy webinar", "AILET speed workshop", "Parent counselling day", "Full-length open mock"],
  },
  scholarships: {
    eyebrow: "Scholarships",
    title: "Scholarship tests and fee support",
    description: "A conversion-focused hub explaining eligibility, test dates, benefits, process, FAQs, and application CTA.",
    cards: ["Up to 100% merit waiver", "Class 11 early starter test", "AILET achiever scholarship", "Parent counselling included"],
  },
  resources: {
    eyebrow: "Resources",
    title: "Free CLAT resources and downloads",
    description: "PYQs, current affairs sheets, vocabulary lists, mock tests, reading plans, and counselling checklists.",
    cards: ["CLAT PYQ checklist", "Monthly GK sheet", "Vocabulary tracker", "Mock analysis template"],
  },
  faqs: {
    eyebrow: "FAQs",
    title: "Answers for students and parents",
    description: "AEO-ready questions covering courses, fees, online classes, scholarships, tests, mentors, branches, and results.",
    cards: ["What is the best CLAT course?", "Is online coaching enough?", "How much does CLAT coaching cost?", "When should I start?"],
  },
};

export const getHubItem = (kind: HubKind, slug: string) =>
  hubConfigs[kind].items.find((item) => item.slug === slug);