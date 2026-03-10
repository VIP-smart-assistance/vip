import { useState, useEffect } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0F1A]/20 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          VIP Smart
        </h1>

        {/* Menu */}
<ul className="hidden md:flex gap-10 text-sm font-medium">

<li
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="relative group cursor-pointer"
>
  Home
  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
</li>

  <li className="relative group cursor-pointer">
    <a href="#products">
      Products
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
    </a>
  </li>

  <li className="relative group cursor-pointer">
    <a href="#services">
      Services
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
    </a>
  </li>

  <li className="relative group cursor-pointer">
    <a href="#contact">
      Contact
      <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
    </a>
  </li>

</ul>

        {/* CTA */}
        <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition transform shadow-lg shadow-blue-500/20">
          Book Install
        </button>

      </div>

      {/* Dashed Border */}
      <div className="max-w-8xl mx-auto px-8">
        <div className="border-b border-dashed border-white/80"></div>
      </div>

    </nav>
  );
}