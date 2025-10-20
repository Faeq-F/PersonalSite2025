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
    {
      name: 'Hard Skills', subCategories: ['Languages', 'IDEs & Code Editors',
        'Version Control', 'Office Suites', 'Graphics', 'Operating Systems',
        'Data Science Tools', 'Communication Tools', 'Libraries & Frameworks',
        'Automation', 'Testing', 'Simulators', 'Runtime Environments',
        'Machine Learning', 'CLI', 'GUI',
      ]
    },
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
    //
    { name: 'IDEs & Code Editors', subCategories: [] },
    { name: 'Libraries & Frameworks', subCategories: [] },
    { name: 'Machine Learning', subCategories: [] },
    { name: 'Simulators', subCategories: [] },
    { name: 'CLI', subCategories: [] },
    { name: 'GUI', subCategories: [] },
    { name: 'Runtime Environments', subCategories: [] },
    { name: 'Automation', subCategories: [] },
    { name: 'Testing', subCategories: [] },
    { name: 'Version Control', subCategories: [] },
    { name: 'Office Suites', subCategories: ['Adobe Suite'] },
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
    { name: 'Spoken Languages', subCategories: ['Romance languages (Latin Languages)'] },
    { name: 'Romance languages (Latin Languages)', subCategories: [] },
    { name: 'Communication Skills', subCategories: [] },
    { name: 'Teamwork Skills', subCategories: [] },
    { name: 'Problem-Solving Skills', subCategories: [] },
    { name: 'Leadership Skills', subCategories: [] },
    { name: 'Work Ethic Skills', subCategories: [] },
    { name: 'Creative Skills', subCategories: [] },
  ]);

  db.skills.bulkPut([
    { name: "Python", category: ['Procedural Programming Languages', 'Object-Oriented Programming Languages', 'Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Scripting Languages', 'Back-End Languages', 'High-Level Languages'], experienceLevel: [] },
    { name: "JavaScript", category: ['Procedural Programming Languages', 'Object-Oriented Programming Languages', 'Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Scripting Languages', 'Front-End Languages', 'High-Level Languages',], experienceLevel: [] },
    { name: "TypeScript", category: ['Procedural Programming Languages', 'Object-Oriented Programming Languages', 'Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Scripting Languages', 'Front-End Languages', 'High-Level Languages',], experienceLevel: [] },
    { name: "Java", category: ['Procedural Programming Languages', 'Object-Oriented Programming Languages', 'Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages', 'High-Level Languages',], experienceLevel: [] },
    { name: "C#", category: ['Procedural Programming Languages', 'Object-Oriented Programming Languages', 'Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages', 'High-Level Languages',], experienceLevel: [] },
    { name: "XAML", category: ["Languages", 'Markup Languages', 'Front-End Languages',], experienceLevel: [] },
    { name: ".NET", category: ['Libraries & Frameworks',], experienceLevel: [] },
    { name: "Visual Studio", category: ['IDEs & Code Editors',], experienceLevel: [] },
    { name: "WPF", category: ['GUI', 'Libraries & Frameworks',], experienceLevel: [] },
    { name: "C", category: ['Procedural Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages', 'Low-Level Languages'], experienceLevel: [] },
    { name: "Vim", category: ['IDEs & Code Editors',], experienceLevel: [] },
    { name: "Emacs", category: ['IDEs & Code Editors',], experienceLevel: [] },
    { name: "Eclipse", category: ['IDEs & Code Editors',], experienceLevel: [] },
    { name: "Maven", category: ['Automation',], experienceLevel: [] },
    { name: "JUnit", category: ['Automation', 'Libraries & Frameworks', 'Testing',], experienceLevel: [] },
    { name: "JavaFX", category: ['GUI', 'Libraries & Frameworks',], experienceLevel: [] },
    { name: "FXML", category: ["Languages", 'Front-End Languages', 'Markup Languages',], experienceLevel: [] },
    { name: "SPIM", category: ['Simulators',], experienceLevel: [] },
    { name: "MIPS", category: ['Hard Skills', 'Languages', 'Programming Languages', 'Assembly Languages',], experienceLevel: [] },
    { name: "LMC", category: ['Hard Skills', 'Languages', 'Programming Languages', 'Assembly Languages',], experienceLevel: [] },
    { name: "Kotlin", category: ['Procedural Programming Languages', 'Object-Oriented Programming Languages', 'Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages', 'High-Level Languages',], experienceLevel: [] },
    { name: "Android Studio", category: ['IDEs & Code Editors',], experienceLevel: [] },
    { name: "AVD", category: ['Simulators',], experienceLevel: [] },
    { name: "OpenCV", category: ['Libraries & Frameworks', 'Machine Learning',], experienceLevel: [] },
    { name: "SQL", category: ["Languages", 'Query Languages', 'Data Definition Languages',], experienceLevel: [] },
    { name: "PostgreSQL", category: ["Languages", 'Query Languages', 'Data Definition Languages',], experienceLevel: [] },
    { name: "UML", category: ["Languages", 'Modelling Languages'], experienceLevel: [] },
    { name: "Visual Studio Code", category: ['IDEs & Code Editors',], experienceLevel: [] },
    { name: "XML", category: ["Languages", 'Markup Languages', 'Front-End Languages',], experienceLevel: [] },
    { name: "Git", category: ['Version Control',], experienceLevel: [] },
    { name: "GitHub", category: ['Version Control',], experienceLevel: [] },
    { name: "GitLab", category: ['Version Control',], experienceLevel: [] },
    { name: "Markdown", category: ["Languages", 'Markup Languages',], experienceLevel: [] },
    { name: "Terminal", category: ["CLI"], experienceLevel: [] },
    { name: "PowerShell", category: ['Object-Oriented Programming Languages', 'Procedural Programming Languages', "Languages", 'Scripting Languages',], experienceLevel: [] },
    { name: "Batch", category: ['Procedural Programming Languages', "Languages", 'Scripting Languages',], experienceLevel: [] },
    { name: "Docker", category: [], experienceLevel: [] },
    { name: "JSON", category: [], experienceLevel: [] },
    { name: "Node.js", category: [], experienceLevel: [] },
    { name: "React", category: [], experienceLevel: [] },
    { name: "Electron", category: [], experienceLevel: [] },
    { name: "HTML5", category: ["Languages", 'Front-End Languages',], experienceLevel: [] },
    { name: "CSS3", category: ["Languages", 'Style Sheet Languages', 'Front-End Languages',], experienceLevel: [] },
    { name: "Sass", category: ["Languages", 'Style Sheet Languages', 'Front-End Languages',], experienceLevel: [] },
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
    { name: "TeX / LaTeX", category: ['High-Level Languages', 'Markup Languages', "Languages",], experienceLevel: [] },
    { name: "Gleam", category: ['Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages',], experienceLevel: [] },
    { name: "BEAM", category: [], experienceLevel: [] },
    { name: "Haskell", category: ['Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages',], experienceLevel: [] },
    { name: "Scala", category: ['Object-Oriented Programming Languages', 'Functional Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages',], experienceLevel: [] },
    { name: "SWI-Prolog", category: ['Logic Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages',], experienceLevel: [] },
    { name: "KLWP", category: [], experienceLevel: [] },
    { name: "KWGT", category: [], experienceLevel: [] },
    { name: "Total Launcher", category: [], experienceLevel: [] },
    { name: "Nova Launcher", category: [], experienceLevel: [] },
    { name: "Kvaesitso", category: [], experienceLevel: [] },
    { name: "Rainmeter", category: [], experienceLevel: [] },
    { name: "Linux", category: ['Operating Systems'], experienceLevel: [] },
    { name: "Windows", category: ['Operating Systems'], experienceLevel: [] },
    { name: "Android", category: ['Operating Systems'], experienceLevel: [] },
    { name: "Dart", category: ['Procedural Programming Languages', 'Object-Oriented Programming Languages', 'Hard Skills', 'Languages', 'Programming Languages', 'Back-End Languages', 'High-Level Languages',], experienceLevel: [] },
    { name: "Flutter", category: [], experienceLevel: [] },
    //
    { name: "Active Listening", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Public Speaking", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Written Communication", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Nonverbal Communication", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Empathy", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Clarity and Conciseness", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Persuasion", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Presenting", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Conflict Management / Resolution", category: ['Communication Skills', 'Leadership Skills'], experienceLevel: [] },
    { name: "Giving and Receiving Feedback", category: ['Communication Skills'], experienceLevel: [] },
    { name: "Collaboration", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Reliability", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Emotional Intelligence", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Flexibility / Adaptability", category: ['Teamwork Skills', 'Leadership Skills', 'Creative Skills'], experienceLevel: [] },
    { name: "Constructive Feedback", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Respectfulness", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Responsibility", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Interpersonal", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Cultural Awareness", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Supportiveness", category: ['Teamwork Skills'], experienceLevel: [] },
    { name: "Critical Thinking", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Analytical", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Creativity", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Decision Making", category: ['Problem-Solving Skills', 'Leadership Skills'], experienceLevel: [] },
    { name: "Research", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Attention to Detail", category: ['Problem-Solving Skills', 'Work Ethic Skills'], experienceLevel: [] },
    { name: "Logical Reasoning", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Resourcefulness", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Troubleshooting", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Risk Assessment", category: ['Problem-Solving Skills'], experienceLevel: [] },
    { name: "Strategic Thinking", category: ['Leadership Skills'], experienceLevel: [] },
    { name: "Delegation", category: ['Leadership Skills'], experienceLevel: [] },
    { name: "Motivating Others", category: ['Leadership Skills'], experienceLevel: [] },
    { name: "Accountability", category: ['Leadership Skills', 'Work Ethic Skills'], experienceLevel: [] },
    { name: "Vision Setting", category: ['Leadership Skills'], experienceLevel: [] },
    { name: "Coaching and Mentoring", category: ['Leadership Skills'], experienceLevel: [] },
    { name: "Initiative", category: ['Leadership Skills'], experienceLevel: [] },
    { name: "Time Management", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Dependability", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Self-Motivation", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Discipline", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Integrity", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Professionalism", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Persistence", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Commitment to Excellence", category: ['Work Ethic Skills'], experienceLevel: [] },
    { name: "Idea Generation", category: ['Creative Skills', 'Problem-Solving Skills'], experienceLevel: [] },
    { name: "Innovation", category: ['Creative Skills', 'Problem-Solving Skills'], experienceLevel: [] },
    { name: "Storytelling", category: ['Creative Skills'], experienceLevel: [] },
    { name: "Visual Communication", category: ['Creative Skills', 'Communication Skills'], experienceLevel: [] },
    { name: "Imagination", category: ['Creative Skills'], experienceLevel: [] },
    { name: "Experimentation", category: ['Creative Skills'], experienceLevel: [] },
    { name: "English", category: ['Spoken Languages', 'Romance languages (Latin Languages)'], experienceLevel: [] },
  ]);

  db.linkTypes.bulkPut([
    { name: "Source" },
    { name: "Site" },
    { name: "Organization" },
    { name: "Docs" },
    { name: "Other" },
  ])

  db.links.bulkPut([
    { url: "https://www.heathland.hounslow.sch.uk/", type: 'Organization' },
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
      id: 4, organization: ['The Heathland School'], name: "Volunteer Consultant (Computer Science)",
      type: 'volunteering', category: [''],
      startDate: new Date("September 2017"),
      endDate: new Date("June 2022"),
      description: 'Served as Subject Captain, advising and mentoring younger students in computer education, programming, assisting with coursework, classwork, and homework. Supported learning in classrooms and extracurricular clubs through one-on-one and group guidance.',
      links: ['https://www.heathland.hounslow.sch.uk/'], skills: [''], modules: [], locations: ['TW4 5JD'], relatedActivities: [0, 2]
    },
    {
      id: 0, organization: ['The Heathland School'], name: "GCSEs",
      type: 'education', category: [''],
      startDate: new Date("September 2018"),
      endDate: new Date("June 2020"),
      description: 'Studied 10 GCSEs including; Computer Science (9), Mathematics (7), Physics (7), English (7), Biology (8)',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 1, organization: [], name: "Quokka",
      type: 'projects', category: [''],
      startDate: new Date("January 2020"),
      endDate: new Date(),
      description: 'A lightweight, customizable keystroke launcher in C#, C++, WPF and .NET. Enables diverse, flexible workflows via a plugin-driven design, enabling users to extend functionality according to unique needs. Accompanied by default plugins.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 2, organization: ['The Heathland School'], name: "A-levels",
      type: 'education', category: [''],
      startDate: new Date("September 2020"),
      endDate: new Date("June 2022"),
      description: 'Studied 3 A-Levels; Computer Science (A), Mathematics (B), Physics (C)',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 3, organization: ['Cisco'], name: "Pathway To Your Future Programme",
      type: 'events', category: [''],
      startDate: new Date("February 2022"),
      endDate: new Date("February 2022"),
      description: 'Gained insights into software design and development lifecycle during a one-week program, collaborating with a group of 4 professionals and completing a hands-on, self-led project.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 5, organization: [''], name: "BSc Hons. Computer Science (Software Engineering)", type: 'education',
      category: [''], startDate: new Date("September 2022"),
      endDate: new Date("July 2025"),
      description: 'With my dissertation on Concurrency-Based Game Environments, I studied several modules including; Software Engineering, Operating Systems, Databases, Software Design, Algorithms and Complexity, Symbolic AI',
      links: [''], skills: [''], modules: [''], locations: ['TW20 0EX'], relatedActivities: [4]
    },
    {
      id: 6, organization: [''], name: "Royal Hackaway v6",
      type: 'events', category: [''],
      startDate: new Date("February 2023"),
      endDate: new Date("February 2023"),
      description: '',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 7, organization: [''], name: "Royal Hackaway v7",
      type: 'events', category: [''],
      startDate: new Date("January 2024"),
      endDate: new Date("January 2024"),
      description: '',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 8, organization: [''], name: "Computer Science Teaching Assistant",
      type: 'jobs', category: [''],
      startDate: new Date("September 2024"),
      endDate: new Date("July 2025"),
      description: 'Guided undergraduates in programming labs (Python, Java, SWI-Prolog), explaining complex programming concepts and advised with debugging and other practical exercises. Led weekly review sessions, assessed coursework, and gave feedback. Enhanced students\' problem - solving skills, fostering critical thinking, while strengthening technical expertise.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    {
      id: 9, organization: [''], name: "Royal Hackaway v8",
      type: 'events', category: [''],
      startDate: new Date("February 2025"),
      endDate: new Date("February 2025"),
      description: 'Won 1st place for Verdn\'s Environmental Hack challenge at Royal Hackaway v8. Developed a tool to track LLM carbon footprints and auto- offset emissions via Verdn’s initiatives(e.g., tree-planting). Produced during a 48-hour hackathon (team of 3), demonstrating rapid full-stack development.',
      links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4]
    },
    // todo add rest
  ])
});

export type { Skill, SkillCategory, Certificate, Project, Link, LinkType, Role, RoleCategory, Organization, Module };
export { db };