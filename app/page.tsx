"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Star,
  Sparkles,
  Rocket,
  Code,
  Brain,
  Award,
  BookOpen,
  Building2,
  Layers,
  Download,
  ExternalLink,
  Globe,
} from "lucide-react"
import { ThreeBackground } from "@/components/three-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingNav } from "@/components/floating-nav"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function CosmicProfile() {
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
      color: "purple",
    },
    {
      name: "Dronacharya",
      tagline: "Learn by Thinking, Not Watching",
      description: "Dronacharya replaces passive video learning with active AI tutoring. Six specialized AI agents guide you through interactive lessons, adapt to your understanding, and help you build real projects.",
      tech: ["Next.js", "LangGraph", "Multi-Agent AI", "TypeScript"],
      features: ["Multi-agent AI tutoring (no videos)", "Adaptive difficulty & teaching style", "Bronze/Silver/Gold certifications", "Gamification with XP & achievements"],
      status: "Coming Soon",
      link: "https://learnflow.ai",
      color: "cyan",
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
    <>
      <ScrollProgress />
      <FloatingNav />

      {/* Three.js Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-900" />}>
        <ThreeBackground />
      </Suspense>

      <div className="relative z-20 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Card className="mb-8 bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-blue-600/50 shadow-lg shadow-blue-600/20">
                    <div className="w-full h-full relative group">
                      <Image 
                        src="/profile-photo.jpeg" 
                        alt="Hitesh Gupta" 
                        fill={true}
                        priority={true}
                        className="object-cover object-top" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white text-xs font-bold">AI</div>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
                    HITESH GUPTA
                  </h1>
                  <p className="text-xl lg:text-2xl text-blue-300 mb-6">
                    Founder & CEO, Margadeshaka | Building AI for Guidance & Learning
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-slate-300">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Chandigarh, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>hiteshgupta3012@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+91 85590 93899</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.location.href = 'mailto:hiteshgupta3012@gmail.com'}
                    >
                      <Mail className="mr-2 h-4 w-4" /> Contact Me
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-blue-600 text-blue-300 hover:bg-blue-900/30"
                      onClick={() => window.open('/Hitesh_Gupta_Resume_AI_Fullstack.pdf', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Profile Section */}
        <motion.section
          id="profile"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="mb-8 bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Profile</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Founder building AI products that guide and educate. After 6+ years leading AI systems at SourceFuse,
                I&apos;m now creating <strong className="text-blue-300">Sakha</strong> (AI astrology companion) and{" "}
                <strong className="text-blue-300">Dronacharya</strong> (AI learning platform) at Margadeshaka.
                Specialized in Large Language Models, AI agents, LangChain, and building products that blend
                ancient wisdom with modern technology.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* What I'm Building */}
        <motion.section
          id="products"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="mb-8 bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">What I&apos;m Building</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    className={`group p-6 rounded-xl bg-gradient-to-br ${
                      product.color === "purple"
                        ? "from-purple-900/40 to-slate-800/40 border-purple-600/30"
                        : "from-cyan-900/40 to-slate-800/40 border-cyan-600/30"
                    } border backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-2xl font-bold ${
                        product.color === "purple" ? "text-purple-300" : "text-cyan-300"
                      }`}>
                        {product.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`${
                          product.status === "Production Ready"
                            ? "border-green-500/50 text-green-300"
                            : "border-yellow-500/50 text-yellow-300"
                        }`}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <p className={`text-lg mb-3 ${
                      product.color === "purple" ? "text-purple-200" : "text-cyan-200"
                    }`}>
                      {product.tagline}
                    </p>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Key Features</p>
                      <ul className="space-y-1">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <Sparkles className={`w-3 h-3 mt-1 flex-shrink-0 ${
                              product.color === "purple" ? "text-purple-400" : "text-cyan-400"
                            }`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-xs ${
                            product.color === "purple"
                              ? "bg-purple-900/50 text-purple-200 border-purple-600/30"
                              : "bg-cyan-900/50 text-cyan-200 border-cyan-600/30"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className={`${
                        product.color === "purple"
                          ? "border-purple-600 text-purple-300 hover:bg-purple-900/30"
                          : "border-cyan-600 text-cyan-300 hover:bg-cyan-900/30"
                      }`}
                      onClick={() => window.open(product.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Learn More
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="mb-8 bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
              </div>

              <Tabs defaultValue="ai" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-6">
                  <TabsTrigger value="ai" className="data-[state=active]:bg-blue-900/50">
                    AI & ML
                  </TabsTrigger>
                  <TabsTrigger value="languages" className="data-[state=active]:bg-blue-900/50">
                    Languages
                  </TabsTrigger>
                  <TabsTrigger value="frontend" className="data-[state=active]:bg-green-900/50">
                    Frontend
                  </TabsTrigger>
                  <TabsTrigger value="backend" className="data-[state=active]:bg-orange-900/50">
                    Backend
                  </TabsTrigger>
                  <TabsTrigger value="cloud" className="data-[state=active]:bg-cyan-900/50">
                    Cloud
                  </TabsTrigger>
                  <TabsTrigger value="databases" className="data-[state=active]:bg-pink-900/50">
                    Databases
                  </TabsTrigger>
                  <TabsTrigger value="tools" className="data-[state=active]:bg-yellow-900/50">
                    Tools
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="ai" className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {skills.ai.map((skill) => (
                      <motion.div key={skill} variants={fadeIn}>
                        <Badge
                          variant="secondary"
                          className="bg-blue-900/50 text-blue-200 border-blue-600/30 text-sm py-1.5"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="languages" className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {skills.languages.map((skill) => (
                      <motion.div key={skill} variants={fadeIn}>
                        <Badge
                          variant="secondary"
                          className="bg-blue-900/50 text-blue-200 border-blue-500/30 text-sm py-1.5"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="frontend" className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {skills.frontend.map((skill) => (
                      <motion.div key={skill} variants={fadeIn}>
                        <Badge
                          variant="secondary"
                          className="bg-green-900/50 text-green-200 border-green-500/30 text-sm py-1.5"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="backend" className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {skills.backend.map((skill) => (
                      <motion.div key={skill} variants={fadeIn}>
                        <Badge
                          variant="secondary"
                          className="bg-orange-900/50 text-orange-200 border-orange-500/30 text-sm py-1.5"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="cloud" className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {skills.cloud.map((skill) => (
                      <motion.div key={skill} variants={fadeIn}>
                        <Badge
                          variant="secondary"
                          className="bg-cyan-900/50 text-cyan-200 border-cyan-500/30 text-sm py-1.5"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="databases" className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {skills.databases.map((skill) => (
                      <motion.div key={skill} variants={fadeIn}>
                        <Badge
                          variant="secondary"
                          className="bg-pink-900/50 text-pink-200 border-pink-500/30 text-sm py-1.5"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="tools" className="mt-0">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-2"
                  >
                    {skills.tools.map((skill) => (
                      <motion.div key={skill} variants={fadeIn}>
                        <Badge
                          variant="secondary"
                          className="bg-yellow-900/50 text-yellow-200 border-yellow-500/30 text-sm py-1.5"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="mb-8 bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-600/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-blue-300 font-medium">{exp.company}</p>
                      <p className="text-slate-400 text-sm">
                        {exp.period} | {exp.type}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 flex items-start gap-2">
                          <Star className="w-3 h-3 text-blue-400 mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.section
            id="education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="h-full bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Education</h2>
                </div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-lg font-semibold text-white">Thapar University</h3>
                    <p className="text-blue-300">Master of Computer Applications (MCA)</p>
                    <p className="text-slate-400">Computer Science | 2016–2018</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-white">Panjab University</h3>
                    <p className="text-blue-300">Bachelor of Computer Applications</p>
                    <p className="text-slate-400">2013–2016</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Card className="h-full bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Certifications</h2>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Open Source & Publications */}
        <motion.section
          id="opensource"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="mb-8 bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Github className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Open Source & Publications</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {openSource.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group p-4 rounded-lg bg-slate-700/50 border border-blue-600/20 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="border-blue-600/50 text-blue-300">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-slate-300">{project.description}</p>
                    {project.link && (
                      <div className="mt-4 flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-300 hover:text-blue-200 hover:bg-blue-900/30"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" /> View
                        </Button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Connect */}
        <motion.section
          id="connect"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="bg-slate-800/40 border-blue-600/30 backdrop-blur-md shadow-xl hover:shadow-blue-600/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Connect</h2>
              </div>

              <p className="text-slate-300 mb-6">
                Building AI products at Margadeshaka. Open to conversations about AI, startups,
                and technology. Let&apos;s connect!
              </p>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="border-blue-600/50 text-blue-300 hover:bg-blue-900/30"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <social.icon className="w-4 h-4 mr-2" />
                      {social.name}
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-blue-600/20">
                <p className="text-blue-300 font-medium">
                  Building the future of AI-powered guidance and learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </>
  )
}
