import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="fixed inset-0 flex items-center justify-center text-center px-6 z-0">

      {/* Spotlight Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[650px] h-[650px] bg-cyan-500/30 blur-[220px] rounded-full"></div>
      </div>

      <div className="max-w-4xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-5xl md:text-7xl font-semibold text-white leading-tight"
        >
          The Future of{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Intelligent Living
          </span>
        </motion.h1>


        {/* Subtext */}
        <motion.p
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.3, duration:0.8 }}
          className="text-gray-400 mt-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Transform traditional spaces into connected environments with
          VIP Smart's intelligent automation platform — powered by IoT,
          seamless mobile control, and advanced home intelligence.
        </motion.p>

      </div>

    </section>
  )
}
