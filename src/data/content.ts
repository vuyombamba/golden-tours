// ---------------------------------------------------------------------------
// Golden Tours — Gauteng school excursions & group tours.
// Content below is transcribed from the owner's own notes. Lines marked
// PLACEHOLDER / CONFIRM are places where the handwritten/voice notes were
// ambiguous or likely contain a typo for a known real venue — these are the
// site owner's best interpretation and should be double-checked before launch.
// ---------------------------------------------------------------------------

export const business = {
  name: "Golden Tours",
  tagline: "Unforgettable School Journeys, Planned With Care",
  phone: "+27 84 586 5884",
  phoneHref: "tel:+27845865884",
  whatsappHref:
    "https://wa.me/27845865884?text=" +
    encodeURIComponent("Hi Golden Tours, I'd like to enquire about "),
  email: "info@goldentours.co.za",
  website: "www.goldentours.co.za",
  region: "Gauteng",
  address: "Unit 870, Mogale Junction, Randfontein, Gauteng",
  yearsExperience: 10,
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "School Excursions", to: "/school-excursions" },
  { label: "Holiday Excursions", to: "/holiday-excursions" },
  { label: "Events & Programs", to: "/events" },
  { label: "Transport", to: "/transport" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// -----------------------------------------------------------------------
// SCHOOL DAY EXCURSIONS — grouped by subject
// -----------------------------------------------------------------------
export const schoolExcursions = [
  {
    subject: "Natural & Physical Sciences",
    grade: "Grade 7–9",
    stops: ["Gautrain", "Union Buildings"],
    depart: "07:30",
    returnTime: "17:30",
    learners: "60–230 learners",
    note: "2027 calendar — bookings now open.",
  },
  {
    subject: "Physical Science",
    grade: "Grade 7–10",
    stops: ["Union Buildings (via Gautrain)", "UP Science Museum (via Gautrain)"],
    depart: "08:30",
    returnTime: "17:30",
    learners: "60–230 learners",
    note: null,
  },
  {
    subject: "Tourism",
    grade: "Grade 10–11",
    stops: [
      "O.R. Tambo Airport — note: without an obtained permit, the group is transferred to the SAA Museum pending GDE approval",
      "Mall of Africa",
      "Gautrain (Marlboro–Midrand, single ticket)",
      "Union Buildings",
    ],
    depart: null,
    returnTime: null,
    learners: "60–230 learners",
    note: "Bookings open for 2027.",
  },
  {
    subject: "Life Sciences",
    grade: "Grade 10–11",
    stops: ["Johannesburg Zoo", "Lunch at KFC"],
    depart: null,
    returnTime: null,
    learners: null,
    note: "SBA Task — compulsory. The SBA task assessment must be completed before the end of February each year.",
  },
  {
    subject: "Social Science",
    grade: "Grade 6–9",
    stops: ["Constitution Hill", "Apartheid Museum"],
    depart: null,
    returnTime: null,
    learners: null,
    note: "Enquire via WhatsApp.",
  },
  {
    subject: "Social Science",
    grade: "Grade 10–11",
    stops: ["Freedom Park, Pretoria", "Gautrain (Centurion–Pretoria)", "Union Buildings"],
    depart: null,
    returnTime: null,
    learners: null,
    note: "Learners bring their own lunch.",
  },
  {
    subject: "Geography",
    grade: null,
    // PLACEHOLDER / CONFIRM — "Mapatiza" as given in the source notes; likely
    // refers to a specific mine or mining-tour operator name. Confirm exact
    // name/spelling before publishing.
    stops: ["Underground mining tour (Mapatiza — confirm name)", "Gautrain (Marlboro–Midrand)", "Mall of Africa"],
    depart: null,
    returnTime: "Back to school",
    learners: null,
    note: null,
  },
];

// -----------------------------------------------------------------------
// HOLIDAY EXCURSIONS — multi-day packages
// -----------------------------------------------------------------------
export const holidayExcursions = [
  {
    destination: "Durban Explorer",
    nights: 3,
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "3 nights hotel accommodation",
      "3 days full breakfast",
      "uShaka Marine World tour",
      "Indian Ocean boat cruise",
      "Moses Mabhida Stadium tour",
      // PLACEHOLDER / CONFIRM — source said "Umhlanga motions tour"; most
      // likely the Umhlanga Promenade.
      "Umhlanga Promenade tour (confirm exact name)",
    ],
    pricing: [
      { label: "Per learner, hotel stay", price: "R3,940" },
      { label: "Per learner, self-catering", price: "R3,200" },
    ],
  },
  {
    destination: "Mpumalanga Explorer",
    nights: 3,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "3 nights accommodation",
      "3 days breakfast",
      "Panorama Route tour",
      // PLACEHOLDER / CONFIRM — source said "3 run devours"; most likely
      // the Three Rondavels viewpoint on the Panorama Route.
      "Three Rondavels viewpoint (confirm exact name)",
      "God's Window",
      // PLACEHOLDER / CONFIRM — source said "Swidella caves"; most likely
      // Sudwala Caves.
      "Sudwala Caves (confirm exact name)",
      "Boma braai on the final night",
    ],
    pricing: [{ label: "Per learner", price: "R4,100" }],
  },
  {
    destination: "Cape Town Explorer",
    nights: 4,
    image: "https://images.unsplash.com/photo-1580060839160-25bb09a4a23c?q=80&w=1200&auto=format&fit=crop",
    includes: [
      "4 nights accommodation",
      "4 days breakfast",
      "Table Mountain tour",
      "Robben Island",
      "V&A Waterfront tour",
      "Cape Point tour",
    ],
    pricing: [
      { label: "Per learner, with return flights", price: "R12,500" },
      { label: "Per learner, no flights — luxury coach", price: "R8,500" },
    ],
  },
];

// -----------------------------------------------------------------------
// EVENTS & PROGRAMS
// -----------------------------------------------------------------------
export const dayPrograms = [
  {
    title: "Drug & Substance Abuse Awareness Day",
    tag: "Social Responsibility Excursion — Life Orientation",
    grade: "Compulsory, Grade 9–11",
    venue: "Walter Sisulu National Botanical Garden, Roodepoort",
    details: [
      "Presentation by a drug-awareness organisation",
      "Social Development Council on hand for learners who need assistance with substance-abuse support",
      "Lunch included",
      "Minimum 60 learners",
    ],
    dates: "21–23 July 2027",
    time: "09:30 – 16:30",
    price: "R220 per learner",
    cta: "whatsapp",
  },
  {
    title: "School Fun Day Fundraiser",
    tag: "Motivational Day",
    grade: null,
    // PLACEHOLDER / CONFIRM — source said "Herdebious holiday resort";
    // most likely a Hartbeespoort-area holiday resort.
    venue: "Hartbeespoort-area holiday resort (confirm exact name)",
    details: [
      "Swimming",
      "Super tube slides",
      "Learners bring their own lunch",
      "Learners bring their own swimwear and towels",
    ],
    dates: null,
    time: null,
    price: "Enquire for pricing",
    cta: "whatsapp",
  },
  {
    title: "Grade 8 Leadership Camp",
    tag: "School Excursion",
    grade: "Grade 8",
    venue: "2-night camp",
    details: [
      "Welcoming of the Grade 8 cohort",
      "School code of conduct",
      "Learner discipline",
      "Team building",
      "Character development",
      "Future development assessment",
    ],
    dates: null,
    time: null,
    price: "Enquire via WhatsApp",
    cta: "whatsapp",
  },
  {
    title: "Matric Study Camp — Final Exam Preparation",
    tag: "5-Night Camp",
    grade: "Grade 12",
    venue: null,
    details: [
      "Subject revision",
      "Focus on core curriculum outcomes",
      "Exam revision with group participation",
      "Exam-answering technique preparation",
      "Team building",
      "Breakfast, lunch and supper included",
    ],
    dates: "27 September – 2 October",
    time: null,
    price: null,
    cta: "whatsapp",
  },
];

export const matricDinners = [
  {
    venue: "Mount Amanzi Resort",
    // PLACEHOLDER / CONFIRM — spelled "Mont Amanzi" in source notes.
    details: [
      "1-night matric dance, main event",
      "Sleepover at Mount Amanzi",
      "Dinner",
      "Photos",
      "Red carpet",
      "DJ",
      "Swimming the following day",
      "Braai",
      "Breakfast",
    ],
    price: "R1,850 per student, per night",
  },
  {
    // PLACEHOLDER / CONFIRM — this option's notes were fragmentary
    // ("Season... Gold spar result"); venue name and full inclusions need
    // confirming with the owner before publishing.
    venue: "Second venue option (confirm venue name)",
    details: ["Details to be confirmed"],
    price: "R2,000 per learner — R600 non-refundable deposit",
  },
  {
    venue: "Sun City, North West",
    details: [
      "1-night stay",
      "Dinner — buffet menu",
      "DJ",
      "Photos",
      "Red carpet",
      "After-party",
      // PLACEHOLDER / CONFIRM — source said "Club Enco"; confirm exact venue name at Sun City.
      "After-party venue (confirm exact name: \"Club Enco\")",
      "Entry R150 per learner with ID",
      "Following day: Wimpy breakfast",
      // PLACEHOLDER / CONFIRM — source said "valley of ..."; most likely the Valley of Waves.
      "Valley of Waves (confirm exact name)",
      "Return by 17:30",
    ],
    price: "R2,200 per learner (package)",
  },
];

export const staffFunction = {
  title: "Staff Year-End Function",
  details: [
    // PLACEHOLDER / CONFIRM — source said "Rdebiuous boat cruise"; most
    // likely a Hartbeespoort Dam boat cruise.
    "Boat cruise, Hartbeespoort area (confirm exact name)",
    // PLACEHOLDER / CONFIRM — "Little Paris" tour as given in notes; confirm exact attraction name.
    "\"Little Paris\" tour (confirm exact name)",
    "Braai at a Hartbeespoort-area holiday resort (confirm exact name)",
    "Private lapa and swimming",
    "DJ music",
    "Transport included",
  ],
  price: "R750 per person — R250 per person non-refundable deposit",
};

// -----------------------------------------------------------------------
// TRANSPORT — bus fleet & Gautrain-combination routes
// -----------------------------------------------------------------------
export const transportRoutes = [
  {
    title: "Sci-Bono Discovery Centre",
    // PLACEHOLDER / CONFIRM — source said "Sybono"; this is almost
    // certainly Sci-Bono Discovery Centre, Newtown, Johannesburg.
    route: "Johannesburg to Sandton, combined with Gautrain",
    grade: "Grade 8–10",
    cta: "whatsapp",
  },
  {
    title: "JSE & E-Commerce Tour",
    route: "Johannesburg Stock Exchange — Gautrain Park Station to Sandton, Mandela Square",
    grade: "Grade 10–11",
    cta: "whatsapp",
  },
];

export const fleet = [
  { name: "Luxury Coaches", description: "Spacious, comfortable coaches for larger school groups and longer trips." },
  { name: "Midi-Size Coaches", description: "A versatile option for mid-sized groups." },
  { name: "Minibuses", description: "Comfortable transport for smaller groups." },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580060839160-25bb09a4a23c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511527844068-006b95ae34a9?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop",
];
