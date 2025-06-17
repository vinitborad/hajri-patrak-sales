import React from 'react'

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

function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16 rounded-4xl bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center">
          Features
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