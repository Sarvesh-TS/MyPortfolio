import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, MapPin, Send, Clock } from "lucide-react"
import { EnhancedScrollAnimation } from "@/components/enhanced-scroll-animation"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for cybersecurity consulting, web development projects, or collaboration opportunities. Available for freelance work and technical mentorship.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen gradient-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <EnhancedScrollAnimation animation="slideUp" className="text-center mb-12">
            <h1 className="heading-lg text-white mb-4">Let's Collaborate</h1>
            <p className="body-lg text-slate-300 max-w-2xl mx-auto">
              Available for cybersecurity consulting, website development, and project mentorship. Let's discuss how we
              can work together to achieve your goals.
            </p>
          </EnhancedScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <EnhancedScrollAnimation animation="slideRight" delay={0.2}>
              <Card className="bg-slate-800 border-slate-700 card-hover hover-lift gradient-card">
                <CardHeader>
                  <CardTitle className="heading-sm text-white">Send a Message</CardTitle>
                  <p className="body-sm text-slate-400">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                        aria-describedby="name-help"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                        aria-describedby="email-help"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-300 font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, requirements, or inquiry..."
                      rows={6}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-cyan-500"
                      required
                    />
                  </div>
                  <Button className="w-full btn-primary btn-hover" type="submit" aria-label="Send message">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </EnhancedScrollAnimation>

            {/* Contact Information */}
            <div className="space-y-6">
              <EnhancedScrollAnimation animation="slideLeft" delay={0.3}>
                <Card className="bg-slate-800 border-slate-700 card-hover hover-lift gradient-card">
                  <CardHeader>
                    <CardTitle className="heading-sm text-white">Get in Touch</CardTitle>
                    <p className="body-sm text-slate-400">
                      Prefer direct contact? Reach out through any of these channels.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-500" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <a
                          href="mailto:sarveshts2k4@gmail.com"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          aria-label="Send email to Sarvesh"
                        >
                          sarveshts2k4@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-teal-500" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-slate-400">India • Open to remote work</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">Response Time</p>
                        <p className="text-slate-400">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </EnhancedScrollAnimation>

              <EnhancedScrollAnimation animation="slideLeft" delay={0.4}>
                <Card className="bg-slate-800 border-slate-700 card-hover hover-lift gradient-card">
                  <CardHeader>
                    <CardTitle className="heading-sm text-white">Social Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 social-icon"
                      asChild
                    >
                      <a
                        href="https://github.com/Sarvesh-TS"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub profile"
                      >
                        <Github className="w-5 h-5 mr-3" />
                        GitHub Profile
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-700 social-icon"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/sarveshts/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn profile"
                      >
                        <Linkedin className="w-5 h-5 mr-3" />
                        LinkedIn Profile
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </EnhancedScrollAnimation>

              <EnhancedScrollAnimation animation="slideLeft" delay={0.5}>
                <Card className="bg-slate-800 border-slate-700 card-hover hover-lift gradient-card">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-white mb-3">Services Available</h3>
                    <ul className="space-y-2 body-sm text-slate-300">
                      <li>• Cybersecurity consulting and assessment</li>
                      <li>• Web development and design</li>
                      <li>• Security audits and penetration testing</li>
                      <li>• Technical mentorship and training</li>
                      <li>• Project collaboration and consulting</li>
                    </ul>
                  </CardContent>
                </Card>
              </EnhancedScrollAnimation>
            </div>
          </div>

          {/* Call to Action */}
          <EnhancedScrollAnimation animation="zoomIn" delay={0.6} className="text-center mt-12">
            <Card className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20 border-cyan-500/30 card-hover gradient-card">
              <CardContent className="p-8">
                <h3 className="heading-sm text-white mb-4">Ready to Start a Project?</h3>
                <p className="body-md text-slate-300 mb-6">
                  Whether you need cybersecurity expertise or a professional website, I'm here to help bring your vision
                  to life with secure, modern solutions.
                </p>
                <Button size="lg" className="btn-primary btn-hover" asChild>
                  <a href="mailto:sarveshts2k4@gmail.com" aria-label="Start a conversation">
                    <Mail className="w-4 h-4 mr-2" />
                    Start a Conversation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </EnhancedScrollAnimation>
        </div>
      </div>
    </div>
  )
}
