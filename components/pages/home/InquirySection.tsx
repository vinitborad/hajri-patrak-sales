import React from 'react'
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

function InquirySection() {
  return (
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
  )
}

export default InquirySection