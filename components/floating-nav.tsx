"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Brain, Code, Rocket, BookOpen, Github, Target } from "lucide-react"
import { ThemeToggle } from "./ui/theme-toggle"

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("profile")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { id: "profile", icon: <Brain className="w-5 h-5" />, label: "Profile" },
    { id: "skills", icon: <Code className="w-5 h-5" />, label: "Skills" },
    { id: "experience", icon: <Rocket className="w-5 h-5" />, label: "Experience" },
    { id: "education", icon: <BookOpen className="w-5 h-5" />, label: "Education" },
    { id: "opensource", icon: <Github className="w-5 h-5" />, label: "Open Source" },
    { id: "looking", icon: <Target className="w-5 h-5" />, label: "Looking For" },
  ]

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: visible ? 0 : 100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-slate-800/80 backdrop-blur-lg rounded-full px-4 py-2 border border-blue-600/30 shadow-lg shadow-blue-600/20">
        <div className="flex space-x-1 sm:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === item.id ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-700/70"
              }`}
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
              <span className="sr-only">{item.label}</span>
            </button>
          ))}
          <div className="border-l border-blue-600/30 mx-1"></div>
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  )
}
