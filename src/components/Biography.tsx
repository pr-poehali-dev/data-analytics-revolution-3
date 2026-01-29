interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    paragraphs: [
      "I am Arslan Akimov, a passionate individual who believes in the power of visual storytelling and modern elegance. My journey combines ambition with a refined aesthetic sensibility, capturing the essence of contemporary luxury and minimalism.",
      "Through my lens and perspective, I explore the intersection of art, architecture, and urban sophistication. Each project reflects my commitment to excellence and attention to detail, showcasing the beauty found in simplicity and precision.",
      "My work is driven by a vision to merge classic elegance with contemporary innovation, creating experiences that resonate with those who appreciate refined taste and timeless quality.",
    ],
  },
  de: {
    heading: "Über mich",
    paragraphs: [
      "Ich bin Arslan Akimov, ein leidenschaftlicher Mensch, der an die Kraft visueller Geschichten und moderner Eleganz glaubt. Meine Reise verbindet Ehrgeiz mit raffinierter ästhetischer Sensibilität und fängt die Essenz zeitgenössischer Luxus und Minimalismus ein.",
      "Durch meine Linse und Perspektive erkunde ich die Schnittstelle von Kunst, Architektur und urbaner Raffinesse. Jedes Projekt spiegelt mein Engagement für Exzellenz und Liebe zum Detail wider und zeigt die Schönheit, die in Einfachheit und Präzision liegt.",
      "Meine Arbeit wird von der Vision angetrieben, klassische Eleganz mit zeitgenössischer Innovation zu verbinden und Erlebnisse zu schaffen, die bei denen Anklang finden, die raffinierten Geschmack und zeitlose Qualität schätzen.",
    ],
  },
  ru: {
    heading: "Обо мне",
    paragraphs: [
      "Я Акимов Арслан, увлечённый человек, который верит в силу визуального повествования и современной элегантности. Мой путь сочетает амбиции с утончённым эстетическим восприятием, передавая суть современной роскоши и минимализма.",
      "Через мою призму и перспективу я исследую пересечение искусства, архитектуры и городской утончённости. Каждый проект отражает мою приверженность к совершенству и вниманию к деталям, демонстрируя красоту, найденную в простоте и точности.",
      "Моя работа движима видением объединить классическую элегантность с современными инновациями, создавая впечатления, которые находят отклик у тех, кто ценит утончённый вкус и вневременное качество.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-warm-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
