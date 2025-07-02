import React from 'react'
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from 'next/link';
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function InquirySection() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Demo Credentials Section */}
      <div className="max-w-lg mx-auto border rounded-lg p-6 bg-gray-50">
        <h3 className="text-2xl font-bold mb-4 font-serif">Demo Credentials</h3>
        <p className="mb-1 text-gray-600 text-sm">Use these credentials to explore our app on Play Store</p>

        <div className="mt-4">
          <h4 className="font-semibold text-lg">Student Access</h4>
          <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded border mb-4 mt-2">
            <p className="text-left text-gray-700">Username:</p>
            <p className="text-left font-medium">220280116012</p>
            <p className="text-left text-gray-700">Password:</p>
            <p className="text-left font-medium">12345</p>
          </div>

          <h4 className="font-semibold text-lg">Faculty & Admin Access</h4>
          <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded border mt-2">
            <p className="text-left text-gray-700">Username:</p>
            <p className="text-left font-medium">vinit</p>
            <p className="text-left text-gray-700">Password:</p>
            <p className="text-left font-medium">12345</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
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
              <FaExternalLinkSquareAlt className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default InquirySection