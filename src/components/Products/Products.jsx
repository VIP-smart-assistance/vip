
import { motion } from "framer-motion"
import { Lightbulb, Fan, Shield, Cpu } from "lucide-react"

const products = [
  {
    icon: Cpu,
    name: "Smart Switch Module",
    desc: "Convert existing switches into smart automation."
  },
  {
    icon: Fan,
    name: "Smart Fan",
    desc: "Control speed, schedule and automation."
  },
  {
    icon: Lightbulb,
    name: "Smart Light",
    desc: "Dim, automate and control lighting remotely."
  },
  {
    icon: Shield,
    name: "Smart CCTV",
    desc: "24/7 home monitoring with secure streaming."
  }
]

export default function Products() {

  return (
    <section className="relative py-28 px-6 bg-[#0F1322] overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[200px] top-[-200px] left-[-150px]"
        />

        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[200px] bottom-[-150px] right-[-150px]"
        />

        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[200px] top-[40%] left-[40%]"
        />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Smart Products
          </span>
        </motion.h2>

        <p className="text-gray-400 text-center mt-4">
          Powerful devices designed to automate your home
        </p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {products.map((p, i) => {

            const Icon = p.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:-translate-y-3 transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 mb-6">
                  <Icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl text-white font-semibold">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {p.desc}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-400/10"></div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

