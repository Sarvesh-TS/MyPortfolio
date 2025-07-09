import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Users, Shield, Code, Calendar } from "lucide-react"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <EnhancedScrollAnimation animation="slideUp" className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">About Me</h1>
          </EnhancedScrollAnimation>

          {/* Introduction */}
          <EnhancedScrollAnimation animation="zoomIn" delay={0.2}>
            <Card className="bg-slate-800 border-slate-700 mb-8 card-hover">
              <CardContent className="p-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm a passionate cybersecurity student at Jain University with a strong foundation in both defensive
                  and offensive security practices. My journey in technology began with a curiosity about how systems
                  work and how to protect them from threats. This curiosity has evolved into a comprehensive skill set
                  spanning cybersecurity, web development, and technical leadership.
                </p>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>

          {/* Current Roles */}
          <StaggeredContainer className="grid md:grid-cols-2 gap-6 mb-12" staggerDelay={0.2}>
            <StaggeredItem animation="slideRight">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-sky-500 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-white">BTech Cybersecurity</h4>
                      <p className="text-slate-400">Jain University</p>
                      <Badge variant="secondary" className="bg-sky-600/20 text-sky-300 mt-1">
                        Current Student
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem animation="slideLeft">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-emerald-500 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Experience</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-white">Cybersecurity Intern</h4>
                      <p className="text-slate-400">Adiroha Solutions</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 text-slate-500 mr-1" />
                        <span className="text-sm text-slate-500">May - June 2025</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Intern</h4>
                      <p className="text-slate-400">Miles Education</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 text-slate-500 mr-1" />
                        <span className="text-sm text-slate-500">April - May 2024</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>

          {/* Leadership Roles */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.4}>
            <Card className="bg-slate-800 border-slate-700 mb-8 card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Users className="w-6 h-6 text-slate-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Leadership Experience</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white">Tech Lead</h4>
                      <p className="text-slate-400">Salus Club</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 text-slate-500 mr-1" />
                        <span className="text-sm text-slate-500">2023 - 2025</span>
                      </div>
                      <p className="text-sm text-slate-300 mt-2">
                        Leading technical initiatives and mentoring team members in cybersecurity best practices.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white">Cybersecurity Lead</h4>
                      <p className="text-slate-400">GDSC @ Jain University</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 text-slate-500 mr-1" />
                        <span className="text-sm text-slate-500">2023 - 2024</span>
                      </div>
                      <p className="text-sm text-slate-300 mt-2">
                        Organized workshops and events focused on cybersecurity awareness and education.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>

          {/* What I Do */}
          <StaggeredContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.2}>
            <StaggeredItem animation="flipIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-sky-500 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Cybersecurity Passion</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    My cybersecurity journey involves hands-on experience with ethical hacking, network security
                    analysis, and vulnerability assessments. I'm particularly interested in:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Penetration testing and vulnerability assessment</li>
                    <li>• Network security and traffic analysis</li>
                    <li>• Cryptography and secure communications</li>
                    <li>• Security tool development and automation</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem animation="flipIn">
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 text-slate-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Web Development</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    As a freelance web developer since 2023, I've built websites and applications for real clients,
                    focusing on:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Modern, responsive web applications</li>
                    <li>• Secure coding practices and implementation</li>
                    <li>• Full-stack development with various technologies</li>
                    <li>• Client consultation and project management</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggeredItem>
          </StaggeredContainer>
        </div>
      </div>
    </div>
  )
}
