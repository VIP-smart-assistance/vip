import { motion } from "framer-motion"

export default function AboutUs(){

  const stats = [
    { number: "10+", label: "Smart Devices Supported" },
    { number: "1 App", label: "Unified Home Control" },
    { number: "24/7", label: "Monitoring & Support" },
    { number: "IoT", label: "Automation Platform" }
  ]

  return(
    <section className="relative py-28 px-6 bg-[#0F1322] overflow-hidden ">
<div className="absolute top-0 left-0 w-full h-[2px] 
bg-gradient-to-r from-transparent via-cyan-400 to-transparent
opacity-70"></div>
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-cyan-500/20 blur-[220px] rounded-full"></div>
      </div>

      {/* Floating particles */}
      <motion.div
        animate={{y:[0,-40,0]}}
        transition={{duration:6,repeat:Infinity}}
        className="absolute left-[15%] top-[30%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
      />

      <motion.div
        animate={{y:[0,30,0]}}
        transition={{duration:7,repeat:Infinity}}
        className="absolute right-[15%] bottom-[30%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-4xl md:text-5xl text-center text-white font-semibold tracking-tight"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            VIP Smart
          </span>
        </motion.h2>


        {/* Description */}
        <motion.p
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6,delay:0.1}}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-6 leading-relaxed tracking-wide"
        >
          VIP Smart is building the next generation of intelligent homes by
          combining IoT automation, smart devices, and cloud intelligence.
          Our platform enables seamless control of connected environments
          through a unified mobile experience — the VIP Handler App.
        </motion.p>


        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {stats.map((stat,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:i*0.1}}
              className="group relative text-center bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="
              text-4xl md:text-5xl font-semibold
              bg-gradient-to-r from-blue-400 to-cyan-400
              bg-clip-text text-transparent
              ">
                {stat.number}
              </div>

              <p className="text-gray-400 mt-3 text-sm tracking-wide">
                {stat.label}
              </p>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-400/10"></div>

            </motion.div>
          ))}

        </div>


        {/* Bottom Description */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="max-w-4xl mx-auto text-center mt-20"
        >

          <p className="text-gray-400 leading-relaxed tracking-wide">
            By combining retrofit automation modules with native smart devices,
            VIP Smart transforms traditional spaces into connected ecosystems.
            Users can monitor, automate, and optimize their environments while
            improving efficiency, security, and convenience through the
            VIP Handler mobile platform.
          </p>

        </motion.div>

      </div>
<div className="absolute bottom-0 left-0 w-full h-[120px] 
bg-gradient-to-b from-transparent to-[#0F1322] pointer-events-none"/>
    </section>
  )
}
