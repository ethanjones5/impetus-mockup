"use client"

import { SiteShell } from "@/components/layout/SiteShell"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BackgroundBeams } from "@/components/aceternity/background-beams"
import { AboutUs } from "@/components/ui/smb/AboutUs"
import { SocialProof } from "@/components/ui/smb/SocialProof"
import { ContactCard } from "@/components/ui/smb/ContactCard"
import { 
  Wrench, 
  Home, 
  Phone, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  Hammer,
  PaintBucket
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <SiteShell>
      {/* Split-Path Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-impetus-gray-50 to-impetus-gray-100 dark:from-impetus-gray-900 dark:to-impetus-black">
        <BackgroundBeams className="absolute inset-0 opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
              Trusted by 500+ Toronto Homeowners
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-impetus-black dark:text-white mb-6">
              <span className="block">Impetus</span>
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Home Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-impetus-gray-600 dark:text-impetus-gray-300 max-w-3xl mx-auto mb-12">
              Your trusted partner for professional home care and renovations in Toronto/GTA. 
              Choose your path to a better home.
            </p>
          </div>

          {/* Split Path Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Handyman Services Path */}
            <Card className="group relative overflow-hidden border-2 border-gold-200 hover:border-gold-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-white/80 dark:bg-impetus-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gold-100 dark:bg-gold-900 rounded-xl mr-4">
                    <Wrench className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-impetus-black dark:text-white">
                      Home Care & Handyman
                    </h3>
                    <p className="text-impetus-gray-600 dark:text-impetus-gray-300">
                      Emergency repairs • Maintenance • Member services
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">24/7 Emergency Hotline</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">No Call-Out Fees for Members</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">Same-Day Service Available</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">Annual Home Health Checks</span>
                  </div>
                </div>

                <Link href="/handyman">
                  <Button className="w-full group-hover:bg-gold-500 bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold text-lg py-6">
                    Explore Handyman Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Renovation Services Path */}
            <Card className="group relative overflow-hidden border-2 border-gold-200 hover:border-gold-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-white/80 dark:bg-impetus-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gold-100 dark:bg-gold-900 rounded-xl mr-4">
                    <Home className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-impetus-black dark:text-white">
                      Home Renovation Projects
                    </h3>
                    <p className="text-impetus-gray-600 dark:text-impetus-gray-300">
                      Kitchens • Bathrooms • Basements • Full renovations
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Hammer className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">Custom Design & Build</span>
                  </div>
                  <div className="flex items-center">
                    <PaintBucket className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">Premium Material Selection</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">ROI-Focused Improvements</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-gold-600 mr-3" />
                    <span className="text-impetus-gray-700 dark:text-impetus-gray-300">Project Management Included</span>
                  </div>
                </div>

                <Link href="/reno">
                  <Button className="w-full group-hover:bg-gold-500 bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold text-lg py-6">
                    Explore Renovation Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 dark:text-gold-400">500+</div>
              <div className="text-sm text-impetus-gray-600 dark:text-impetus-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 dark:text-gold-400">24/7</div>
              <div className="text-sm text-impetus-gray-600 dark:text-impetus-gray-400">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 dark:text-gold-400">12+</div>
              <div className="text-sm text-impetus-gray-600 dark:text-impetus-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 dark:text-gold-400">4.9★</div>
              <div className="text-sm text-impetus-gray-600 dark:text-impetus-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified About Section */}
      <AboutUs
        title="About Impetus Home Services"
        description="Based in Toronto, Impetus Home Services has been the trusted choice for homeowners seeking reliable, professional service for over 12 years. Whether you need emergency repairs, ongoing home maintenance, or a complete renovation, our experienced team delivers quality results with integrity and care."
        yearEstablished={2012}
        achievements={[
          {
            title: "Licensed & Insured",
            description: "Fully certified professionals with comprehensive coverage",
            icon: "award"
          },
          {
            title: "Expert Team",
            description: "Skilled tradespeople with 12+ years experience",
            icon: "users"
          },
          {
            title: "Customer Focused",
            description: "Transparent pricing and guaranteed satisfaction",
            icon: "heart"
          },
          {
            title: "24/7 Service",
            description: "Emergency response available around the clock",
            icon: "target"
          }
        ]}
        stats={[
          { label: "Projects Completed", value: "2,500+" },
          { label: "Emergency Calls This Year", value: "650+" },
          { label: "Member Retention Rate", value: "94%" },
          { label: "Average Response Time", value: "< 2 Hours" }
        ]}
        mission="To provide exceptional home services that enhance the safety, comfort, and value of every home we touch, while building lasting relationships with our clients throughout the Toronto/GTA community."
        className="py-20 bg-impetus-gray-50 dark:bg-impetus-gray-900"
      />

      {/* Trust Indicators */}
      <SocialProof
        title="What Our Clients Say"
        subtitle="Trusted by hundreds of homeowners across Toronto/GTA"
        overallRating={4.9}
        totalReviews={485}
        reviews={[
          {
            name: "Michael Chen",
            location: "North York",
            comment: "The Impetus team saved us during a plumbing emergency. Their member hotline got us help within an hour, and the quality of work was exceptional.",
            rating: 5,
            source: "Google"
          },
          {
            name: "Sarah Williams",
            location: "Scarborough", 
            comment: "Our kitchen renovation exceeded expectations. The project management was seamless and the ROI on our home value was significant.",
            rating: 5,
            source: "HomeStars"
          },
          {
            name: "David Rodriguez",
            location: "Etobicoke",
            comment: "Been a member for 3 years now. The annual home health checks have prevented major issues and saved us thousands in potential repairs.",
            rating: 5,
            source: "BBB"
          }
        ]}
        trustBadges={[
          { name: "Better Business Bureau A+", description: "Accredited A+ Rating", verified: true },
          { name: "Licensed & Insured", description: "Fully Licensed & Bonded", verified: true },
          { name: "HomeStars Top Rated", description: "Verified Customer Reviews", verified: true },
          { name: "Google Verified", description: "Google My Business Verified", verified: true }
        ]}
        achievements={[
          { title: "Years in Business", value: "12+", description: "Serving Toronto since 2012" },
          { title: "Projects Completed", value: "2,500+", description: "Satisfied customers" },
          { title: "Response Time", value: "< 2 Hours", description: "Emergency service" },
          { title: "Customer Rating", value: "4.9/5", description: "Average review score" }
        ]}
        className="py-20"
      />

      {/* Contact Section */}
      <ContactCard
        title="Get In Touch"
        subtitle="Ready to improve your home? Contact Impetus Home Services today for a free consultation."
        contactMethods={[
          {
            type: "phone",
            label: "Call or Text",
            value: "(416) 123-4567",
            href: "tel:+14161234567",
            icon: true
          },
          {
            type: "email",
            label: "Email Us",
            value: "info@impetushomeservices.ca",
            href: "mailto:info@impetushomeservices.ca",
            icon: true
          },
          {
            type: "address",
            label: "Visit Our Office",
            value: "123 Bloor Street West, Toronto, ON",
            href: "https://maps.google.com/?q=123+Bloor+Street+West,+Toronto,+ON",
            icon: true
          },
          {
            type: "hours",
            label: "Business Hours",
            value: "Mon-Fri: 7AM-8PM, Sat-Sun: 8AM-6PM",
            icon: true
          }
        ]}
        primaryCTA={{
          text: "Get Free Quote",
          href: "/quote"
        }}
        secondaryCTA={{
          text: "Join Home Care Plan",
          href: "/membership"
        }}
        emergencyContact={{
          label: "24/7 Emergency Line",
          value: "(416) 123-4567",
          href: "tel:+14161234567"
        }}
        showMap={true}
        mapEmbedUrl="https://maps.google.com/embed/v1/place?key=YOUR_API_KEY&q=123+Bloor+Street+West,+Toronto,+ON"
        className="py-20 bg-impetus-gray-50 dark:bg-impetus-gray-900"
      />
    </SiteShell>
  )
} 