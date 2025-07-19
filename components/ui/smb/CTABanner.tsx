"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Phone } from "lucide-react"

interface CTA {
  text: string
  href: string
  variant?: "default" | "outline" | "ghost"
}

interface CTABannerProps {
  title: string
  description?: string
  primaryCTA: CTA
  secondaryCTA?: CTA
  badge?: string
  urgency?: string
  testimonial?: {
    text: string
    author: string
    rating?: number
  }
  style?: "default" | "gradient" | "minimal" | "urgent"
  className?: string
}

const styleVariants = {
  default: {
    background: "bg-impetus-gray-900",
    text: "text-white",
    accent: "text-impetus-gray-300"
  },
  gradient: {
    background: "bg-gradient-to-r from-gold-400 to-gold-500",
    text: "text-impetus-black",
    accent: "text-impetus-gray-800"
  },
  minimal: {
    background: "bg-white dark:bg-impetus-gray-800",
    text: "text-impetus-black dark:text-white",
    accent: "text-impetus-gray-600 dark:text-impetus-gray-300"
  },
  urgent: {
    background: "bg-gradient-to-r from-red-600 to-red-700",
    text: "text-white",
    accent: "text-red-100"
  }
}

export function CTABanner({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  urgency,
  testimonial,
  style = "default",
  className = ""
}: CTABannerProps) {
  const variant = styleVariants[style]
  
  return (
    <section className={`py-16 ${variant.background} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <Badge variant="secondary" className="mb-4 bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
              {badge}
            </Badge>
          )}

          {/* Urgency */}
          {urgency && (
            <div className={`text-sm font-medium mb-3 ${variant.accent}`}>
              {urgency}
            </div>
          )}

          {/* Title */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${variant.text}`}>
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${variant.accent}`}>
              {description}
            </p>
          )}

          {/* Testimonial */}
          {testimonial && (
            <div className="mb-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm max-w-xl mx-auto">
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
              </div>
              <p className={`italic mb-2 ${variant.text}`}>
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className={`text-sm ${variant.accent}`}>
                — {testimonial.author}
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className={`text-lg px-8 ${primaryCTA.variant === "outline" ? "border-white text-white hover:bg-white hover:text-impetus-black" : "bg-white text-gold-600 hover:bg-gold-50"}`}
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {secondaryCTA && (
              <Button 
                variant="outline" 
                size="lg"
                className={`text-lg px-8 ${secondaryCTA.variant === "outline" ? "border-white text-white hover:bg-white hover:text-impetus-black" : "bg-white text-gold-600 hover:bg-gold-50"}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                {secondaryCTA.text}
              </Button>
            )}
          </div>

          {/* Bottom note */}
          <p className={`text-sm mt-6 ${variant.accent}`}>
            Free quotes • Licensed & insured • Satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  )
} 