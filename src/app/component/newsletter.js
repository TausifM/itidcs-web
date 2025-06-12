import Link from "next/link";

export default function NewsLetter() {
  return (
    <footer className="relative isolate overflow-hidden bg-gray-900 text-white py-16">
  <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
    <div
      style={{
        clipPath:

          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
    />
  </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-blue-500 text-lg font-bold">ITIDCS</h3>
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
            <h4 className="text-purple-500 font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white hover:text-blue-400 transition">
              About Us</Link></li>
              <li><Link href="/jobs" className="text-white hover:text-blue-400 transition">Careers</Link></li>
              <li><Link href="/blogs" className="text-white hover:text-blue-400 transition">Blog</Link></li>
              <li><Link href="/contact" className="text-white hover:text-blue-400 transition">Contact</Link></li>
              <li><Link href="/services" className="text-white hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/privacy-policy" className="text-white hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white hover:text-blue-400 transition">Terms of Service</Link></li>
              <li><Link href="/support" className="text-white hover:text-blue-400 transition">Support</Link></li>
              <li><Link href="/values" className="text-white hover:text-blue-400 transition">Values</Link></li>
              <li><Link href="/cancellation-refund" className="text-white hover:text-blue-400 transition">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-green-500 font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software-development" className="text-white hover:text-green-400 transition">
              Software Development</Link></li>
              <li><Link href="/ai-solutions" className="text-white hover:text-green-400 transition">AI Solutions</Link></li>
              <li><Link href="/cloud-solutions" className="text-white hover:text-green-400 transition">Cloud Solutions</Link></li>
              <li><Link href="/it-consulting" className="text-white hover:text-green-400 transition">IT Consulting</Link></li>
              <li><Link href="/cyber-security" className="text-white hover:text-green-400 transition">Cyber Security</Link></li>
            </ul>
          </div>
          <div>
                  {/* Contact Info */}
          <div>
            <h4 className="text-yellow-500 font-semibold text-sm mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:innovativeitdcorporation@gmail.com" className="text-indigo-400 hover:text-white transition">innovativeitdcorporation@gmail.com</a></li>
              {/* <li className="mt-2">
                <span className="block font-semibold text-white">Office 1:</span>
                Sanskriti Nagar, Near Bhakre Layout, Arvi<br />
              </li> */}
              <li className="mt-2">
                <span className="block font-semibold text-white">Office :</span>
                ITIDCS (Innovative Total IT Development and Corporation and Services Pvt. Ltd.)<br />
                <Link href="tel:+917709382305" className="text-green-400 hover:text-white transition font-black">Call Now +91 77093 82305</Link>
                <br />
                <br />
                1st Floor, Plot No. 2,
                <br />
                Collaborative Workspace with Career Cloud,
                Kabir Nagar Square, Nandanvan Main Rd, in front of Maruti Arcade, 
                <br />
                Near Dutta Mandir, Nandanvan, Nagpur, Maharashtra 440009
              </li>
            </ul>
          </div>
          
          
          </div>
        </div>
        <div className="mt-12 border-t border-white/10
        pt-8 text-sm text-center text-white">
          <p className="mb-2">
            Follow us on: @itidcs_sheikh
          </p>

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
