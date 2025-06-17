"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, Mail, X, Play } from "lucide-react"
import Image from "next/image"

// Mock data for screenshots
const mockScreenshots = [
  "/placeholder.svg?height=600&width=300",
  "/placeholder.svg?height=600&width=300",
  "/placeholder.svg?height=600&width=300",
  "/placeholder.svg?height=600&width=300",
  "/placeholder.svg?height=600&width=300",
]

const featureScreenshots = {
  Students: [
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
  ],
  Teachers: [
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
  ],
  Parents: [
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
  ],
  Admin: [
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
    "/placeholder.svg?height=600&width=300",
  ],
}

const features = [
  "Real-time attendance tracking and marking",
  "Automated attendance reports and analytics",
  "Multi-role access for Students, Teachers, Parents, and Admins",
  "Mobile app for easy attendance marking",
  "SMS and email notifications for parents",
  "Biometric integration support",
  "Cloud-based secure data storage",
  "Customizable attendance policies",
  "Export attendance data in multiple formats",
  "Integration with existing college management systems",
]

export default function HajriPatrakLanding() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
  const [showFeatureModal, setShowFeatureModal] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const ScreenshotSlider = ({ screenshots, className = "" }: { screenshots: string[]; className?: string }) => (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {screenshots.map((screenshot, index) => (
        <div
          key={index}
          className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setFullscreenImage(screenshot)}
        >
          <Image
            src={screenshot || "/placeholder.svg"}
            alt={`Screenshot ${index + 1}`}
            width={200}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 text-sm">
            Introducing
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">Hajri Patrak</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern attendance management system for colleges and universities
          </p>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          {/* Desktop: Single horizontal scroller */}
          <div className="hidden lg:block">
            <div className="flex gap-6 overflow-x-auto pb-4">
              {/* Video */}
              <div className="flex-shrink-0">
                <div
                  className="relative bg-gray-100 rounded-lg w-80 h-96 cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="w-16 h-16 text-gray-600" />
                </div>
              </div>

              {/* Screenshots */}
              {mockScreenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setFullscreenImage(screenshot)}
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    width={320}
                    height={384}
                    className="rounded-lg shadow-lg h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Video on top, screenshots below */}
          <div className="lg:hidden space-y-6">
            {/* Video Section - Fixed */}
            <div className="flex justify-center">
              <div
                className="relative bg-gray-100 rounded-lg w-full max-w-sm aspect-video cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors"
                onClick={() => setShowVideo(true)}
              >
                <Play className="w-12 h-12 text-gray-600" />
              </div>
            </div>

            {/* Screenshots Scroller */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {mockScreenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setFullscreenImage(screenshot)}
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    width={200}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* All Feature Screens Button */}
          <div className="text-center mt-12">
            <Button onClick={() => setShowFeatureModal(true)} size="lg" className="bg-blue-600 hover:bg-blue-700">
              All Feature Screens
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hajri Patrak is a comprehensive attendance management system designed specifically for educational
            institutions. Our platform streamlines the entire attendance process, from marking to reporting, making it
            easier for teachers, students, parents, and administrators to stay connected and informed. With real-time
            tracking, automated notifications, and detailed analytics, we're revolutionizing how colleges and
            universities manage student attendance.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">Do an Inquiry Now</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Phone className="w-5 h-5 mr-2" />
              Call
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Hajri Patrak. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-sm text-gray-300">info@hajripatrak.com</p>
                <p className="text-sm text-gray-300">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Legal</h4>
                <div className="flex flex-col space-y-1">
                  <a href="#" className="text-sm text-gray-300 hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-sm text-gray-300 hover:text-white">
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Fullscreen Image Modal */}
      <Dialog open={!!fullscreenImage} onOpenChange={() => setFullscreenImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setFullscreenImage(null)}
            >
              <X className="w-4 h-4" />
            </Button>
            {fullscreenImage && (
              <Image
                src={fullscreenImage || "/placeholder.svg"}
                alt="Fullscreen view"
                width={800}
                height={1200}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Feature Screens Modal */}
      <Dialog open={showFeatureModal} onOpenChange={setShowFeatureModal}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">All Feature Screens</DialogTitle>
          </DialogHeader>
          <div className="space-y-8">
            {Object.entries(featureScreenshots).map(([role, screenshots]) => (
              <div key={role}>
                <h3 className="text-xl font-semibold mb-4">{role}</h3>
                <ScreenshotSlider screenshots={screenshots} />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Product Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Video player would be embedded here</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
