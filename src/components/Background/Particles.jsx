export default function Particles() {

  const particles = Array.from({ length: 40 })

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">

      {particles.map((_,i)=>(
        <span
          key={i}
          className="absolute w-1 h-1 bg-white opacity-20 rounded-full"
          style={{
            top: `${Math.random()*100}%`,
            left: `${Math.random()*100}%`,
            animation: `float ${5 + Math.random()*10}s infinite`
          }}
        />
      ))}

    </div>
  )
}
