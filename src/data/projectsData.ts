export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  secondaryImage?:string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Designed and developed a fully functional e-commerce website integrated with a food delivery system, offering seamless user experience, real-time order tracking, and secure payment processing.",
    image: "https://res.cloudinary.com/dfmqvylsa/image/upload/v1746790526/Portfolio%20assests/f1dw1iqtollf1gfoga4a.png",
    secondaryImage:"https://res.cloudinary.com/dfmqvylsa/image/upload/v1746790757/Portfolio%20assests/jcaupeyjwjurfpcomlod.png",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Mongodb"],
    // github: "https://github.com/Pradeep106",
    demo: "https://ecommerce.nablean.com/",
    featured: true
  },
  {
    id: 2,
    title: "Cash-Crop",
    description: "Developed a government-backed platform for the sale and management of cash crops in Ghana, enabling farmers and buyers to connect seamlessly through a transparent and efficient digital marketplace.",
    image: "https://res.cloudinary.com/dfmqvylsa/image/upload/v1746790757/Portfolio%20assests/jcaupeyjwjurfpcomlod.png",
    tags: ["Nextjs", "Tailwind CSS","Express.js", "JavaScript","Mongodb"],
    // github: "https://github.com/Pradeep106",
    demo: "https://cashcropconnect.com/",
    featured: true
  },
  {
    id: 3,
    title: "Study Notion",
    description: "Built a MERN stack-based platform for browsing, selecting, and purchasing online courses, featuring user authentication, course filtering, secure payments, and an intuitive user dashboard.",
    image: "https://res.cloudinary.com/dfmqvylsa/image/upload/v1746791193/study_notion_emp2go.png",
    tags: ["React", "Redux", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Pradeep106/Study-Notion?tab=readme-ov-file",
    demo:"https://studynotion-frontend.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "Yummy Reciepe",
    description: "A web application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.",
    image: "https://res.cloudinary.com/dfmqvylsa/image/upload/v1746791419/yummy_recipe_fqxasx.png",
    tags: ["React", "Food API", "CSS3", "Responsive Design"],
    github: "https://github.com/Pradeep106/Yummy-Recipes?tab=readme-ov-file",
    demo: "https://master--yummy-recipe-food.netlify.app/",
    featured: false
  },
  {
    id: 5,
    title: "The Podcastr.",
    description: "Developed a modern web platform for streaming music and podcasts, integrated with a dynamic blog section to engage users with articles, updates, and featured content.",
    image: "https://res.cloudinary.com/dfmqvylsa/image/upload/v1746791773/324169928-b24580ba-793c-4db7-a9b3-773cbd25f494_w5zltg.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "http://github.com/Pradeep106/The-Podcastr",
    featured: true
  },
  {
    id: 6,
    title: "Social Media",
    description: "Created a full-featured social media platform enabling users to post content, follow others, like and comment on posts, with real-time updates and a responsive user interface.",
    image: "https://res.cloudinary.com/dfmqvylsa/image/upload/v1746792070/251441592-1ccb82d7-c396-4d7a-88b7-54ffaf980bd9_tjnwnq.png",
    tags: ["React", "Node.js","Mongodb", "CSS Modules", "JavaScript"],
    github: "https://github.com/Pradeep106/Social-Media",
    featured: false
  }
];

export default projectsData;