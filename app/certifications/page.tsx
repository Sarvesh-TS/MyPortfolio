import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Globe, Database, Smartphone, Users, Building } from "lucide-react"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"

const certifications = [
  {
    title: "Certified Network Defender",
    issuer: "EC-Council",
    icon: Shield,
    category: "Cybersecurity",
    status: "Certified",
    color: "red",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    icon: Shield,
    category: "Cybersecurity",
    status: "Completed",
    color: "sky",
  },
  {
    title: "IBM Cybersecurity Courses",
    issuer: "IBM",
    icon: Shield,
    category: "Cybersecurity",
    status: "Completed",
    color: "sky",
  },
  {
    title: "Palo Alto Network Security Fundamentals",
    issuer: "Palo Alto Networks",
    icon: Shield,
    category: "Network Security",
    status: "Completed",
    color: "orange",
  },
  {
    title: "Infrastructure Security",
    issuer: "NYU",
    icon: Building,
    category: "Infrastructure",
    status: "Completed",
    color: "slate",
  },
  {
    title: "Database Design",
    issuer: "UC Irvine",
    icon: Database,
    category: "Database",
    status: "Completed",
    color: "emerald",
  },
  {
    title: "Smart Devices",
    issuer: "Yonsei University",
    icon: Smartphone,
    category: "IoT",
    status: "Completed",
    color: "sky",
  },
  {
    title: "OS & Power User",
    issuer: "Google",
    icon: Globe,
    category: "Operating Systems",
    status: "Completed",
    color: "sky",
  },
]

const forageSimulations = [
  {
    title: "Tata Cybersecurity Simulation",
    issuer: "Tata",
    date: "March 2025",
    icon: Building,
    category: "Cybersecurity",
  },
  {
    title: "Datacom Cybersecurity Simulation",
    issuer: "Datacom",
    date: "March 2025",
    icon: Building,
    category: "Cybersecurity",
  },
  {
    title: "AIG Cybersecurity Simulation",
    issuer: "AIG",
    date: "December 2023",
    icon: Building,
    category: "Cybersecurity",
  },
  {
    title: "Mastercard Cybersecurity Simulation",
    issuer: "Mastercard",
    date: "December 2023",
    icon: Building,
    category: "Cybersecurity",
  },
]

const getColorClasses = (color: string) => {
  const colors = {
    red: "bg-red-600/20 text-red-300",
    sky: "bg-sky-600/20 text-sky-300",
    orange: "bg-orange-600/20 text-orange-300",
    slate: "bg-slate-600/20 text-slate-300",
    emerald: "bg-emerald-600/20 text-emerald-300",
  }
  return colors[color as keyof typeof colors] || colors.sky
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <EnhancedScrollAnimation animation="slideUp" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Certifications & Training</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professional certifications and specialized training programs that validate my expertise in cybersecurity,
              technology, and industry best practices.
            </p>
          </EnhancedScrollAnimation>

          {/* Main Certifications */}
          <section className="mb-16">
            <EnhancedScrollAnimation animation="slideUp" delay={0.2}>
              <h2 className="text-3xl font-bold text-white mb-8">Professional Certifications</h2>
            </EnhancedScrollAnimation>
            <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <StaggeredItem key={index} animation="flipIn">
                    <Card className="bg-slate-800 border-slate-700 hover:border-sky-500 transition-all duration-300 card-hover hover-lift h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className="w-8 h-8 text-sky-500" />
                          <Badge variant="secondary" className={getColorClasses(cert.color)}>
                            {cert.status}
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                        <p className="text-slate-400">{cert.issuer}</p>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="outline" className="border-slate-600 text-slate-400">
                          {cert.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                )
              })}
            </StaggeredContainer>
          </section>

          {/* Forage Simulations */}
          <section className="mb-16">
            <EnhancedScrollAnimation animation="slideUp" delay={0.4}>
              <h2 className="text-3xl font-bold text-white mb-8">Industry Simulations</h2>
              <p className="text-slate-300 mb-6">
                Completed virtual work experience programs through Forage, gaining hands-on experience with real-world
                cybersecurity challenges from leading companies.
              </p>
            </EnhancedScrollAnimation>
            <StaggeredContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
              {forageSimulations.map((simulation, index) => {
                const IconComponent = simulation.icon
                return (
                  <StaggeredItem key={index} animation="zoomIn">
                    <Card className="bg-slate-800 border-slate-700 hover:border-sky-500 transition-all duration-300 card-hover hover-lift">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className="w-6 h-6 text-slate-400" />
                          <Badge variant="secondary" className="bg-slate-600/20 text-slate-300">
                            Forage
                          </Badge>
                        </div>
                        <CardTitle className="text-white text-lg">{simulation.title}</CardTitle>
                        <p className="text-slate-400">{simulation.issuer}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {simulation.category}
                          </Badge>
                          <span className="text-sm text-slate-500">{simulation.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                )
              })}
            </StaggeredContainer>
          </section>

          {/* Skills Summary */}
          <section>
            <EnhancedScrollAnimation animation="slideUp" delay={0.6}>
              <h2 className="text-3xl font-bold text-white text-center mb-8">Certification Areas</h2>
            </EnhancedScrollAnimation>
            <StaggeredContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 text-center card-hover hover-lift">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                    <p className="text-slate-400 text-sm">Network Defense, Security Fundamentals</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 text-center card-hover hover-lift">
                  <CardContent className="p-6">
                    <Database className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Database</h3>
                    <p className="text-slate-400 text-sm">Design, Security, Management</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 text-center card-hover hover-lift">
                  <CardContent className="p-6">
                    <Building className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Infrastructure</h3>
                    <p className="text-slate-400 text-sm">Security, Smart Devices, Systems</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 text-center card-hover hover-lift">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Industry Experience</h3>
                    <p className="text-slate-400 text-sm">Virtual Simulations, Real Scenarios</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </StaggeredContainer>
          </section>
        </div>
      </div>
    </div>
  )
}
