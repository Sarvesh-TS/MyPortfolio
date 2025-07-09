import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Shield, Award, Calendar, MapPin } from "lucide-react"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"

const accomplishments = [
  {
    title: "Finalist - Smart India Hackathon 2024",
    organization: "IIT Jammu",
    description:
      "Selected as finalist in one of India's largest hackathons, competing against thousands of teams nationwide with innovative technology solutions.",
    icon: Trophy,
    date: "2024",
    category: "Competition",
    color: "yellow",
  },
  {
    title: "Tech Lead - Salus Club",
    organization: "Jain University",
    description:
      "Leading technical initiatives, mentoring team members, and driving cybersecurity awareness programs within the university community.",
    icon: Users,
    date: "2023 - 2025",
    category: "Leadership",
    color: "sky",
  },
  {
    title: "Cybersecurity Lead - GDSC",
    organization: "Google Developer Student Clubs @ Jain University",
    description:
      "Organized workshops, seminars, and hands-on training sessions focused on cybersecurity education and awareness for students.",
    icon: Shield,
    date: "2023 - 2024",
    category: "Leadership",
    color: "emerald",
  },
]

const additionalAchievements = [
  {
    title: "Cybersecurity Intern",
    organization: "Adiroha Solutions",
    description: "Gained practical experience in cybersecurity operations and threat analysis",
    date: "May - June 2025",
  },
  {
    title: "Freelance Web Developer",
    organization: "Independent",
    description: "Successfully delivered 4+ live websites for real clients since 2023",
    date: "2023 - Present",
  },
  {
    title: "Multiple Industry Certifications",
    organization: "Various Providers",
    description: "Completed 8+ professional certifications in cybersecurity and technology",
    date: "2023 - 2025",
  },
  {
    title: "Forage Virtual Simulations",
    organization: "Tata, Datacom, AIG, Mastercard",
    description: "Completed cybersecurity simulations with leading global companies",
    date: "2023 - 2025",
  },
]

const getColorClasses = (color: string) => {
  const colors = {
    yellow: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
    sky: "bg-sky-600/20 text-sky-300 border-sky-600/30",
    emerald: "bg-emerald-600/20 text-emerald-300 border-emerald-600/30",
  }
  return colors[color as keyof typeof colors] || colors.sky
}

export default function AccomplishmentsPage() {
  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <EnhancedScrollAnimation animation="slideUp" className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Accomplishments & Leadership</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Recognition, leadership roles, and achievements that demonstrate commitment to excellence in
              cybersecurity, technology, and community building.
            </p>
          </EnhancedScrollAnimation>

          {/* Major Accomplishments */}
          <section className="mb-16">
            <EnhancedScrollAnimation animation="slideUp" delay={0.2}>
              <h2 className="text-3xl font-bold text-white mb-8">Major Achievements</h2>
            </EnhancedScrollAnimation>
            <StaggeredContainer className="space-y-6" staggerDelay={0.2}>
              {accomplishments.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <StaggeredItem key={index} animation="slideUp">
                    <Card className="bg-slate-800 border-slate-700 hover:border-sky-500 transition-all duration-300 card-hover hover-lift">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${getColorClasses(achievement.color)}`}>
                              <IconComponent className="w-8 h-8" />
                            </div>
                            <div>
                              <CardTitle className="text-white text-xl mb-1">{achievement.title}</CardTitle>
                              <div className="flex items-center gap-2 text-slate-400">
                                <MapPin className="w-4 h-4" />
                                <span>{achievement.organization}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className={getColorClasses(achievement.color)}>
                              {achievement.category}
                            </Badge>
                            <div className="flex items-center gap-1 mt-2 text-slate-500">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{achievement.date}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                )
              })}
            </StaggeredContainer>
          </section>

          {/* Additional Achievements */}
          <section className="mb-16">
            <EnhancedScrollAnimation animation="slideUp" delay={0.4}>
              <h2 className="text-3xl font-bold text-white mb-8">Additional Achievements</h2>
            </EnhancedScrollAnimation>
            <StaggeredContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
              {additionalAchievements.map((achievement, index) => (
                <StaggeredItem key={index} animation="zoomIn">
                  <Card className="bg-slate-800 border-slate-700 hover:border-sky-500 transition-all duration-300 card-hover hover-lift h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Award className="w-6 h-6 text-slate-400" />
                        <span className="text-sm text-slate-500">{achievement.date}</span>
                      </div>
                      <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                      <p className="text-slate-400">{achievement.organization}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          </section>

          {/* Impact Summary */}
          <section>
            <EnhancedScrollAnimation animation="slideUp" delay={0.6}>
              <h2 className="text-3xl font-bold text-white text-center mb-8">Leadership Impact</h2>
            </EnhancedScrollAnimation>
            <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 text-center card-hover hover-lift">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-sky-500 mb-2">2+</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Years of Leadership</h3>
                    <p className="text-slate-400 text-sm">Active leadership roles in tech communities</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 text-center card-hover hover-lift">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-emerald-500 mb-2">4+</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Live Client Projects</h3>
                    <p className="text-slate-400 text-sm">Successful freelance web development projects</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 text-center card-hover hover-lift">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-slate-400 mb-2">12+</div>
                    <h3 className="text-lg font-semibold text-white mb-2">Certifications</h3>
                    <p className="text-slate-400 text-sm">Professional certifications and simulations completed</p>
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
