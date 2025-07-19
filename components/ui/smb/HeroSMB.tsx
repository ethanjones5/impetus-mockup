"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"

interface ContactInfo {
  phone: string
  address: string
  hours: string
}

interface CTA {
  text: string
  href: string
}

interface HeroSMBProps {
  companyName: string
  tagline: string
  description: string
  primaryCTA: CTA
  secondaryCTA?: CTA
  contactInfo: ContactInfo
  showContactCard?: boolean
  className?: string
}

export function HeroSMB({
  companyName,
  tagline,
  description,
  primaryCTA,
  secondaryCTA,
  contactInfo,
  showContactCard = true,
  className = ""
}: HeroSMBProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50 via-white to-gold-100 dark:from-impetus-gray-900 dark:via-impetus-gray-800 dark:to-impetus-gray-900">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-impetus-black dark:text-white">{companyName}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gold-600 dark:text-gold-400 mb-6">
              {tagline}
            </h2>
            <p className="text-xl text-impetus-gray-600 dark:text-impetus-gray-300 max-w-2xl">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold px-8 py-4">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {secondaryCTA && (
                <Button variant="outline" size="lg" className="border-impetus-gray-300 text-impetus-black dark:text-white hover:bg-impetus-gray-100 dark:hover:bg-impetus-gray-800 px-8 py-4">
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>

          {/* Right Column - Contact Card */}
          {showContactCard && (
            <div className="flex justify-center lg:justify-end">
              <Card className="p-6 bg-white/90 dark:bg-impetus-gray-800/90 backdrop-blur-sm border-2 border-gold-200 dark:border-gold-800 shadow-xl max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4 text-center text-impetus-black dark:text-white">
                  Contact Us Today
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-600 dark:text-gold-400 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">{contactInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gold-600 dark:text-gold-400 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">{contactInfo.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gold-600 dark:text-gold-400 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">{contactInfo.hours}</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold">
                  Get Free Quote
                </Button>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 