"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Phone, Mail } from "lucide-react"

interface FAQ {
  question: string
  answer: string
  category?: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  faqs: FAQ[]
  showCategories?: boolean
  showContactCard?: boolean
  contactInfo?: {
    phone?: string
    email?: string
    hours?: string
  }
  className?: string
}

export function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  faqs,
  showCategories = true,
  showContactCard = true,
  contactInfo = {
    phone: "(416) 123-4567",
    email: "info@impetushomeservices.ca",
    hours: "Mon-Fri 8AM-6PM, Priority Access for Members"
  },
  className = ""
}: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean) as string[]))]
  
  // Filter FAQs by category
  const filteredFAQs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const isOpen = (index: number) => openItems.includes(index)

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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Categories Filter */}
            {showCategories && categories.length > 1 && (
              <div className="lg:col-span-3 mb-8">
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-gold-400 hover:bg-gold-500 text-impetus-black"
                          : "border-impetus-gray-600 text-white hover:bg-impetus-gray-700"
                      }
                    >
                      {category === "all" ? "All Questions" : category}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ List */}
            <div className="lg:col-span-2 space-y-4">
              {filteredFAQs.map((faq, index) => (
                <Card key={index} className="overflow-hidden bg-impetus-gray-800 border-impetus-gray-700">
                  <button
                    className="w-full p-6 text-left hover:bg-impetus-gray-700 transition-colors"
                    onClick={() => toggleItem(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white mb-1">
                        {faq.question}
                      </h3>
                      {faq.category && (
                        <Badge variant="secondary" className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200 ml-4">
                          {faq.category}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex-1" />
                      {isOpen(index) ? (
                        <ChevronUp className="h-5 w-5 text-impetus-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-impetus-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {isOpen(index) && (
                    <div className="border-t border-impetus-gray-700 pt-4">
                      <div className="text-impetus-gray-300 prose prose-sm max-w-none">
                        <div className="px-6 pb-6">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Contact Card */}
            {showContactCard && (
              <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700 sticky top-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Still Have Questions?
                </h3>
                
                <p className="text-impetus-gray-300 text-sm mb-6">
                  Can&apos;t find what you&apos;re looking for? Get in touch with our team for personalized assistance.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-400 mr-3" />
                    <div>
                      <div className="text-sm text-impetus-gray-400">Call us</div>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="font-medium text-white hover:text-gold-400"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gold-400 mr-3" />
                    <div>
                      <div className="text-sm text-impetus-gray-400">Email us</div>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="font-medium text-white hover:text-gold-400 break-all"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-impetus-gray-700 p-3 rounded-lg mt-6">
                  <div className="text-sm text-impetus-gray-400 mb-1">Business Hours</div>
                  <div className="text-sm text-white">
                    {contactInfo.hours}
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold"
                  asChild
                >
                  <a 
                    href="/contact"
                  >
                    Contact Us Today
                  </a>
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 