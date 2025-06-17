import React from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const placeholderUrl = "https://kzmqk33lv4uaf5s99bnz.lite.vusercontent.net/placeholder.svg?height=600&width=300"

const mockScreenshots = [
  placeholderUrl,
  placeholderUrl,
  placeholderUrl,
  placeholderUrl,
  placeholderUrl,
]

const featureScreenshots = {
  Students: [
    placeholderUrl,
    placeholderUrl,
    placeholderUrl,
    placeholderUrl,
  ],
  Teachers: [
    placeholderUrl,
    placeholderUrl,
    placeholderUrl,
    placeholderUrl,
  ],
  Parents: [
    placeholderUrl,
    placeholderUrl,
    placeholderUrl,
  ],
  Admin: [
    placeholderUrl,
    placeholderUrl,
    placeholderUrl,
    placeholderUrl,
  ],
}

function ScreenshotsSection() {
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
    <div className="">
      <section className="bg-gradient-to-r from-rose-100 to-teal-100 py-16">
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
          <div className="flex justify-center text-center mt-12 gap-3">
            <Button onClick={() => setShowFeatureModal(true)} size="lg" className="cursor-pointer">
              All Feature Screens
              <FaExternalLinkSquareAlt />
            </Button>
            <Button onClick={() => setShowFeatureModal(true)} size="lg" className="cursor-pointer">
              LDCE DEMO
              <FaExternalLinkSquareAlt />
            </Button>
          </div>
        </div>
      </section>

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

export default ScreenshotsSection