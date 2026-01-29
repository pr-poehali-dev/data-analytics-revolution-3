interface SkillsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Skills & Expertise",
  },
  de: {
    heading: "Fähigkeiten & Expertise",
  },
  ru: {
    heading: "Навыки и экспертиза",
    principlesHeading: "Ключевые принципы работы",
    philosophyHeading: "Моя философия бизнеса",
    closingText: "Стремлюсь к долгосрочному развитию бизнеса, где каждый шаг ведёт к устойчивому росту и созданию ценности.",
  },
}

const principles = {
  ru: [
    {
      title: "Системность",
      description: "Применяю структурированные подходы к решению бизнес-задач",
    },
    {
      title: "Эффективность",
      description: "Оптимизирую процессы для достижения максимальной отдачи",
    },
    {
      title: "Командность",
      description: "Выстраиваю рабочие группы, где каждый участник вносит значимый вклад",
    },
    {
      title: "Прозрачность",
      description: "Обеспечиваю открытые коммуникации на всех уровнях взаимодействия",
    },
    {
      title: "Адаптивность",
      description: "Оперативно реагирую на изменения внешней среды и корректирую стратегии",
    },
  ],
}

const philosophy = {
  ru: [
    {
      title: "Стратегия",
      description: "Чёткое видение целей и путей их достижения",
    },
    {
      title: "Команда",
      description: "Синергия компетенций и слаженная работа профессионалов",
    },
    {
      title: "Гибкость",
      description: "Способность адаптироваться к новым условиям без потери фокуса",
    },
  ],
}

const skillCategories = {
  en: [
    {
      category: "Creative Vision",
      skills: ["Modern Aesthetics", "Visual Storytelling", "Brand Development", "Concept Design"],
    },
    {
      category: "Technical Proficiency",
      skills: ["Photography", "Digital Design", "Content Creation", "Project Management"],
    },
    {
      category: "Professional Excellence",
      skills: ["Attention to Detail", "Client Relations", "Strategic Planning", "Innovation"],
    },
  ],
  de: [
    {
      category: "Kreative Vision",
      skills: ["Moderne Ästhetik", "Visuelles Storytelling", "Markenentwicklung", "Konzeptdesign"],
    },
    {
      category: "Technische Kompetenz",
      skills: ["Fotografie", "Digitales Design", "Content-Erstellung", "Projektmanagement"],
    },
    {
      category: "Berufliche Exzellenz",
      skills: ["Liebe zum Detail", "Kundenbeziehungen", "Strategische Planung", "Innovation"],
    },
  ],
  ru: [
    {
      category: "Творческое видение",
      skills: ["Современная эстетика", "Визуальное повествование", "Развитие бренда", "Концептуальный дизайн"],
    },
    {
      category: "Техническое мастерство",
      skills: ["Фотография", "Цифровой дизайн", "Создание контента", "Управление проектами"],
    },
    {
      category: "Профессиональное совершенство",
      skills: ["Внимание к деталям", "Работа с клиентами", "Стратегическое планирование", "Инновации"],
    },
  ],
}

export default function Skills({ language }: SkillsProps) {
  const t = translations[language]
  const categories = skillCategories[language]

  return (
    <section id="skills" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        {language === 'ru' && (
          <>
            <div className="mb-16">
              <h3 className="text-navy text-2xl font-serif mb-8">{t.principlesHeading}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {principles.ru.map((principle, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-charcoal font-semibold text-lg">{principle.title}</h4>
                    <p className="text-charcoal/70 leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16 bg-beige/30 p-8 rounded-sm">
              <h3 className="text-navy text-2xl font-serif mb-8">{t.philosophyHeading}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {philosophy.ru.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-charcoal font-semibold text-lg">{item.title}</h4>
                    <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-charcoal/80 leading-relaxed mt-8 text-center italic">
                {t.closingText}
              </p>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-navy font-semibold mb-6">{cat.category}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, skillIdx) => (
                  <li
                    key={skillIdx}
                    className="text-charcoal/80 flex items-start gap-3"
                  >
                    <span className="text-navy mt-1.5 block w-1.5 h-1.5 rounded-full bg-navy flex-shrink-0"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
