import { motion } from "framer-motion"
import appShowcase from "../../assets/appshowcase.png"

export default function AppShowcase(){

  return(
    <section className="py-24 px-6  bg-[#0F1322] ">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Phone Image */}
        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          className="flex justify-center"
        >

          <img
            src={appShowcase}
            alt="VIP Handler App"
            className="w-[420px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          />

        </motion.div>


        {/* Text Section */}
        <motion.div
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
        >

          <h2 className="text-4xl text-white font-bold">
            Control Your Home From One App
          </h2>

          <p className="text-gray-400 mt-4">
            Monitor devices, schedule automation and manage security directly from your smartphone.
          </p>

          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Download App
          </button>

        </motion.div>

      </div>

    </section>
  )
}