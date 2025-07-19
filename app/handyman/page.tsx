"use client"

import { SiteShell } from "@/components/layout/SiteShell"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid"
import { HeroSMB } from "@/components/ui/smb/HeroSMB"
import { ServicesList } from "@/components/ui/smb/ServicesList"
import { Testimonials } from "@/components/ui/smb/Testimonials"
import { LeadForm } from "@/components/ui/smb/LeadForm"
import { CTABanner } from "@/components/ui/smb/CTABanner"
import { 
  Wrench, 
  Phone, 
  Clock, 
  Shield, 
  Star,
  AlertTriangle,
  Home,
  Heart,
  Zap,
  Calendar,
  FileText
} from "lucide-react"
import Link from "next/link"

const membershipFeatures = [
  {
    name: "Priority Emergency Response",
    description: "24/7 hotline with guaranteed response within 2 hours for all emergencies",
    icon: <Zap className="h-6 w-6 text-gold-600" />,
    className: "md:col-span-2"
  },
  {
    name: "No Call-Out Fees",
    description: "Free service calls and diagnostic visits for all members",
    icon: <Shield className="h-6 w-6 text-gold-600" />,
    className: "md:col-span-1"
  },
  {
    name: "Annual Home Health Check",
    description: "Comprehensive inspection to prevent issues before they become costly repairs",
    icon: <FileText className="h-6 w-6 text-gold-600" />,
    className: "md:col-span-1"
  },
  {
    name: "Seasonal Maintenance",
    description: "Customized checklists and reminders for optimal home care year-round",
    icon: <Calendar className="h-6 w-6 text-gold-600" />,
    className: "md:col-span-2"
  },
  {
    name: "Member Discounts",
    description: "15% off all services and priority booking for non-emergency work",
    icon: <Star className="h-6 w-6 text-gold-600" />,
    className: "md:col-span-1"
  }
]

export default function HandymanPage() {
  return (
    <SiteShell headerProps={{ 
      siteConfig: {
        name: "Impetus Home Services",
        mainNav: [
          { title: "Home", href: "/" },
          { title: "Handyman Services", href: "/handyman" },
          { title: "Renovations", href: "/reno" },
          { title: "Contact", href: "/contact" }
        ]
      }
    }}>
      {/* Hero Section */}
      <HeroSMB
        companyName="Impetus Home Services"
        tagline="Professional Home Care & Handyman Services"
        description="Join our Home Care Plan for priority emergency service, no call-out fees, and comprehensive home maintenance that saves you money and gives you peace of mind."
        primaryCTA={{
          text: "Join Home Care Plan",
          href: "/membership"
        }}
        secondaryCTA={{
          text: "Book Emergency Service",
          href: "/emergency"
        }}
        contactInfo={{
          phone: "(416) 123-4567",
          address: "Serving Toronto/GTA",
          hours: "24/7 Emergency Service"
        }}
        className="bg-gradient-to-br from-impetus-gray-50 to-gold-50 dark:from-impetus-gray-900 dark:to-impetus-black"
      />

      {/* Emergency Service Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3 animate-pulse" />
              <div>
                <h3 className="font-bold text-lg">Emergency? We&apos;re Here 24/7</h3>
                <p className="text-red-100">Plumbing leaks, electrical issues, heating failures - we respond fast</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="h-5 w-5 mr-2" />
                Call (416) 123-4567
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                <Clock className="h-5 w-5 mr-2" />
                Request Callback
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care Plan Features - BentoGrid */}
      <section className="py-20 bg-white dark:bg-impetus-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
              Exclusive Member Benefits
            </Badge>
            <h2 className="text-4xl font-bold text-impetus-black dark:text-white mb-6">
              Impetus Home Care Plan
            </h2>
            <p className="text-xl text-impetus-gray-600 dark:text-impetus-gray-300 max-w-3xl mx-auto">
              Join thousands of Toronto homeowners who trust Impetus for proactive home care and emergency peace of mind.
            </p>
          </div>

          <BentoGrid className="max-w-6xl mx-auto">
            {membershipFeatures.map((feature, i) => (
              <BentoGridItem
                key={i}
                title={feature.name}
                description={feature.description}
                header={
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold-100 dark:bg-gold-900">
                    {feature.icon}
                  </div>
                }
                className={feature.className}
              />
            ))}
          </BentoGrid>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-impetus-black font-semibold px-8 py-4">
              Join Home Care Plan - $99/year
            </Button>
            <p className="text-sm text-impetus-gray-500 mt-2">Pay for itself with just one service call</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <ServicesList
        title="Complete Handyman Services"
        subtitle="From minor repairs to major maintenance, our skilled technicians handle it all"
        services={[
          {
            title: "Plumbing Repairs",
            description: "Leaks, clogs, fixture installation, and emergency plumbing",
            features: ["24/7 Emergency Response", "Licensed Plumbers", "Upfront Pricing"]
          },
          {
            title: "Electrical Work",
            description: "Outlets, switches, lighting, and electrical troubleshooting",
            features: ["Licensed Electricians", "Safety Inspections", "Code Compliance"]
          },
          {
            title: "HVAC Maintenance", 
            description: "Heating, cooling, and ventilation system care",
            features: ["Seasonal Tune-ups", "Filter Replacement", "Emergency Repairs"]
          },
          {
            title: "General Repairs",
            description: "Drywall, painting, trim work, and household fixes",
            features: ["Quality Materials", "Skilled Craftsmen", "Warranty Included"]
          },
          {
            title: "Preventive Maintenance",
            description: "Annual home health checks and seasonal preparations",
            features: ["Comprehensive Inspections", "Maintenance Plans", "Issue Prevention"]
          },
          {
            title: "Assembly & Installation",
            description: "Furniture, fixtures, appliances, and mounting services",
            features: ["Professional Assembly", "Secure Installation", "Cleanup Included"]
          }
        ]}
        className="py-20 bg-impetus-gray-50 dark:bg-impetus-gray-800"
      />



      {/* Customer Testimonials */}
      <Testimonials
        title="What Members Say"
        subtitle="Real experiences from our Home Care Plan members"
        testimonials={[
          {
            name: "Jennifer Park",
            location: "North York",
            rating: 5,
            comment: "The annual home health check caught a small electrical issue that could have been dangerous. The peace of mind is worth every penny.",
            date: "2024-11-15"
          },
          {
            name: "Robert Chen",
            location: "Scarborough",
            rating: 5,
            comment: "Called at 11 PM with a burst pipe. Impetus had someone here within 90 minutes. No call-out fee saved us $200 right there.",
            date: "2024-10-28"
          },
          {
            name: "Maria Santos",
            location: "Etobicoke",
            rating: 5,
            comment: "Been a member for 4 years. The preventive maintenance has saved us thousands in potential repairs. Highly recommend.",
            date: "2024-12-02"
          }
        ]}
        className="py-20 bg-impetus-gray-50 dark:bg-impetus-gray-800"
      />

      {/* Lead Capture Form */}
      <LeadForm
        title="Get Your Free Home Assessment"
        description="Join the Home Care Plan or schedule emergency service. Our experts will assess your home's needs and provide personalized recommendations."
        fields={[
          { name: "name", label: "Full Name", type: "text", required: true },
          { name: "email", label: "Email Address", type: "email", required: true },
          { name: "phone", label: "Phone Number", type: "tel", required: true },
          { name: "address", label: "Property Address", type: "text", required: true },
          { name: "service", label: "Service Needed", type: "select", required: true, options: [
            "Join Home Care Plan",
            "Emergency Service",
            "Plumbing Repair",
            "Electrical Work",
            "HVAC Service",
            "General Handyman",
            "Home Assessment"
          ]},
          { name: "message", label: "Describe Your Needs", type: "textarea", required: false }
        ]}
        ctaText="Get Free Assessment"
        className="py-20"
      />



      {/* CTA Banner */}
      <CTABanner
        title="Ready to Join 1,200+ Smart Homeowners?"
        description="Get priority emergency service, no call-out fees, and comprehensive home care that prevents costly repairs."
        primaryCTA={{
          text: "Join Home Care Plan - $99/year",
          href: "/membership"
        }}
        secondaryCTA={{
          text: "Call for Emergency Service",
          href: "tel:+14161234567"
        }}
        className="bg-gradient-to-r from-gold-400 to-gold-500 text-impetus-black"
      />
    </SiteShell>
  )
} 