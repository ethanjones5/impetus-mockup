"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Quote, Shield, Star } from "lucide-react"

interface Review {
  name: string
  location?: string
  comment: string
  rating: number
  source?: string
  date?: string
}

interface TrustBadge {
  name: string
  description: string
  verified: boolean
}

interface Achievement {
  title: string
  value: string
  description?: string
}

interface SocialProofProps {
  title: string
  subtitle?: string
  overallRating: number
  totalReviews: number
  reviews: Review[]
  trustBadges?: TrustBadge[]
  achievements?: Achievement[]
  showReviews?: boolean
  showTrustBadges?: boolean
  showAchievements?: boolean
  className?: string
}

const renderStars = (rating: number, size: "sm" | "lg" = "sm") => {
  const stars = []
  const starSize = size === "lg" ? "h-6 w-6" : "h-4 w-4"
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`${starSize} ${
          i <= rating 
            ? "text-gold-400 fill-gold-400" 
            : "text-impetus-gray-300"
        }`}
      />
    )
  }
  return <div className="flex gap-1">{stars}</div>
}

export function SocialProof({
  title,
  subtitle,
  overallRating,
  totalReviews,
  reviews,
  trustBadges = [],
  achievements = [],
  showReviews = true,
  showTrustBadges = true,
  showAchievements = true,
  className = ""
}: SocialProofProps) {

  return (
          <section className={`py-16 bg-impetus-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-impetus-gray-300 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
                          <div className="text-4xl font-bold text-white mb-1">
              {overallRating}
              </div>
              {renderStars(overallRating, "lg")}
              <div className="text-sm text-impetus-gray-300 mt-1">
                Based on {totalReviews} reviews
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        {showAchievements && achievements.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center bg-impetus-gray-800 border-impetus-gray-700">
                <div className="text-3xl font-bold text-gold-400 mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold text-white mb-1">
                  {achievement.title}
                </div>
                {achievement.description && (
                  <div className="text-sm text-impetus-gray-300">
                    {achievement.description}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Reviews */}
        {showReviews && reviews.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Recent Reviews
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.slice(0, 6).map((review, index) => (
                <Card key={index} className="p-6 bg-impetus-gray-800 border-impetus-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {renderStars(review.rating)}
                        <span className="text-sm font-medium text-white">
                          {review.rating}/5
                        </span>
                      </div>
                      <p className="text-impetus-gray-300 text-sm mb-3">
                        &ldquo;{review.comment}&rdquo;
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-impetus-gray-700 pt-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-white text-sm">
                          {review.name}
                        </div>
                        {review.location && (
                          <div className="text-xs text-impetus-gray-400">
                            {review.location}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-impetus-gray-400">
                          {review.source}
                        </div>
                        {review.date && (
                          <div className="text-xs text-impetus-gray-400">
                            {review.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trust Badges */}
        {showTrustBadges && trustBadges.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">
              Trusted & Verified
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustBadges.slice(0, 8).map((badge, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-4 rounded-lg bg-impetus-gray-800 border border-impetus-gray-700 hover:border-gold-500 transition-colors"
                >
                  <div className="w-16 h-16 bg-impetus-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-impetus-gray-400" />
                  </div>
                  
                  {badge.verified && (
                    <CheckCircle className="absolute -top-1 -right-1 h-5 w-5 text-green-400 bg-impetus-gray-800 rounded-full" />
                  )}
                  
                  <div className="font-medium text-white text-sm">
                    {badge.name}
                  </div>
                  
                  <div className="text-xs text-impetus-gray-300 max-w-20">
                    {badge.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 