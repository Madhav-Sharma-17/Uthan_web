import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Organization */}
          <div>
            <h3 className="font-bold text-lg mb-4">Uthan Youth Parliament</h3>
            <p className="text-sm opacity-90">Empowering Youth Through Dialogue and Leadership</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-80 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:opacity-80 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:opacity-80 transition">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:opacity-80 transition">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@uthanyouthparliament.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button className="hover:scale-110 transition transform">
                <Facebook size={20} />
              </button>
              <button className="hover:scale-110 transition transform">
                <Twitter size={20} />
              </button>
              <button className="hover:scale-110 transition transform">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; 2025 Uthan Youth Parliament. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
