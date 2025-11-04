"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Calendar } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

const eventCategories = [
  {
    category: "Parliamentary Visit",
    items: [
      {
        name: "1500 students visited Parliament",
        year: 2023,
        description:
          "Students visited the Parliament to understand government working and experience debates firsthand",
      },
    ],
  },
  {
    category: "Interactive Session with Civil Service Officers",
    items: [
      {
        name: "1700 students at Hans Raj College",
        year: 2023,
        description: "Students interacted with civil service officers for guidance and Q&A",
      },
    ],
  },
  {
    category: "Parliamentary Debate",
    items: [
      {
        name: "1300 students showcased debating skills",
        year: 2023,
        description:
          "Students showcased their debating skills under the guidance of Sharmishtha Mukherjee and Amrita Dhawan",
      },
    ],
  },
  {
    category: "Run For Education Excellence",
    items: [
      {
        name: "2000 students 6km marathon",
        year: 2023,
        description: "2000 students participated in a 6km marathon to support education and charity initiatives",
      },
    ],
  },
  {
    category: "Erudite: The Quiz",
    items: [
      {
        name: "2500 students in quiz competition",
        year: 2023,
        description:
          "2500 students participated in a quiz conducted by IPS officers and famous YouTubers, with IAS officer as Chief Guest",
      },
    ],
  },
  {
    category: "Indo-Korean Meet",
    items: [
      {
        name: "International delegates exchange",
        year: 2023,
        description: "Delegates from Korea discussed international topics and engaged in debates with Indian students",
      },
    ],
  },
  {
    category: "Mahapanchayat MUN",
    items: [
      {
        name: "450 school-level delegates",
        year: 2023,
        description:
          "450 school-level delegates debated on social issues and received guidance from the Executive Board",
      },
    ],
  },
  {
    category: "Career Counselling",
    items: [
      {
        name: "Expert guidance sessions",
        year: 2023,
        description:
          "Students received guidance about career options, academic streams, and decision-making from expert counselors",
      },
    ],
  },
  {
    category: "Samvidhan Se Vidhan Tak",
    items: [
      {
        name: "3-day constitutional seminar",
        year: 2023,
        description:
          "3-day seminar to raise awareness about Constitutional rights in collaboration with Jawahar Bhawan",
      },
    ],
  },
  {
    category: "Self Analysis Test",
    items: [
      {
        name: "300 civil service aspirants",
        year: 2019,
        description:
          "300 civil service aspirants participated in self-analysis and guidance session on 10th February, 2019",
      },
    ],
  },
  {
    category: "Interaction with Entrepreneur",
    items: [
      {
        name: "Motivation and guidance session",
        year: 2023,
        description:
          "Students were motivated and guided by Mr. Lokesh Chugh and Mr. Manish Sisodia on entrepreneurship",
      },
    ],
  },
]

export default function Events() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Our Events</h1>
              <p className="text-xl opacity-90">A comprehensive look at UYP initiatives and programs</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="text-muted-foreground text-lg">
                Showcasing <span className="font-bold text-primary">{eventCategories.length}</span> different event
                categories
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {eventCategories.map((cat, index) => (
              <ScrollReveal key={index} delay={index * 0.02}>
                <div className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === cat.category ? null : cat.category)}
                    className="w-full flex items-center justify-between p-6 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Calendar className="text-accent" size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{cat.category}</h3>
                    </div>
                    {expandedCategory === cat.category ? (
                      <ChevronUp className="text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-primary flex-shrink-0" />
                    )}
                  </button>

                  {expandedCategory === cat.category && (
                    <div className="bg-muted border-t border-border p-6 space-y-4 animate-slideDown">
                      {cat.items.map((item, i) => (
                        <div
                          key={i}
                          className="pb-4 border-b border-border/50 last:border-b-0 last:pb-0 hover:bg-white/50 p-3 rounded transition-colors"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-semibold text-foreground">{item.name}</h4>
                            <span className="text-sm text-accent font-semibold bg-accent/10 px-2 py-1 rounded">
                              {item.year}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
