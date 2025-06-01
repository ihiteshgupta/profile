"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./button" // Assuming there's a Button component in the UI directory
import { Moon, Sun } from "lucide-react" // Using lucide-react icons which are in the dependencies

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}