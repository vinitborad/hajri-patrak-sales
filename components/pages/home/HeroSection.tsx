import React from 'react'
import { Badge } from "@/components/ui/badge"

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-rose-100 to-teal-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-4 text-md font-bold rounded-full">
          Introducing
        </Badge>
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">Hajri Patrak</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Modern attendance management system for colleges and universities
        </p>
      </div>
    </section>
  )
}

export default HeroSection