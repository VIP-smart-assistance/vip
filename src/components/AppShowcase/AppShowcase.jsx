import { motion } from "framer-motion"
import { Smartphone, Shield, Zap, Mic, Clock, ShieldCheck } from "lucide-react"
import appShowcase from "../../assets/appshowcase.png"

export default function AppShowcase(){

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
      desc: "Enterprise-grade protection ensuring every connected device remains safe."
    }
  ]

  return(
    <section className="relative py-28 px-6 bg-[#0F1322] overflow-hidden">

      {/* top divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] 
      bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>

      {/* background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-cyan-500/20 blur-[220px] rounded-full"></div>
      </div>

      {/* floating particles */}
      <motion.div
        animate={{y:[0,-40,0]}}
        transition={{duration:6,repeat:Infinity}}
        className="absolute left-[12%] top-[30%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
      />

      <motion.div
        animate={{y:[0,30,0]}}
        transition={{duration:7,repeat:Infinity}}
        className="absolute right-[12%] bottom-[30%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
      />


      <div className="max-w-6xl mx-auto relative z-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Phone */}
          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="flex justify-center relative"
          >

            <div className="absolute w-[420px] h-[420px] bg-cyan-400/20 blur-[140px] rounded-full"></div>

            <motion.img
              src={appShowcase}
              alt="VIP Handler App"
              className="relative w-[420px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
              animate={{y:[0,-10,0]}}
              transition={{duration:4,repeat:Infinity}}
            />

          </motion.div>


          {/* Text */}
          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl"
          >

            <h2 className="text-4xl md:text-5xl text-white font-semibold leading-tight">
              Control Your Home With The{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                VIP Handler App
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-sm leading-relaxed tracking-wide">
              Manage your entire automation ecosystem from a single intuitive
              interface. Monitor systems, configure automation workflows,
              and stay connected to your environment anytime, anywhere.
            </p>


            {/* small feature list */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Zap size={18} className="text-cyan-400"/>
                Intelligent automation controls
              </div>

              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Shield size={18} className="text-blue-400"/>
                Real-time monitoring & security
              </div>

              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <Smartphone size={18} className="text-purple-400"/>
                Seamless mobile control
              </div>

            </div>


            <button className="mt-8 px-7 py-3 rounded-full 
            bg-gradient-to-r from-blue-500 to-cyan-400 
            text-white font-medium tracking-wide
            shadow-[0_0_20px_rgba(34,211,238,0.5)]
            hover:scale-105 transition">

              Download App

            </button>

          </motion.div>

        </div>


        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">

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

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl
                bg-gradient-to-r from-blue-500 to-cyan-400 mb-6
                shadow-[0_0_25px_rgba(34,211,238,0.4)]
                group-hover:scale-110 transition">

                  <Icon size={26} className="text-white"/>

                </div>

                <h3 className="text-xl text-white font-semibold">
                  {f.title}
                </h3>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {f.desc}
                </p>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-400/10"></div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}
