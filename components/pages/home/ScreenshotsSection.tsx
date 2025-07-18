"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Link from 'next/link'

// const placeholderUrl = "https://kzmqk33lv4uaf5s99bnz.lite.vusercontent.net/placeholder.svg?height=600&width=300"
const videoUrl = "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn//Screen%20Recording%202025-06-22%20124711.mp4"

const mockScreenshots = [
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_08_39_353_com_vinitborad_hajripatrakapp.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_13_18_030_com_vinitborad_hajripatrakapp.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_13_40_607_com_vinitborad_hajripatrakapp.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_13_58_153_com_vinitborad_hajripatrakapp.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_14_569_com_vinitborad_hajripatrakapp.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_08_163_com_vinitborad_hajripatrakapp.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_29_790_com_vinitborad_hajripatrakapp%20(1).jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_40_835_com_vinitborad_hajripatrakapp.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//IMG_20250622_112433.jpg",
  "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_15_14_074_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_16_57_184_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_09_874_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_17_134_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_20_846_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_25_580_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_38_318_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_43_795_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_53_044_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_33_650_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_39_687_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_44_492_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_21_962_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_58_152_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/IMG_20250622_113709.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_19_05_593_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_12_083_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_15_027_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_53_074_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_57_856_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_13_175_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_16_524_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_19_343_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_24_047_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_29_712_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_54_02_288_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_54_11_843_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_54_43_171_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_55_47_516_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_04_739_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_08_523_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_23_893_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_28_430_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_42_035_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_44_389_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_54_758_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_12_36_10_505_com_vinitborad_hajripatrakapp.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/IMG_20250622_115740.jpg",
  "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_57_06_991_com_vinitborad_hajripatrakapp.jpg"
]

const featureScreenshots = {
  Students: [
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_08_39_353_com_vinitborad_hajripatrakapp.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_13_18_030_com_vinitborad_hajripatrakapp.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_13_40_607_com_vinitborad_hajripatrakapp.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_13_58_153_com_vinitborad_hajripatrakapp.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_14_569_com_vinitborad_hajripatrakapp.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_08_163_com_vinitborad_hajripatrakapp.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_29_790_com_vinitborad_hajripatrakapp%20(1).jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_14_40_835_com_vinitborad_hajripatrakapp.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//IMG_20250622_112433.jpg",
    "https://cfzjzbbbpholqeirmkrm.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_15_14_074_com_vinitborad_hajripatrakapp.jpg"
  ],
  Teachers: [
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_16_57_184_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_09_874_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_17_134_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_20_846_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_25_580_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_38_318_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_43_795_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_17_53_044_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_33_650_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_39_687_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_44_492_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_21_962_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_18_58_152_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/IMG_20250622_113709.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/faculty/Screenshot_2025_06_22_11_19_05_593_com_vinitborad_hajripatrakapp.jpg"
  ],
  // Parents: [
  //   "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_15_57_817_com_vinitborad_hajripatrakapp.jpg",
  //   "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_16_14_966_com_vinitborad_hajripatrakapp.jpg",
  //   "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_16_27_154_com_vinitborad_hajripatrakapp.jpg",
  //   "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_16_29_479_com_vinitborad_hajripatrakapp.jpg",
  //   "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn//Screenshot_2025_06_22_11_16_32_156_com_vinitborad_hajripatrakapp.jpg"
  // ],
  Admin: [
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_12_083_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_15_027_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_53_074_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_52_57_856_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_13_175_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_16_524_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_19_343_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_24_047_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_53_29_712_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_54_02_288_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_54_11_843_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_54_43_171_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_55_47_516_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_04_739_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_08_523_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_23_893_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_28_430_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_42_035_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_44_389_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_56_54_758_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_12_36_10_505_com_vinitborad_hajripatrakapp.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/IMG_20250622_115740.jpg",
    "https://wdvsvsxrxsdcmotpbloz.supabase.co/storage/v1/object/public/cdn/admin/Screenshot_2025_06_22_11_57_06_991_com_vinitborad_hajripatrakapp.jpg"
  ]
}

function ScreenshotsSection() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
  const [showFeatureModal, setShowFeatureModal] = useState(false)

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
                  className="relative bg-gray-100 rounded-lg h-96 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  style={{ minWidth: "200px" }}
                >
                  <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    className="rounded-lg h-full w-full object-contain bg-black"
                  >
                    Your browser doesn’t support HTML5 video.
                  </video>
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
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg shadow-lg h-96 w-auto object-contain"
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
                className="relative bg-gray-100 rounded-lg w-full max-w-sm aspect-video flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  className="rounded-lg h-full w-full object-contain bg-black"
                >
                  Your browser doesn’t support HTML5 video.
                </video>
              </div>
            </div>

            {/* Screenshots Scroller */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {mockScreenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                // onClick={() => setFullscreenImage(screenshot)}
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg shadow-lg h-96 w-auto object-contain"
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
            <Link href="https://play.google.com/store/apps/details?id=com.vinitborad.hajripatrakapp" target="_blank">
              <Button size="lg" className="cursor-pointer">
                LDCE DEMO
                <FaExternalLinkSquareAlt />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <Dialog open={!!fullscreenImage} onOpenChange={() => setFullscreenImage(null)}>
        <DialogContent
          className="max-w-4xl max-h-[90vh] p-0"
          showCloseButton={false}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Image Preview</DialogTitle>
            <DialogDescription className="sr-only">
              Click the close button to exit fullscreen view.
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70 cursor-pointer"
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
        <DialogContent className="max-h-[90vh] min-w-[90vw] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              All Feature Screens
            </DialogTitle>
            <DialogDescription className="text-lg">
              From LDCE Demo
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {Object.entries(featureScreenshots).map(([role, screenshots]) => (
              <div key={role}>
                <h3 className="text-xl font-semibold mb-4">{role}</h3>
                <ScreenshotSlider screenshots={screenshots} />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ScreenshotsSection