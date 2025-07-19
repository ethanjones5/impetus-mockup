"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      {/* Simple Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-gray-900">Impetus Home Services</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/handyman" className="text-gray-600 hover:text-gray-900">Handyman</Link>
            <Link href="/reno" className="text-gray-600 hover:text-gray-900">Renovations</Link>
            <Button size="sm">Get Quote</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
            Trusted by 500+ Toronto Homeowners
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">Impetus</span>
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Home Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Your trusted partner for professional home care and renovations in Toronto/GTA. 
            Choose your path to a better home.
          </p>

          {/* Service Path Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Handyman Services */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Wrench className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Handyman Services</h3>
                  <p className="text-gray-600 mb-6">
                    Quick fixes, maintenance, and repairs. Perfect for busy homeowners who need reliable help.
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-green-600 mr-2" />
                    <span>Same-day service available</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 text-green-600 mr-2" />
                    <span>Fully insured & licensed</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-green-600 mr-2" />
                    <span>4.9/5 customer rating</span>
                  </div>
                </div>
                <Link href="/handyman">
                  <Button className="w-full" size="lg">
                    Explore Handyman Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Renovation Services */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Home className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Renovation Services</h3>
                  <p className="text-gray-600 mb-6">
                    Transform your space with expert renovations. From kitchens to full home makeovers.
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm">
                    <PaintBucket className="h-4 w-4 text-green-600 mr-2" />
                    <span>Full design consultation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Hammer className="h-4 w-4 text-green-600 mr-2" />
                    <span>Complete project management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 text-green-600 mr-2" />
                    <span>1-year warranty included</span>
                  </div>
                </div>
                <Link href="/reno">
                  <Button className="w-full" size="lg" variant="outline">
                    Explore Renovations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">4.9★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your home improvement needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Phone className="mr-2 h-4 w-4" />
              Call (416) 555-0123
            </Button>
            <Button size="lg" variant="outline">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Impetus Home Services</h3>
              <p className="text-gray-400">
                Professional home care and renovations in Toronto/GTA.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/handyman" className="hover:text-white">Handyman Services</Link></li>
                <li><Link href="/reno" className="hover:text-white">Renovations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <div>📞 (416) 555-0123</div>
                <div>📧 info@impetushome.ca</div>
                <div>📍 Toronto, ON</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Impetus Home Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 