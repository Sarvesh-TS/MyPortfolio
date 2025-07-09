export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  tags: string[]
  category: "web-development" | "learning"
  type: "client" | "personal"
  status: "Live" | "Completed" | "In Development"
  url?: string
  github?: string
  image: string
  images?: string[]
  features: string[]
  challenges?: string[]
  year: string
  client?: string
  slug: string
}

export const projects: Project[] = [
  // Client Projects
  {
    id: "reddot",
    slug: "reddot",
    title: "Reddot",
    description: "Commercial website for a printing and design solutions company.",
    longDescription:
      "A professional WordPress website for Reddot, a comprehensive printing and design solutions company. The site showcases their full range of services including digital printing, graphic design, branding solutions, and custom merchandise. Features a modern design, service portfolio, client testimonials, and integrated contact systems for seamless customer engagement.",
    tech: ["WordPress"],
    tags: ["WordPress", "Business Website", "Client Project"],
    category: "web-development",
    type: "client",
    status: "Live",
    url: "https://reddotbiz.com",
    image: "/images/projects/reddot-hero.jpg",
    images: [
      "/images/projects/reddot-hero.jpg",
      "/images/projects/reddot-services.jpg",
      "/images/projects/reddot-portfolio.jpg",
    ],
    features: [
      "Custom WordPress theme development",
      "Service showcase with detailed descriptions",
      "Portfolio gallery with filtering",
      "Client testimonials and reviews",
      "Contact forms with email integration",
      "SEO optimization for local search",
      "Mobile-responsive design",
      "Fast loading performance",
    ],
    challenges: [
      "Creating a design that appeals to diverse business clients",
      "Optimizing WordPress for fast loading times",
      "Implementing effective local SEO strategies",
    ],
    year: "2024",
    client: "Reddot Business Solutions",
  },
  {
    id: "teachers-by-choice",
    slug: "teachers-by-choice",
    title: "Teachers By Choice",
    description: "Tutoring platform to match students with private educators.",
    longDescription:
      "An innovative educational platform built with Next.js that connects students with qualified private tutors. The platform features advanced matching algorithms, integrated scheduling systems, secure payment processing, and comprehensive user management for both students and educators. Built with modern web technologies for optimal performance and user experience.",
    tech: ["Next.js", "Tailwind CSS"],
    tags: ["Next.js", "Tailwind CSS", "Web App", "Client Project"],
    category: "web-development",
    type: "client",
    status: "Live",
    url: "https://teachersbychoice.vercel.app/",
    image: "/images/projects/teachers-hero.jpg",
    images: [
      "/images/projects/teachers-hero.jpg",
      "/images/projects/teachers-dashboard.jpg",
      "/images/projects/teachers-matching.jpg",
    ],
    features: [
      "Advanced tutor-student matching algorithm",
      "Integrated scheduling and booking system",
      "Secure user authentication and profiles",
      "Real-time messaging and communication",
      "Payment processing integration",
      "Review and rating system",
      "Subject and skill filtering",
      "Mobile-responsive design",
    ],
    challenges: [
      "Developing complex matching algorithms for optimal tutor-student pairing",
      "Implementing secure payment processing",
      "Creating intuitive interfaces for both user types",
    ],
    year: "2024",
    client: "Teachers By Choice",
  },
  {
    id: "charge-infra",
    slug: "charge-infra",
    title: "Charge Infra",
    description: "EV infrastructure website for showcasing solutions.",
    longDescription:
      "A modern landing page for Charge Infra, showcasing their electric vehicle charging infrastructure solutions. Built with Next.js and Tailwind CSS, the site features interactive elements, service information, and a clean, professional design that reflects the company's commitment to sustainable transportation and innovative charging solutions.",
    tech: ["Next.js", "Tailwind CSS"],
    tags: ["Next.js", "Tailwind CSS", "Landing Page", "Client Project"],
    category: "web-development",
    type: "client",
    status: "Live",
    url: "https://charge-infra-liard.vercel.app/",
    image: "/images/projects/charge-infra-hero.jpg",
    features: [
      "Modern, clean landing page design",
      "Interactive service showcases",
      "Responsive design for all devices",
      "Fast loading performance",
      "SEO optimization",
      "Contact and inquiry forms",
      "Professional imagery and graphics",
      "Smooth scrolling animations",
    ],
    challenges: [
      "Creating compelling visuals for technical infrastructure",
      "Balancing information density with clean design",
      "Optimizing for mobile users in the EV industry",
    ],
    year: "2024",
    client: "Charge Infrastructure",
  },
  {
    id: "tuff-ppf",
    slug: "tuff-ppf",
    title: "Tuff PPF",
    description: "Website for an automotive paint protection film business.",
    longDescription:
      "A specialized WordPress website for Tuff PPF, an automotive paint protection film service provider. The site showcases their expertise in vehicle protection, features a comprehensive service gallery, customer testimonials, and booking systems for consultations and services. Designed to build trust and showcase quality workmanship in the automotive protection industry.",
    tech: ["WordPress"],
    tags: ["WordPress", "Business Website", "Client Project"],
    category: "web-development",
    type: "client",
    status: "Live",
    url: "https://tuffppf.com/",
    image: "/images/projects/tuff-ppf-hero.jpg",
    images: [
      "/images/projects/tuff-ppf-hero.jpg",
      "/images/projects/tuff-ppf-gallery.jpg",
      "/images/projects/tuff-ppf-services.jpg",
    ],
    features: [
      "Custom WordPress theme for automotive industry",
      "Before/after gallery showcasing work quality",
      "Service descriptions with pricing information",
      "Customer testimonials and reviews",
      "Online booking and consultation forms",
      "Mobile-optimized design",
      "Local SEO optimization",
      "Social media integration",
    ],
    challenges: [
      "Showcasing visual work quality effectively online",
      "Building trust through testimonials and portfolio",
      "Optimizing for local automotive service searches",
    ],
    year: "2023",
    client: "Tuff PPF",
  },

  // Learning & Exploration Projects
  {
    id: "cyberquest",
    slug: "cyberquest",
    title: "CyberQuest",
    description:
      "An immersive capture-the-flag treasure hunt challenge designed with cybersecurity puzzles like SQL injection, steganography, maze-solving, and terminal emulation.",
    longDescription:
      "An immersive capture-the-flag treasure hunt challenge designed with cybersecurity puzzles like SQL injection, steganography, maze-solving, and terminal emulation. Built for a university event to provide hands-on cybersecurity education in a gamified environment. Features multiple challenge types, progressive difficulty, and real-time scoring systems.",
    tech: ["Next.js", "Tailwind CSS", "HTML/CSS/JS"],
    tags: ["Next.js", "Tailwind CSS", "HTML/CSS/JS", "Puzzle Game"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/cyberquest-hero.jpg",
    images: [
      "/images/projects/cyberquest-hero.jpg",
      "/images/projects/cyberquest-terminal.jpg",
      "/images/projects/cyberquest-maze.jpg",
      "/images/projects/cyberquest-constellation.jpg",
    ],
    features: [
      "SQL Injection challenge simulation",
      "Steganography puzzle solving",
      "Terminal-based authentication challenges",
      "Interactive maze navigation",
      "Constellation pattern recognition",
      "Progressive difficulty levels",
      "Real-time scoring system",
      "Educational hints and explanations",
    ],
    challenges: [
      "Creating realistic cybersecurity scenarios in a safe environment",
      "Balancing educational value with engaging gameplay",
      "Implementing complex algorithms for puzzle generation",
    ],
    year: "2024",
  },
  {
    id: "ecommerce-dashboard",
    slug: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description:
      "A simple e-commerce admin panel with analytics, order tracking, inventory and user management. Built to practice data visualization and component layout in React.",
    longDescription:
      "A comprehensive e-commerce admin dashboard built with React.js to practice data visualization and component architecture. Features analytics charts, order tracking, inventory management, and user administration. Designed with Material-UI components and Chart.js for professional data presentation and intuitive user experience.",
    tech: ["React.js", "HTML/CSS/JS"],
    tags: ["React.js", "HTML/CSS/JS", "Dashboard"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/dashboard-hero.jpg",
    images: [
      "/images/projects/dashboard-overview.jpg",
      "/images/projects/dashboard-orders.jpg",
      "/images/projects/dashboard-analytics.jpg",
    ],
    features: [
      "Real-time sales analytics and charts",
      "Order tracking and management",
      "Inventory management system",
      "User administration panel",
      "Revenue and performance metrics",
      "Responsive dashboard layout",
      "Data visualization with Chart.js",
      "Material-UI component library",
    ],
    challenges: [
      "Implementing efficient data visualization",
      "Creating responsive dashboard layouts",
      "Managing complex state across multiple components",
    ],
    year: "2024",
  },
  {
    id: "task-management-system",
    slug: "task-management-system",
    title: "Task Management System",
    description:
      "Kanban-style productivity tool for managing tasks collaboratively. Includes real-time updates, progress tracking, and team assignment.",
    longDescription:
      "A Kanban-style productivity application built with React and Firebase for collaborative task management. Features real-time updates, progress tracking, team assignment, and drag-and-drop functionality. Styled with Tailwind CSS for a modern, responsive interface that works seamlessly across devices.",
    tech: ["React.js", "Tailwind CSS", "HTML/CSS/JS"],
    tags: ["React.js", "Tailwind CSS", "HTML/CSS/JS", "Productivity"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/task-management-hero.jpg",
    images: [
      "/images/projects/task-board.jpg",
      "/images/projects/task-modal.jpg",
      "/images/projects/task-progress.jpg",
    ],
    features: [
      "Kanban-style task board interface",
      "Drag-and-drop task management",
      "Real-time collaboration features",
      "Progress tracking and analytics",
      "Team assignment and notifications",
      "Task filtering and search",
      "Responsive design for all devices",
      "Firebase real-time database integration",
    ],
    challenges: [
      "Implementing smooth drag-and-drop functionality",
      "Managing real-time data synchronization",
      "Creating intuitive user interfaces for task management",
    ],
    year: "2024",
  },
  {
    id: "rsa-web-app",
    slug: "rsa-web-app",
    title: "RSA Web App",
    description:
      "A web-based tool to encrypt and decrypt messages using RSA algorithm. Features key generation, dark mode, and an easy-to-use UI.",
    longDescription:
      "A comprehensive web application implementing RSA encryption and decryption algorithms. Built with Flask backend and modern frontend technologies, featuring secure key generation, dark mode interface, and user-friendly encryption tools. Serves as both an educational resource and practical cryptography utility for secure communication.",
    tech: ["Flask", "HTML/CSS/JS"],
    tags: ["Flask", "HTML/CSS/JS", "Cryptography"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/rsa-hero.jpg",
    images: [
      "/images/projects/rsa-encryption.jpg",
      "/images/projects/rsa-keygen.jpg",
      "/images/projects/rsa-darkmode.jpg",
    ],
    features: [
      "RSA key generation (multiple bit sizes)",
      "Text encryption and decryption",
      "Dark/light mode toggle",
      "Auto copy-paste functionality",
      "Key export and import",
      "Educational mode with explanations",
      "Responsive web design",
      "Secure key management",
    ],
    challenges: [
      "Implementing RSA algorithm efficiently",
      "Creating user-friendly cryptographic interfaces",
      "Ensuring secure key handling and storage",
    ],
    year: "2024",
  },
  {
    id: "portfolio-template",
    slug: "portfolio-template",
    title: "Portfolio Template",
    description:
      "A minimal, responsive portfolio starter built using HTML, CSS, and JS. Designed to be clean, customizable, and developer-friendly.",
    longDescription:
      "A clean, minimal portfolio template built with vanilla HTML, CSS, and JavaScript. Designed to be easily customizable and developer-friendly, featuring responsive design, smooth animations, and modern layout patterns. Perfect for developers looking for a lightweight, fast-loading portfolio solution without framework dependencies.",
    tech: ["HTML/CSS/JS", "Next.js"],
    tags: ["HTML/CSS/JS", "Next.js", "Template"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/portfolio-template-hero.jpg",
    images: [
      "/images/projects/portfolio-hero.jpg",
      "/images/projects/portfolio-projects.jpg",
      "/images/projects/portfolio-contact.jpg",
    ],
    features: [
      "Clean, minimal design aesthetic",
      "Fully responsive layout",
      "Smooth scroll animations",
      "Project showcase grid",
      "Contact form integration",
      "SEO-friendly structure",
      "Fast loading performance",
      "Easy customization options",
    ],
    challenges: [
      "Creating a versatile template for different use cases",
      "Implementing smooth animations without frameworks",
      "Ensuring cross-browser compatibility",
    ],
    year: "2023",
  },
  {
    id: "weather-application",
    slug: "weather-application",
    title: "Weather Application",
    description: "A live weather forecasting app with real-time API integration, geolocation, and interactive visuals.",
    longDescription:
      "A comprehensive weather application built with vanilla JavaScript featuring real-time API integration, geolocation services, and interactive weather visualizations. Provides accurate forecasts, location-based weather detection, and intuitive user interface for planning and daily weather monitoring.",
    tech: ["HTML/CSS/JS", "React.js"],
    tags: ["HTML/CSS/JS", "React.js", "API Integration"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/weather-hero.jpg",
    images: [
      "/images/projects/weather-forecast.jpg",
      "/images/projects/weather-search.jpg",
      "/images/projects/weather-map.jpg",
    ],
    features: [
      "Real-time weather data and forecasts",
      "Location-based weather detection",
      "Interactive weather maps",
      "7-day forecast with hourly details",
      "Weather search by city",
      "Responsive design for all devices",
      "Weather icons and animations",
      "API integration with weather services",
    ],
    challenges: [
      "Handling API rate limits and error states",
      "Implementing accurate geolocation features",
      "Creating intuitive weather data visualization",
    ],
    year: "2023",
  },
  {
    id: "secure-notepad-app",
    slug: "secure-notepad-app",
    title: "Secure Notepad App",
    description:
      "A secure note-taking app where content is encrypted using a custom algorithm. User must enter a key to decrypt previous sessions.",
    longDescription:
      "A secure note-taking application built with Flask that encrypts user content using custom encryption algorithms. Features session-based encryption, secure key management, and user-friendly interface for creating and accessing encrypted notes. Designed to provide privacy and security for sensitive information storage.",
    tech: ["Flask", "HTML/CSS/JS"],
    tags: ["Flask", "HTML/CSS/JS", "Security"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/secure-notepad-hero.jpg",
    images: [
      "/images/projects/notepad-encryption.jpg",
      "/images/projects/notepad-decrypt.jpg",
      "/images/projects/notepad-dashboard.jpg",
    ],
    features: [
      "Custom encryption algorithm implementation",
      "Session-based note encryption",
      "Secure key management system",
      "User-friendly note editor",
      "Decryption key verification",
      "Responsive web interface",
      "Data privacy and security focus",
      "Simple dashboard for note management",
    ],
    challenges: [
      "Implementing secure encryption algorithms",
      "Managing encryption keys safely",
      "Creating intuitive security-focused user experience",
    ],
    year: "2024",
  },
  {
    id: "simple-youtube-clone",
    slug: "simple-youtube-clone",
    title: "Simple YouTube Clone",
    description:
      "A clean YouTube-inspired frontend using basic HTML, CSS, and JavaScript. Built to practice layout structure and responsive UI elements.",
    longDescription:
      "A YouTube-inspired frontend application built with vanilla HTML, CSS, and JavaScript to practice modern layout structures and responsive design patterns. Features video card grids, navigation components, search functionality, and player interfaces that mimic popular video platforms while focusing on clean code and responsive design principles.",
    tech: ["HTML/CSS/JS"],
    tags: ["HTML/CSS/JS", "Frontend"],
    category: "learning",
    type: "personal",
    status: "Completed",
    image: "/images/projects/youtube-clone-hero.jpg",
    images: [
      "/images/projects/youtube-grid.jpg",
      "/images/projects/youtube-sidebar.jpg",
      "/images/projects/youtube-player.jpg",
    ],
    features: [
      "Video card grid layout",
      "Responsive sidebar navigation",
      "Search functionality interface",
      "Video player mockup design",
      "Mobile-responsive design",
      "Clean, modern UI components",
      "CSS Grid and Flexbox layouts",
      "Interactive hover effects",
    ],
    challenges: [
      "Replicating complex YouTube layout structures",
      "Implementing responsive design without frameworks",
      "Creating smooth user interactions with vanilla JavaScript",
    ],
    year: "2023",
  },
]

export const techFilters = [
  "All",
  "Next.js",
  "React.js",
  "Flask",
  "WordPress",
  "HTML/CSS/JS",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByTech(tech: string): Project[] {
  if (tech === "All") return projects
  return projects.filter((project) => project.tech.includes(tech) || project.tags.includes(tech))
}

export function getClientProjects(): Project[] {
  return projects.filter((project) => project.type === "client")
}

export function getLearningProjects(): Project[] {
  return projects.filter((project) => project.type === "personal")
}
