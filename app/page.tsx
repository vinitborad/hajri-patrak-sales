"use client"

import HeroSection from "@/components/pages/home/HeroSection"
import ScreenshotsSection from "@/components/pages/home/ScreenshotsSection"
import AboutSection from "@/components/pages/home/AboutSection"
import FeaturesSection from "@/components/pages/home/FeaturesSection"
import InquirySection from "@/components/pages/home/InquirySection"
import Footer from "@/components/pages/home/Footer"

export default function HajriPatrakLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Screenshots Section */}
      <ScreenshotsSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Inquiry Section */}
      <InquirySection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
