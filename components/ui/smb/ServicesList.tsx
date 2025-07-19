"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Wrench } from "lucide-react"

interface Service {
  title: string
  description: string
  features: string[]
  icon?: React.ReactNode
  price?: string
  popular?: boolean
}

interface ServicesListProps {
  title?: string
  subtitle?: string
  services: Service[]
  layout?: "grid" | "list"
  showPricing?: boolean
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function ServicesList({
  title = "Our Services",
  subtitle = "Professional services to meet all your needs",
  services,
  layout = "grid",
  showPricing = false,
  ctaText = "Get Quote",
  ctaLink = "/contact",
  className = ""
}: ServicesListProps) {
  if (layout === "list") {
    return (
      <section className={`py-16 bg-impetus-gray-900 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
              <p className="text-lg text-impetus-gray-300 max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={index} className={`p-6 bg-impetus-gray-800 border-impetus-gray-700 hover:border-gold-500 transition-colors ${service.popular ? 'ring-2 ring-gold-500' : ''}`}>
                  {service.popular && (
                    <Badge className="bg-gold-400 text-impetus-black mb-4">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gold-100 dark:bg-gold-900 rounded-lg flex items-center justify-center">
                        {service.icon || <Wrench className="h-6 w-6 text-gold-600 dark:text-gold-400" />}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">
                          {service.title}
                        </h3>
                        {showPricing && service.price && (
                          <div className="text-gold-400 font-semibold">
                            {service.price}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-impetus-gray-300 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-sm text-impetus-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold" asChild>
                        <a href={ctaLink}>
                          {ctaText}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Grid layout (default)
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`p-6 bg-impetus-gray-800 border-impetus-gray-700 hover:border-gold-500 transition-all duration-300 hover:shadow-lg ${service.popular ? 'ring-2 ring-gold-500' : ''}`}>
                {service.popular && (
                  <Badge className="bg-gold-400 text-impetus-black mb-4">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {service.icon || <Wrench className="h-8 w-8 text-gold-600 dark:text-gold-400" />}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  
                  {showPricing && service.price && (
                    <div className="text-2xl font-bold text-gold-400 mb-2">
                      {service.price}
                    </div>
                  )}
                  
                  <p className="text-impetus-gray-300">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-impetus-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold" asChild>
                  <a href={ctaLink}>
                    {ctaText}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 