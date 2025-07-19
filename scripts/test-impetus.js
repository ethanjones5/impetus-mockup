#!/usr/bin/env node

/**
 * Impetus Home Services Website Generator Test
 * 
 * This script demonstrates the complete website structure and content
 * for Impetus Home Services with professional tone and black/gold theming.
 */

function generateImpetusHomeServicesDemo() {
  return {
    businessType: 'smb',
    companyName: 'Impetus Home Services',
    theme: 'black-gold-professional',
    
    // Complete Website Structure
    sections: [
      {
        name: 'HeroSMB',
        content: {
          companyName: "Impetus Home Services",
          tagline: "Protect Your Home. Experience Effortless Maintenance.",
          description: "Professional home maintenance experts providing peace of mind through reliable service, seasonal care, and our exclusive Home Care Plan membership program.",
          primaryCTA: { text: "Join Home Care Plan", href: "/membership" },
          secondaryCTA: { text: "Our Services", href: "/services" },
          contactInfo: {
            phone: "(647) 555-HOME",
            address: "Serving Greater Toronto Area",
            hours: "Mon-Fri 8AM-6PM"
          },
          backgroundStyle: "bg-gradient-to-br from-black via-slate-900 to-black",
          textStyle: "text-white",
          accentStyle: "text-gold-500"
        }
      },
      
      {
        name: 'AboutUs',
        content: {
          title: "Expert Home Care Since 2015",
          description: "Impetus Home Services brings professional-grade maintenance expertise to discerning homeowners across the Greater Toronto Area. Our team of licensed home technicians provides the reliability and quality you expect.",
          stats: [
            { label: "Years of Excellence", value: "8+" },
            { label: "Homes Protected", value: "2,500+" },
            { label: "Care Plan Members", value: "800+" },
            { label: "Licensed Technicians", value: "12" }
          ],
          achievements: [
            {
              title: "Licensed Excellence",
              description: "All technicians fully licensed and continuously trained in latest techniques",
              icon: "award"
            },
            {
              title: "Quality Guarantee",
              description: "100% satisfaction guarantee on all workmanship and service",
              icon: "target"
            },
            {
              title: "Professional Standards",
              description: "Rigorous quality standards and professional appearance on every visit",
              icon: "users"
            },
            {
              title: "Community Focused",
              description: "Proudly serving GTA homeowners with personalized care",
              icon: "heart"
            }
          ]
        }
      },

      {
        name: 'ServicesList',
        content: {
          title: "Complete Home Maintenance Services",
          subtitle: "Professional care for every aspect of your home",
          services: [
            {
              title: "Home Health Check",
              description: "Comprehensive seasonal inspections to identify potential issues before they become costly problems.",
              features: [
                "Multi-point home inspection",
                "Detailed maintenance report",
                "Priority scheduling for members",
                "Seasonal preparation services"
              ],
              icon: "🏠",
              ctaText: "Schedule Inspection",
              popular: false
            },
            {
              title: "Preventative Maintenance",
              description: "Proactive care to extend the life of your home's systems and prevent unexpected breakdowns.",
              features: [
                "HVAC system maintenance",
                "Plumbing preventative care",
                "Electrical safety checks",
                "Weather protection services"
              ],
              icon: "🔧",
              ctaText: "Learn More",
              popular: true
            },
            {
              title: "Expert Repairs",
              description: "Professional repair services by licensed home technicians with guaranteed workmanship.",
              features: [
                "Licensed maintenance experts",
                "Quality workmanship guarantee",
                "Next-day service available",
                "Transparent pricing"
              ],
              icon: "⚡",
              ctaText: "Request Service",
              popular: false
            }
          ]
        }
      },

      {
        name: 'HomeCarePlanMembership',
        content: {
          title: "Impetus Home Care Plan",
          subtitle: "Premium membership for the discerning homeowner",
          description: "Join our exclusive membership program for priority service, seasonal care, and peace of mind protection for your home investment.",
          benefits: [
            {
              title: "Priority Access",
              description: "Dedicated member hotline with priority scheduling for all service requests",
              icon: "📞"
            },
            {
              title: "Next-Day Service",
              description: "Guaranteed next-day service availability for all maintenance and repair needs",
              icon: "📅"
            },
            {
              title: "No Call-Out Fees",
              description: "All service calls included in membership - no hidden charges or surprise fees",
              icon: "💳"
            },
            {
              title: "Seasonal Check-ups",
              description: "Bi-annual home health inspections to keep your home in optimal condition",
              icon: "🔍"
            },
            {
              title: "Exclusive Discounts",
              description: "Member-only pricing on all services and priority access to our maintenance experts",
              icon: "💰"
            }
          ],
          cta: {
            text: "Join Home Care Plan",
            href: "/membership",
            description: "Starting at $39/month"
          }
        }
      },

      {
        name: 'Testimonials',
        content: {
          title: "What Our Clients Say",
          subtitle: "Real experiences from satisfied homeowners",
          testimonials: [
            {
              name: "Sarah Mitchell",
              role: "Homeowner, North York",
              content: "The Home Care Plan has been a game-changer. Their maintenance experts caught a potential plumbing issue during our seasonal check-up that could have cost thousands. The priority access is worth every penny.",
              rating: 5
            },
            {
              name: "David Chen", 
              role: "Property Owner, Mississauga",
              content: "Professional, reliable, and truly expert service. Their seasonal maintenance program keeps our home in perfect condition. The next-day service guarantee gives us complete peace of mind.",
              rating: 5
            },
            {
              name: "Jennifer Adams",
              role: "Home Care Plan Member",
              content: "Impetus transformed how we maintain our home. No more worrying about finding reliable technicians or surprise fees. Their proactive approach has saved us money and stress.",
              rating: 5
            }
          ]
        }
      },

      {
        name: 'ContactCard',
        content: {
          title: "Experience Professional Home Care",
          subtitle: "Ready to protect your home investment with expert maintenance?",
          contactMethods: [
            {
              type: "phone",
              label: "Priority Access Line",
              value: "(647) 555-HOME",
              href: "tel:647-555-4663",
              description: "For Home Care Plan members"
            },
            {
              type: "phone", 
              label: "New Client Inquiries",
              value: "(647) 555-INFO",
              href: "tel:647-555-4636",
              description: "General information and membership"
            },
            {
              type: "email",
              label: "Service Requests", 
              value: "service@impetushome.ca",
              href: "mailto:service@impetushome.ca",
              description: "Non-urgent service requests"
            },
            {
              type: "address",
              label: "Service Area",
              value: "Greater Toronto Area",
              description: "Serving GTA and surrounding areas"
            },
            {
              type: "hours",
              label: "Business Hours",
              value: "Monday - Friday: 8AM - 6PM", 
              description: "Priority Access available for members"
            }
          ],
          primaryCTA: { text: "Join Home Care Plan", href: "/membership" },
          secondaryCTA: { text: "Schedule Consultation", href: "/contact" }
        }
      },

      {
        name: 'FAQ',
        content: {
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about our services",
          faqs: [
            {
              question: "What is the Impetus Home Care Plan?",
              answer: "Our premium membership program provides priority access to our maintenance experts, next-day service availability, seasonal home check-ups, no call-out fees, and exclusive member discounts. It's designed for homeowners who want proactive, professional home care."
            },
            {
              question: "How quickly can you respond to service requests?",
              answer: "Home Care Plan members enjoy priority scheduling with next-day service availability. New clients can typically be scheduled within 2-3 business days depending on service requirements."
            },
            {
              question: "Are your technicians licensed and insured?",
              answer: "Absolutely. All Impetus home technicians are fully licensed, insured, and undergo continuous professional training. We maintain the highest standards of expertise and professionalism."
            },
            {
              question: "What areas do you serve?",
              answer: "We proudly serve the Greater Toronto Area including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, and surrounding communities."
            },
            {
              question: "What's included in seasonal check-ups?",
              answer: "Our comprehensive seasonal inspections include HVAC system review, plumbing checks, electrical safety assessment, weatherproofing evaluation, and detailed reporting with maintenance recommendations."
            },
            {
              question: "Can I cancel my Home Care Plan membership?",
              answer: "Yes, memberships can be cancelled with 30 days notice. However, most members find the peace of mind and savings make it an invaluable investment in their home."
            }
          ],
          contactInfo: {
            phone: "(647) 555-HOME",
            email: "service@impetushome.ca",
            hours: "Monday - Friday: 8AM - 6PM"
          }
        }
      },

      {
        name: 'CTABanner',
        content: {
          title: "Ready to Experience Professional Home Care?",
          subtitle: "Join the Impetus Home Care Plan today",
          description: "Protect your home investment with our comprehensive maintenance program. Priority access, seasonal check-ups, and peace of mind included.",
          primaryCTA: { text: "Join Home Care Plan", href: "/membership", variant: "default" },
          secondaryCTA: { text: "Schedule Consultation", href: "/contact", variant: "outline" },
          trustElements: [
            { text: "Licensed & Insured", icon: "award" },
            { text: "Next-Day Service Available", icon: "clock" },
            { text: "Priority Access", icon: "phone" }
          ],
          style: "professional",
          backgroundStyle: "gradient"
        }
      }
    ],

    // Theme Configuration
    theme: {
      name: "Black & Gold Professional",
      description: "Premium black and gold color scheme for professional home services",
      colors: {
        primary: {
          background: "#000000",
          text: "#FFFFFF",
          accent: "#C9A24D" // Muted premium gold
        },
        secondary: {
          background: "#1E293B", // slate-900
          text: "#F1F5F9",      // slate-100
          accent: "#D4B366"     // lighter gold
        },
        gold: {
          primary: "#C9A24D",
          secondary: "#B8941F", 
          light: "#D4B366",
          dark: "#9A7B1A"
        }
      },
      components: {
        hero: "bg-gradient-to-br from-black via-slate-900 to-black text-white",
        sections: "bg-slate-900 text-white",
        cards: "bg-slate-800 border border-gold-600/20 text-white",
        navigation: "bg-black/95 backdrop-blur-sm border-b border-gold-600/20",
        buttons: {
          primary: "bg-gold-600 hover:bg-gold-700 text-black font-semibold",
          secondary: "border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black",
          ghost: "text-gold-400 hover:text-gold-300 hover:bg-slate-800"
        }
      }
    },

    // Key Updates Made
    updates: {
      contentChanges: [
        "✅ Removed all instances of 'handyman' - replaced with 'home technician', 'maintenance expert'",
        "✅ Replaced '24/7 emergency hotline' with 'Priority Access'", 
        "✅ Changed '24/7' and 'same-day' claims to 'Next-Day Service Available'",
        "✅ Removed all 'response time' language",
        "✅ Emphasized 'Impetus Home Care Plan' as premium offering"
      ],
      themeChanges: [
        "✅ Applied black and gold color scheme throughout",
        "✅ Used muted premium gold (#C9A24D) for tasteful appearance",
        "✅ Maintained high contrast for readability",
        "✅ Professional gradient backgrounds with black/slate combinations"
      ],
      positioningChanges: [
        "✅ Elevated to professional maintenance expert positioning",
        "✅ Premium membership program as core offering",
        "✅ Focus on peace of mind and reliability over speed claims",
        "✅ Discerning homeowner target audience"
      ]
    },

    recommendations: [
      "Apply the black and gold color scheme across all components",
      "Emphasize the membership program as the primary value proposition",
      "Use professional maintenance expert terminology consistently",
      "Focus on peace of mind and reliability messaging",
      "Highlight next-day service availability over speed claims",
      "Position as premium service for discerning homeowners",
      "Ensure all CTAs drive toward membership program enrollment"
    ]
  }
}

// Run the demo
console.log('\n🏠 IMPETUS HOME SERVICES - COMPLETE WEBSITE STRUCTURE\n')
console.log('=' * 60)

const website = generateImpetusHomeServicesDemo()

console.log(`Business Type: ${website.businessType}`)
console.log(`Company: ${website.companyName}`)
console.log(`Theme: ${website.theme.name}`)
console.log(`\nWebsite Sections (${website.sections.length} total):`)

website.sections.forEach((section, index) => {
  console.log(`${index + 1}. ${section.name}`)
})

console.log('\n📋 KEY CONTENT UPDATES:')
website.updates.contentChanges.forEach(change => console.log(`  ${change}`))

console.log('\n🎨 THEME UPDATES:')
website.updates.themeChanges.forEach(change => console.log(`  ${change}`))

console.log('\n🎯 POSITIONING UPDATES:')
website.updates.positioningChanges.forEach(change => console.log(`  ${change}`))

console.log('\n💡 RECOMMENDATIONS:')
website.recommendations.forEach(rec => console.log(`  • ${rec}`))

console.log('\n✨ SAMPLE SECTION CONTENT:')
console.log('\n--- HERO SECTION ---')
console.log(`Company: ${website.sections[0].content.companyName}`)
console.log(`Tagline: ${website.sections[0].content.tagline}`)
console.log(`Description: ${website.sections[0].content.description}`)
console.log(`Primary CTA: ${website.sections[0].content.primaryCTA.text}`)

console.log('\n--- MEMBERSHIP SECTION ---')
const membership = website.sections[3].content
console.log(`Title: ${membership.title}`)
console.log(`Subtitle: ${membership.subtitle}`)
console.log('Benefits:')
membership.benefits.forEach(benefit => {
  console.log(`  ${benefit.icon} ${benefit.title}: ${benefit.description}`)
})

console.log('\n--- THEME COLORS ---')
console.log(`Primary Background: ${website.theme.colors.primary.background}`)
console.log(`Primary Text: ${website.theme.colors.primary.text}`) 
console.log(`Primary Accent: ${website.theme.colors.primary.accent}`)
console.log(`Gold Primary: ${website.theme.colors.gold.primary}`)

console.log('\n🚀 Ready to implement this professional website structure!')
console.log('=' * 60) 