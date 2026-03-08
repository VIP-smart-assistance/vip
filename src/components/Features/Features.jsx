export default function Features() {
  const features = [
    {
      title: "Voice Control",
      desc: "Control devices using simple voice commands."
    },
    {
      title: "Automation",
      desc: "Create schedules and automation for your home."
    },
    {
      title: "Secure IoT",
      desc: "Advanced security for all smart devices."
    }
  ]

  return (
    <section className="py-24 px-6 bg-[#0B0F1A]">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl text-white font-bold">
          Powerful Smart Home Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {features.map((f,i)=>(
            <div key={i}
            className="bg-[#141824] p-8 rounded-2xl border border-gray-800 hover:-translate-y-2 transition">

              <h3 className="text-xl text-white font-semibold">{f.title}</h3>

              <p className="text-gray-400 text-sm mt-3">{f.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
