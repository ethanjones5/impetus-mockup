"use client"

import { SiteShell } from "@/components/layout/SiteShell"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSMB } from "@/components/ui/smb/HeroSMB"
import { Gallery } from "@/components/ui/smb/Gallery"
import { Testimonials } from "@/components/ui/smb/Testimonials"
import { LeadForm } from "@/components/ui/smb/LeadForm"
import { CTABanner } from "@/components/ui/smb/CTABanner"

const portfolioProjects = [
  {
    title: "Modern Kitchen Renovation",
    description: "Complete kitchen transformation with quartz countertops and custom cabinetry",
    image: "/portfolio/kitchen-1.jpg",
    category: "Kitchen",
    value: "$45,000",
    roiIncrease: "18%"
  },
  {
    title: "Luxury Bathroom Remodel",
    description: "Spa-like master bathroom with walk-in shower and heated floors",
    image: "/portfolio/bathroom-1.jpg", 
    category: "Bathroom",
    value: "$28,000",
    roiIncrease: "12%"
  },
  {
    title: "Basement Transformation",
    description: "Unfinished basement converted to entertainment space with bar",
    image: "/portfolio/basement-1.jpg",
    category: "Basement", 
    value: "$35,000",
    roiIncrease: "15%"
  },
  {
    title: "Open Concept Living",
    description: "Wall removal and kitchen expansion for modern flow",
    image: "/portfolio/living-1.jpg",
    category: "Full Home",
    value: "$65,000", 
    roiIncrease: "22%"
  },
  {
    title: "Heritage Kitchen Update",
    description: "Classic kitchen renovation preserving character while adding function",
    image: "/portfolio/kitchen-2.jpg",
    category: "Kitchen",
    value: "$38,000",
    roiIncrease: "16%"
  },
  {
    title: "Master Suite Addition",
    description: "Second-floor addition with master bedroom and ensuite",
    image: "/portfolio/addition-1.jpg",
    category: "Addition",
    value: "$85,000",
    roiIncrease: "25%"
  }
]



export default function RenovationPage() {
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
        tagline="Premium Home Renovations & Design"
        description="Transform your space with Toronto's trusted renovation experts. From concept to completion, we deliver exceptional results that increase your home's value and enhance your lifestyle."
        primaryCTA={{
          text: "Get Free Design Consultation",
          href: "/consultation"
        }}
        secondaryCTA={{
          text: "View Portfolio",
          href: "#portfolio"
        }}
        contactInfo={{
          phone: "(416) 123-4567",
          address: "Serving Toronto/GTA",
          hours: "Mon-Sat 8AM-6PM"
        }}
        className="bg-gradient-to-br from-impetus-gray-50 to-gold-50 dark:from-impetus-gray-900 dark:to-impetus-black"
      />

      {/* ROI Value Proposition Banner */}
      <section className="bg-gradient-to-r from-gold-600 to-gold-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Smart Renovations = Higher Property Value</h3>
            <p className="text-gold-100 mb-4">Our renovations typically increase home value by 15-25% - see the data below</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-xl font-bold">+18%</div>
                <div className="text-sm text-gold-200">Kitchen Renos</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">+12%</div>
                <div className="text-sm text-gold-200">Bathroom Renos</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">+15%</div>
                <div className="text-sm text-gold-200">Basement Finish</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">+25%</div>
                <div className="text-sm text-gold-200">Additions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery with Filters */}
      <section id="portfolio" className="py-20 bg-white dark:bg-impetus-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
              Featured Projects
            </Badge>
            <h2 className="text-4xl font-bold text-impetus-black dark:text-white mb-6">
              Renovation Portfolio
            </h2>
            <p className="text-xl text-impetus-gray-600 dark:text-impetus-gray-300 max-w-3xl mx-auto">
              Browse our completed projects and see the transformations that have added significant value to Toronto homes
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
              <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
              <TabsTrigger value="basement">Basement</TabsTrigger>
              <TabsTrigger value="addition">Additions</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Gallery
                title=""
                items={portfolioProjects.map((project, index) => ({
                  id: `project-${index}`,
                  title: project.title,
                  description: `${project.description} • Value: ${project.value} • ROI: +${project.roiIncrease}`,
                  imageUrl: project.image,
                  category: project.category
                }))}
                layout="grid"
                className=""
              />
            </TabsContent>

            <TabsContent value="kitchen">
              <Gallery
                title=""
                items={portfolioProjects.filter(p => p.category === "Kitchen").map((project, index) => ({
                  id: `kitchen-${index}`,
                  title: project.title,
                  description: `${project.description} • Value: ${project.value} • ROI: +${project.roiIncrease}`,
                  imageUrl: project.image,
                  category: project.category
                }))}
                layout="grid"
                className=""
              />
            </TabsContent>

            <TabsContent value="bathroom">
              <Gallery
                title=""
                items={portfolioProjects.filter(p => p.category === "Bathroom").map((project, index) => ({
                  id: `bathroom-${index}`,
                  title: project.title,
                  description: `${project.description} • Value: ${project.value} • ROI: +${project.roiIncrease}`,
                  imageUrl: project.image,
                  category: project.category
                }))}
                layout="grid"
                className=""
              />
            </TabsContent>

            <TabsContent value="basement">
              <Gallery
                title=""
                items={portfolioProjects.filter(p => p.category === "Basement").map((project, index) => ({
                  id: `basement-${index}`,
                  title: project.title,
                  description: `${project.description} • Value: ${project.value} • ROI: +${project.roiIncrease}`,
                  imageUrl: project.image,
                  category: project.category
                }))}
                layout="grid"
                className=""
              />
            </TabsContent>

            <TabsContent value="addition">
              <Gallery
                title=""
                items={portfolioProjects.filter(p => p.category === "Addition").map((project, index) => ({
                  id: `addition-${index}`,
                  title: project.title,
                  description: `${project.description} • Value: ${project.value} • ROI: +${project.roiIncrease}`,
                  imageUrl: project.image,
                  category: project.category
                }))}
                layout="grid"
                className=""
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>



      {/* Customer Testimonials */}
      <Testimonials
        title="Renovation Success Stories"
        subtitle="Real feedback from Toronto homeowners who transformed their spaces"
        testimonials={[
          {
            name: "Lisa & Mark Thompson",
            location: "Leaside",
            rating: 5,
            comment: "Our kitchen renovation exceeded all expectations. The ROI was exactly as projected, and the quality is outstanding. Impetus managed everything seamlessly.",
            date: "2024-09-20"
          },
          {
            name: "David Kim",
            location: "North York",
            rating: 5,
            comment: "The basement transformation added significant value to our home. Professional project management and skilled craftspeople throughout.",
            date: "2024-10-15"
          },
          {
            name: "Sandra Rodriguez",
            location: "Etobicoke",
            rating: 5,
            comment: "Three bathroom renovation was completed on time and on budget. The attention to detail and material quality is exceptional.",
            date: "2024-11-08"
          }
        ]}
        className="py-20"
      />

      {/* Quote Form */}
      <LeadForm
        title="Get Your Renovation Quote"
        description="Tell us about your renovation vision and we'll provide a detailed quote with ROI projections for your Toronto property."
        fields={[
          { name: "name", label: "Full Name", type: "text", required: true },
          { name: "email", label: "Email Address", type: "email", required: true },
          { name: "phone", label: "Phone Number", type: "tel", required: true },
          { name: "address", label: "Property Address", type: "text", required: true },
          { name: "renovation_type", label: "Renovation Type", type: "select", required: true, options: [
            "Kitchen Renovation",
            "Bathroom Renovation", 
            "Basement Finishing",
            "Home Addition",
            "Full Home Renovation",
            "Multiple Rooms",
            "Other"
          ]},
          { name: "budget", label: "Estimated Budget", type: "select", required: false, options: [
            "Under $25,000",
            "$25,000 - $50,000",
            "$50,000 - $100,000",
            "$100,000 - $200,000",
            "Over $200,000"
          ]},
          { name: "timeline", label: "Desired Timeline", type: "select", required: false, options: [
            "ASAP",
            "Within 3 months",
            "3-6 months",
            "6-12 months",
            "Planning for next year"
          ]},
          { name: "message", label: "Project Details", type: "textarea", required: false }
        ]}
        ctaText="Get Free Quote & ROI Analysis"
        className="py-20 bg-impetus-gray-50 dark:bg-impetus-gray-800"
      />



      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Home?"
        description="Get a free design consultation and detailed quote with ROI projections for your Toronto property."
        primaryCTA={{
          text: "Schedule Free Consultation",
          href: "/consultation"
        }}
        secondaryCTA={{
          text: "Call (416) 123-4567",
          href: "tel:+14161234567"
        }}
        className="bg-gradient-to-r from-gold-400 to-gold-500 text-impetus-black"
      />
    </SiteShell>
  )
} 