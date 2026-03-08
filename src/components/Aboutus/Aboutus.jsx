import { motion } from "framer-motion"

export default function AboutUs(){

  const stats = [
    { number: "10+", label: "Smart Devices Supported" },
    { number: "1 App", label: "Unified Home Control" },
    { number: "24/7", label: "Monitoring & Support" },
    { number: "IoT", label: "Smart Automation Platform" }
  ]

  return(
    <section className="py-28 px-6 bg-gradient-to-b from-[#18122B] via-[#312E81] to-[#0F0A1F]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-4xl md:text-5xl text-center text-white font-semibold tracking-tight"
        >
          About{" "}
          <span className="
          bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
          bg-clip-text text-transparent">
            VIP Smart
          </span>
        </motion.h2>


        {/* Description */}
        <motion.p
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6,delay:0.1}}
          className="text-gray-400 text-center max-w-3xl mx-auto mt-6 leading-relaxed"
        >
          VIP Smart is building the next generation of intelligent homes by combining
          IoT automation, smart devices and cloud intelligence. Our platform enables
          seamless control of lighting, fans, security systems, water management and
          other connected appliances through a single unified mobile application —
          VIP Handler.
        </motion.p>


        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-10 mt-20">

  {stats.map((stat,i)=>(
    <motion.div
      key={i}
      initial={{opacity:0,y:40}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,delay:i*0.1}}
      className={`text-center relative ${
        i !== stats.length - 1 ? "md:border-r md:border-dashed md:border-white/90 md:pr-10" : ""
      }`}
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

          <p className="text-gray-400 leading-relaxed">
            By combining retrofit automation modules with native smart devices,
            VIP Smart transforms traditional homes into fully connected ecosystems.
            Users can monitor and control their environment in real time, automate
            daily routines, improve energy efficiency, and enhance home security
            from anywhere using the VIP Handler mobile application.
          </p>

        </motion.div>

      </div>

    </section>
  )
}