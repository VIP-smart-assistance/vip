import { motion } from "framer-motion"
import { Mic, Clock, ShieldCheck } from "lucide-react"

export default function Features() {

  const features = [
    {
      icon: Mic,
      title: "Voice Control",
      desc: "Interact with your home using natural voice commands through the VIP Handler ecosystem."
    },
    {
      icon: Clock,
      title: "Smart Automation",
      desc: "Create intelligent routines and schedules that adapt to your lifestyle."
    },
    {
      icon: ShieldCheck,
      title: "Secure IoT",
      desc: "Enterprise-grade protection ensuring every connected device remains safe and reliable."
    }
  ]

  return (
    <section className="relative py-28 px-6 bg-[#0F1322] overflow-hidden">

      {/* top divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] 
      bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>


      {/* glow background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[650px] h-[650px] bg-cyan-500/20 blur-[220px] rounded-full"></div>
      </div>


      {/* floating particles */}
      <motion.div
        animate={{y:[0,-40,0]}}
        transition={{duration:6,repeat:Infinity}}
        className="absolute left-[10%] top-[30%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
      />

      <motion.div
        animate={{y:[0,30,0]}}
        transition={{duration:7,repeat:Infinity}}
        className="absolute right-[10%] bottom-[30%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
      />


      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* title */}
        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-4xl md:text-5xl text-white font-semibold"
        >
          Powerful{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Smart Home Features
          </span>
        </motion.h2>

        <p className="text-gray-400 mt-4 text-sm max-w-xl mx-auto">
          Designed to simplify automation while delivering intelligence,
          control and security to every connected space.
        </p>


        {/* feature cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {features.map((f,i)=>{

            const Icon = f.icon

            return(
              <motion.div
                key={i}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:i*0.2}}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:-translate-y-3 transition-all duration-300"
              >

                {/* icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl
                bg-gradient-to-r from-blue-500 to-cyan-400 mb-6
                shadow-[0_0_25px_rgba(34,211,238,0.4)]
                group-hover:scale-110 transition">

                  <Icon size={26} className="text-white"/>

                </div>

                {/* title */}
                <h3 className="text-xl text-white font-semibold">
                  {f.title}
                </h3>

                {/* description */}
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {f.desc}
                </p>

                {/* hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-400/10"></div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}
