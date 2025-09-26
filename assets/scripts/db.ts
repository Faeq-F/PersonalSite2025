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

await db.skillCategories.bulkPut([
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

await db.skills.bulkPut([
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
  // { name: "", category: [], experienceLevel: [] },
  // { name: "", category: [], experienceLevel: [] },
]);

await db.linkTypes.bulkPut([
  { name: "" },
])

await db.links.bulkPut([
  { url: "", type: '' },
])

await db.organizations.bulkPut([
  { name: "", roles: [7], locations: [''], links: [''] },
])

await db.certificates.bulkPut([
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

await db.projects.bulkPut([
  { name: "phone homescreen", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
  { name: "desktop home screen", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
  { name: "zarlasht", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
  { name: "muslimguide", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
  { name: "IT assets metadata repo", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
  { name: "alset", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
  { name: "Quokka", description: 'An extremely customizable keystroke launcher with plugins', links: [''], skills: [''], startDate: new Date("January 1, 2020 0:0:0"), endDate: new Date("December 30, 2019 0:0:0"), relatedActivities: [4], relatedProjects: [''] },
  { name: "whatsapp portable", description: '', links: [''], skills: [''], startDate: new Date(), endDate: new Date(), relatedActivities: [4], relatedProjects: [''] },
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

await db.roleCategories.bulkPut([
  { name: "", skills: [''] },
])

await db.modules.bulkPut([
  { organization: [''], name: "", code: "", grade: "", year: "" },
])

await db.roles.bulkPut([
  { id: 0, organization: [''], name: "", type: '', category: [''], startDate: new Date(), endDate: new Date(), description: '', links: [''], skills: [''], modules: [''], locations: [''], relatedActivities: [4] },
])

export type { Skill, SkillCategory, Certificate, Project, Link, LinkType, Role, RoleCategory, Organization, Module };
export { db };