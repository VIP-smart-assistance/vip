import { motion } from "framer-motion"

import retrofitBg from "../../assets/retrofitbg.jpg"
import devicesBg from "../../assets/devicesbg.jpg"
import retrofitIcon from "../../assets/retrofiticon.png"
import deviceIcon from "../../assets/devicesicon.png"

export default function Offerings() {

return (
<section className="relative py-28 px-6 bg-[#0F1322] overflow-hidden ">
<div className="absolute top-0 left-0 w-full h-[2px] 
bg-gradient-to-r from-transparent via-cyan-400 to-transparent
opacity-70"></div>
{/* LEFT ROTATING DOT CIRCLE */}
{/* <div className="absolute left-[-350px] top-[-350px] pointer-events-none z-0">
<motion.svg
animate={{ rotate:360 }}
transition={{ repeat:Infinity, duration:20, ease:"linear" }}
className="w-[700px] h-[700px]"
viewBox="0 0 200 200"
>
<circle
cx="100"
cy="100"
r="95"
fill="none"
stroke="rgba(176,174,229,0.5)"
strokeWidth="1"
strokeDasharray="1 4"
strokeLinecap="round"
/>
</motion.svg>
</div> */}

{/* RIGHT ROTATING DOT CIRCLE */}
<div className="absolute right-[-350px] bottom-[-350px] pointer-events-none z-0">
<motion.svg
animate={{ rotate:-360 }}
transition={{ repeat:Infinity, duration:22, ease:"linear" }}
className="w-[700px] h-[700px]"
viewBox="0 0 200 200"
>
<circle
cx="100"
cy="100"
r="95"
fill="none"
stroke="rgba(56,189,248,0.3)"
strokeWidth="1"
strokeDasharray="1 4"
strokeLinecap="round"
/>
</motion.svg>
</div>


<div className="max-w-7xl mx-auto relative z-10">

{/* TITLE */}
<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-4xl md:text-5xl font-semibold text-center text-white tracking-tight"
>
Our{" "}
<span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]">
Offerings
</span>
</motion.h2>

<p className="text-gray-400 text-center mt-4 text-sm tracking-wide">
Transform your home with retrofit automation or explore our smart device ecosystem.
</p>


<div className="relative mt-20">

{/* WIFI PULSE */}
<motion.div
animate={{ scale:[1,1.6,1], opacity:[0.5,0.1,0.5] }}
transition={{ duration:5, repeat:Infinity }}
className="absolute left-1/2 -translate-x-1/2 -top-28 w-52 h-52 border border-cyan-400/30 rounded-full"
/>

<motion.div
animate={{ scale:[1,1.9,1], opacity:[0.4,0.05,0.4] }}
transition={{ duration:6, repeat:Infinity }}
className="absolute left-1/2 -translate-x-1/2 -top-28 w-72 h-72 border border-blue-400/20 rounded-full"
/>


{/* ORBIT HUB */}
<motion.div
animate={{ rotate:360 }}
transition={{ duration:30, repeat:Infinity, ease:"linear" }}
className="absolute -top-36 left-1/2 -translate-x-1/2 w-32 h-32"
>
<div className="absolute w-full h-full border border-cyan-400/20 rounded-full"></div>

<motion.div
animate={{ rotate:-360 }}
transition={{ duration:10, repeat:Infinity, ease:"linear" }}
className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
/>
</motion.div>


{/* FLOATING NODES */}
<motion.div animate={{y:[0,-30,0]}} transition={{duration:6,repeat:Infinity}} className="absolute -left-20 top-10 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
<motion.div animate={{y:[0,40,0]}} transition={{duration:8,repeat:Infinity}} className="absolute -left-32 bottom-20 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" />

<motion.div animate={{y:[0,-40,0]}} transition={{duration:7,repeat:Infinity}} className="absolute -right-20 top-20 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" />
<motion.div animate={{y:[0,35,0]}} transition={{duration:9,repeat:Infinity}} className="absolute -right-32 bottom-10 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_#67e8f9]" />

<motion.div animate={{y:[0,-20,0]}} transition={{duration:7,repeat:Infinity}} className="absolute left-[20%] -top-16 w-2 h-2 bg-blue-300 rounded-full" />
<motion.div animate={{y:[0,25,0]}} transition={{duration:5,repeat:Infinity}} className="absolute right-[20%] -top-20 w-2 h-2 bg-cyan-300 rounded-full" />


{/* DATA PARTICLES */}
<motion.div animate={{y:[0,-90],opacity:[0,1,0]}} transition={{duration:6,repeat:Infinity}} className="absolute bottom-0 left-[30%] w-1 h-1 bg-cyan-300 rounded-full"/>
<motion.div animate={{y:[0,-80],opacity:[0,1,0]}} transition={{duration:5,repeat:Infinity}} className="absolute bottom-0 right-[30%] w-1 h-1 bg-blue-300 rounded-full"/>


{/* DATA BEAM */}
<motion.div
animate={{x:["-10%","110%"]}}
transition={{duration:12,repeat:Infinity,ease:"linear"}}
className="absolute bottom-[-40px] w-[260px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
/>


{/* DIAGONAL SIGNAL */}
<motion.div
animate={{opacity:[0.2,0.6,0.2]}}
transition={{duration:6,repeat:Infinity}}
className="absolute left-0 top-0 w-full h-full bg-gradient-to-tr from-transparent via-cyan-500/5 to-transparent"
/>


{/* CARD GRID */}
<div className="grid md:grid-cols-2 gap-10">


{/* VIP Retrofit Card */}
<motion.div
initial={{ opacity:0, y:40 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.6 }}
className="group relative aspect-square rounded-3xl overflow-hidden border border-white/10 
bg-white/5 backdrop-blur-xl hover:-translate-y-4 transition-all duration-500
shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
>

{/* Glow Border */}
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500
bg-gradient-to-r from-cyan-400/20 via-blue-400/10 to-purple-400/20 blur-xl"></div>

{/* Background Image */}
<img
src={retrofitBg}
className="absolute inset-0 w-full h-full object-cover opacity-70
group-hover:scale-110 transition-transform duration-700"
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-[#0B0F1A]/70 backdrop-blur-sm"></div>

{/* Content */}
<div className="relative z-10 p-10 h-full flex flex-col justify-between">

<div>
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
VIP Retrofit
</h3>

<div className="w-20 h-20 flex items-center justify-center
rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10
shadow-[0_0_25px_rgba(34,211,238,0.3)]
group-hover:scale-110 transition duration-500">

<img
src={retrofitIcon}
className="w-12 h-12 object-contain"
/>

</div>
</div>

<p className="text-gray-300 text-[15px] leading-relaxed tracking-wide font-light">
Upgrade your existing infrastructure into a fully connected automation system using the
<span className="text-blue-300 font-medium"> VIP Core Hub </span>
and our advanced
<span className="text-cyan-300 font-medium"> retrofit modules</span>.
Manage, monitor, and automate your environment seamlessly through the <span> </span>
<span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold">
  VIP Handler App
</span>, delivering a smarter and more efficient living experience.
</p>



</div>

{/* Hover Light Sweep */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none
bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

</motion.div>



{/* VIP Smart Devices Card */}
<motion.div
initial={{ opacity:0, y:40 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.6, delay:0.2 }}
className="group relative aspect-square rounded-3xl overflow-hidden border border-white/10 
bg-white/5 backdrop-blur-xl hover:-translate-y-4 transition-all duration-500
shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
>

{/* Glow Border */}
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500
bg-gradient-to-r from-purple-400/20 via-blue-400/10 to-indigo-400/20 blur-xl"></div>

{/* Background Image */}
<img
src={devicesBg}
className="absolute inset-0 w-full h-full object-cover opacity-70
group-hover:scale-110 transition-transform duration-700"
/>

{/* Overlay */}
<div className="absolute inset-0 bg-[#0B0F1A]/75 backdrop-blur-sm"></div>

{/* Content */}
<div className="relative z-10 p-10 h-full flex flex-col justify-between">

<div>
<h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
VIP Smart Devices
</h3>

<div className="w-20 h-20 flex items-center justify-center
rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10
shadow-[0_0_25px_rgba(168,85,247,0.3)]
group-hover:scale-110 transition duration-500">

<img
src={deviceIcon}
className="w-12 h-12 object-contain"
/>

</div>
</div>


<p className="text-gray-300 text-[15px] leading-relaxed tracking-wide font-light">
  Explore our ecosystem of{" "}
  <span className="text-cyan-300 font-medium">
    intelligent smart devices
  </span>{" "}
  designed to integrate seamlessly with the{" "}
  <span className="text-blue-300 font-medium">
    VIP Handler App
  </span>.
  Experience a new level of{" "}
  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-semibold">
    connected living
  </span>{" "}
  where automation, convenience, and security work together to create a
  truly modern home.
</p>



</div>

{/* Hover Light Sweep */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none
bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

</motion.div>



</div>

</div>

</div>

</section>
)
}
