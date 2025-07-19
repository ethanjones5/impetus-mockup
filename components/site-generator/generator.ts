// Business Type Configurations
export type BusinessType = 'saas' | 'smb' | 'agency' | 'ecom' | 'landing' | 'business' | 'portfolio'
export type CreativityLevel = 'low' | 'medium' | 'high'
export type SiteGoal = 'conversion' | 'trust' | 'engagement' | 'information' | 'credibility'

export interface SiteGenerationConfig {
  businessType: BusinessType
  creativityLevel: CreativityLevel
  goal: SiteGoal
  companyName?: string
  industry?: string
  targetAudience?: string
  keyFeatures?: string[]
  customRequirements?: string[]
}

export interface ComponentConfig {
  id: string
  name: string
  category: 'core' | 'optional' | 'conditional'
  variants?: Record<string, any>
  conditions?: {
    businessType?: BusinessType[]
    goal?: SiteGoal[]
    creativityLevel?: CreativityLevel[]
    minFeatures?: number
    customLogic?: (config: SiteGenerationConfig) => boolean
  }
}

export interface SectionOrder {
  components: ComponentConfig[]
  totalSections: number
}

// SaaS Component Configurations
export const saasComponents: ComponentConfig[] = [
  {
    id: 'hero',
    name: 'HeroSaaS',
    category: 'core',
    variants: {
      backgroundPattern: ['dots', 'grid', 'none'],
      ctaVariants: ['default', 'outline']
    }
  },
  {
    id: 'features',
    name: 'FeaturesGrid',
    category: 'core',
    variants: {
      columns: [2, 3, 4],
      columnSelection: (featureCount: number) => {
        if (featureCount <= 4) return 2
        if (featureCount <= 6) return 3
        return 4
      }
    }
  },
  {
    id: 'usecases',
    name: 'UseCases',
    category: 'core',
    conditions: {
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
    category: 'core',
    conditions: {
      goal: ['trust', 'credibility', 'conversion']
    }
  },
  {
    id: 'pricing',
    name: 'PricingTiers',
    category: 'core',
    variants: {
      tierCount: [2, 3, 4],
      highlightPopular: true
    }
  },
  {
    id: 'faq',
    name: 'FAQAccordion',
    category: 'core'
  },
  {
    id: 'leadform',
    name: 'LeadCaptureForm',
    category: 'core',
    conditions: {
      goal: ['conversion', 'engagement']
    }
  },
  {
    id: 'cta',
    name: 'CTABanner',
    category: 'core'
  },
  {
    id: 'brandlogos',
    name: 'BrandLogos',
    category: 'conditional',
    conditions: {
      goal: ['trust', 'credibility'],
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'stats',
    name: 'StatsSection',
    category: 'conditional',
    conditions: {
      goal: ['trust', 'credibility'],
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'video',
    name: 'VideoSection',
    category: 'optional',
    conditions: {
      creativityLevel: ['high'],
      goal: ['engagement', 'conversion']
    }
  },
  {
    id: 'whyus',
    name: 'WhyUs',
    category: 'optional',
    conditions: {
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'team',
    name: 'TeamSection',
    category: 'optional',
    conditions: {
      goal: ['trust', 'credibility'],
      creativityLevel: ['high']
    }
  },
  {
    id: 'newsletter',
    name: 'NewsletterSignup',
    category: 'optional',
    conditions: {
      goal: ['engagement'],
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'contact',
    name: 'ContactOptions',
    category: 'optional',
    conditions: {
      creativityLevel: ['high']
    }
  },
  {
    id: 'social',
    name: 'SocialLinks',
    category: 'optional'
  }
]

// SMB Component Configurations
export const smbComponents: ComponentConfig[] = [
  {
    id: 'hero',
    name: 'HeroSMB',
    category: 'core',
    variants: {
      backgroundImage: [true, false],
      contactInfo: {
        phone: true,
        address: true,
        hours: true
      }
    }
  },
  {
    id: 'about',
    name: 'AboutUs',
    category: 'core',
    conditions: {
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'services',
    name: 'ServicesList',
    category: 'core',
    variants: {
      layout: ['auto', 'grid', 'list'],
      showPricing: [true, false]
    }
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
    category: 'core',
    variants: {
      layout: ['grid', 'featured'],
      showImages: [true, false],
      showProjectDetails: [true, false]
    },
    conditions: {
      goal: ['trust', 'credibility', 'conversion']
    }
  },
  {
    id: 'contact',
    name: 'ContactCard',
    category: 'core',
    variants: {
      showMap: [true, false],
      emergencyContact: [true, false]
    }
  },
  {
    id: 'leadform',
    name: 'LeadForm',
    category: 'core',
    conditions: {
      goal: ['conversion', 'engagement']
    }
  },
  {
    id: 'faq',
    name: 'FAQ',
    category: 'core'
  },
  {
    id: 'cta',
    name: 'CTABanner',
    category: 'core',
    variants: {
      style: ['standard', 'urgent', 'professional', 'friendly'],
      backgroundStyle: ['solid', 'gradient', 'image']
    }
  },
  {
    id: 'gallery',
    name: 'Gallery',
    category: 'conditional',
    variants: {
      layout: ['auto', 'grid', 'carousel'],
      showLightbox: [true, false]
    },
    conditions: {
      creativityLevel: ['high'],
             customLogic: (config) => {
         const industry = config.industry?.toLowerCase() || ''
         return industry.includes('construction') || 
                industry.includes('landscaping') ||
                industry.includes('renovation')
       }
    }
  },
  {
    id: 'servicemap',
    name: 'ServiceAreaMap',
    category: 'conditional',
    conditions: {
      creativityLevel: ['medium', 'high'],
             customLogic: (config) => {
         const audience = config.targetAudience?.toLowerCase() || ''
         return audience.includes('local')
       }
    }
  },
  {
    id: 'stats',
    name: 'StatsBlock',
    category: 'conditional',
    variants: {
      layout: ['grid', 'row'],
      animated: [true, false]
    },
    conditions: {
      goal: ['trust', 'credibility'],
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'guarantees',
    name: 'Guarantees',
    category: 'conditional',
    variants: {
      layout: ['grid', 'cards'],
      showBadges: [true, false]
    },
    conditions: {
      goal: ['trust', 'credibility'],
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'process',
    name: 'ProcessSteps',
    category: 'optional',
    variants: {
      layout: ['vertical', 'horizontal'],
      showConnectors: [true, false]
    },
    conditions: {
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'team',
    name: 'TeamGrid',
    category: 'optional',
    variants: {
      layout: ['grid', 'cards'],
      showContact: [true, false],
      showCertifications: [true, false]
    },
    conditions: {
      goal: ['trust', 'credibility'],
      creativityLevel: ['high']
    }
  },
  {
    id: 'socialproof',
    name: 'SocialProof',
    category: 'optional',
    variants: {
      showReviews: [true, false],
      showBadges: [true, false],
      showAchievements: [true, false]
    },
    conditions: {
      goal: ['trust', 'credibility'],
      creativityLevel: ['medium', 'high']
    }
  },
  {
    id: 'newsletter',
    name: 'NewsletterCapture',
    category: 'optional',
    variants: {
      layout: ['inline', 'card', 'banner'],
      showBenefits: [true, false]
    },
    conditions: {
      goal: ['engagement'],
      creativityLevel: ['medium', 'high']
    }
  }
]

// Business Type Configurations (Extensible)
export const businessTypeConfigs: Record<BusinessType, {
  defaultComponents: string[]
  sectionRange: { min: number; max: number }
  preferredOrder: string[]
  specialLogic?: (config: SiteGenerationConfig) => string[]
}> = {
  saas: {
    defaultComponents: ['hero', 'features', 'usecases', 'testimonials', 'pricing', 'faq', 'leadform', 'cta'],
    sectionRange: { min: 6, max: 12 },
    preferredOrder: ['hero', 'brandlogos', 'features', 'usecases', 'stats', 'testimonials', 'video', 'whyus', 'pricing', 'faq', 'team', 'leadform', 'newsletter', 'contact', 'cta', 'social'],
    specialLogic: (config) => {
      const sections = ['hero', 'features', 'pricing', 'cta'] // Always include these
      
      // Add based on goal
      if (config.goal === 'trust' || config.goal === 'credibility') {
        sections.push('testimonials', 'brandlogos', 'stats')
      }
      
      // Add based on creativity
      if (config.creativityLevel === 'high') {
        sections.push('usecases', 'video', 'team', 'whyus')
      } else if (config.creativityLevel === 'medium') {
        sections.push('usecases', 'testimonials')
      }
      
      // Always end with conversion elements
      sections.push('faq', 'leadform')
      
      return sections
    }
  },
  smb: {
    defaultComponents: ['hero', 'services', 'testimonials', 'contact', 'leadform', 'faq', 'cta'],
    sectionRange: { min: 4, max: 12 },
    preferredOrder: ['hero', 'about', 'services', 'gallery', 'testimonials', 'stats', 'guarantees', 'process', 'team', 'socialproof', 'servicemap', 'contact', 'leadform', 'faq', 'newsletter', 'cta'],
    specialLogic: (config) => {
      const sections = ['hero', 'services', 'cta'] // Always include these core sections
      
      // Add based on goal
      if (config.goal === 'trust' || config.goal === 'credibility') {
        sections.push('testimonials', 'guarantees', 'stats', 'socialproof')
      }
      
      if (config.goal === 'conversion' || config.goal === 'engagement') {
        sections.push('leadform', 'contact', 'newsletter')
      }
      
      // Add based on creativity level
      if (config.creativityLevel === 'high') {
        sections.push('about', 'gallery', 'process', 'team', 'servicemap')
      } else if (config.creativityLevel === 'medium') {
        sections.push('about', 'process', 'testimonials')
      }
      
      // Always include FAQ
      sections.push('faq')
      
      return sections
    }
  },
  agency: {
    defaultComponents: ['hero', 'features', 'usecases', 'team', 'testimonials', 'contact'],
    sectionRange: { min: 5, max: 10 },
    preferredOrder: ['hero', 'features', 'usecases', 'testimonials', 'team', 'stats', 'contact', 'cta']
  },
  ecom: {
    defaultComponents: ['hero', 'features', 'testimonials', 'cta'],
    sectionRange: { min: 4, max: 7 },
    preferredOrder: ['hero', 'features', 'testimonials', 'stats', 'cta']
  },
  landing: {
    defaultComponents: ['hero', 'features', 'testimonials', 'leadform', 'cta'],
    sectionRange: { min: 4, max: 6 },
    preferredOrder: ['hero', 'features', 'testimonials', 'leadform', 'cta']
  },
  business: {
    defaultComponents: ['hero', 'features', 'team', 'contact'],
    sectionRange: { min: 4, max: 7 },
    preferredOrder: ['hero', 'features', 'team', 'testimonials', 'contact']
  },
  portfolio: {
    defaultComponents: ['hero', 'features', 'testimonials', 'contact'],
    sectionRange: { min: 3, max: 6 },
    preferredOrder: ['hero', 'features', 'testimonials', 'contact']
  }
}

// Component Selection Logic
export function selectComponents(config: SiteGenerationConfig): ComponentConfig[] {
  const businessConfig = businessTypeConfigs[config.businessType]
  const availableComponents = config.businessType === 'saas' ? saasComponents :
                             config.businessType === 'smb' ? smbComponents : []
  
  // Use special logic if available
  let selectedComponentIds: string[]
  if (businessConfig.specialLogic) {
    selectedComponentIds = businessConfig.specialLogic(config)
  } else {
    selectedComponentIds = [...businessConfig.defaultComponents]
  }
  
  // Filter components based on conditions
  const filteredComponents = availableComponents.filter(comp => {
    // Always include if it's in selected list
    if (selectedComponentIds.includes(comp.id)) {
      return true
    }
    
    // Check conditions for optional/conditional components
    if (comp.conditions) {
      const { businessType, goal, creativityLevel, customLogic } = comp.conditions
      
      if (businessType && !businessType.includes(config.businessType)) return false
      if (goal && !goal.includes(config.goal)) return false
      if (creativityLevel && !creativityLevel.includes(config.creativityLevel)) return false
      if (customLogic && !customLogic(config)) return false
    }
    
    return comp.category === 'optional' && config.creativityLevel === 'high'
  })
  
  // Determine section count based on creativity level
  const { min, max } = businessConfig.sectionRange
  let targetSections: number
  
  switch (config.creativityLevel) {
    case 'low':
      targetSections = min
      break
    case 'medium':
      targetSections = Math.floor((min + max) / 2)
      break
    case 'high':
      targetSections = max
      break
  }
  
  // Sort components by preferred order
  const orderedComponents = filteredComponents.sort((a, b) => {
    const aIndex = businessConfig.preferredOrder.indexOf(a.id)
    const bIndex = businessConfig.preferredOrder.indexOf(b.id)
    
    if (aIndex === -1 && bIndex === -1) return 0
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    
    return aIndex - bIndex
  })
  
  // Return the target number of sections
  return orderedComponents.slice(0, targetSections)
}

// Generate variant configuration
export function generateVariantConfig(component: ComponentConfig, config: SiteGenerationConfig): Record<string, any> {
  const variants: Record<string, any> = {}
  
  if (!component.variants) return variants
  
  // Handle specific component logic
  switch (component.id) {
    case 'features':
      const featureCount = config.keyFeatures?.length || 6
      if (component.variants.columnSelection) {
        variants.columns = component.variants.columnSelection(featureCount)
      }
      break
      
    case 'hero':
      if (config.businessType === 'saas') {
        variants.backgroundPattern = config.creativityLevel === 'high' ? 'dots' : 'grid'
      } else if (config.businessType === 'smb') {
        variants.backgroundImage = config.creativityLevel === 'high'
        variants.contactInfo = {
          phone: true,
          address: true,
          hours: true
        }
      }
      break
      
    case 'pricing':
      variants.tierCount = config.creativityLevel === 'low' ? 2 : 3
      variants.highlightPopular = true
      break
      
    case 'services':
      const serviceCount = config.keyFeatures?.length || 3
      variants.layout = serviceCount <= 3 ? 'grid' : 'auto'
      variants.showPricing = config.goal === 'conversion'
      break
      
    case 'testimonials':
      if (config.businessType === 'smb') {
        variants.layout = config.creativityLevel === 'high' ? 'featured' : 'grid'
        variants.showImages = true
        variants.showProjectDetails = config.creativityLevel === 'high'
      }
      break
      
    case 'gallery':
      variants.layout = config.creativityLevel === 'high' ? 'carousel' : 'grid'
      variants.showLightbox = true
      break
      
    case 'stats':
      variants.layout = config.creativityLevel === 'high' ? 'row' : 'grid'
      variants.animated = config.creativityLevel === 'high'
      break
      
    case 'guarantees':
      variants.layout = config.creativityLevel === 'high' ? 'cards' : 'grid'
      variants.showBadges = true
      break
      
    case 'process':
      variants.layout = config.creativityLevel === 'high' ? 'horizontal' : 'vertical'
      variants.showConnectors = true
      break
      
    case 'team':
      variants.layout = config.creativityLevel === 'high' ? 'cards' : 'grid'
      variants.showContact = config.goal === 'conversion'
      variants.showCertifications = config.goal === 'trust' || config.goal === 'credibility'
      break
      
    case 'socialproof':
      variants.showReviews = true
      variants.showBadges = config.goal === 'trust' || config.goal === 'credibility'
      variants.showAchievements = config.creativityLevel === 'high'
      break
      
    case 'newsletter':
      variants.layout = config.creativityLevel === 'high' ? 'card' : 'inline'
      variants.showBenefits = true
      break
      
    case 'contact':
      variants.showMap = config.creativityLevel === 'high'
      variants.emergencyContact = config.industry?.toLowerCase().includes('emergency') || false
      break
      
    case 'cta':
      if (config.businessType === 'smb') {
        variants.style = config.goal === 'conversion' ? 'urgent' : 'standard'
        variants.backgroundStyle = config.creativityLevel === 'high' ? 'gradient' : 'solid'
      }
      break
  }
  
  return variants
}

// Main Website Generation Function
export function generateCompleteWebsite(config: SiteGenerationConfig) {
  // Select components based on configuration
  const selectedComponents = selectComponents(config)
  
  // Generate component configurations with variants
  const componentConfigs = selectedComponents.map(comp => ({
    ...comp,
    variants: generateVariantConfig(comp, config)
  }))
  
  // Generate site structure
  const structure = {
    businessType: config.businessType,
    creativityLevel: config.creativityLevel,
    goal: config.goal,
    components: componentConfigs,
    totalSections: componentConfigs.length,
    metadata: {
      companyName: config.companyName || 'Your Company',
      industry: config.industry || 'Technology',
      targetAudience: config.targetAudience || 'Businesses',
      keyFeatures: config.keyFeatures || []
    }
  }
  
  return {
    config,
    structure,
    recommendations: generateRecommendations(config, componentConfigs)
  }
}

// Generate recommendations for the site
function generateRecommendations(config: SiteGenerationConfig, components: ComponentConfig[]): string[] {
  const recommendations: string[] = []
  
  if (config.businessType === 'saas') {
    recommendations.push('Consider A/B testing your pricing section for optimal conversion')
    recommendations.push('Add social proof early in the user journey')
    
    if (!components.find(c => c.id === 'testimonials')) {
      recommendations.push('Adding testimonials could increase trust and conversion rates')
    }
    
    if (!components.find(c => c.id === 'video')) {
      recommendations.push('Consider adding a product demo video for better engagement')
    }
  }
  
  if (config.businessType === 'smb') {
    recommendations.push('Include local SEO keywords to attract nearby customers')
    recommendations.push('Display your business hours and contact information prominently')
    
    if (!components.find(c => c.id === 'testimonials')) {
      recommendations.push('Customer testimonials are crucial for local businesses - add them to build trust')
    }
    
    if (!components.find(c => c.id === 'gallery')) {
      const visualIndustries = ['construction', 'landscaping', 'renovation', 'interior design', 'restaurant']
      const isVisualIndustry = visualIndustries.some(industry => 
        config.industry?.toLowerCase().includes(industry)
      )
      if (isVisualIndustry) {
        recommendations.push('Add a gallery to showcase your work - visual proof is powerful for your industry')
      }
    }
    
    if (!components.find(c => c.id === 'servicemap')) {
      recommendations.push('Consider adding a service area map to clearly show where you operate')
    }
    
    if (!components.find(c => c.id === 'guarantees')) {
      recommendations.push('Service guarantees can differentiate you from competitors and reduce customer risk')
    }
    
    if (!components.find(c => c.id === 'process')) {
      recommendations.push('Explain your process to help customers understand what to expect')
    }
    
    if (config.goal === 'trust' && !components.find(c => c.id === 'team')) {
      recommendations.push('Show your team to add a personal touch and build local connections')
    }
  }
  
  if (config.goal === 'conversion' && !components.find(c => c.id === 'leadform')) {
    recommendations.push('Add a lead capture form to maximize conversions')
  }
  
  if (config.creativityLevel === 'low') {
    recommendations.push('Consider increasing creativity level for more engaging sections')
  }
  
  return recommendations
}

// Legacy template interface for backward compatibility
export interface SiteTemplate {
  name: string
  description: string
  type: BusinessType
  components: string[]
  pages: string[]
  features: string[]
}

export const siteTemplates: SiteTemplate[] = [
  {
    name: "Modern Landing Page",
    description: "High-converting landing page with hero section, features, and CTA",
    type: "landing",
    components: ["Spotlight", "MovingBorder", "Card", "Button"],
    pages: ["Hero", "Features", "Testimonials", "CTA", "Footer"],
    features: ["Responsive Design", "Dark Mode", "Smooth Animations", "SEO Optimized"]
  },
  {
    name: "Business Website",
    description: "Professional business website with services and about sections",
    type: "business",
    components: ["Navigation", "Card", "Button", "Dropdown"],
    pages: ["Home", "About", "Services", "Contact", "Team"],
    features: ["Contact Forms", "Service Cards", "Team Profiles", "Company Info"]
  },
  {
    name: "Portfolio Site",
    description: "Creative portfolio to showcase your work and skills",
    type: "portfolio",
    components: ["Spotlight", "Card", "MovingBorder", "Gallery"],
    pages: ["Home", "Projects", "About", "Contact", "Blog"],
    features: ["Project Gallery", "Skills Section", "Resume Download", "Blog Integration"]
  },
  {
    name: "SaaS Application",
    description: "Complete SaaS landing page with pricing and feature sections",
    type: "saas",
    components: ["HeroSaaS", "FeaturesGrid", "PricingTiers", "Testimonials", "LeadCaptureForm"],
    pages: ["Home", "Features", "Pricing", "Documentation", "Dashboard"],
    features: ["Pricing Tables", "Feature Comparison", "Lead Generation", "Social Proof"]
  },
  {
    name: "E-commerce Store",
    description: "Online store with product listings and shopping cart",
    type: "ecom",
    components: ["Card", "Button", "Dropdown", "Navigation"],
    pages: ["Home", "Products", "Cart", "Checkout", "Account"],
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "User Accounts"]
  }
]

export function generateSiteStructure(template: SiteTemplate) {
  return {
    template,
    structure: {
      components: template.components.map(comp => ({
        name: comp,
        path: `components/${comp.toLowerCase()}`,
        type: template.components.includes(comp) ? 'aceternity' : 'shadcn'
      })),
      pages: template.pages.map(page => ({
        name: page,
        path: `app/${page.toLowerCase()}`,
        component: `${page}Page`
      })),
      config: {
        name: template.name,
        description: template.description,
        theme: "default",
        features: template.features
      }
    }
  }
}

export function getSiteTemplate(type: string): SiteTemplate | undefined {
  return siteTemplates.find(template => template.type === type)
}

// Demo Functions and Examples
export function createSaaSWebsiteDemo() {
  // Example 1: High-conversion SaaS site with trust focus
  const highConversionConfig: SiteGenerationConfig = {
    businessType: 'saas',
    creativityLevel: 'high',
    goal: 'conversion',
    companyName: 'InnovateSaaS',
    industry: 'Project Management',
    targetAudience: 'Small to Medium Businesses',
    keyFeatures: ['Task Management', 'Team Collaboration', 'Analytics Dashboard', 'API Integration', 'Mobile App', 'Real-time Sync', 'Custom Workflows', 'File Sharing']
  }

  // Example 2: Trust-focused SaaS site with medium creativity
  const trustFocusedConfig: SiteGenerationConfig = {
    businessType: 'saas',
    creativityLevel: 'medium',
    goal: 'trust',
    companyName: 'SecureData',
    industry: 'Data Security',
    targetAudience: 'Enterprise Companies',
    keyFeatures: ['End-to-End Encryption', 'Compliance Management', '24/7 Monitoring', 'Access Control']
  }

  // Example 3: Simple SaaS site with low creativity
  const simpleConfig: SiteGenerationConfig = {
    businessType: 'saas',
    creativityLevel: 'low',
    goal: 'information',
    companyName: 'SimpleTools',
    industry: 'Productivity',
    targetAudience: 'Individual Users',
    keyFeatures: ['Note Taking', 'Calendar Integration', 'Task Lists']
  }

  return {
    highConversion: generateCompleteWebsite(highConversionConfig),
    trustFocused: generateCompleteWebsite(trustFocusedConfig),
    simple: generateCompleteWebsite(simpleConfig)
  }
}

// Helper function to return website structure for development
export function getWebsiteStructureInfo(result: ReturnType<typeof generateCompleteWebsite>) {
  return {
    summary: {
      businessType: result.structure.businessType,
      creativityLevel: result.structure.creativityLevel,
      goal: result.structure.goal,
      totalSections: result.structure.totalSections
    },
    components: result.structure.components.map(comp => ({
      name: comp.name,
      id: comp.id,
      variants: comp.variants || {}
    })),
    recommendations: result.recommendations
  }
}

// Demo Functions and Examples for SMB
export function createSMBWebsiteDemo() {
  // Example 1: High-trust local service business
  const trustFocusedConfig: SiteGenerationConfig = {
    businessType: 'smb',
    creativityLevel: 'high',
    goal: 'trust',
    companyName: 'LocalPro Services',
    industry: 'Home Improvement',
    targetAudience: 'Local homeowners',
    keyFeatures: ['Licensed & Insured', '24/7 Emergency Service', 'Free Estimates', 'Satisfaction Guarantee', '15+ Years Experience']
  }

  // Example 2: Lead-generation focused contractor
  const leadFocusedConfig: SiteGenerationConfig = {
    businessType: 'smb',
    creativityLevel: 'medium',
    goal: 'conversion',
    companyName: 'Elite Construction',
    industry: 'Construction',
    targetAudience: 'Local property owners',
    keyFeatures: ['Custom Builds', 'Renovation', 'Commercial Projects', 'Residential Work']
  }

  // Example 3: Simple professional service
  const simpleConfig: SiteGenerationConfig = {
    businessType: 'smb',
    creativityLevel: 'low',
    goal: 'information',
    companyName: 'CityWide Accounting',
    industry: 'Accounting',
    targetAudience: 'Small businesses',
    keyFeatures: ['Tax Preparation', 'Bookkeeping', 'Payroll Services']
  }

  return {
    trustFocused: generateCompleteWebsite(trustFocusedConfig),
    leadFocused: generateCompleteWebsite(leadFocusedConfig),
    simple: generateCompleteWebsite(simpleConfig)
  }
}

// Quick test function
export function testSaaSGenerator() {
  const testConfig: SiteGenerationConfig = {
    businessType: 'saas',
    creativityLevel: 'high',
    goal: 'conversion',
    companyName: 'TestSaaS',
    keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6', 'Feature 7', 'Feature 8']
  }
  
  const result = generateCompleteWebsite(testConfig)
  // Use getWebsiteStructureInfo(result) for development debugging
  
  return result
}

// Quick test function for SMB
export function testSMBGenerator() {
  const testConfig: SiteGenerationConfig = {
    businessType: 'smb',
    creativityLevel: 'high',
    goal: 'trust',
    companyName: 'TestSMB',
    industry: 'Construction',
    targetAudience: 'Local homeowners',
    keyFeatures: ['Licensed & Insured', 'Free Estimates', '24/7 Service', 'Satisfaction Guarantee']
  }
  
  const result = generateCompleteWebsite(testConfig)
  // Use getWebsiteStructureInfo(result) for development debugging
  
  return result
}

// IMPETUS HOME SERVICES GENERATOR
export function generateImpetusHomeServices() {
  const impetusConfig: SiteGenerationConfig = {
    businessType: 'smb',
    creativityLevel: 'high',
    goal: 'trust',
    companyName: 'Impetus Home Services',
    industry: 'Home Maintenance',
    targetAudience: 'Professional homeowners',
    keyFeatures: [
      'Licensed & Insured Home Technicians',
      'Impetus Home Care Plan Membership',
      'Next-Day Service Available',
      'Seasonal Home Check-ups',
      'No Call-Out Fees for Members',
      'Priority Access Scheduling'
    ],
    customRequirements: [
      'Black and gold professional theme',
      'Premium positioning',
      'Membership program focus',
      'Professional maintenance expert branding'
    ]
  }

  // Generate the base structure
  const baseResult = generateCompleteWebsite(impetusConfig)

  // Create custom content for Impetus Home Services
  const impetusContent = {
    // Hero Section
    hero: {
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
      theme: {
        background: "bg-gradient-to-br from-black via-slate-900 to-black",
        accent: "text-gold-500",
        highlight: "text-gold-400"
      }
    },

    // Services Section
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
    ],

    // Membership Section (Impetus Home Care Plan)
    membership: {
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
    },

    // About Section
    about: {
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
    },

    // Testimonials
    testimonials: [
      {
        name: "Sarah Mitchell",
        role: "Homeowner, North York",
        content: "The Home Care Plan has been a game-changer. Their maintenance experts caught a potential plumbing issue during our seasonal check-up that could have cost thousands. The priority access is worth every penny.",
        rating: 5,
        image: "/testimonials/sarah.jpg"
      },
      {
        name: "David Chen",
        role: "Property Owner, Mississauga",
        content: "Professional, reliable, and truly expert service. Their seasonal maintenance program keeps our home in perfect condition. The next-day service guarantee gives us complete peace of mind.",
        rating: 5,
        image: "/testimonials/david.jpg"
      },
      {
        name: "Jennifer Adams",
        role: "Home Care Plan Member",
        content: "Impetus transformed how we maintain our home. No more worrying about finding reliable technicians or surprise fees. Their proactive approach has saved us money and stress.",
        rating: 5,
        image: "/testimonials/jennifer.jpg"
      }
    ],

    // Contact Information
    contact: {
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
    },

    // FAQ Section
    faq: [
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

    // Theme Configuration
    theme: {
      primary: {
        background: "bg-black",
        text: "text-white",
        accent: "text-gold-500"
      },
      secondary: {
        background: "bg-slate-900",
        text: "text-slate-100", 
        accent: "text-gold-400"
      },
      gold: {
        primary: "#C9A24D", // Muted premium gold
        secondary: "#B8941F",
        light: "#D4B366",
        dark: "#9A7B1A"
      },
      buttons: {
        primary: "bg-gold-600 hover:bg-gold-700 text-black font-semibold",
        secondary: "border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black",
        accent: "bg-black hover:bg-slate-800 text-gold-400 border border-gold-500"
      }
    }
  }

  return {
    config: impetusConfig,
    structure: baseResult.structure,
    content: impetusContent,
    recommendations: [
      "Apply black and gold color scheme throughout",
      "Emphasize membership program as premium offering",
      "Use professional maintenance expert terminology",
      "Focus on peace of mind and reliability messaging",
      "Highlight next-day service availability over speed claims",
      "Position as premium service for discerning homeowners"
    ]
  }
}

// Helper function to get Impetus-specific styling classes
export function getImpetusThemeClasses() {
  return {
    // Background classes
    backgrounds: {
      primary: "bg-black",
      secondary: "bg-slate-900", 
      accent: "bg-gradient-to-br from-black via-slate-900 to-black",
      card: "bg-slate-800 border-gold-600/20"
    },
    
    // Text classes
    text: {
      primary: "text-white",
      secondary: "text-slate-100",
      accent: "text-gold-500",
      muted: "text-slate-400"
    },
    
    // Button classes
    buttons: {
      primary: "bg-gold-600 hover:bg-gold-700 text-black font-semibold border-0",
      secondary: "border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black bg-transparent",
      ghost: "text-gold-400 hover:text-gold-300 hover:bg-slate-800"
    },
    
    // Component-specific classes
    components: {
      hero: "bg-gradient-to-br from-black via-slate-900 to-black text-white",
      section: "bg-slate-900 text-white",
      card: "bg-slate-800 border border-gold-600/20 text-white",
      nav: "bg-black/95 backdrop-blur-sm border-b border-gold-600/20"
    }
  }
} 