import { motion } from "framer-motion"
import { Zap, Smartphone, Home } from "lucide-react"

const steps = [
  {
    icon: Zap,
    title: "Install Device",
    desc: "Our technician installs smart modules into your switches."
  },
  {
    icon: Smartphone,
    title: "Connect App",
    desc: "Link devices to your mobile app instantly."
  },
  {
    icon: Home,
    title: "Control Everything",
    desc: "Control lights, fans and security from anywhere."
  }
]

export default function HowItWorks() {

  return (
    <section className="py-28 px-6 bg-[#0F1322] border-t-2 border-dashed border-cyan-300/60">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] bg-blue-500 opacity-30 blur-[200px] rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          How It{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>

        <p className="text-gray-400 mt-4">
          Smart home automation in three simple steps
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {steps.map((step,i)=>{

            const Icon = step.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:i*0.2, duration:0.6 }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 shadow-lg shadow-blue-500/20">
                  <Icon size={24} className="text-white"/>
                </div>

                {/* Step Title */}
                <h3 className="text-xl text-white font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>

                {/* Glow hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-400/10"></div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}