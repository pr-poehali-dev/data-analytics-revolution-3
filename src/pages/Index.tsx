import { useState } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Biography from "@/components/Biography"
import Career from "@/components/Career"
import Skills from "@/components/Skills"
import Hobbies from "@/components/Hobbies"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Index() {
  const [language, setLanguage] = useState<"en" | "de" | "ru">("ru")

  return (
    <div className="min-h-screen bg-background">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Biography language={language} />
      <Career language={language} />
      <Skills language={language} />
      <Hobbies language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}