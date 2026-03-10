import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer(){

  return(
    <footer className="relative bg-[#0B0F1A] overflow-hidden">

      {/* top gradient divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] 
      bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"/>

      {/* glow background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-cyan-500/10 blur-[200px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* brand */}
          <div>
            <h3 className="text-white text-2xl font-semibold">
              VIP{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Smart
              </span>
            </h3>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-xs">
              Building intelligent homes through automation,
              IoT connectivity and seamless mobile control.
            </p>
          </div>


          {/* links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition cursor-pointer">Products</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">How It Works</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">About</li>
              <li className="hover:text-cyan-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>


          {/* social */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-4">

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-400/10 transition cursor-pointer">
                <Facebook size={18} className="text-gray-400"/>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-400/10 transition cursor-pointer">
                <Instagram size={18} className="text-gray-400"/>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-400/10 transition cursor-pointer">
                <Twitter size={18} className="text-gray-400"/>
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-400/10 transition cursor-pointer">
                <Linkedin size={18} className="text-gray-400"/>
              </div>

            </div>

          </div>

        </div>


        {/* bottom row */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-500">
          © 2026 VIP Smart Homes. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

