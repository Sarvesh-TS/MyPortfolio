import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Key, Eye, Terminal, Smartphone, Globe, FileText, Github } from "lucide-react"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"

export const metadata: Metadata = {
  title: "Cybersecurity Projects",
  description:
    "Explore my cybersecurity projects including ethical hacking tools, cryptography applications, and security analysis projects using Python, Java, and industry-standard frameworks.",
}

const projects = [
  {
    id: "appwarden",
    title: "AppWarden",
    description:
      "Android application for granular network access control per app with real-time monitoring capabilities.",
    details: "Built with Android SDK and Java, featuring firewall rules and traffic analysis.",
    icon: Smartphone,
    tools: ["Android", "Java", "Network Security"],
    category: "Mobile Security",
    complexity: "Advanced",
  },
  {
    id: "rsa-web-app",
    title: "RSA Encryption Suite",
    description:
      "Full-featured web application for RSA encryption, decryption, and key generation with educational interface.",
    details: "Implements RSA algorithm from scratch with Flask backend and responsive frontend.",
    icon: Lock,
    tools: ["Python", "Flask", "Cryptography"],
    category: "Cryptography",
    complexity: "Intermediate",
  },
  {
    id: "python-keylogger",
    title: "Educational Keylogger",
    description:
      "Python-based keylogger for cybersecurity education with comprehensive ethical guidelines and detection methods.",
    details: "Demonstrates attack vectors while teaching defensive techniques and detection.",
    icon: Eye,
    tools: ["Python", "Security Research"],
    category: "Educational",
    complexity: "Intermediate",
  },
  {
    id: "youtube-clone",
    title: "Secure Video Platform",
    description: "Video-sharing platform clone with focus on security features and user data protection.",
    details: "Implements secure authentication, content protection, and privacy controls.",
    icon: Globe,
    tools: ["HTML", "CSS", "JavaScript", "Security"],
    category: "Web Security",
    complexity: "Intermediate",
  },
  {
    id: "caesar-cipher",
    title: "Advanced Caesar Cipher",
    description: "Java implementation with brute force analysis, frequency analysis, and multiple cipher variants.",
    details: "Educational tool for understanding classical cryptography and cryptanalysis techniques.",
    icon: Key,
    tools: ["Java", "Cryptanalysis"],
    category: "Cryptography",
    complexity: "Beginner",
  },
  {
    id: "password-analyzer",
    title: "Password Security Analyzer",
    description: "Comprehensive password strength evaluation tool with regex patterns and security recommendations.",
    details: "Analyzes password entropy, common patterns, and provides improvement suggestions.",
    icon: Shield,
    tools: ["Java", "Regex", "Security Analysis"],
    category: "Security Tools",
    complexity: "Intermediate",
  },
  {
    id: "breachcheck-cli",
    title: "BreachCheck CLI Tool",
    description:
      "Command-line interface for checking email addresses against known data breaches with API integration.",
    details: "Integrates with HaveIBeenPwned API and provides detailed breach information.",
    icon: Terminal,
    tools: ["Python", "CLI", "API Integration"],
    category: "Security Tools",
    complexity: "Advanced",
  },
  {
    id: "securenote",
    title: "SecureNote Application",
    description: "AES-encrypted note-taking web application with secure key management and user authentication.",
    details: "End-to-end encryption with secure key derivation and storage mechanisms.",
    icon: FileText,
    tools: ["Python", "AES", "Flask", "Encryption"],
    category: "Cryptography",
    complexity: "Advanced",
  },
]

const getComplexityColor = (complexity: string) => {
  switch (complexity) {
    case "Beginner":
      return "bg-emerald-600/20 text-emerald-300 border-emerald-500/30"
    case "Intermediate":
      return "bg-cyan-600/20 text-cyan-300 border-cyan-500/30"
    case "Advanced":
      return "bg-red-600/20 text-red-300 border-red-500/30"
    default:
      return "bg-slate-600/20 text-slate-300 border-slate-500/30"
  }
}

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <EnhancedScrollAnimation animation="slideUp" className="text-center mb-12">
            <h1 className="heading-lg text-white mb-4">Cybersecurity Projects</h1>
            <p className="body-lg text-slate-300 max-w-3xl mx-auto">
              A comprehensive collection of cybersecurity projects showcasing expertise in ethical hacking,
              cryptography, network security, and security tool development using industry-standard practices.
            </p>
          </EnhancedScrollAnimation>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" staggerDelay={0.1}>
            {projects.map((project) => {
              const IconComponent = project.icon
              return (
                <StaggeredItem key={project.id} animation="flipIn">
                  <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover-lift card-hover h-full gradient-card">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <IconComponent className="w-8 h-8 text-cyan-500" />
                        <Badge variant="secondary" className={getComplexityColor(project.complexity)}>
                          {project.complexity}
                        </Badge>
                      </div>
                      <CardTitle className="heading-sm text-white">{project.title}</CardTitle>
                      <Badge variant="outline" className="border-slate-600 text-slate-400 w-fit">
                        {project.category}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="body-sm text-slate-300 mb-2">{project.description}</p>
                      <p className="text-xs text-slate-400 mb-4">{project.details}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="outline"
                            className="border-slate-600 text-slate-400 hover-scale text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full btn-primary btn-hover" asChild>
                        <a
                          href={`https://github.com/Sarvesh-TS/${project.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              )
            })}
          </StaggeredContainer>

          {/* Technical Skills Section */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.3} className="mb-8">
            <h2 className="heading-md text-white text-center mb-4">Technical Arsenal</h2>
            <p className="body-md text-slate-400 text-center mb-8 max-w-2xl mx-auto">
              Professional-grade tools and frameworks used in cybersecurity operations
            </p>
          </EnhancedScrollAnimation>
          <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            <StaggeredItem animation="zoomIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-white mb-4">Security Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Wireshark", "Nmap", "Burp Suite", "Kali Linux", "Metasploit", "SIEM Tools"].map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="bg-red-600/20 text-red-300 hover-scale border border-red-500/30"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
            <StaggeredItem animation="zoomIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-white mb-4">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {["NIST Cybersecurity Framework", "OWASP", "ISO 27001", "CIS Controls"].map((framework) => (
                      <Badge
                        key={framework}
                        variant="secondary"
                        className="bg-slate-600/20 text-slate-300 hover-scale border border-slate-500/30"
                      >
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
            <StaggeredItem animation="zoomIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-white mb-4">Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Scapy", "Cryptography", "OpenSSL", "Socket", "PyCryptodome"].map((lib) => (
                      <Badge
                        key={lib}
                        variant="secondary"
                        className="bg-teal-600/20 text-teal-300 hover-scale border border-teal-500/30"
                      >
                        {lib}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </div>
    </div>
  )
}
