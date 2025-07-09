"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, Filter, Search, Lightbulb, Briefcase } from "lucide-react"
import Link from "next/link"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"
import { techFilters, getProjectsByTech, type Project } from "@/lib/portfolio-data"

export default function PortfolioPage() {
  const [selectedTech, setSelectedTech] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = getProjectsByTech(selectedTech).filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const clientProjects = filteredProjects.filter((project) => project.type === "client")
  const learningProjects = filteredProjects.filter((project) => project.type === "personal")

  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <EnhancedScrollAnimation animation="slideUp" className="text-center mb-12">
            <h1 className="heading-lg text-white mb-4">Portfolio</h1>
            <p className="body-lg text-slate-300 max-w-3xl mx-auto">
              A showcase of web development projects, client work, and learning experiments demonstrating expertise
              across modern technologies and frameworks.
            </p>
          </EnhancedScrollAnimation>

          {/* Filter and Search Section */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.1} className="mb-12">
            <Card className="bg-slate-800 border-slate-700 gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-cyan-400" />
                  <h3 className="heading-sm text-white">Filter & Search Projects</h3>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search projects by name, description, or technology..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Tech Stack Filters */}
                <div>
                  <p className="body-sm text-slate-400 mb-3">Filter by Technology Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {techFilters.map((tech) => (
                      <Button
                        key={tech}
                        variant={selectedTech === tech ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTech(tech)}
                        className={`${
                          selectedTech === tech
                            ? "btn-primary"
                            : "border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500"
                        } btn-hover transition-all duration-200`}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>

          {/* Results Count */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.2} className="mb-8">
            <p className="body-sm text-slate-400 text-center">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
              {selectedTech !== "All" && ` using ${selectedTech}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </EnhancedScrollAnimation>

          {/* Client Projects */}
          {clientProjects.length > 0 && (
            <section className="mb-16">
              <EnhancedScrollAnimation animation="slideUp" delay={0.3}>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-teal-400" />
                  <h2 className="heading-md text-white">Client Projects</h2>
                </div>
                <p className="body-md text-slate-400 mb-8">
                  Professional websites and applications delivered to real clients with ongoing support and maintenance.
                </p>
              </EnhancedScrollAnimation>
              <StaggeredContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
                {clientProjects.map((project) => (
                  <StaggeredItem key={project.id} animation="flipIn">
                    <ProjectCard project={project} />
                  </StaggeredItem>
                ))}
              </StaggeredContainer>
            </section>
          )}

          {/* Learning & Exploration Projects */}
          {learningProjects.length > 0 && (
            <section className="mb-16">
              <EnhancedScrollAnimation animation="slideUp" delay={0.4}>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-cyan-400" />
                  <h2 className="heading-md text-white">🧪 Projects Built for Learning & Exploration</h2>
                </div>
                <p className="body-md text-slate-400 mb-8">
                  These projects were created as part of self-learning, experimentation, and exploring new tools and
                  technologies.
                </p>
              </EnhancedScrollAnimation>
              <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {learningProjects.map((project) => (
                  <StaggeredItem key={project.id} animation="flipIn">
                    <ProjectCard project={project} />
                  </StaggeredItem>
                ))}
              </StaggeredContainer>
            </section>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <EnhancedScrollAnimation animation="zoomIn" delay={0.3} className="text-center py-12">
              <Card className="bg-slate-800 border-slate-700 gradient-card">
                <CardContent className="p-8">
                  <h3 className="heading-sm text-white mb-4">No Projects Found</h3>
                  <p className="body-md text-slate-400 mb-6">
                    No projects match your current search or filter selection. Try adjusting your criteria or view all
                    projects.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => {
                        setSelectedTech("All")
                        setSearchTerm("")
                      }}
                      className="btn-primary btn-hover"
                    >
                      Clear All Filters
                    </Button>
                    <Button onClick={() => setSearchTerm("")} variant="outline" className="btn-secondary btn-hover">
                      Clear Search
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </EnhancedScrollAnimation>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
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

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js":
        return "⚡"
      case "React.js":
        return "⚛️"
      case "Flask":
        return "🐍"
      case "WordPress":
        return "📝"
      case "HTML/CSS/JS":
        return "🌐"
      case "Tailwind CSS":
        return "🎨"
      default:
        return "💻"
    }
  }

  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 card-hover hover-lift h-full gradient-card group">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className={getStatusColor(project.status)}>
              {project.status}
            </Badge>
            {project.type === "personal" && (
              <Badge variant="outline" className="border-cyan-600/30 text-cyan-400 text-xs">
                Personal Project
              </Badge>
            )}
          </div>
          {project.client && (
            <Badge variant="outline" className="border-teal-600 text-teal-400 text-xs">
              {project.client}
            </Badge>
          )}
        </div>
        <CardTitle className="heading-sm text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="body-sm text-slate-300 mb-4 line-clamp-2">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-slate-600/20 text-slate-300 hover-scale border border-slate-500/30 text-xs"
              >
                <span className="mr-1">{getTechIcon(tech)}</span>
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Badge variant="secondary" className="bg-slate-600/20 text-slate-300 text-xs">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {project.url && (
            <Button size="sm" className="flex-1 btn-primary btn-hover" asChild>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Visit
              </a>
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500"
            asChild
          >
            <Link href={`/portfolio/${project.slug}`} aria-label={`View ${project.title} details`}>
              <Eye className="w-3 h-3 mr-1" />
              Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
