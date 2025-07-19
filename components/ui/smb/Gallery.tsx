"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  description?: string
  imageUrl: string
  category?: string
  thumbnailUrl?: string
}

interface GalleryProps {
  title?: string
  subtitle?: string
  items: GalleryItem[]
  layout?: "grid" | "masonry" | "carousel"
  showCategories?: boolean
  showLightbox?: boolean
  itemsPerPage?: number
  className?: string
}

export function Gallery({
  title = "Portfolio Gallery",
  subtitle = "View our latest work and projects",
  items,
  layout = "grid",
  showCategories = true,
  showLightbox = true,
  itemsPerPage = 9,
  className = ""
}: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(items.map(item => item.category).filter(Boolean) as string[]))]
  
  // Filter items by category
  const filteredItems = selectedCategory === "all" 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  // Paginate items
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const currentLightboxItem = filteredItems[lightboxIndex]

  return (
    <section className={`py-16 bg-impetus-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          {title && (
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-impetus-gray-300 max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Category Filter */}
          {showCategories && categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                  className={
                    selectedCategory === category
                      ? "bg-gold-400 hover:bg-gold-500 text-impetus-black"
                      : "border-impetus-gray-600 text-white hover:bg-impetus-gray-700"
                  }
                >
                  {category === "all" ? "All Projects" : category}
                </Button>
              ))}
            </div>
          )}

          {/* Gallery Grid */}
          <div className={`grid gap-6 ${
            layout === "masonry" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {paginatedItems.map((item, index) => (
              <Card key={item.id} className="group overflow-hidden bg-impetus-gray-800 border-impetus-gray-700 hover:border-gold-500 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.thumbnailUrl || item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      {showLightbox && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openLightbox(startIndex + index)}
                          className="border-white text-white hover:bg-white hover:text-impetus-black"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-white text-white hover:bg-white hover:text-impetus-black"
                      >
                        <a href={item.imageUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  {item.category && (
                    <Badge className="absolute top-3 left-3 bg-gold-400 text-impetus-black">
                      {item.category}
                    </Badge>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-impetus-gray-300">
                      {item.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="border-impetus-gray-600 text-white hover:bg-impetus-gray-700 disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <span className="text-impetus-gray-300 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="border-impetus-gray-600 text-white hover:bg-impetus-gray-700 disabled:opacity-50"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && lightboxOpen && currentLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 border-white text-white hover:bg-white hover:text-black"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation */}
            {filteredItems.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 border-white text-white hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 border-white text-white hover:bg-white hover:text-black"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Image */}
            <img
              src={currentLightboxItem.imageUrl}
              alt={currentLightboxItem.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded">
              <h3 className="font-semibold mb-1">{currentLightboxItem.title}</h3>
              {currentLightboxItem.description && (
                <p className="text-sm text-gray-300">{currentLightboxItem.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 