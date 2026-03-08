import { motion } from "framer-motion"

export default function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Blue Blob */}
      <motion.div
        animate={{ x: [0, 150, -100, 0], y: [0, 100, -80, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute w-[600px] h-[600px] bg-blue-500 opacity-40 blur-[150px] rounded-full top-[10%] left-[10%]"
      />

      {/* Purple Blob */}
      <motion.div
        animate={{ x: [0, -150, 120, 0], y: [0, -120, 80, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute w-[600px] h-[600px] bg-purple-500 opacity-40 blur-[150px] rounded-full bottom-[10%] right-[10%]"
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{ x: [0, 120, -80, 0], y: [0, -60, 100, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[500px] bg-cyan-400 opacity-30 blur-[140px] rounded-full top-[40%] left-[40%]"
      />

    </div>
  )
}