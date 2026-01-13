import { motion } from "framer-motion";
import Hero3D from "./components/Hero3D";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#1E1E2F] text-[#F5F5F5] font-sans">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center">
        <Hero3D />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-4 text-[#FF4C60]"
        >
          Dheepak G
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl max-w-xl"
        >
          I build mind-blowing AI, Robotics & Tech Projects that push boundaries.
        </motion.p>
        <motion.a
          href="#projects"
          className="mt-8 px-6 py-3 bg-[#4CFFF0] text-[#1E1E2F] rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore My Work
        </motion.a>
      </section>

      {/* About Me */}
      <section id="about" className="py-32 px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-[#FF4C60]"
        >
          About Me
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          I’m Dheepak G, a passionate young scientist and programmer. I specialize in AI, IoT, robotics, space research, and immersive tech. 
          I’ve launched 150 pico-satellites, built AI-driven devices, and conducted cutting-edge biotech research.
        </p>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
