import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowRight, Shield, Code, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Cybersecurity student and freelance web developer helping organizations stay secure and build strong digital presence through secure applications and modern websites.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <EnhancedScrollAnimation
              animation="slideRight"
              className="flex-1 text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="heading-xl text-white mb-6">Sarvesh T S</h1>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                <Badge
                  variant="secondary"
                  className="bg-cyan-600/20 text-cyan-300 px-4 py-2 hover-scale border border-cyan-500/30"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Cybersecurity Expert
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-teal-600/20 text-teal-300 px-4 py-2 hover-scale border border-teal-500/30"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Web Developer
                </Badge>
              </div>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <div className="h-px bg-gradient-to-r from-cyan-500 to-teal-500 flex-1 max-w-xs"></div>
              </div>
              <p className="body-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Helping organizations stay secure and build a strong digital presence through secure applications and
                modern websites. Cybersecurity student with hands-on experience in ethical hacking and freelance web
                development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="btn-primary btn-hover" asChild>
                  <Link href="/portfolio">
                    View My Work <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start mt-8">
                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-cyan-400 social-icon" asChild>
                  <a
                    href="https://github.com/Sarvesh-TS"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-cyan-400 social-icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/sarveshts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-cyan-400 social-icon" asChild>
                  <a href="mailto:sarveshts2k4@gmail.com" aria-label="Send Email">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </EnhancedScrollAnimation>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="hero-image-container">
                <Image
                  src="/images/profile-hero.png"
                  alt="Sarvesh T S - Cybersecurity Expert and Web Developer"
                  width={600}
                  height={600}
                  className="hero-image"
                  priority
                  sizes="(max-width: 480px) 320px, (max-width: 640px) 400px, (max-width: 768px) 450px, (max-width: 1024px) 500px, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section id="projects" className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <EnhancedScrollAnimation animation="slideUp">
            <h2 className="heading-lg text-white text-center mb-4">What I Do</h2>
            <p className="body-md text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Specialized expertise in cybersecurity and modern web development
            </p>
          </EnhancedScrollAnimation>
          <StaggeredContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggeredItem animation="flipIn">
              <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-colors card-hover hover-lift h-full gradient-card">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="heading-sm text-white mb-2">Cybersecurity</h3>
                  <p className="body-sm text-slate-300 mb-4">
                    Ethical hacking, network security, cryptography, and vulnerability assessment projects with hands-on
                    experience.
                  </p>
                  <Button
                    variant="link"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    asChild
                  >
                    <Link href="/cybersecurity">View Projects →</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggeredItem>
            <StaggeredItem animation="flipIn">
              <Card className="bg-slate-800 border-slate-700 hover:border-teal-500 transition-colors card-hover hover-lift h-full gradient-card">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="heading-sm text-white mb-2">Web Development</h3>
                  <p className="body-sm text-slate-300 mb-4">
                    Full-stack websites and responsive applications for real clients using modern technologies and
                    secure practices.
                  </p>
                  <Button
                    variant="link"
                    className="text-teal-400 hover:text-teal-300 transition-colors font-medium"
                    asChild
                  >
                    <Link href="/portfolio">View Portfolio →</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggeredItem>
            <StaggeredItem animation="flipIn">
              <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-colors card-hover hover-lift h-full gradient-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="heading-sm text-white mb-2">Professional Growth</h3>
                  <p className="body-sm text-slate-300 mb-4">
                    Continuous learning through certifications, leadership roles, and hands-on experience with
                    industry-standard tools.
                  </p>
                  <Button
                    variant="link"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    asChild
                  >
                    <Link href="/accomplishments">View Achievements →</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </section>

      {/* Technical Skills Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <EnhancedScrollAnimation animation="slideUp">
            <h2 className="heading-lg text-white text-center mb-4">Technical Expertise</h2>
            <p className="body-md text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Proficient in modern technologies and security frameworks
            </p>
          </EnhancedScrollAnimation>
          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            <StaggeredItem animation="zoomIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-white mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "C/C++", "JavaScript", "SQL"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-cyan-600/20 text-cyan-300 hover-scale border border-cyan-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
            <StaggeredItem animation="zoomIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-white mb-3">Security Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Wireshark", "Nmap", "Burp Suite", "Kali Linux"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-red-600/20 text-red-300 hover-scale border border-red-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
            <StaggeredItem animation="zoomIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-white mb-3">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {["NIST", "OWASP", "ISO 27001"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-600/20 text-slate-300 hover-scale border border-slate-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
            <StaggeredItem animation="zoomIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                <CardContent className="p-6">
                  <h3 className="heading-sm text-white mb-3">Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Git", "VSCode"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-teal-600/20 text-teal-300 hover-scale border border-teal-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </section>
    </div>
  )
}
