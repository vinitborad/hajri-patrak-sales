import React from 'react'
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from 'next/link';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function InquirySection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 font-serif">Do an Inquiry Now !</h2>
        <div className="flex gap-4 justify-center">
          <Link href="tel:9426920146" target="_blank">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 cursor-pointer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call
            </Button>
          </Link>
          <Link href="mailto:vinitboradofficial@gmail.com" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.vinitborad.hajripatrakapp" target="_blank">
            <Button size="lg" className="cursor-pointer">
              LDCE DEMO
              <FaExternalLinkSquareAlt />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InquirySection