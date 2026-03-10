import { motion } from "framer-motion"
import { Zap, Smartphone, Home } from "lucide-react"

const steps = [
  {
    icon: Zap,
    title: "Install Device",
    desc: "Our technician installs intelligent retrofit modules into your existing electrical infrastructure."
  },
  {
    icon: Smartphone,
    title: "Connect VIP Handler",
    desc: "Securely link your automation system to the VIP Handler App in seconds."
  },
  {
    icon: Home,
    title: "Smart Control",
    desc: "Manage, monitor and automate your environment seamlessly from anywhere."
  }
]

export default function HowItWorks() {

  return (
    <section className="relative py-28 px-6 bg-[#0F1322] border-t-2 border-dashed border-cyan-300/60 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-cyan-500 opacity-20 blur-[220px] rounded-full"></div>
      </div>

      {/* Floating particles */}
      <motion.div
        animate={{ y:[0,-40,0] }}
        transition={{ duration:6, repeat:Infinity }}
        className="absolute left-[10%] top-[30%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
      />

      <motion.div
        animate={{ y:[0,30,0] }}
        transition={{ duration:7, repeat:Infinity }}
        className="absolute right-[10%] bottom-[30%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
      />


      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-4xl md:text-5xl font-semibold text-white"
        >
          How It{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>

        <p className="text-gray-400 mt-4 text-sm tracking-wide">
          Experience intelligent home automation in three simple steps
        </p>


        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-12 mt-20">

          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[17%] right-[17%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"/>

          {steps.map((step,i)=>{

            const Icon = step.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:i*0.2, duration:0.6 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 text-xs px-3 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/10">
                  0{i+1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl
                bg-gradient-to-r from-blue-500 to-cyan-400 mb-6
                shadow-[0_0_25px_rgba(34,211,238,0.4)]
                group-hover:scale-110 transition">

                  <Icon size={26} className="text-white"/>
                </div>

                {/* Title */}
                <h3 className="text-xl text-white font-semibold tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-4 leading-relaxed tracking-wide">
                  {step.desc}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-400/10"></div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

