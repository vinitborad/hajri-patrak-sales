import React from 'react'

const features = [
  "QR code-based attendance marking for quick and efficient check-ins",
  "Robust marking system with dynamic QR codes, location tracking, and device level authentication",
  "Detailed attendance reports and analytics",
  "Multi-role access for Students, Teachers, Parents, and Admins",
  "User-friendly mobile application",
  "Instant SMS and email notifications for parents",
  "Customizable attendance policies",
  "Easy export of attendance data to Google Sheets",
  "Super affordable pricing with a free trial available!",
]

function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16 rounded-4xl bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 flex items-center">
          Features of Hajri Patrak system
        </h2>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection