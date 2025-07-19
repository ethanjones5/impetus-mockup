"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Award, Target } from "lucide-react"

interface Stat {
  label: string
  value: string
  change?: {
    value: string
    trend: "up" | "down" | "neutral"
  }
  icon?: "trending" | "users" | "award" | "target"
}

interface Achievement {
  title: string
  description: string
  value: string
  icon?: "trending" | "users" | "award" | "target"
}

interface StatsBlockProps {
  title?: string
  subtitle?: string
  stats?: Stat[]
  achievements?: Achievement[]
  layout?: "stats-only" | "achievements-only" | "both"
  showComparison?: boolean
  className?: string
}

const getIcon = (iconType?: string) => {
  const iconClass = "h-6 w-6 text-gold-400"
  switch (iconType) {
    case "trending": return <TrendingUp className={iconClass} />
    case "users": return <Users className={iconClass} />
    case "award": return <Award className={iconClass} />
    case "target": return <Target className={iconClass} />
    default: return <TrendingUp className={iconClass} />
  }
}

export function StatsBlock({
  title = "Our Performance",
  subtitle = "Numbers that demonstrate our commitment to excellence",
  stats = [],
  achievements = [],
  layout = "both",
  showComparison = false,
  className = ""
}: StatsBlockProps) {
  return (
    <section className={`py-16 bg-impetus-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-impetus-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          {(layout === "stats-only" || layout === "both") && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index} className="p-8 text-center bg-impetus-gray-800 border-impetus-gray-700 hover:shadow-lg transition-shadow">
                  {stat.icon && (
                    <div className="flex justify-center mb-4">
                      {getIcon(stat.icon)}
                    </div>
                  )}
                  
                  <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                    <span className="text-white">
                      {stat.value}
                    </span>
                  </div>
                  
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  
                  {showComparison && stat.change && (
                    <div className="text-sm text-impetus-gray-300">
                      <span className={
                        stat.change.trend === "up" ? "text-green-400" :
                        stat.change.trend === "down" ? "text-red-400" :
                        "text-impetus-gray-400"
                      }>
                        {stat.change.value}
                      </span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}

          {/* Achievements */}
          {(layout === "achievements-only" || layout === "both") && achievements.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 bg-impetus-gray-800 border-impetus-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-100 dark:bg-gold-900 rounded-lg flex items-center justify-center">
                      {getIcon(achievement.icon)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-2xl font-bold text-gold-400 mb-2">
                        <span className="text-white">
                          {achievement.value}
                        </span>
                      </div>
                      
                      <div className="font-semibold text-white mb-1">
                        {achievement.title}
                      </div>
                      
                      <div className="text-sm text-impetus-gray-300">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-impetus-gray-300 mb-4">
              Ready to experience the difference these numbers represent?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gold-400 text-impetus-black rounded-lg hover:bg-gold-500 transition-colors font-medium"
              >
                Get Your Free Quote
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center px-6 py-3 border border-impetus-gray-600 text-white rounded-lg hover:bg-impetus-gray-700 transition-colors font-medium"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 