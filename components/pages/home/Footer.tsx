import React from 'react'
import Link from "next/link";
import { Phone, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Hajri Patrak</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Link href={`tel:9426920146`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 9426920146</span>
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <Link href={`mailto:vinitboradofficial@gmail.com`} className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>vinitboradofficial@gmail.com</span>
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Terms & Conditions
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Hajri Patrak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer