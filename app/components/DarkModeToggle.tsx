"use client"

import { useState, useEffect } from "react"

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? "☀️" : "🌙"}
    </button>
  )
}

