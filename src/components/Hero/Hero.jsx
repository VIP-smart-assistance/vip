import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="fixed inset-0 flex items-center justify-center text-center px-6 z-0">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[700px] h-[700px] bg-cyan-500/30 blur-[240px] rounded-full"></div>
      </div>

      <div className="max-w-5xl">

        {/* Small Tagline */}
        <motion.p
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-cyan-400 text-sm tracking-widest uppercase font-medium"
        >
          Smart Home Automation Platform
        </motion.p>


        {/* Main Heading */}
        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="mt-6 text-5xl md:text-7xl font-semibold text-white leading-tight"
        >
          Build Your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Intelligent Home
          </span>
        </motion.h1>


        {/* Sub Heading */}
        <motion.p
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:0.3,duration:0.8}}
          className="text-gray-400 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          VIP Smart transforms traditional spaces into connected environments
          through intelligent automation, IoT integration and seamless
          mobile control with the VIP Handler App.
        </motion.p>


        {/* CTA Buttons */}
        <motion.div
  initial={{opacity:0,y:20}}
  animate={{opacity:1,y:0}}
  transition={{delay:0.5,duration:0.8}}
  className="mt-10 flex justify-center gap-5 flex-wrap"
>

  {/* Primary Button */}
  <button className="
  px-10 py-4 rounded-xl
  bg-gradient-to-r from-blue-500 to-cyan-400
  text-white font-medium tracking-wide
  shadow-[0_10px_40px_rgba(34,211,238,0.35)]
  hover:shadow-[0_15px_50px_rgba(34,211,238,0.6)]
  hover:scale-105
  transition-all duration-300
  ">

    Explore Products

  </button>


  {/* Secondary Button */}
  <button className="
  px-10 py-4 rounded-xl
  border border-white/20
  bg-white/5 backdrop-blur-md
  text-white font-medium tracking-wide
  hover:border-cyan-400
  hover:bg-cyan-400/10
  hover:scale-105
  transition-all duration-300
  ">

    Book Consultation

  </button>

</motion.div>

      </div>

    </section>
  )
}
