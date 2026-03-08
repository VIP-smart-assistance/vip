import { motion } from "framer-motion"

export default function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-blue-600 opacity-30 rounded-full blur-[220px] top-[-200px] left-[-200px]"
      />

      <motion.div
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-purple-600 opacity-25 rounded-full blur-[220px] bottom-[-200px] right-[-200px]"
      />

      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-cyan-500 opacity-20 rounded-full blur-[220px] top-[40%] left-[40%]"
      />

    </div>
  )
}
