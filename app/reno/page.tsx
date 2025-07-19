"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowLeft, 
  Star, 
  Phone, 
  Home, 
  Bath, 
  ChefHat,
  Hammer,
  Shield,
  DollarSign
} from "lucide-react"
import Link from "next/link"

export default function RenovationPage() {
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
            <Link href="/handyman" className="text-gray-600 hover:text-gray-900">Handyman</Link>
            <Button size="sm">Get Quote</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800">
            Free Design Consultation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Home Renovation Experts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your home with our expert renovation services. From kitchens to full home makeovers, 
            we bring your vision to life with quality craftsmanship and guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Phone className="mr-2 h-4 w-4" />
              Call (416) 555-0123
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive renovation solutions for every room in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <ChefHat className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Kitchen Renovations</h3>
                <p className="text-gray-600 text-sm mb-4">Custom design, cabinets, countertops, and complete kitchen makeovers</p>
                <p className="text-amber-600 font-semibold">From $35,000</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Bath className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Bathroom Remodels</h3>
                <p className="text-gray-600 text-sm mb-4">Luxury bathrooms, walk-in showers, and spa-like experiences</p>
                <p className="text-amber-600 font-semibold">From $20,000</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Home className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Basement Finishing</h3>
                <p className="text-gray-600 text-sm mb-4">Transform unused space into functional living areas</p>
                <p className="text-amber-600 font-semibold">From $25,000</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 text-center">
                <Hammer className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Full Home Renos</h3>
                <p className="text-gray-600 text-sm mb-4">Complete home transformations and major structural changes</p>
                <p className="text-amber-600 font-semibold">From $75,000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we&apos;ve transformed homes across Toronto/GTA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <ChefHat className="h-16 w-16 text-amber-600" />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">Kitchen</Badge>
                <h3 className="font-bold text-lg mb-2">Modern Kitchen Renovation</h3>
                <p className="text-gray-600 text-sm mb-4">Complete kitchen transformation with quartz countertops and custom cabinetry</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Value: $45,000</span>
                  <span className="text-green-600">ROI: +18%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Bath className="h-16 w-16 text-blue-600" />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">Bathroom</Badge>
                <h3 className="font-bold text-lg mb-2">Luxury Bathroom Remodel</h3>
                <p className="text-gray-600 text-sm mb-4">Spa-like master bathroom with walk-in shower and heated floors</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Value: $28,000</span>
                  <span className="text-green-600">ROI: +12%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <Home className="h-16 w-16 text-green-600" />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">Basement</Badge>
                <h3 className="font-bold text-lg mb-2">Basement Transformation</h3>
                <p className="text-gray-600 text-sm mb-4">Unfinished basement converted to entertainment space with bar</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Value: $35,000</span>
                  <span className="text-green-600">ROI: +15%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Impetus Renovations?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results with transparency and care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-4">Fully Licensed & Insured</h3>
                <p className="text-gray-600">Complete protection and peace of mind with comprehensive insurance coverage and proper licensing</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <DollarSign className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-4">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden costs or surprise fees. Detailed quotes and clear communication throughout your project</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="p-0">
                <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-4">1-Year Warranty</h3>
                <p className="text-gray-600">We stand behind our work with a comprehensive warranty on all renovation projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Renovation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we guide you through every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Free in-home consultation to discuss your vision and needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Design & Quote</h3>
              <p className="text-gray-600 text-sm">Detailed design plans and transparent pricing proposal</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">Construction</h3>
              <p className="text-gray-600 text-sm">Expert craftsmanship with regular progress updates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg mb-2">Final Walkthrough</h3>
              <p className="text-gray-600 text-sm">Quality inspection and handover of your beautiful new space</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">4.9/5 based on 150+ reviews</span>
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
                  &quot;Our kitchen renovation exceeded all expectations. The team was professional, on time, and the quality is outstanding.&quot;
                </p>
                <div className="text-sm">
                  <div className="font-semibold">David R.</div>
                  <div className="text-gray-500">Toronto</div>
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
                  &quot;The basement transformation has added significant value to our home. Amazing attention to detail!&quot;
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Lisa K.</div>
                  <div className="text-gray-500">Mississauga</div>
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
                  &quot;Transparent pricing, excellent communication, and beautiful results. Highly recommend Impetus!&quot;
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Mark T.</div>
                  <div className="text-gray-500">Vaughan</div>
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
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get started with a free consultation and see how we can bring your renovation dreams to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
              <Phone className="mr-2 h-4 w-4" />
              Call (416) 555-0123
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              Schedule Free Consultation
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