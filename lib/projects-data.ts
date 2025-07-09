export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  details: string
  url?: string
  github?: string
  image: string
  images: string[]
  tech: string[]
  category: string
  status: "Live" | "In Development" | "Completed"
  features: string[]
  challenges?: string[]
  year: string
  client?: string
  type: "client" | "personal"
}

export const projects: Project[] = [
  {
    id: "reddot",
    title: "Reddot Business Solutions",
    description: "Professional commercial website for printing & design solutions with modern UI/UX.",
    longDescription:
      "A comprehensive business website for Reddot, a printing and design solutions company. The project involved creating a modern, responsive website that showcases their services, portfolio, and allows customers to easily get in touch for quotes and consultations.",
    details: "Full-stack business website with responsive design, contact forms, and service showcases.",
    url: "https://reddotbiz.com",
    image: "/images/projects/reddot-hero.jpg",
    images: [
      "/images/projects/reddot-hero.jpg",
      "/images/projects/reddot-services.jpg",
      "/images/projects/reddot-contact.jpg",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    category: "Business Website",
    status: "Live",
    features: [
      "Responsive design optimized for all devices",
      "Service showcase with detailed descriptions",
      "Contact form with email integration",
      "Modern UI/UX with smooth animations",
      "SEO optimized for local search",
      "Fast loading performance",
    ],
    challenges: [
      "Creating a design that appeals to both B2B and B2C customers",
      "Optimizing for local SEO and search visibility",
      "Ensuring fast loading times with high-quality images",
    ],
    year: "2024",
    client: "Reddot Business Solutions",
    type: "client",
  },
  {
    id: "teachers-by-choice",
    title: "Teachers By Choice",
    description: "Educational platform connecting students with qualified tutors for personalized learning.",
    longDescription:
      "An innovative educational platform that bridges the gap between students seeking personalized learning and qualified tutors. The platform features user authentication, tutor profiles, booking systems, and integrated communication tools.",
    details: "Tutor booking system with user authentication, scheduling, and payment integration.",
    url: "https://teachersbychoice.vercel.app/",
    image: "/images/projects/teachers-hero.jpg",
    images: [
      "/images/projects/teachers-hero.jpg",
      "/images/projects/teachers-dashboard.jpg",
      "/images/projects/teachers-booking.jpg",
    ],
    tech: ["React", "Next.js", "Vercel", "Authentication"],
    category: "Education Platform",
    status: "Live",
    features: [
      "User authentication and profile management",
      "Tutor discovery and filtering system",
      "Booking and scheduling interface",
      "Real-time messaging system",
      "Payment integration ready",
      "Review and rating system",
    ],
    challenges: [
      "Implementing secure user authentication",
      "Creating an intuitive booking flow",
      "Designing for both students and tutors",
    ],
    year: "2024",
    client: "Teachers By Choice",
    type: "client",
  },
  {
    id: "charge-infra",
    title: "Charge Infrastructure",
    description: "Modern website for EV charging infrastructure solutions and services.",
    longDescription:
      "A forward-thinking website for an EV charging infrastructure company, showcasing their services, locations, and commitment to sustainable transportation. The site features interactive maps, service information, and contact systems.",
    details: "Responsive design showcasing EV charging solutions with interactive service maps.",
    url: "https://teachersbychoice.vercel.app/",
    image: "/images/projects/charge-hero.jpg",
    images: [
      "/images/projects/charge-hero.jpg",
      "/images/projects/charge-services.jpg",
      "/images/projects/charge-locations.jpg",
    ],
    tech: ["React", "Next.js", "Responsive Design", "Maps Integration"],
    category: "Infrastructure",
    status: "Live",
    features: [
      "Interactive charging station map",
      "Service information and pricing",
      "Responsive design for mobile users",
      "Contact and inquiry forms",
      "Modern, clean interface",
      "Fast loading performance",
    ],
    challenges: [
      "Integrating interactive maps effectively",
      "Presenting complex technical information simply",
      "Optimizing for mobile users on-the-go",
    ],
    year: "2024",
    client: "Charge Infrastructure",
    type: "client",
  },
  {
    id: "tuff-ppf",
    title: "Tuff PPF Automotive",
    description: "Professional website for automotive Paint Protection Film services and installation.",
    longDescription:
      "A specialized website for Tuff PPF, an automotive paint protection film service provider. The site showcases their expertise, services, gallery of work, and provides easy ways for customers to book consultations and services.",
    details: "Service-focused website with gallery, booking system, and customer testimonials.",
    url: "https://tuffppf.com/",
    image: "/images/projects/tuff-hero.jpg",
    images: [
      "/images/projects/tuff-hero.jpg",
      "/images/projects/tuff-gallery.jpg",
      "/images/projects/tuff-services.jpg",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Automotive",
    status: "Live",
    features: [
      "Service showcase with detailed descriptions",
      "Before/after gallery of work",
      "Customer testimonials and reviews",
      "Booking and consultation forms",
      "Mobile-optimized design",
      "Local SEO optimization",
    ],
    challenges: [
      "Showcasing visual work effectively",
      "Creating trust through testimonials",
      "Optimizing for local automotive searches",
    ],
    year: "2023",
    client: "Tuff PPF",
    type: "client",
  },
  {
    id: "ecommerce-dashboard",
    title: "E-commerce Dashboard",
    description: "Comprehensive admin dashboard for managing online store operations.",
    longDescription:
      "A full-featured admin dashboard for e-commerce operations, providing store owners with comprehensive tools to manage inventory, track orders, analyze sales data, and handle customer relationships.",
    details: "Features inventory management, order tracking, analytics, and user management.",
    image: "/images/projects/dashboard-hero.jpg",
    images: [
      "/images/projects/dashboard-hero.jpg",
      "/images/projects/dashboard-analytics.jpg",
      "/images/projects/dashboard-inventory.jpg",
    ],
    tech: ["React", "Chart.js", "Material-UI", "Node.js"],
    category: "Dashboard",
    status: "Completed",
    features: [
      "Real-time sales analytics and reporting",
      "Inventory management with low stock alerts",
      "Order tracking and fulfillment",
      "Customer management system",
      "Revenue and performance metrics",
      "Responsive design for mobile management",
    ],
    year: "2024",
    type: "personal",
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description: "Real-time weather app with location-based forecasts and alerts.",
    longDescription:
      "A comprehensive weather application that provides real-time weather data, forecasts, and alerts. Features location-based services, interactive maps, and detailed weather information for planning and daily use.",
    details: "Integrates with weather APIs for accurate forecasts and interactive maps.",
    image: "/images/projects/weather-hero.jpg",
    images: [
      "/images/projects/weather-hero.jpg",
      "/images/projects/weather-forecast.jpg",
      "/images/projects/weather-map.jpg",
    ],
    tech: ["JavaScript", "API Integration", "CSS", "Geolocation"],
    category: "Web App",
    status: "Completed",
    features: [
      "Real-time weather data and forecasts",
      "Location-based weather detection",
      "Interactive weather maps",
      "Weather alerts and notifications",
      "7-day forecast with hourly details",
      "Responsive design for all devices",
    ],
    year: "2023",
    type: "personal",
  },
]

export const techFilters = [
  "All",
  "React",
  "Next.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "API Integration",
  "Responsive Design",
]

export const categoryFilters = [
  "All",
  "Business Website",
  "Education Platform",
  "Infrastructure",
  "Automotive",
  "Dashboard",
  "Web App",
]
