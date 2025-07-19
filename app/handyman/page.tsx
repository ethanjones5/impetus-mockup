"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Wrench, 
  Phone, 
  Clock, 
  Shield, 
  Star,
  Home,
  Heart,
  Zap,
  Calendar,
  FileText,
  ArrowLeft
} from "lucide-react"
import Link from "next/link"

export default function HandymanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center font-bold text-xl text-gray-900">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Impetus Home Services
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/reno" className="text-gray-600 hover:text-gray-900">Renovations</Link>
            <Button size="sm">Get Quote</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
            24/7 Emergency Service Available
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Handyman Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From emergency repairs to routine maintenance, our skilled handymen are here to help. 
            Same-day service available across Toronto/GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Phone className="mr-2 h-4 w-4" />
              Call (416) 555-0123
            </Button>
            <Button size="lg" variant="outline">
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Home Care Membership Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our exclusive membership program for priority service and special benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Zap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Priority Emergency Response</h3>
                <p className="text-gray-600 text-sm">24/7 hotline with guaranteed response within 2 hours for all emergencies</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">No Call-Out Fees</h3>
                <p className="text-gray-600 text-sm">Free service calls and diagnostic visits for all members</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <FileText className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Annual Home Health Check</h3>
                <p className="text-gray-600 text-sm">Comprehensive inspection to prevent issues before they become costly repairs</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0 text-center">
                <Calendar className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Seasonal Maintenance</h3>
                <p className="text-gray-600 text-sm">Customized checklists and reminders for optimal home care year-round</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Handyman Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional repair and maintenance services for every area of your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Plumbing */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Plumbing Repairs</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Leaky faucets & pipes</li>
                    <li>• Toilet repairs</li>
                    <li>• Drain cleaning</li>
                    <li>• Water pressure issues</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Electrical */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Electrical Work</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Light fixture installation</li>
                    <li>• Outlet repairs</li>
                    <li>• Switch replacements</li>
                    <li>• Ceiling fan installation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Carpentry */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Carpentry & Repairs</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Door & window repairs</li>
                    <li>• Cabinet adjustments</li>
                    <li>• Shelving installation</li>
                    <li>• Drywall patching</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Painting */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Painting & Touch-ups</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Interior painting</li>
                    <li>• Exterior touch-ups</li>
                    <li>• Trim & molding</li>
                    <li>• Color consultation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* General Maintenance */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">General Maintenance</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Seasonal home checks</li>
                    <li>• Weatherproofing</li>
                    <li>• Gutter cleaning</li>
                    <li>• Preventive care</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Services */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-amber-200">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Emergency Services</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 24/7 availability</li>
                    <li>• Burst pipe repairs</li>
                    <li>• Power outage help</li>
                    <li>• Storm damage fixes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">4.9/5 based on 200+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Quick response for our emergency plumbing issue. Professional service and fair pricing.&quot;
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-gray-500">North York</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;The annual home check caught a potential issue before it became expensive. Great service!&quot;
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Mike C.</div>
                  <div className="text-gray-500">Scarborough</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;Reliable, trustworthy, and skilled. Our go-to for all home maintenance needs.&quot;
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Jennifer L.</div>
                  <div className="text-gray-500">Etobicoke</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Handyman Today?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don&apos;t let small problems become big expenses. Contact us now for fast, reliable handyman services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              <Phone className="mr-2 h-4 w-4" />
              Call (416) 555-0123
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
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
                Professional handyman and renovation services in Toronto/GTA.
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