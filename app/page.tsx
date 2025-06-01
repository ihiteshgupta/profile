"use client"

import { useState, useEffect, Suspense } from "react"
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
  Star,
  Sparkles,
  Rocket,
  Code,
  Brain,
  Award,
  BookOpen,
  Target,
  Download,
  ExternalLink,
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
      title: "Technical Lead",
      company: "SourceFuse Technologies",
      period: "Aug 2023 – Present",
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
      title: "Loopback4 on AWS Lambda",
      description: "Medium guide on deploying serverless APIs",
      type: "Article",
    },
    {
      title: "loopback4-dynamic-datasource",
      description: "NPM package for multi-tenant database switching",
      type: "Package",
    },
  ]

  const lookingFor = [
    "Full-stack engineering (React, Node.js, Python)",
    "LLM Agents & Prompt Engineering (LangChain, OpenAI)",
    "AI Automation and Cognitive UX",
    "Cloud-native system design (AWS)",
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
          <Card className="mb-8 bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
                    <div className="w-full h-full relative group">
                      <img src="/profile-photo.jpeg" alt="Hitesh Gupta" className="w-full h-full object-cover object-top" />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white text-xs font-bold">AI</div>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    HITESH GUPTA
                  </h1>
                  <p className="text-xl lg:text-2xl text-purple-300 mb-6">
                    AI Engineer | Full-Stack Developer | LLM & Prompt Engineering Expert
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
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => window.location.href = 'mailto:hiteshgupta3012@gmail.com'}
                    >
                      <Mail className="mr-2 h-4 w-4" /> Contact Me
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-purple-500 text-purple-300 hover:bg-purple-900/30"
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
          <Card className="mb-8 bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Profile</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Computer Science post-graduate with 6+ years of experience building AI-driven applications and
                full-stack systems. Specialized in Large Language Models (LLMs), AI agents, LangChain, and prompt
                engineering to deliver transformative automation. Proven experience in React, Node.js, Python, and
                cloud-native deployments on AWS. Focused on creating scalable, thoughtful systems that blend
                intelligence with clean user experience.
              </p>
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
          <Card className="mb-8 bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
              </div>

              <Tabs defaultValue="ai" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-6">
                  <TabsTrigger value="ai" className="data-[state=active]:bg-purple-900/50">
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
                          className="bg-purple-900/50 text-purple-200 border-purple-500/30 text-sm py-1.5"
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
          <Card className="mb-8 bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-purple-500/30"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-purple-300 font-medium">{exp.company}</p>
                      <p className="text-slate-400 text-sm">
                        {exp.period} | {exp.type}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 flex items-start gap-2">
                          <Star className="w-3 h-3 text-purple-400 mt-1.5 flex-shrink-0" />
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
            <Card className="h-full bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-purple-400" />
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
                    <p className="text-purple-300">Master of Computer Applications (MCA)</p>
                    <p className="text-slate-400">Computer Science | 2016–2018</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-white">Panjab University</h3>
                    <p className="text-purple-300">Bachelor of Computer Applications</p>
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
            <Card className="h-full bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-purple-400" />
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
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
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
          <Card className="mb-8 bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Github className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Open Source & Publications</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {openSource.map((project, index) => (
                  <motion.div
                    key={index}
                    className="group p-4 rounded-lg bg-slate-700/50 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-slate-300">{project.description}</p>
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-300 hover:text-purple-200 hover:bg-purple-900/30"
                        onClick={() => {
                          if (project.type === "Article" && project.title === "Loopback4 on AWS Lambda") {
                            window.open("https://medium.com/@hitesh.gupta/running-loopback-v4-on-aws-lambda-56064a97b5c3", "_blank");
                          } else if (project.type === "Package" && project.title === "loopback4-dynamic-datasource") {
                            window.open("https://www.npmjs.com/package/loopback4-dynamic-datasource", "_blank");
                          }
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> View
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Looking For */}
        <motion.section
          id="looking"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="bg-slate-800/40 border-purple-500/30 backdrop-blur-md shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Looking For</h2>
              </div>

              <p className="text-slate-300 mb-4">Roles in:</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {lookingFor.map((role, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300">{role}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-purple-300 font-medium">
                Open to remote and hybrid opportunities with impact-driven teams.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </>
  )
}
