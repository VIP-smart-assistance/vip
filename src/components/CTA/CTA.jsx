import { motion } from "framer-motion"

export default function CTA(){

  return(
    <section className="relative py-28 px-6 bg-[#0F1322] overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-cyan-500/20 blur-[220px] rounded-full"></div>
      </div>

      {/* floating particles */}
      <motion.div
        animate={{y:[0,-40,0]}}
        transition={{duration:6,repeat:Infinity}}
        className="absolute left-[15%] top-[40%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
      />

      <motion.div
        animate={{y:[0,30,0]}}
        transition={{duration:7,repeat:Infinity}}
        className="absolute right-[15%] bottom-[40%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center bg-white/5 backdrop-blur-xl border border-white/10 p-14 rounded-3xl">

        {/* heading */}
        <h2 className="text-4xl md:text-5xl text-white font-semibold leading-tight">
          Ready To Make Your Home{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Intelligent?
          </span>
        </h2>

        {/* description */}
        <p className="text-gray-400 mt-6 text-sm leading-relaxed tracking-wide max-w-xl mx-auto">
          Schedule a free consultation with our automation specialists
          and discover how VIP Smart can transform your living space
          into a connected intelligent environment.
        </p>

        {/* button */}
        <button
        className="mt-10 px-10 py-4 rounded-full
        bg-gradient-to-r from-blue-500 to-cyan-400
        text-white font-medium tracking-wide
        shadow-[0_0_20px_rgba(34,211,238,0.5)]
        hover:scale-105 transition">

          Book Installation

        </button>

      </div>

    </section>
  )
}
