"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Send, Phone, Mail } from "lucide-react"

interface FormField {
  name: string
  label: string
  type: "text" | "email" | "tel" | "textarea" | "select"
  required?: boolean
  options?: string[]
  placeholder?: string
}

interface LeadFormProps {
  title: string
  description?: string
  fields: FormField[]
  ctaText?: string
  badge?: string
  benefits?: string[]
  contactInfo?: {
    phone?: string
    email?: string
  }
  className?: string
}

export function LeadForm({
  title,
  description,
  fields,
  ctaText = "Get Started",
  badge,
  benefits = [],
  contactInfo,
  className = ""
}: LeadFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <section className={`py-16 bg-impetus-gray-900 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8 bg-impetus-gray-800 border-impetus-gray-700">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Thank You! We&apos;ll Be In Touch Soon
              </h3>
              <p className="text-impetus-gray-300 mb-6">
                We&apos;ve received your information and will contact you within 24 hours to discuss your project.
              </p>
              {contactInfo && (
                <div className="border-t border-impetus-gray-700 pt-6">
                  <p className="text-impetus-gray-400 text-sm mb-4">
                    Need immediate assistance?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {contactInfo.phone && (
                      <Button variant="outline" className="border-impetus-gray-600 text-white hover:bg-impetus-gray-700">
                        <Phone className="h-4 w-4 mr-2" />
                        Call {contactInfo.phone}
                      </Button>
                    )}
                    {contactInfo.email && (
                      <Button variant="outline" className="border-impetus-gray-600 text-white hover:bg-impetus-gray-700">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Us
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-16 bg-impetus-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Form */}
          <div>
            <div className="mb-8">
              {badge && (
                <Badge variant="secondary" className="mb-4 bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
                  {badge}
                </Badge>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
              {description && (
                <p className="text-lg text-impetus-gray-300">
                  {description}
                </p>
              )}
            </div>

            <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-white mb-2">
                      {field.label}
                      {field.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                    
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 bg-impetus-gray-700 border border-impetus-gray-600 rounded-md text-white placeholder-impetus-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    ) : field.type === "select" ? (
                      <select
                        name={field.name}
                        required={field.required}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full px-3 py-2 bg-impetus-gray-700 border border-impetus-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      >
                        <option value="">Choose an option...</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ""}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full px-3 py-2 bg-impetus-gray-700 border border-impetus-gray-600 rounded-md text-white placeholder-impetus-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    )}
                  </div>
                ))}

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {ctaText}
                    </>
                  )}
                </Button>

                <p className="text-xs text-impetus-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy. We will never share your information.
                </p>
              </form>
            </Card>
          </div>

          {/* Right Column - Benefits */}
          <div className="lg:pt-20">
            {benefits.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What You&apos;ll Get:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-impetus-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {contactInfo && (
              <Card className="p-6 bg-impetus-gray-800 border-impetus-gray-700">
                <h4 className="font-semibold text-white mb-4">
                  Prefer to speak directly?
                </h4>
                <div className="space-y-3">
                  {contactInfo.phone && (
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gold-400 mr-3" />
                      <div>
                        <div className="text-sm text-impetus-gray-400">Call us</div>
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="font-medium text-white hover:text-gold-400 transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {contactInfo.email && (
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gold-400 mr-3" />
                      <div>
                        <div className="text-sm text-impetus-gray-400">Email us</div>
                        <a 
                          href={`mailto:${contactInfo.email}`}
                          className="font-medium text-white hover:text-gold-400 transition-colors break-all"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 