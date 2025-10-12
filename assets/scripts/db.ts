import Dexie, { type EntityTable } from 'dexie';

// Consider end dates before the start date as 'In Progress'
// (required since dexie cannot index null or undefined )

interface Skill {
  name: string;
  experienceLevel: string[];
  category: string[]; // their names
}

interface SkillCategory {
  name: string;
  subCategories: string[]; // their names
}

interface Certificate {
  organization: string[]; // their names
  name: string;
  images: string[];
  skills: string[]; // their names
  links: string[]; // their urls
  code: string;
  description: string;
}

interface Project {
  name: string;
  skills: string[]; // their names
  startDate: Date;
  endDate: Date;
  description: string;
  links: string[]; // their urls
  relatedActivities: number[]; // their ids
  relatedProjects: string[]; // their names
}

interface Link {
  url: string;
  type: string; // their name
}

interface LinkType {
  name: string;
}

interface Role {
  id: number;
  organization: string[]; // their names
  name: string;
  type: string;
  category: string[]; // their names
  startDate: Date;
  endDate: Date;
  skills: string[]; // their names
  modules: string[]; // their codes
  locations: string[];
  description: string;
  links: string[]; // their urls
  relatedActivities: number[]; // their ids
}

interface RoleCategory {
  name: string;
  skills: string[]; // their names
}

interface Organization {
  name: string;
  roles: number[]; // their ids
  locations: string[];
  links: string[]; // their urls
}

interface Module {
  organization: string[]; // their names
  name: string;
  code: string;
  grade: string;
  year: string;
}


const db = new Dexie('Database') as Dexie & {
  // typing
  skills: EntityTable<Skill, 'name'>;
  skillCategories: EntityTable<SkillCategory, 'name'>;
  certificates: EntityTable<Certificate, 'name'>;
  projects: EntityTable<Project, 'name'>;
  links: EntityTable<Link, 'url'>;
  linkTypes: EntityTable<LinkType, 'name'>;
  roles: EntityTable<Role, 'id'>;
  roleCategories: EntityTable<RoleCategory, 'name'>;
  organizations: EntityTable<Organization, 'name'>;
  modules: EntityTable<Module, 'code'>;
};

// useful for when modifying this file during development
db.delete().then(() => db.open()) // ensure localstorage is cleared

// Schema declaration:
db.version(1).stores({
  skills: 'name, *category, *experienceLevel',
  skillCategories: 'name, *subCategories',
  certificates: 'name, *organization, *skills, code',
  projects: 'name, *skills, startDate, endDate, *relatedActivities, *relatedProjects',
  links: 'url, type',
  linkTypes: 'name',
  roles: 'id, name, *organization, type, *category, startDate, endDate, *skills, *locations, *relatedActivities',
  roleCategories: 'name, *skills',
  organizations: 'name, *roles, *locations',
  modules: 'code, name, *organization, grade, year'
});

db.on('populate', () => {


  db.skillCategories.bulkPut([
    { name: 'Spoken Languages', subCategories: ['Romance languages (Latin Languages)'] },
    { name: 'Romance languages (Latin Languages)', subCategories: [] },
    {
      name: "Languages", subCategories: ['Programming Languages',
        'Scripting Languages', 'Style Sheet Languages', 'Markup Languages',
        'Query Languages', 'Data Definition Languages', 'Front-End Languages',
        'Back-End Languages', 'High-Level Languages', 'Low-Level Languages',
        'Modelling Languages']
    },
    {
      name: "Programming Languages", subCategories: [
        'Functional Programming Languages', 'Object-Oriented Programming Languages',
        'Procedural Programming Languages', 'Logic Programming Languages',
        'Assembly Languages']
    },
    { name: 'Scripting Languages', subCategories: [] },
    { name: 'Style Sheet Languages', subCategories: [] },
    { name: 'Markup Languages', subCategories: [] },
    { name: 'Query Languages', subCategories: [] },
    { name: 'Data Definition Languages', subCategories: [] },
    { name: 'Front-End Languages', subCategories: [] },
    { name: 'Back-End Languages', subCategories: [] },
    { name: 'High-Level Languages', subCategories: [] },
    { name: 'Low-Level Languages', subCategories: [] },
    { name: 'Modelling Languages', subCategories: [] },
    { name: 'Functional Programming Languages', subCategories: [] },
    { name: 'Object-Oriented Programming Languages', subCategories: [] },
    { name: 'Procedural Programming Languages', subCategories: [] },
    { name: 'Logic Programming Languages', subCategories: [] },
    { name: 'Assembly Languages', subCategories: [] },
    {
      name: 'Hard Skills', subCategories: ['Languages', 'IDEs', 'Version Control',
        'Office Suites', 'Adobe Suite', 'Graphics', 'Operating Systems',
        'Data Science Tools', 'Communication Tools']
    },
    { name: 'IDEs', subCategories: [] },
    { name: 'Version Control', subCategories: [] },
    { name: 'Office Suites', subCategories: [] },
    { name: 'Adobe Suite', subCategories: [] },
    { name: 'Graphics', subCategories: [] },
    { name: 'Operating Systems', subCategories: [] },
    { name: 'Data Science Tools', subCategories: [] },
    { name: 'Communication Tools', subCategories: [] },
    {
      name: 'Soft Skills', subCategories: ['Spoken Languages',
        'Communication Skills', 'Teamwork Skills', 'Problem-Solving Skills',
        'Leadership Skills', 'Work Ethic Skills', 'Creative Skills']
    },
    { name: 'Communication Skills', subCategories: [] },
    { name: 'Teamwork Skills', subCategories: [] },
    { name: 'Problem-Solving Skills', subCategories: [] },
    { name: 'Leadership Skills', subCategories: [] },
    { name: 'Work Ethic Skills', subCategories: [] },
    { name: 'Creative Skills', subCategories: [] },
  ]);

  db.skills.bulkPut([
    { name: "Python", category: [], experienceLevel: [] },
    { name: "JavaScript", category: [], experienceLevel: [] },
    { name: "TypeScript", category: [], experienceLevel: [] },
    { name: "Java", category: [], experienceLevel: [] },
    { name: "C#", category: [], experienceLevel: [] },
    { name: "XAML", category: [], experienceLevel: [] },
    { name: ".NET", category: [], experienceLevel: [] },
    { name: "Visual Studio", category: [], experienceLevel: [] },
    { name: "WPF", category: [], experienceLevel: [] },
    { name: "C", category: [], experienceLevel: [] },
    { name: "Vim", category: [], experienceLevel: [] },
    { name: "Eclipse", category: [], experienceLevel: [] },
    { name: "Maven", category: [], experienceLevel: [] },
    { name: "JUnit", category: [], experienceLevel: [] },
    { name: "JavaFX", category: [], experienceLevel: [] },
    { name: "SPIM", category: [], experienceLevel: [] },
    { name: "MIPS", category: [], experienceLevel: [] },
    { name: "LMC", category: [], experienceLevel: [] },
    { name: "Kotlin", category: [], experienceLevel: [] },
    { name: "Android Studio", category: [], experienceLevel: [] },
    { name: "OpenCV", category: [], experienceLevel: [] },
    { name: "SQL", category: [], experienceLevel: [] },
    { name: "PostgreSQL", category: [], experienceLevel: [] },
    { name: "UML", category: [], experienceLevel: [] },
    { name: "Visual Studio Code", category: [], experienceLevel: [] },
    { name: "XML", category: [], experienceLevel: [] },
    { name: "Git", category: [], experienceLevel: [] },
    { name: "GitHub", category: [], experienceLevel: [] },
    { name: "Markdown", category: [], experienceLevel: [] },
    { name: "Terminal", category: [], experienceLevel: [] },
    { name: "PowerShell", category: [], experienceLevel: [] },
    { name: "Batch", category: [], experienceLevel: [] },
    { name: "Docker", category: [], experienceLevel: [] },
    { name: "JSON", category: [], experienceLevel: [] },
    { name: "Node.js", category: [], experienceLevel: [] },
    { name: "React", category: [], experienceLevel: [] },
    { name: "Electron", category: [], experienceLevel: [] },
    { name: "HTML5", category: [], experienceLevel: [] },
    { name: "CSS3", category: [], experienceLevel: [] },
    { name: "Sass", category: [], experienceLevel: [] },
    { name: "Jupyter", category: [], experienceLevel: [] },
    { name: "LibreOffice", category: [], experienceLevel: [] },
    { name: "Microsoft Office", category: [], experienceLevel: [] },
    { name: "Microsoft PowerPoint", category: [], experienceLevel: [] },
    { name: "Microsoft Word", category: [], experienceLevel: [] },
    { name: "Microsoft Excel", category: [], experienceLevel: [] },
    { name: "Microsoft OneNote", category: [], experienceLevel: [] },
    { name: "Microsoft Outlook", category: [], experienceLevel: [] },
    { name: "Microsoft Access", category: [], experienceLevel: [] },
    { name: "Microsoft Teams", category: [], experienceLevel: [] },
    { name: "Zoom", category: [], experienceLevel: [] },
    { name: "Adobe Photoshop", category: [], experienceLevel: [] },
    { name: "Adobe Illustrator", category: [], experienceLevel: [] },
    { name: "Adobe Premier Pro", category: [], experienceLevel: [] },
    { name: "Adobe XD", category: [], experienceLevel: [] },
    { name: "Adobe Acrobat Reader", category: [], experienceLevel: [] },
    { name: "Blender", category: [], experienceLevel: [] },
    { name: "GIMP", category: [], experienceLevel: [] },
    { name: "Unity", category: [], experienceLevel: [] },
    { name: "WSL", category: [], experienceLevel: [] },
    { name: "Gleam", category: [], experienceLevel: [] },
    { name: "TeX / LaTeX", category: [], experienceLevel: [] },
    { name: "Gleam", category: [], experienceLevel: [] },
    { name: "SWI-Prolog", category: [], experienceLevel: [] },
    { name: "KLWP", category: [], experienceLevel: [] },
    { name: "KWGT", category: [], experienceLevel: [] },
    { name: "Total Launcher", category: [], experienceLevel: [] },
    { name: "Nova Launcher", category: [], experienceLevel: [] },
    { name: "Kvaesitso", category: [], experienceLevel: [] },
    { name: "Rainmeter", category: [], experienceLevel: [] },
    { name: "Linux", category: [], experienceLevel: [] },
    { name: "Windows", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    { name: "Dart", category: [], experienceLevel: [] },
    { name: "Flutter", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
    // { name: "", category: [], experienceLevel: [] },
  ]);

  db.linkTypes.bulkPut([
    { name: "" },
  ])

  db.links.bulkPut([
    { url: "", type: '' },
  ])

  db.organizations.bulkPut([
    { name: "", roles: [7], locations: [''], links: [''] },
  ])

  db.certificates.bulkPut([
    { name: "degree cert w/ transcript", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "CS & Physics A-level cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "Maths A level cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "Spanish GCSE cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "Bio, physics, chem cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "Geog, RS, Maths cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "CS & 2 engs cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "C# cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "pathway cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "web dev cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "RI masterclass cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "Siemens work experience cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "Science engineering & IT work experience cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "become a hacker cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "make a website cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "tech the future cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "tech the future insight cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
    { name: "career in tech cert", description: '', organization: [''], code: '', links: [''], images: [''], skills: [''] },
  ])

  db.projects.bulkPut([
    { name: "phone homescreen", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "desktop home screen", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "zarlasht", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "muslimguide", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "IT assets metadata repo", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "alset", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    {
      name: "Quokka", description: 'An extremely customizable keystroke launcher with plugins', links: [''], skills: [
        'C#', '.NET', 'WPF', 'XAML', 'JSON', 'Visual Studio', 'Git', 'GitHub', 'Markdown', 'Windows'
      ], startDate: new Date("January 2020"), endDate: new Date("December 2019"), relatedActivities: [4], relatedProjects: ['']
    },
    {
      name: "WhatsappPortable", description: 'A portable application to use WhatsApp',
      links: [''], skills: [
        'Flutter', 'Dart', 'CSS3', 'JavaScript', 'HTML5',
      ], startDate: new Date('June 2024'), endDate: new Date('"December 2023"'), relatedActivities: [4], relatedProjects: ['']
    },
    { name: "personal site", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "dynamic memory allocator", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Notes", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "LLM 2 leaf", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Generic social media app", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Tool customizations", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Partial Scroll", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Sandbox", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "JavaFX calc", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "JavaFX minimal nav", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "business card", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "browser home page", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "hackaway v7 sign up page", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Windows Terminal Theme - oh my posh", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Gideon", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Ascii art viewer", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "WRDSRCH", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "Portable Application Launcher", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "soulmate finder", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "databse x2 ??", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "pathfinding", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "trading card??", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "album cover", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
    { name: "book system??", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
  ])

  db.roleCategories.bulkPut([
    { name: "jobs", skills: [''] },
    { name: "education", skills: [''] },
    { name: "volunteering", skills: [''] },
    { name: "events", skills: [''] },
    { name: "projects", skills: [''] },
  ])

  db.modules.bulkPut([
    { organization: [''], name: "", code: "", grade: "", year: "" },
  ])

  db.roles.bulkPut([
    {
      id: 4, organization: [''], name: "Volunteer Consultant",
      type: 'volunteering', category: [''],
      startDate: new Date("September 2017"),
      endDate: new Date(),
      description: 'Served as Subject Captain, advising and mentoring younger students in computer education, programming, assisting with coursework, classwork, and homework.Supported learning in classrooms and extracurricular clubs through one-on-one and group guidance.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 0, organization: [''], name: "GCSEs",
      type: 'education', category: [''],
      startDate: new Date("September 2018"),
      endDate: new Date(),
      description: 'Studied 10 GCSEs including; Computer Science (9), Mathematics (7), Physics (7), English (7), Biology (8)',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 1, organization: [''], name: "Quokka",
      type: 'projects', category: [''],
      startDate: new Date("January 2020"),
      endDate: new Date(),
      description: 'A lightweight, customizable keystroke launcher in C#, C++, WPF and .NET. Enables diverse, flexible workflows via a plugin-driven design, enabling users to extend functionality according to unique needs. Accompanied by default plugins.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 2, organization: [''], name: "A-levels",
      type: 'education', category: [''],
      startDate: new Date("September 2020"),
      endDate: new Date(),
      description: 'Studied 3 A-Levels; Computer Science (A), Mathematics (B), Physics (C)',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 3, organization: [''], name: "Pathway To Your Future Programme",
      type: 'events', category: [''],
      startDate: new Date("February 2022"),
      endDate: new Date(),
      description: 'Gained insights into software design and development lifecycle during a one-week program, collaborating with a group of 4 professionals and completing a hands-on, self-led project.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 5, organization: [''], name: "BSc Hons. Computer Science (Software Engineering)", type: 'education', category: [''], startDate: new Date("September 2022"), endDate: new Date(),
      description: 'With my dissertation on Concurrency-Based Game Environments, I studied several modules including; Software Engineering, Operating Systems, Databases, Software Design, Algorithms and Complexity, Symbolic AI',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 6, organization: [''], name: "Royal Hackaway v6",
      type: 'events', category: [''],
      startDate: new Date("February 2023"),
      endDate: new Date(),
      description: '',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 7, organization: [''], name: "Royal Hackaway v7",
      type: 'events', category: [''],
      startDate: new Date("January 2024"),
      endDate: new Date(),
      description: '',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 8, organization: [''], name: "Computer Science Teaching Assistant",
      type: 'jobs', category: [''],
      startDate: new Date("September 2024"),
      endDate: new Date(),
      description: 'Guided undergraduates in programming labs (Python, Java, SWI-Prolog), explaining complex programming concepts and advised with debugging and other practical exercises. Led weekly review sessions, assessed coursework, and gave feedback. Enhanced students\' problem - solving skills, fostering critical thinking, while strengthening technical expertise.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 9, organization: [''], name: "Royal Hackaway v8",
      type: 'events', category: [''],
      startDate: new Date("February 2025"),
      endDate: new Date(),
      description: 'Won 1st place for Verdn\'s Environmental Hack challenge at Royal Hackaway v8. Developed a tool to track LLM carbon footprints and auto- offset emissions via Verdn’s initiatives(e.g., tree-planting). Produced during a 48-hour hackathon (team of 3), demonstrating rapid full-stack development.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    // todo add rest
  ])
});

export type { Skill, SkillCategory, Certificate, Project, Link, LinkType, Role, RoleCategory, Organization, Module };
export { db };