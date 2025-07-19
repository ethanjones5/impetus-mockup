"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react"

interface ServiceArea {
  name: string
  description: string
  coverage: string[]
  serviceLevel: "priority" | "standard" | "extended"
  testimonialCount: number
  rating: number
}

interface ServiceAreaMapProps {
  title?: string
  subtitle?: string
  areas: ServiceArea[]
  showMap?: boolean
  mapEmbedUrl?: string
  contactInfo?: {
    phone: string
    email: string
  }
  className?: string
}

const serviceLevelColors = {
  priority: {
    bg: "bg-green-100 dark:bg-green-900",
    text: "text-green-800 dark:text-green-200",
    border: "border-green-200 dark:border-green-800"
  },
  standard: {
    bg: "bg-blue-100 dark:bg-blue-900", 
    text: "text-blue-800 dark:text-blue-200",
    border: "border-blue-200 dark:border-blue-800"
  },
  extended: {
    bg: "bg-amber-100 dark:bg-amber-900",
    text: "text-amber-800 dark:text-amber-200", 
    border: "border-amber-200 dark:border-amber-800"
  }
}

export function ServiceAreaMap({
  title = "Our Service Areas",
  subtitle = "Providing reliable home services across Toronto and the GTA",
  areas,
  showMap = true,
  mapEmbedUrl,
  contactInfo = {
    phone: "(416) 123-4567",
    email: "info@impetushomeservices.ca"
  },
  className = ""
}: ServiceAreaMapProps) {
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

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Service Areas List */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Coverage Areas
              </h3>
              
              {areas.map((area, index) => {
                const colorScheme = serviceLevelColors[area.serviceLevel]
                return (
                  <Card key={index} className={`p-6 bg-impetus-gray-800 border-impetus-gray-700 hover:border-gold-500 transition-colors ${colorScheme.border}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-gold-400" />
                        <h4 className="text-lg font-semibold text-white">
                          {area.name}
                        </h4>
                      </div>
                      <Badge className={`${colorScheme.bg} ${colorScheme.text}`}>
                        {area.serviceLevel === "priority" ? "Priority Service" : 
                         area.serviceLevel === "standard" ? "Standard Service" : 
                         "Extended Service"}
                      </Badge>
                    </div>
                    
                    <p className="text-impetus-gray-300 mb-4">
                      {area.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-white mb-2">Coverage includes:</div>
                      <div className="flex flex-wrap gap-2">
                        {area.coverage.map((location, locationIndex) => (
                          <span key={locationIndex} className="text-xs bg-impetus-gray-700 text-impetus-gray-300 px-2 py-1 rounded">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-impetus-gray-700">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-gold-400 fill-current" />
                          <span className="text-sm text-white">{area.rating}</span>
                        </div>
                        <div className="text-sm text-impetus-gray-300">
                          {area.testimonialCount} reviews
                        </div>
                      </div>
                      
                      <div className="text-sm text-impetus-gray-300">
                        Next-Day Service Available
                      </div>
                    </div>
                  </Card>
                )
              })}
              
              {/* Contact CTA */}
              <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Don&apos;t See Your Area?
                </h4>
                <p className="text-impetus-gray-300 mb-4">
                  We&apos;re always expanding our service coverage. Contact us to see if we can help with your location.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold" asChild>
                    <a href={`tel:${contactInfo.phone}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call {contactInfo.phone}
                    </a>
                  </Button>
                  <Button variant="outline" className="border-impetus-gray-600 text-white hover:bg-impetus-gray-700" asChild>
                    <a href={`mailto:${contactInfo.email}`}>
                      Email Us
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:sticky lg:top-6">
              {showMap && mapEmbedUrl ? (
                <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Service Coverage Map
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden bg-impetus-gray-700 mb-4">
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Service Area Coverage Map"
                    ></iframe>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm text-impetus-gray-300">Licensed & insured across all areas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm text-impetus-gray-300">Member priority access available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm text-impetus-gray-300">Free quotes in all service areas</span>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Service Excellence
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white text-sm">Reliable Scheduling</div>
                        <div className="text-xs text-impetus-gray-300">Convenient appointment times that work for you</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white text-sm">Quality Guarantee</div>
                        <div className="text-xs text-impetus-gray-300">All work backed by our satisfaction promise</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-gold-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white text-sm">Proven Experience</div>
                        <div className="text-xs text-impetus-gray-300">Over 12 years serving Toronto homeowners</div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 