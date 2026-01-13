import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 95 },
  { name: "AI & ML", level: 90 },
  { name: "ESP32 / IoT", level: 85 },
  { name: "React.js", level: 90 },
  { name: "3D Modeling / AR/VR", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 bg-[#121212]">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#4CFFF0]">Skills</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-[#1E1E2F] rounded-full h-4">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5 }}
                className="h-4 rounded-full bg-[#FF4C60]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
