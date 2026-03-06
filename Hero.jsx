import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  const title = "Hi, I'm Steven Morales";
  const subtitle =
    "Senior Full Stack Engineer | Cloud & AI Expert | 9 Years of Experience Building Scalable Web & Mobile Solutions";

  // Framer Motion variants for letters
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Moving background overlay */}
      <div className="absolute inset-0 bg-moving"></div>
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10">
        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center neon-text neon-animated"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, idx) => (
            <motion.span key={idx} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="text-xl md:text-2xl mb-6 max-w-2xl flex flex-wrap justify-center text-cyan-400 neon-text neon-animated"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {subtitle.split("").map((char, idx) => (
            <motion.span key={idx} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          View My Work
        </motion.button>
      </div>
    </section>
  );
}