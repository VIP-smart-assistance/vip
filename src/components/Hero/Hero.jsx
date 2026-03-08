import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="fixed inset-0 flex items-center justify-center text-center px-6 z-0">

      {/* Spotlight Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] bg-blue-500 opacity-30 blur-[200px] rounded-full"></div>
      </div>

      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-6xl font-bold text-white"
        >
          Smart Living Powered by IoT
        </motion.h1>

        <p className="text-gray-400 mt-6 text-lg">
          Control lights, fans, cameras and appliances from one intelligent app.
        </p>
      </div>

    </section>
  )
}