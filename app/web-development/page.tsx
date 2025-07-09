"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, Filter } from "lucide-react"
import Link from "next/link"
import { EnhancedScrollAnimation, StaggeredContainer, StaggeredItem } from "@/components/enhanced-scroll-animation"
import { projects, techFilters, categoryFilters, type Project } from "@/lib/projects-data"

export default function WebDevelopmentPage() {
  const [selectedTechFilter, setSelectedTechFilter] = useState("All")
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const matchesTech =
      selectedTechFilter === "All" ||
      project.tech.some((tech) => tech.toLowerCase().includes(selectedTechFilter.toLowerCase()))
    const matchesCategory = selectedCategoryFilter === "All" || project.category === selectedCategoryFilter
    return matchesTech && matchesCategory
  })

  const liveProjects = filteredProjects.filter((project) => project.type === "client")
  const practiceProjects = filteredProjects.filter((project) => project.type === "personal")

  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <EnhancedScrollAnimation animation="slideUp" className="text-center mb-12">
            <h1 className="heading-lg text-white mb-4">Web Development Portfolio</h1>
            <p className="body-lg text-slate-300 max-w-3xl mx-auto">
              A showcase of live client projects and practice applications demonstrating full-stack development skills
              and modern web technologies with focus on performance and user experience.
            </p>
          </EnhancedScrollAnimation>

          {/* Filter Section */}
          <EnhancedScrollAnimation animation="slideUp" delay={0.1} className="mb-12">
            <Card className="bg-slate-800 border-slate-700 gradient-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-cyan-400" />
                  <h3 className="heading-sm text-white">Filter Projects</h3>
                </div>

                {/* Technology Filters */}
                <div className="mb-4">
                  <p className="body-sm text-slate-400 mb-2">By Technology:</p>
                  <div className="flex flex-wrap gap-2">
                    {techFilters.map((tech) => (
                      <Button
                        key={tech}
                        variant={selectedTechFilter === tech ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTechFilter(tech)}
                        className={`${
                          selectedTechFilter === tech
                            ? "btn-primary"
                            : "border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500"
                        } btn-hover`}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Category Filters */}
                <div>
                  <p className="body-sm text-slate-400 mb-2">By Category:</p>
                  <div className="flex flex-wrap gap-2">
                    {categoryFilters.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategoryFilter === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategoryFilter(category)}
                        className={`${
                          selectedCategoryFilter === category
                            ? "btn-primary"
                            : "border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500"
                        } btn-hover`}
                      >
                        {category}
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
              {selectedTechFilter !== "All" && ` with ${selectedTechFilter}`}
              {selectedCategoryFilter !== "All" && ` in ${selectedCategoryFilter}`}
            </p>
          </EnhancedScrollAnimation>

          {/* Live Client Projects */}
          {liveProjects.length > 0 && (
            <section className="mb-16">
              <EnhancedScrollAnimation animation="slideUp" delay={0.2}>
                <h2 className="heading-md text-white mb-4">Live Client Projects</h2>
                <p className="body-md text-slate-400 mb-8">
                  Professional websites delivered to real clients with ongoing maintenance and support.
                </p>
              </EnhancedScrollAnimation>
              <StaggeredContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
                {liveProjects.map((project) => (
                  <StaggeredItem key={project.id} animation="flipIn">
                    <ProjectCard project={project} />
                  </StaggeredItem>
                ))}
              </StaggeredContainer>
            </section>
          )}

          {/* Practice Projects */}
          {practiceProjects.length > 0 && (
            <section className="mb-16">
              <EnhancedScrollAnimation animation="slideUp" delay={0.4}>
                <h2 className="heading-md text-white mb-4">Practice & Concept Projects</h2>
                <p className="body-md text-slate-400 mb-8">
                  Personal projects and experiments exploring new technologies and development patterns.
                </p>
              </EnhancedScrollAnimation>
              <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                {practiceProjects.map((project) => (
                  <StaggeredItem key={project.id} animation="zoomIn">
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
                    No projects match your current filter selection. Try adjusting your filters or view all projects.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedTechFilter("All")
                      setSelectedCategoryFilter("All")
                    }}
                    className="btn-primary btn-hover"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </EnhancedScrollAnimation>
          )}

          {/* Technical Skills */}
          <section>
            <EnhancedScrollAnimation animation="slideUp" delay={0.6}>
              <h2 className="heading-md text-white text-center mb-4">Development Stack</h2>
              <p className="body-md text-slate-400 text-center mb-8 max-w-2xl mx-auto">
                Modern technologies and tools used for building scalable web applications
              </p>
            </EnhancedScrollAnimation>
            <StaggeredContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
              <StaggeredItem animation="slideUp">
                <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-white mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Material-UI"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-cyan-600/20 text-cyan-300 hover-scale border border-cyan-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggeredItem>
              <StaggeredItem animation="flipIn">
                <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-white mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Python", "Flask", "API Development", "Database Design"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-teal-600/20 text-teal-300 hover-scale border border-teal-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggeredItem>
              <StaggeredItem animation="slideUp">
                <Card className="bg-slate-800 border-slate-700 card-hover hover-lift">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-white mb-4">Tools & Deployment</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "Vercel", "Visual Studio Code", "Responsive Design"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-600/20 text-slate-300 hover-scale border border-slate-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-300 card-hover hover-lift h-full gradient-card">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant="secondary"
            className={`${
              project.status === "Live"
                ? "bg-emerald-600/20 text-emerald-300 border border-emerald-500/30"
                : "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30"
            }`}
          >
            {project.status}
          </Badge>
          <Badge variant="outline" className="border-slate-600 text-slate-400">
            {project.category}
          </Badge>
        </div>
        <CardTitle className="heading-sm text-white">{project.title}</CardTitle>
        {project.client && <p className="text-sm text-slate-400">Client: {project.client}</p>}
      </CardHeader>
      <CardContent>
        <p className="body-sm text-slate-300 mb-2">{project.description}</p>
        <p className="text-xs text-slate-400 mb-4">{project.details}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-slate-600/20 text-slate-300 hover-scale border border-slate-500/30 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="secondary" className="bg-slate-600/20 text-slate-300 text-xs">
              +{project.tech.length - 4} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          {project.url && (
            <Button className="flex-1 btn-primary btn-hover" asChild>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </a>
            </Button>
          )}
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500"
            asChild
          >
            <Link href={`/web-development/${project.id}`} aria-label={`View ${project.title} details`}>
              <Eye className="w-4 h-4 mr-2" />
              Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
