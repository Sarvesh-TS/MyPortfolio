import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  CheckCircle,
  AlertCircle,
  Tag,
  Code,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"
import { getProjectBySlug, projects } from "@/lib/portfolio-data"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Sarvesh T S Portfolio`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-600/20 text-emerald-300 border border-emerald-500/30"
      case "Completed":
        return "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30"
      case "In Development":
        return "bg-amber-600/20 text-amber-300 border border-amber-500/30"
      default:
        return "bg-slate-600/20 text-slate-300 border border-slate-500/30"
    }
  }

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case "cybersecurity":
        return { icon: "🔒", name: "Cybersecurity", color: "text-red-400" }
      case "web-development":
        return { icon: "🌐", name: "Web Development", color: "text-cyan-400" }
      case "mobile":
        return { icon: "📱", name: "Mobile App", color: "text-green-400" }
      case "tool":
        return { icon: "🛠️", name: "Tool", color: "text-amber-400" }
      default:
        return { icon: "💻", name: "Project", color: "text-slate-400" }
    }
  }

  const categoryInfo = getCategoryInfo(project.category)

  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <EnhancedScrollAnimation animation="slideUp">
            <Button variant="ghost" className="text-slate-300 hover:text-cyan-400 mb-8 btn-hover" asChild>
              <Link href="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </EnhancedScrollAnimation>

          {/* Project Header */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.1}>
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-3 mb-4">
                <span className="text-2xl">{categoryInfo.icon}</span>
                <Badge variant="secondary" className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
                <Badge variant="outline" className={`border-slate-600 ${categoryInfo.color}`}>
                  {categoryInfo.name}
                </Badge>
                {project.type === "client" && (
                  <Badge variant="outline" className="border-teal-600 text-teal-400">
                    Client Project
                  </Badge>
                )}
              </div>
              <h1 className="heading-lg text-white mb-4">{project.title}</h1>
              <p className="body-lg text-slate-300 max-w-2xl mx-auto">{project.description}</p>
            </div>
          </EnhancedScrollAnimation>

          {/* Project Meta Info */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.2}>
            <Card className="bg-slate-800 border-slate-700 mb-8 gradient-card">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">Year</p>
                      <p className="text-slate-400">{project.year}</p>
                    </div>
                  </div>
                  {project.client && (
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-teal-400" />
                      <div>
                        <p className="text-white font-medium">Client</p>
                        <p className="text-slate-400">{project.client}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-white font-medium">Type</p>
                      <p className="text-slate-400 capitalize">{project.type} Project</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>

          {/* Action Buttons */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {project.url && (
                <Button size="lg" className="btn-primary btn-hover" asChild>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live website`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.status === "Live" ? "Visit Live Site" : "View Project"}
                  </a>
                </Button>
              )}
              {project.github && (
                <Button size="lg" className="btn-secondary btn-hover" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              )}
            </div>
          </EnhancedScrollAnimation>

          {/* Project Description */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.4}>
            <Card className="bg-slate-800 border-slate-700 mb-8 gradient-card">
              <CardHeader>
                <CardTitle className="heading-sm text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-md text-slate-300 leading-relaxed">{project.longDescription}</p>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>

          {/* Technologies and Tags */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <EnhancedScrollAnimation animation="slideRight" delay={0.5}>
              <Card className="bg-slate-800 border-slate-700 gradient-card h-full">
                <CardHeader>
                  <CardTitle className="heading-sm text-white flex items-center gap-2">
                    <Code className="w-5 h-5 text-teal-400" />
                    Technologies Used
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-teal-600/20 text-teal-300 hover-scale border border-teal-500/30 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </EnhancedScrollAnimation>

            <EnhancedScrollAnimation animation="slideLeft" delay={0.5}>
              <Card className="bg-slate-800 border-slate-700 gradient-card h-full">
                <CardHeader>
                  <CardTitle className="heading-sm text-white flex items-center gap-2">
                    <Tag className="w-5 h-5 text-cyan-400" />
                    Project Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-cyan-600/30 text-cyan-400 hover-scale px-2 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </EnhancedScrollAnimation>
          </div>

          {/* Key Features */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.6}>
            <Card className="bg-slate-800 border-slate-700 mb-8 gradient-card">
              <CardHeader>
                <CardTitle className="heading-sm text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <StaggeredContainer className="grid md:grid-cols-2 gap-4" staggerDelay={0.1}>
                  {project.features.map((feature, index) => (
                    <StaggeredItem key={index} animation="slideUp">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <p className="body-sm text-slate-300">{feature}</p>
                      </div>
                    </StaggeredItem>
                  ))}
                </StaggeredContainer>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <EnhancedScrollAnimation animation="slideUp" delay={0.7}>
              <Card className="bg-slate-800 border-slate-700 mb-8 gradient-card">
                <CardHeader>
                  <CardTitle className="heading-sm text-white">Challenges & Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <StaggeredContainer className="space-y-4" staggerDelay={0.1}>
                    {project.challenges.map((challenge, index) => (
                      <StaggeredItem key={index} animation="slideUp">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                          <p className="body-sm text-slate-300">{challenge}</p>
                        </div>
                      </StaggeredItem>
                    ))}
                  </StaggeredContainer>
                </CardContent>
              </Card>
            </EnhancedScrollAnimation>
          )}

          {/* Related Projects */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.8}>
            <Card className="bg-slate-800 border-slate-700 gradient-card">
              <CardHeader>
                <CardTitle className="heading-sm text-white">Explore More</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-secondary btn-hover" asChild>
                    <Link href="/portfolio">View All Projects</Link>
                  </Button>
                  <Button className="btn-primary btn-hover" asChild>
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>
        </div>
      </div>
    </div>
  )
}
