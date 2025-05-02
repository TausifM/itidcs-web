import Link from "next/link";

export default function NewsLetter() {
  return (
    <footer className="relative isolate overflow-hidden bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold">ITIDCS</h3>
            <p className="mt-2 text-sm">
              Innovating the future of IT solutions. Empowering businesses through digital transformation and tech excellence.
            </p>
            <h4 className="text-white font-semibold text-sm mb-3 mt-4">Stay Connected</h4>
            <form className="flex flex-col sm:flex-row gap-4 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/jobs" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/blogs" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Support</Link></li>
              <li><Link href="/values" className="hover:text-white transition">Values</Link></li>
              <li><Link href="/cancellation-refund" className="hover:text-white transition">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-white transition">IT Consulting</a></li>
              <li><a href="#" className="hover:text-white transition">Cybersecurity</a></li>
            </ul>
          </div>
          <div>
                  {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:innovativeitdcorporation@gmail.com" className="text-indigo-400 hover:text-white transition">innovativeitdcorporation@gmail.com</a></li>
              <li className="mt-2">
                <span className="block font-semibold text-white">Office 1:</span>
                Sanskriti Nagar, Near Bhakre Layout, Arvi<br />
              </li>
              <li className="mt-2">
                <span className="block font-semibold text-white">Office 2:</span>
                Siraspeth, Near Anand Budh Vihar, Nagpur
              </li>
            </ul>
          </div>
          
          
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} ITIDCS. All rights reserved.
          <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
          </div>
       
        </div>
      </div>
    </footer>
  );
}
