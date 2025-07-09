import Link from "next/link"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {/* Name and Description */}
          <StaggerItem>
            <h3 className="text-xl font-bold text-white mb-4">Sarvesh T S</h3>
            <p className="text-slate-400 mb-4">
              Cybersecurity enthusiast and freelance web developer building secure digital solutions.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-sky-400 social-icon" asChild>
                <a
                  href="https://www.linkedin.com/in/sarveshts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-sky-400 social-icon" asChild>
                <a
                  href="https://github.com/Sarvesh-TS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-sky-400 social-icon" asChild>
                <a href="mailto:sarveshts2k4@gmail.com" aria-label="Send Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform"
              >
                About
              </Link>
              <Link
                href="/cybersecurity"
                className="block text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform"
              >
                Contact
              </Link>
            </div>
          </StaggerItem>

          {/* Contact Info & Resume */}
          <StaggerItem>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:sarveshts2k4@gmail.com"
                className="block text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1 transform"
              >
                sarveshts2k4@gmail.com
              </a>
              <p className="text-slate-400">Open to remote work</p>
              <Button
                variant="outline"
                size="sm"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white mt-4 btn-hover"
                aria-label="Download PDF Resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF Resume
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Copyright */}
        <ScrollAnimation className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2025 Sarvesh T S. All rights reserved.</p>
        </ScrollAnimation>
      </div>
    </footer>
  )
}
