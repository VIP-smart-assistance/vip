export default function ProductCard({ title, description, icon: Icon }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10
    hover:-translate-y-3 transition-all duration-300 overflow-hidden">

      {/* Icon container */}
      <div className="w-14 h-14 flex items-center justify-center rounded-xl
      bg-gradient-to-r from-blue-500 to-cyan-400
      shadow-lg shadow-blue-500/20 mb-6">

        {Icon && <Icon size={24} className="text-white" />}

      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mt-3 text-sm leading-relaxed">
        {description}
      </p>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100
      transition pointer-events-none
      bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl"></div>

    </div>
  )
}