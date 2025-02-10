import { FileText, CheckCircle, Clock } from "lucide-react"

const steps = [
  {
    name: "Upload Documents",
    description: "Securely upload your immigration documents to our platform.",
    icon: FileText,
  },
  {
    name: "AI Analysis",
    description: "Our AI analyzes your documents and identifies the required forms and information.",
    icon: CheckCircle,
  },
  {
    name: "Form Completion",
    description: "The AI assists in filling out the necessary forms accurately and completely.",
    icon: Clock,
  },
]

const HowItWorks = () => {
  return (
    <div className="py-12 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How Form-Pix Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our streamlined process makes immigration paperwork simple and efficient.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            {steps.map((step, index) => (
              <div key={step.name} className="relative mb-8 md:mb-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white mx-auto mb-4">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">{step.name}</h3>
                <p className="mt-2 text-base text-gray-500 text-center max-w-xs">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-indigo-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

