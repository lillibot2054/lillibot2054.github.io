import { useEffect } from "react";
import gsap from "gsap";

const projects = [
  { name: "AI Sign Language Glove", link: "#", desc: "Real-time gesture recognition device" },
  { name: "Algae Cancer Research", link: "#", desc: "AI-assisted biochemical analysis" },
  { name: "Pico-Satellite Launch", link: "#", desc: "150 satellites launched successfully" },
];

export default function Projects() {
  useEffect(() => {
    gsap.from(".project-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  return (
    <section id="projects" className="py-32 px-8 text-center">
      <h2 className="text-4xl font-bold mb-12 text-[#4CFFF0]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="project-card p-6 bg-[#1E1E2F] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-4">{project.desc}</p>
            <a href={project.link} className="text-[#FF4C60] font-semibold hover:underline">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
