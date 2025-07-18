#!/usr/bin/env node

/**
 * Site Generator CLI
 * 
 * This script demonstrates the site generation capabilities and provides
 * guidance on using the comprehensive component libraries.
 */

const args = process.argv.slice(2);
const command = args[0];

if (command === 'help' || command === '--help' || command === '-h') {
  showHelp();
} else if (command === 'saas') {
  showSaaSRecommendations();
} else if (command === 'smb') {
  showSMBRecommendations();
} else if (command === 'components') {
  showComponentOverview();
} else {
  showQuickStart();
}

function showHelp() {
  console.log('\n🚀 SaaSternity Site Generator\n');
  console.log('Usage: npm run generate:site [command]\n');
  console.log('Commands:');
  console.log('  saas       - SaaS website recommendations');
  console.log('  smb        - SMB website recommendations');
  console.log('  components - Component overview');
  console.log('  help       - Show this help message\n');
}

function showQuickStart() {
  console.log('\n🚀 SaaSternity Site Generator\n');
  console.log('📋 Available Component Libraries:');
  console.log('  • 🎨 Aceternity UI: 48 animated components');
  console.log('  • 🏢 SaaS Components: 15 business sections');
  console.log('  • 🏪 SMB Components: 15 local business sections\n');
  console.log('🛠️ Usage:');
  console.log('  npm run generate:site saas        # SaaS recommendations');
  console.log('  npm run generate:site smb         # SMB recommendations');
  console.log('  npm run generate:site components  # Component overview');
  console.log('  npm run generate:site help        # Show help\n');
}

function showSaaSRecommendations() {
  console.log('\n🏢 SaaS Website Recommendations:\n');
  console.log('Core Sections:');
  console.log('  • HeroSaaS + FeaturesGrid + PricingTiers + CTABanner');
  console.log('Visual Effects:');
  console.log('  • Spotlight + MovingBorder + TextGenerateEffect');
  console.log('Trust Building:');
  console.log('  • Testimonials + BrandLogos + StatsSection');
  console.log('Conversion:');
  console.log('  • LeadCaptureForm + WhyUs + VideoSection\n');
}

function showSMBRecommendations() {
  console.log('\n🏪 SMB Website Recommendations:\n');
  console.log('Core Sections:');
  console.log('  • HeroSMB + ServicesList + ContactCard + CTABanner');
  console.log('Visual Effects:');
  console.log('  • BackgroundBeams + HoverEffect + Meteors');
  console.log('Trust Building:');
  console.log('  • Testimonials + Gallery + Guarantees + SocialProof');
  console.log('Local Focus:');
  console.log('  • ServiceAreaMap + ProcessSteps + TeamGrid\n');
}

function showComponentOverview() {
  console.log('\n📦 Component Overview:\n');
  console.log('🎨 Aceternity UI (48 components):');
  console.log('  • Background Effects: BackgroundBeams, Meteors, Spotlight');
  console.log('  • Cards: HoverEffect, CardStack, WobbleCard');
  console.log('  • Text: TextGenerateEffect, TypewriterEffect, FlipWords');
  console.log('  • Navigation: FloatingNav, Tabs, Sidebar\n');
  console.log('🏢 SaaS Components (15 components):');
  console.log('  • Heroes: HeroSaaS');
  console.log('  • Features: FeaturesGrid, WhyUs, UseCases');
  console.log('  • Social Proof: Testimonials, BrandLogos, StatsSection');
  console.log('  • Conversion: PricingTiers, LeadCaptureForm, CTABanner\n');
  console.log('🏪 SMB Components (15 components):');
  console.log('  • Heroes: HeroSMB');
  console.log('  • Services: ServicesList, ProcessSteps');
  console.log('  • Trust: Testimonials, Gallery, Guarantees');
  console.log('  • Local: ServiceAreaMap, ContactCard\n');
} 