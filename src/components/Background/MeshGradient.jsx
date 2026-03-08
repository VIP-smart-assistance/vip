import { motion } from "framer-motion";

export default function MeshGradient() {
  return (
    <motion.div
      className="fixed inset-0 -z-20"
      style={{
        backgroundColor: "#0B0F1A",
        backgroundImage: `
          radial-gradient(circle at var(--x1) var(--y1), rgba(59,130,246,0.35), transparent 40%),
          radial-gradient(circle at var(--x2) var(--y2), rgba(139,92,246,0.35), transparent 40%),
          radial-gradient(circle at var(--x3) var(--y3), rgba(6,182,212,0.25), transparent 40%)
        `
      }}
      animate={{
        "--x1": ["20%", "30%", "20%"],
        "--y1": ["30%", "40%", "30%"],
        "--x2": ["80%", "70%", "80%"],
        "--y2": ["70%", "60%", "70%"],
        "--x3": ["40%", "50%", "40%"],
        "--y3": ["80%", "70%", "80%"]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}