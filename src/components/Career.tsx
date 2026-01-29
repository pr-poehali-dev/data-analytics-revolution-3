interface CareerProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Career & Achievements",
  },
  de: {
    heading: "Karriere & Erfolge",
  },
  ru: {
    heading: "Карьера и достижения",
  },
}

const careerItems = {
  en: [
    {
      year: "2024",
      title: "Professional Development",
      description: "Focused on expanding expertise in modern design and visual storytelling",
    },
    {
      year: "2023",
      title: "Creative Projects",
      description: "Led multiple high-profile projects combining elegance and innovation",
    },
    {
      year: "2022",
      title: "Skill Enhancement",
      description: "Advanced training in contemporary aesthetics and luxury brand development",
    },
  ],
  de: [
    {
      year: "2024",
      title: "Professionelle Entwicklung",
      description: "Fokus auf Erweiterung der Expertise in modernem Design und visuellem Storytelling",
    },
    {
      year: "2023",
      title: "Kreative Projekte",
      description: "Leitung mehrerer hochkarätiger Projekte, die Eleganz und Innovation verbinden",
    },
    {
      year: "2022",
      title: "Kompetenzsteigerung",
      description: "Weiterbildung in zeitgenössischer Ästhetik und Luxusmarkenentwicklung",
    },
  ],
  ru: [
    {
      year: "2024",
      title: "Профессиональное развитие",
      description: "Сосредоточение на расширении экспертизы в современном дизайне и визуальном повествовании",
    },
    {
      year: "2023",
      title: "Творческие проекты",
      description: "Руководство несколькими высокопрофильными проектами, сочетающими элегантность и инновации",
    },
    {
      year: "2022",
      title: "Развитие навыков",
      description: "Углубленное обучение современной эстетике и развитию люксовых брендов",
    },
  ],
}

export default function Career({ language }: CareerProps) {
  const t = translations[language]
  const items = careerItems[language]

  return (
    <section id="career" className="py-32 md:py-48 bg-beige/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="pb-8 border-b border-navy/20 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-navy mb-1 font-semibold">{item.year}</h3>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
