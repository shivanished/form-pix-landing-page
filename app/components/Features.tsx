import { FileText, CheckCircle, Clock, Lock } from "lucide-react"

const features = [
  {
    name: "Document Analysis",
    description: "Our AI quickly analyzes your documents for accuracy and completeness.",
    icon: FileText,
  },
  {
    name: "Smart Form Filling",
    description: "Automatically fill out complex immigration forms with precision.",
    icon: CheckCircle,
  },
  {
    name: "Real-time Updates",
    description: "Stay informed with instant updates on your application status.",
    icon: Clock,
  },
  {
    name: "Secure & Confidential",
    description: "Your data is protected with state-of-the-art encryption and security measures.",
    icon: Lock,
  },
]

const Features = () => {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to navigate immigration
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Form-Pix combines cutting-edge AI technology with immigration expertise to simplify your journey.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features

