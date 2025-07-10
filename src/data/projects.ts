export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Tableros Visuales ",
    description: "Esta aplicacion es un prototipo basandose en la app TRELLO.",
    image: "https://images.pexels.com/photos/6393013/pexels-photo-6393013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Redux"],
    github: "https://github.com/JonRe88/RETO-FRONTEND-Tableros-Visuales-Estilo-Trello-",
    liveLink: "https://reto-frontend-tableros-visuales-estilo-trello.vercel.app/"
  },
  {
    id: 2,
    title: "AluraFlix",
    description: "Una imitacion de Netflix para AluraLatam.",
    image: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web app",
    technologies: ["Next.js", "MongoDB", "Styled Components", "AWS S3", "Vercel"],
    github: "https://github.com/JonRe88/Alura-Flix-Challenge",
    liveLink: "https://alura-flix-challenge-n26i.vercel.app/"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app with kanban boards, task assignments, and progress tracking for teams and individuals.",
    image: "https://images.pexels.com/photos/7648484/pexels-photo-7648484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web app",
    technologies: ["Vue.js", "Firebase", "Vuex", "SCSS", "PWA"],
    github: "https://github.com",
    liveLink: "https://example.com"
  },
  {
    id: 4,
    title: "Healthcare Portal Design",
    description: "A comprehensive UI/UX redesign for a healthcare provider's patient portal, focusing on accessibility and ease of use.",
    image: "https://images.pexels.com/photos/7578906/pexels-photo-7578906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ui/ux",
    technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design System"],
    liveLink: "https://example.com"
  },
  {
    id: 5,
    title: "Finance App Interface",
    description: "A clean, intuitive mobile banking application interface with focus on data visualization and user security.",
    image: "https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "ui/ux",
    technologies: ["Sketch", "Principle", "InVision", "User Testing", "Design Thinking"],
    liveLink: "https://example.com"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A beautiful, animated weather app that provides accurate forecasts, air quality data, and weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile app",
    technologies: ["React Native", "Weather API", "Lottie Animations", "Redux", "Geolocation"],
    github: "https://github.com",
    liveLink: "https://example.com"
  }
];