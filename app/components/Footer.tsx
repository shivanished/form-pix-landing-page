import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import type React from "react" // Added import for React

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Form-Pix
            </Link>
            <p className="text-gray-400 text-base">Streamlining immigration processes with AI-powered assistance.</p>
            <div className="flex space-x-6">
              <SocialLink href="#" icon={<Facebook />} />
              <SocialLink href="#" icon={<Twitter />} />
              <SocialLink href="#" icon={<Instagram />} />
              <SocialLink href="#" icon={<Linkedin />} />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#about">About</FooterLink>
                  <FooterLink href="#careers">Careers</FooterLink>
                  <FooterLink href="#privacy">Privacy</FooterLink>
                  <FooterLink href="#terms">Terms</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#faq">FAQ</FooterLink>
                  <FooterLink href="#contact">Contact</FooterLink>
                  <FooterLink href="#help">Help Center</FooterLink>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Features</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#document-analysis">Document Analysis</FooterLink>
                  <FooterLink href="#form-filling">Form Filling</FooterLink>
                  <FooterLink href="#case-tracking">Case Tracking</FooterLink>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink href="#disclaimer">Disclaimer</FooterLink>
                  <FooterLink href="#licensing">Licensing</FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2025 Form-Pix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} className="text-gray-400 hover:text-gray-300">
    <span className="sr-only">Social media</span>
    {icon}
  </a>
)

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-base text-gray-400 hover:text-white">
      {children}
    </Link>
  </li>
)

export default Footer

