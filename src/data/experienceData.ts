export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type: 'work' | 'education';
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Sofware Engineer",
    company: "Nable Invent Solution",
    location: "Bilaspur",
    startDate: "Jun 2024",
    endDate: "Present",
    description: "Leading Frontend development for multiple client projects using React, TypeScript, and modern frontend architecture.",
    achievements: [
      "Spearheaded the migration from legacy codebase to modern React architecture, improving performance by 40%",
      "Implemented responsive designs that increased mobile user engagement by 25%",
      "Mentored junior developers and established best practices for the frontend team"
    ],
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer (Intern)",
    company: "Settyl Corp.",
    location: "Remote",
    startDate: "Nov 2023",
    endDate: "April 2024",
    description: "Developed and maintained responsive web applications using React, JavaScript, and CSS frameworks.",
    achievements: [
      "Built reusable component libraries that reduced development time by 30%",
      "Collaborated with UX designers to implement pixel-perfect interfaces",
      "Optimized application performance through code splitting and lazy loading"
    ],
    type: "work"
  },
  {
    id: 3,
    title: "Bachelor of Technology in Computer Science",
    company: "CEC Bilaspur",
    location: "Chhattisgarh, India",
    startDate: "Aug 2020",
    endDate: "May 2024",
    description: "Studied computer science with a focus on web technologies and software development.",
    achievements: [
      "Graduated with First Class Honors",
      "Completed capstone project on responsive web application development",
      "Participated in coding competitions and hackathons"
    ],
    type: "education"
  }
];

export default experienceData;