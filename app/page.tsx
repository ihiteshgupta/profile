"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, ArrowUpRight, Mail, Globe } from "lucide-react"

export default function Profile() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const ventures = [
    {
      name: "Sakha",
      tagline: "Your AI Friend for Life's Journey",
      description: "Ancient Vedic wisdom meets modern AI. Birth charts, relationship compatibility, auspicious timing, and emotional support—all in one app.",
      features: ["AI Emotional Coaching", "Vedic Birth Charts", "Relationship Compatibility", "Muhurta Timing"],
      tech: ["React Native", "Azure OpenAI", "GPT-4", "Swiss Ephemeris"],
      status: "live",
      link: "https://sakha.app",
      color: "amber",
    },
    {
      name: "Dronacharya",
      tagline: "Learn by Thinking, Not Watching",
      description: "Multi-agent AI tutoring that replaces passive video learning. Six specialized AI agents adapt to your understanding and help you build real projects.",
      features: ["Multi-Agent Tutoring", "Adaptive Learning", "Project-Based", "Gamified Progress"],
      tech: ["Next.js", "LangGraph", "Multi-Agent AI", "TypeScript"],
      status: "soon",
      link: "https://learnflow.ai",
      color: "blue",
    },
  ]

  const experience = [
    { company: "Margadeshaka", role: "Founder & CEO", period: "2024 —" },
    { company: "SourceFuse", role: "Technical Lead", period: "2018 — 2024" },
  ]

  const skills = {
    highlight: ["LLMs", "Claude", "LangChain", "React", "TypeScript", "Node.js"],
    regular: ["Python", "Next.js", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "FastAPI", "Swift", "Go"],
  }

  const openSource = [
    { name: "gmail-mcp-server", description: "Gmail integration for Claude", link: "https://github.com/ihiteshgupta/gmail-mcp-server" },
    { name: "telegram-mcp", description: "Telegram messaging automation", link: "https://github.com/ihiteshgupta/telegram-mcp" },
    { name: "apple-mcp", description: "Apple apps integration", link: "https://github.com/ihiteshgupta/apple-mcp" },
    { name: "indian-stock-advisor-mcp", description: "Zerodha trading & analysis", link: "https://github.com/ihiteshgupta/indian-stock-advisor-mcp" },
    { name: "whatsapp-mcp", description: "WhatsApp messaging", link: "https://github.com/ihiteshgupta/whatsapp-mcp" },
    { name: "homebridge-mcp", description: "Smart home control", link: "https://github.com/ihiteshgupta/homebridge-mcp" },
  ]

  const socials = [
    { name: "GitHub", icon: Github, url: "https://github.com/ihiteshgupta" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/hiteshgupta3012" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/hiteshgupta3012" },
    { name: "Margadeshaka", icon: Globe, url: "https://margadeshaka.ai" },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Gradient orb */}
        <div className="gradient-orb -top-40 -right-40 animate-float animate-pulse-glow" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Social icons - top right */}
          <div className="absolute top-8 right-0 flex items-center gap-4 opacity-0 animate-fade-in delay-500">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Main content */}
          <div className="pt-32 pb-20">
            <p className="text-[#555] text-sm font-medium tracking-widest uppercase mb-6 opacity-0 animate-fade-in-up">
              Founder & CEO
            </p>

            <h1 className="text-[clamp(3rem,12vw,9rem)] font-extrabold leading-[0.9] tracking-tight mb-8 opacity-0 animate-fade-in-up delay-100">
              <span className="text-gradient-hover cursor-default">HITESH</span>
              <br />
              <span className="text-gradient-hover cursor-default">GUPTA</span>
            </h1>

            <p className="text-[#888] text-xl md:text-2xl max-w-xl leading-relaxed mb-12 opacity-0 animate-fade-in-up delay-200">
              Building AI for Guidance & Learning at{" "}
              <a href="https://margadeshaka.ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3B82F6] transition-colors">
                Margadeshaka
              </a>
            </p>

            <div className="flex items-center gap-6 text-[#555] text-sm opacity-0 animate-fade-in-up delay-300">
              <span>Chandigarh, India</span>
              <span className="w-1 h-1 bg-[#333] rounded-full" />
              <span>6+ years in AI & Full-Stack</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
            <div className="scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="section-label">Building</p>

          <div className="grid md:grid-cols-2 gap-6">
            {ventures.map((venture, index) => (
              <a
                key={venture.name}
                href={venture.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-dark ${venture.color === "amber" ? "card-glow-amber" : "card-glow-blue"} rounded-2xl p-8 block group opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={venture.status === "live" ? "status-live" : "status-soon"}>
                    {venture.status === "live" ? "Live" : "Coming Soon"}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#333] group-hover:text-[#888] transition-colors" />
                </div>

                <h3 className="text-3xl font-bold mb-2">{venture.name}</h3>
                <p className={`text-sm mb-4 ${venture.color === "amber" ? "text-[#F59E0B]" : "text-[#3B82F6]"}`}>
                  {venture.tagline}
                </p>

                <p className="text-[#888] text-sm leading-relaxed mb-6">
                  {venture.description}
                </p>

                <div className="space-y-1 mb-6">
                  {venture.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-[#666]">
                      <span className={`w-1 h-1 rounded-full ${venture.color === "amber" ? "bg-[#F59E0B]" : "bg-[#3B82F6]"}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {venture.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-[#1A1A1A] text-[#666] rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 border-t border-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="section-label">Experience</p>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <p className="text-2xl font-semibold">{exp.company}</p>
                    <p className="text-[#888]">{exp.role}</p>
                    <p className="text-[#555] text-sm">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label">Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.highlight.map((skill) => (
                  <span key={skill} className="pill pill-highlight">{skill}</span>
                ))}
                {skills.regular.map((skill) => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-32 border-t border-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="section-label">Open Source</p>
          <p className="text-[#888] mb-8 max-w-xl">
            MCP servers that extend Claude Code with real-world integrations
          </p>

          <div className="horizontal-scroll">
            {openSource.map((project, index) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark rounded-xl p-6 min-w-[280px] flex-shrink-0 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <Github className="w-5 h-5 text-[#555]" />
                  <ArrowUpRight className="w-4 h-4 text-[#333] group-hover:text-[#888] transition-colors" />
                </div>
                <h4 className="font-semibold mb-1 group-hover:text-[#3B82F6] transition-colors">{project.name}</h4>
                <p className="text-[#666] text-sm">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <section className="py-32 border-t border-[#1A1A1A]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in-up">
            Let's build something
          </h2>

          <a
            href="mailto:hiteshgupta3012@gmail.com"
            className="inline-block text-xl md:text-2xl mono text-[#888] hover:text-white transition-colors mb-12 opacity-0 animate-fade-in-up delay-100"
          >
            hiteshgupta3012@gmail.com
          </a>

          <div className="flex justify-center gap-6 opacity-0 animate-fade-in-up delay-200">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#555] hover:text-white transition-colors text-sm"
              >
                <social.icon className="w-4 h-4" />
                {social.name}
              </a>
            ))}
          </div>

          <div className="mt-20 pt-8 border-t border-[#1A1A1A]">
            <p className="text-[#333] text-sm">© 2025 Hitesh Gupta</p>
          </div>
        </div>
      </section>
    </div>
  )
}
