"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Heart, Target, TrendingUp } from "lucide-react"

interface Achievement {
  title: string
  description: string
  icon: "award" | "users" | "heart" | "target"
}

interface Stat {
  label: string
  value: string
}

interface AboutUsProps {
  title?: string
  description: string
  yearEstablished?: number
  achievements: Achievement[]
  stats?: Stat[]
  mission?: string
  className?: string
}

const getIcon = (iconType: Achievement["icon"]) => {
  const iconClass = "h-8 w-8 text-gold-400"
  switch (iconType) {
    case "award": return <Award className={iconClass} />
    case "users": return <Users className={iconClass} />
    case "heart": return <Heart className={iconClass} />
    case "target": return <Target className={iconClass} />
    default: return <Award className={iconClass} />
  }
}

export function AboutUs({
  title = "About Our Company",
  description,
  yearEstablished,
  achievements,
  stats = [],
  mission,
  className = ""
}: AboutUsProps) {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = yearEstablished ? currentYear - yearEstablished : null

  return (
    <section className={`py-16 bg-impetus-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-impetus-gray-300 leading-relaxed">
                {description}
              </p>
              {yearsInBusiness && (
                <div className="mt-6">
                  <Badge variant="secondary" className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
                    Serving the community for {yearsInBusiness}+ years
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-impetus-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center bg-impetus-gray-800 border-impetus-gray-700 hover:border-gold-500 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gold-100 dark:bg-gold-900 rounded-xl">
                    {getIcon(achievement.icon)}
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-impetus-gray-300">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          {mission && (
            <Card className="p-8 bg-impetus-gray-800 border-impetus-gray-700">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-impetus-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {mission}
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
} 