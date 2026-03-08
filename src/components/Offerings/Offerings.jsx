import { motion } from "framer-motion"

import retrofitBg from "../../assets/retrofitbg.jpg"
import devicesBg from "../../assets/devicesbg.jpg"
import retrofitIcon from "../../assets/retrofiticon.png"
import deviceIcon from "../../assets/devicesicon.png"

export default function Offerings() {
  return (
<section className="relative py-28 px-6 bg-[#0F1322] overflow-hidden border-t-2 border-dashed border-cyan-300/60">

      {/* LEFT EDGE ROTATING DOT CIRCLE */}
      <div className="absolute left-[-350px] top-[-350px] pointer-events-none z-0">

        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="w-[700px] h-[700px]"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="rgba(176, 174, 229, 0.5)"
            strokeWidth="1"
            strokeDasharray="1 4"
            strokeLinecap="round"
          />
        </motion.svg>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center text-white tracking-tight"
        >
          Our{" "}
          <span className="
          bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
          bg-clip-text text-transparent
          drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]
          ">
            Offerings
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center mt-4 text-sm tracking-wide">
          Transform your home with retrofit automation or explore our smart device ecosystem.
        </p>


        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* VIP Retrofit Card */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="group relative aspect-square border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-300"
          >

            <img
              src={retrofitBg}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-[#0B0F1A]/70 backdrop-blur-sm"></div>

            <div className="relative z-10 p-10 h-full flex flex-col justify-between">

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
                  VIP Retrofit
                </h3>

                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={retrofitIcon}
                    alt="VIP Retrofit"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed tracking-wide">
                Convert your existing home appliances into smart devices using our VIP Core hub
                and retrofit modules. Control fans, lights, motors, water tanks and security
                systems through the VIP Handler app using voice commands or simple taps.
              </p>

            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none
            bg-gradient-to-r from-blue-500/10 to-cyan-400/10"></div>

          </motion.div>


          {/* VIP Smart Devices Card */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.2 }}
            className="group relative aspect-square border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition-all duration-300"
          >

            <img
              src={devicesBg}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-[#0B0F1A]/75 backdrop-blur-sm"></div>

            <div className="relative z-10 p-10 h-full flex flex-col justify-between">

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
                  VIP Smart Devices
                </h3>

                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={deviceIcon}
                    alt="VIP Smart Devices"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed tracking-wide">
                Explore our ecosystem of smart devices designed to work seamlessly with the
                VIP Handler app. From smart vacuums and CCTV systems to smart plugs and
                lighting, experience intelligent living with devices built for automation
                and convenience.
              </p>

            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none
            bg-gradient-to-r from-purple-500/10 to-indigo-500/10"></div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}