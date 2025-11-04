"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

const articles = [
  {
    id: 1,
    title: "Understanding Parliamentary Democracy in India",
    excerpt:
      "A deep dive into the structure and functioning of the Indian Parliament and its significance in democracy.",
    category: "Education",
    image: "/parliament-building.png",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Youth Leadership in Nation Building",
    excerpt: "How young leaders can contribute meaningfully to social and political change in their communities.",
    category: "Leadership",
    image: "/youth-leadership.jpg",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "The Power of Constructive Dialogue",
    excerpt: "Exploring the impact of effective communication and debate in resolving national issues.",
    category: "Dialogue",
    image: "/discussion-debate.jpg",
    date: "2024-03-05",
  },
  {
    id: 4,
    title: "Civic Responsibility and Democratic Participation",
    excerpt: "Why youth engagement in civic processes is crucial for strengthening democratic institutions.",
    category: "Civic",
    image: "/civic-participation.jpg",
    date: "2024-02-28",
  },
  {
    id: 5,
    title: "Case Studies: Impact Stories from UYP",
    excerpt: "Real stories of how Uthan Youth Parliament changed perspectives and inspired action.",
    category: "Impact",
    image: "/success-stories.jpg",
    date: "2024-02-20",
  },
  {
    id: 6,
    title: "Global Youth Movements and India",
    excerpt: "How international youth activism influences and inspires Indian young leaders.",
    category: "Global",
    image: "/global-movement.jpg",
    date: "2024-02-15",
  },
]

const categories = Array.from(new Set(articles.map((a) => a.category)))

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Articles & Insights</h1>
              <p className="text-xl opacity-90">Thoughts, analysis, and stories from the UYP community</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-primary/10"
                  }`}
                >
                  All Articles
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 0.05}>
                  <article className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                    <div className="relative overflow-hidden h-48 bg-primary/10">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-xs text-muted-foreground mb-2">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 flex-1">{article.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                      <Link
                        href="#"
                        className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-1 mt-auto"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
