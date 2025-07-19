"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

interface ContactMethod {
  type: "phone" | "email" | "address" | "hours"
  label: string
  value: string
  href?: string
  icon?: boolean
}

interface CTA {
  text: string
  href: string
}

interface EmergencyContact {
  label: string
  value: string
  href: string
}

interface ContactCardProps {
  title?: string
  subtitle?: string
  contactMethods: ContactMethod[]
  primaryCTA?: CTA
  secondaryCTA?: CTA
  emergencyContact?: EmergencyContact
  showMap?: boolean
  mapEmbedUrl?: string
  className?: string
}

const getIcon = (type: ContactMethod["type"]) => {
  const iconClass = "h-5 w-5 text-gold-400"
  switch (type) {
    case "phone": return <Phone className={iconClass} />
    case "email": return <Mail className={iconClass} />
    case "address": return <MapPin className={iconClass} />
    case "hours": return <Clock className={iconClass} />
    default: return <Phone className={iconClass} />
  }
}

export function ContactCard({
  title = "Get In Touch",
  subtitle = "Ready to get started? Contact us today",
  contactMethods,
  primaryCTA,
  secondaryCTA,
  emergencyContact,
  showMap = false,
  mapEmbedUrl,
  className = ""
}: ContactCardProps) {
  return (
    <section className={`py-16 bg-impetus-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-impetus-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Emergency Contact Banner */}
              {emergencyContact && (
                <Card className="p-6 bg-gradient-to-r from-red-600 to-red-700 border-red-500">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="font-semibold text-lg mb-1">
                        {emergencyContact.label}
                      </div>
                      <div className="text-red-100">
                        Priority access for urgent needs
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-red-600"
                      asChild
                    >
                      <a href={emergencyContact.href}>
                        <Phone className="h-5 w-5 mr-2" />
                        {emergencyContact.value}
                      </a>
                    </Button>
                  </div>
                </Card>
              )}

              {/* Contact Methods */}
              <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {method.icon && getIcon(method.type)}
                      <div className="flex-1">
                        <div className="font-medium text-white mb-1">
                          {method.label}
                        </div>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-impetus-gray-300 hover:text-gold-400 transition-colors"
                            target={method.type === "address" ? "_blank" : undefined}
                            rel={method.type === "address" ? "noopener noreferrer" : undefined}
                          >
                            {method.value}
                            {method.type === "address" && (
                              <ExternalLink className="h-4 w-4 ml-1 inline-block" />
                            )}
                          </a>
                        ) : (
                          <div className="text-impetus-gray-300">
                            {method.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                {(primaryCTA || secondaryCTA) && (
                  <div className="border-t border-impetus-gray-700 pt-6 mt-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      {primaryCTA && (
                        <Button className="bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold flex-1" asChild>
                          <a href={primaryCTA.href}>
                            {primaryCTA.text}
                          </a>
                        </Button>
                      )}
                      {secondaryCTA && (
                        <Button variant="outline" className="border-impetus-gray-600 text-white hover:bg-impetus-gray-700 flex-1" asChild>
                          <a href={secondaryCTA.href}>
                            {secondaryCTA.text}
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </Card>

              {/* Additional Info */}
              <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                <h3 className="font-semibold text-white mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    <span className="text-impetus-gray-300 text-sm">Licensed & fully insured</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    <span className="text-impetus-gray-300 text-sm">Free quotes & consultations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    <span className="text-impetus-gray-300 text-sm">Satisfaction guaranteed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                    <span className="text-impetus-gray-300 text-sm">Local Toronto/GTA experts</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:sticky lg:top-6">
              {showMap && mapEmbedUrl ? (
                <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                  <h3 className="font-semibold text-white mb-4">
                    Our Service Area
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden bg-impetus-gray-700">
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Service Area Map"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <Badge variant="secondary" className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
                      Serving Toronto & GTA
                    </Badge>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                  <h3 className="font-semibold text-white mb-4">
                    Service Areas
                  </h3>
                  <div className="space-y-2">
                    <div className="text-impetus-gray-300 text-sm">• Toronto</div>
                    <div className="text-impetus-gray-300 text-sm">• North York</div>
                    <div className="text-impetus-gray-300 text-sm">• Scarborough</div>
                    <div className="text-impetus-gray-300 text-sm">• Etobicoke</div>
                    <div className="text-impetus-gray-300 text-sm">• Mississauga</div>
                    <div className="text-impetus-gray-300 text-sm">• Brampton</div>
                    <div className="text-impetus-gray-300 text-sm">• Markham</div>
                    <div className="text-impetus-gray-300 text-sm">• Richmond Hill</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-impetus-gray-700">
                    <p className="text-xs text-impetus-gray-400">
                      Don&apos;t see your area? Call us - we may still be able to help!
                    </p>
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