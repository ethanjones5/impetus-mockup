"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"

interface Testimonial {
  name: string
  location?: string
  rating: number
  comment: string
  date?: string
  jobTitle?: string
  company?: string
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  showNavigation?: boolean
  layout?: "carousel" | "grid"
  maxVisible?: number
  className?: string
}

const renderStars = (rating: number) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating 
              ? "text-gold-400 fill-current" 
              : "text-impetus-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials({
  title = "What Our Customers Say",
  subtitle = "Real feedback from satisfied customers",
  testimonials,
  showNavigation = false,
  layout = "grid",
  maxVisible = 3,
  className = ""
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = layout === "carousel" 
    ? testimonials.slice(currentIndex, currentIndex + maxVisible)
    : testimonials.slice(0, maxVisible)

  if (layout === "carousel" && testimonials.length === 1) {
    return (
      <section className={`py-16 bg-impetus-gray-900 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg text-impetus-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 bg-impetus-gray-800 border-impetus-gray-700 text-center">
              <Quote className="h-12 w-12 text-gold-400 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-impetus-gray-200 mb-6 italic">
                &ldquo;{testimonials[0].comment}&rdquo;
              </p>
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[0].rating)}
              </div>
              <div className="border-t border-impetus-gray-700 pt-6">
                <h4 className="font-semibold text-white text-lg">
                  {testimonials[0].name}
                </h4>
                {testimonials[0].location && (
                  <p className="text-impetus-gray-400 text-sm">
                    {testimonials[0].location}
                  </p>
                )}
                {testimonials[0].jobTitle && (
                  <p className="text-impetus-gray-400 text-sm">
                    {testimonials[0].jobTitle}
                    {testimonials[0].company && ` at ${testimonials[0].company}`}
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 bg-impetus-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-impetus-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons for carousel */}
          {layout === "carousel" && showNavigation && testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-impetus-gray-800 rounded-full shadow-lg hover:bg-impetus-gray-100 dark:hover:bg-impetus-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5 text-impetus-gray-600 dark:text-impetus-gray-300" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-impetus-gray-800 rounded-full shadow-lg hover:bg-impetus-gray-100 dark:hover:bg-impetus-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5 text-impetus-gray-600 dark:text-impetus-gray-300" />
              </button>
            </>
          )}

          {/* Testimonials Grid/Carousel */}
          <div className={`grid gap-6 ${
            layout === "carousel" 
              ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-impetus-gray-800 border-impetus-gray-700 hover:border-gold-500 transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-impetus-gray-200 text-sm mb-3">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-impetus-gray-700 pt-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-white text-sm">
                        {testimonial.name}
                      </div>
                      {testimonial.location && (
                        <div className="text-xs text-impetus-gray-400">
                          {testimonial.location}
                        </div>
                      )}
                      {testimonial.jobTitle && (
                        <div className="text-xs text-impetus-gray-400">
                          {testimonial.jobTitle}
                          {testimonial.company && ` at ${testimonial.company}`}
                        </div>
                      )}
                    </div>
                    {testimonial.date && (
                      <div className="text-xs text-impetus-gray-400">
                        {testimonial.date}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Carousel dots */}
          {layout === "carousel" && testimonials.length > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold-400" : "bg-impetus-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 