"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  Globe,
  ArrowUpRight,
} from "lucide-react"
import { motion } from "framer-motion"

export default function EditorialProfile() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = {
    ai: ["LLMs", "LangChain", "OpenAI", "Prompt Engineering", "AWS SageMaker", "Bedrock", "Deep Learning"],
    languages: ["JavaScript", "TypeScript", "Python", "Node.js"],
    frontend: ["React.js", "Next.js", "Angular", "TailwindCSS"],
    backend: ["Loopback 4", "Flask", "REST", "GraphQL", "OAuth"],
    cloud: ["AWS Lambda", "S3", "EC2", "DynamoDB", "SageMaker", "Docker", "Kubernetes", "Terraform"],
    databases: ["PostgreSQL", "DynamoDB", "MongoDB"],
    tools: ["Git", "Jira", "Camunda", "Swagger", "Kafka", "SQS", "BullMQ"],
  }

  const experience = [
    {
      title: "Founder & CEO",
      company: "Margadeshaka",
      period: "2024 – Present",
      type: "Full-time",
      achievements: [
        "Building Sakha - AI-powered Vedic astrology companion with GPT-4 and Swiss Ephemeris",
        "Developing Dronacharya (LearnFlow AI) - Multi-agent AI tutoring platform replacing passive video learning",
        "Architecting React Native mobile apps with Azure OpenAI, LangGraph, and real-time streaming",
        "Creating AI products that blend ancient wisdom with modern technology for guidance and education",
      ],
    },
    {
      title: "Technical Lead",
      company: "SourceFuse Technologies",
      period: "Aug 2023 – Dec 2024",
      type: "Remote | Full-time",
      achievements: [
        "Designed and developed end-to-end AI-integrated systems using TypeScript, Loopback, React",
        "Integrated LLM agents and prompt-driven workflows for code review, automation, and support",
        "Mentored developers on best practices in full-stack development and LangChain integrations",
        "Led architectural design and built scalable, cloud-native microservices on AWS",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "SourceFuse Technologies",
      period: "Jul 2021 – Aug 2023",
      type: "Remote",
      achievements: [
        "Developed React/Angular apps integrated with Loopback APIs for health and crypto clients",
        "Contributed to ML pipelines on AWS for intelligent automation in telecom support tools",
        "Led multi-member cross-functional teams to deliver scalable LLM agents for operations",
      ],
    },
    {
      title: "Software Engineer",
      company: "SourceFuse Technologies",
      period: "Aug 2020 – Jul 2021",
      type: "Remote",
      achievements: [
        "Architected multi-tenant SaaS apps using Loopback4, Postgres, and AWS services",
        "Built fitness and gamified lifestyle apps with microservices, Kafka, and cloud pipelines",
        "Developed serverless APIs and coordinated DevOps teams for release automation",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "SourceFuse Technologies",
      period: "Nov 2018 – Aug 2020",
      type: "Remote",
      achievements: [
        "Delivered dashboards, form engines, and data flows across healthcare, mobility, and edtech",
        "Worked in agile teams using React, Redux, AWS Lambda, Postgres, and campaign APIs",
      ],
    },
  ]

  const certifications = [
    "AWS Certified Developer – Associate",
    "Introduction to Generative AI (Google Cloud)",
    "Introduction to Large Language Models (Google Cloud)",
    "Problem Solving – HackerRank (Basic)",
  ]

  const openSource = [
    {
      title: "gmail-mcp-server",
      description: "MCP server for Gmail integration with Claude",
      type: "MCP Server",
      link: "https://github.com/anthropics/claude-code",
    },
    {
      title: "telegram-mcp",
      description: "MCP server for Telegram messaging automation",
      type: "MCP Server",
      link: "https://github.com/anthropics/claude-code",
    },
    {
      title: "apple-mcp",
      description: "MCP server for Apple apps (Messages, Notes, Reminders, Calendar)",
      type: "MCP Server",
      link: "https://github.com/anthropics/claude-code",
    },
    {
      title: "indian-stock-advisor-mcp",
      description: "MCP server for Zerodha Kite trading and analysis",
      type: "MCP Server",
      link: "https://github.com/anthropics/claude-code",
    },
    {
      title: "Loopback4 on AWS Lambda",
      description: "Medium guide on deploying serverless APIs",
      type: "Article",
      link: "https://medium.com/@hitesh.gupta/running-loopback-v4-on-aws-lambda-56064a97b5c3",
    },
    {
      title: "loopback4-dynamic-datasource",
      description: "NPM package for multi-tenant database switching",
      type: "Package",
      link: "https://www.npmjs.com/package/loopback4-dynamic-datasource",
    },
  ]

  const products = [
    {
      name: "Sakha",
      tagline: "Your AI Friend for Life's Journey",
      description: "Sakha combines ancient Vedic wisdom with modern AI to provide personalized guidance through life's moments. Get birth chart analysis, relationship compatibility, auspicious timing, and emotional support.",
      tech: ["React Native", "Azure OpenAI", "Swiss Ephemeris", "GPT-4"],
      features: ["AI emotional coaching with CBT", "Vedic birth chart & Dasha predictions", "Relationship compatibility (Ashtakoot)", "Muhurta - auspicious timing"],
      status: "Production Ready",
      link: "https://sakha.app",
      color: "sage",
    },
    {
      name: "Dronacharya",
      tagline: "Learn by Thinking, Not Watching",
      description: "Dronacharya replaces passive video learning with active AI tutoring. Six specialized AI agents guide you through interactive lessons, adapt to your understanding, and help you build real projects.",
      tech: ["Next.js", "LangGraph", "Multi-Agent AI", "TypeScript"],
      features: ["Multi-agent AI tutoring (no videos)", "Adaptive difficulty & teaching style", "Bronze/Silver/Gold certifications", "Gamification with XP & achievements"],
      status: "Coming Soon",
      link: "https://learnflow.ai",
      color: "amber",
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/hiteshgupta3012" },
    { name: "GitHub", icon: Github, url: "https://github.com/hiteshgupta3012" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/hiteshgupta3012" },
    { name: "Margadeshaka", icon: Globe, url: "https://margadeshaka.ai" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section - Editorial Split */}
      <section className="container mx-auto px-6 pt-20 pb-16 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="md:col-span-5 opacity-0 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D83]/20 to-[#D4A574]/20 rounded-2xl transform -rotate-3"></div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 img-editorial">
                <Image
                  src="/profile-photo.jpeg"
                  alt="Hitesh Gupta"
                  fill={true}
                  priority={true}
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="md:col-span-7 space-y-6">
            <motion.div
              className="opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: '200ms' }}
            >
              <p className="text-[#8B9D83] font-medium tracking-wider uppercase text-sm mb-2">Founder & CEO</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl serif font-bold text-stone-900 leading-[0.95] mb-4">
                Hitesh<br/>Gupta
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#D4A574] to-transparent mb-6"></div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-stone-700 leading-relaxed opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: '300ms' }}
            >
              Building AI for Guidance & Learning at <span className="serif italic font-semibold">Margadeshaka</span>
            </motion.p>

            <motion.p
              className="text-stone-600 leading-relaxed max-w-xl opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: '400ms' }}
            >
              After 6+ years leading AI systems at SourceFuse, I'm now creating products that blend ancient wisdom
              with modern technology. Specialized in Large Language Models, AI agents, and building experiences that
              truly help people.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 pt-4 opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: '500ms' }}
            >
              <div className="flex items-center gap-2 text-stone-600 text-sm">
                <MapPin className="w-4 h-4 text-[#8B9D83]" />
                Chandigarh, India
              </div>
              <div className="flex items-center gap-2 text-stone-600 text-sm">
                <Mail className="w-4 h-4 text-[#8B9D83]" />
                hiteshgupta3012@gmail.com
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 pt-2 opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: '600ms' }}
            >
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className="border-stone-300 hover:border-[#8B9D83] hover:bg-[#8B9D83]/5 transition-all"
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <social.icon className="w-4 h-4 mr-2" />
                  {social.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider container mx-auto max-w-7xl"></div>

      {/* Products Section - Feature Cards */}
      <section className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl serif font-bold text-stone-900 mb-4">What I'm Building</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Two AI products that guide your journey and accelerate your learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className={`product-card group relative bg-white rounded-2xl p-8 shadow-lg border border-stone-200 opacity-0 animate-slide-in-bottom`}
              style={{ animationDelay: `${700 + index * 150}ms` }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge className={product.status === "Production Ready" ? "badge-sage" : "badge-amber"}>
                  {product.status}
                </Badge>
                <ExternalLink
                  className="w-5 h-5 text-stone-400 group-hover:text-[#8B9D83] transition-colors cursor-pointer"
                  onClick={() => window.open(product.link, "_blank")}
                />
              </div>

              <h3 className="serif text-4xl font-bold text-stone-900 mb-2">{product.name}</h3>
              <p className={`text-lg mb-4 ${product.color === "sage" ? "text-[#6B7D63]" : "text-[#B8935F]"}`}>
                {product.tagline}
              </p>

              <p className="text-stone-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-stone-600">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      product.color === "sage" ? "bg-[#8B9D83]" : "bg-[#D4A574]"
                    }`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {product.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-[#8B9D83]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider container mx-auto max-w-7xl"></div>

      {/* Experience Section - Timeline */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-5xl md:text-6xl serif font-bold text-stone-900 mb-12 text-center">Experience</h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-stone-200 opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#8B9D83] rounded-full border-4 border-[#FAF8F5]"></div>

              <div className="pb-2">
                <h3 className="serif text-2xl font-bold text-stone-900">{exp.title}</h3>
                <p className="text-[#8B9D83] font-medium">{exp.company}</p>
                <p className="text-sm text-stone-500">{exp.period} · {exp.type}</p>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-stone-600 leading-relaxed flex gap-3">
                    <span className="text-[#D4A574] mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider container mx-auto max-w-7xl"></div>

      {/* Skills Section - Grouped Badges */}
      <section className="container mx-auto px-6 py-16 max-w-6xl">
        <h2 className="text-5xl md:text-6xl serif font-bold text-stone-900 mb-12 text-center">Technical Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="serif text-2xl font-semibold text-stone-900 mb-4 capitalize">
                {category === "ai" ? "AI & ML" : category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    className="badge-sage hover:bg-[#8B9D83]/20 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider container mx-auto max-w-7xl"></div>

      {/* Open Source Section */}
      <section className="container mx-auto px-6 py-16 max-w-6xl">
        <h2 className="text-5xl md:text-6xl serif font-bold text-stone-900 mb-12 text-center">
          Open Source & Publications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {openSource.map((project, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white rounded-xl border border-stone-200 hover:border-[#8B9D83] hover:shadow-md transition-all cursor-pointer opacity-0 animate-slide-in-bottom"
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => project.link && window.open(project.link, "_blank")}
            >
              <div className="flex items-start justify-between mb-3">
                <Badge className="badge-amber text-xs">{project.type}</Badge>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#8B9D83] transition-colors" />
              </div>
              <h3 className="serif text-xl font-semibold text-stone-900 mb-2 group-hover:text-[#8B9D83] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider container mx-auto max-w-7xl"></div>

      {/* Education & Certifications */}
      <section className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-4xl serif font-bold text-stone-900 mb-8">Education</h2>
            <div className="space-y-6">
              <div>
                <h3 className="serif text-xl font-semibold text-stone-900">Thapar University</h3>
                <p className="text-[#8B9D83] font-medium">Master of Computer Applications</p>
                <p className="text-sm text-stone-500">Computer Science · 2016–2018</p>
              </div>
              <div>
                <h3 className="serif text-xl font-semibold text-stone-900">Panjab University</h3>
                <p className="text-[#8B9D83] font-medium">Bachelor of Computer Applications</p>
                <p className="text-sm text-stone-500">2013–2016</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-4xl serif font-bold text-stone-900 mb-8">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-2 flex-shrink-0"></div>
                  <p className="text-stone-600">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <section className="bg-gradient-to-b from-[#FAF8F5] to-[#F3F1ED] py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-5xl serif font-bold text-stone-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Building AI products at Margadeshaka. Open to conversations about AI, startups, and technology.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                size="lg"
                className="bg-[#8B9D83] hover:bg-[#6B7D63] text-white transition-all"
                onClick={() => window.open(social.url, "_blank")}
              >
                <social.icon className="w-4 h-4 mr-2" />
                {social.name}
              </Button>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-stone-300">
            <p className="serif text-2xl italic text-[#8B9D83]">
              Building the future of AI-powered guidance and learning
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
