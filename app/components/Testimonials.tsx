import Image from "next/image"

const testimonials = [
  {
    content:
      "Form-Pix made my visa application process so much easier. I saved time and money, and got my visa approved quickly!",
    author: "Sarah Johnson",
    role: "Student Visa Applicant",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "As a small business owner, Form-Pix helped me navigate the complex work visa process for my employees. Highly recommended!",
    author: "Michael Chen",
    role: "Business Owner",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    content:
      "I was skeptical about using AI for my green card application, but Form-Pix exceeded my expectations. The process was smooth and stress-free.",
    author: "Elena Rodriguez",
    role: "Green Card Applicant",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const Testimonials = () => {
  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24" id="testimonials">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Hear from people who have successfully navigated their immigration journey with Form-Pix.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="relative h-20">
                    <Image
                      className="absolute bottom-0 left-0 rounded-full"
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={80}
                      height={80}
                    />
                  </div>
                  <blockquote className="mt-8">
                    <p className="text-lg font-medium text-gray-900">"{testimonial.content}"</p>
                  </blockquote>
                  <div className="mt-4">
                    <p className="text-base font-semibold text-indigo-600">{testimonial.author}</p>
                    <p className="text-base text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

