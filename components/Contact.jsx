import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", link: "https://github.com/YOUR_USERNAME" },
  { name: "LinkedIn", link: "https://linkedin.com/in/YOUR_USERNAME" },
  { name: "Email", link: "mailto:YOUR_EMAIL" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 bg-[#121212] text-center">
      <h2 className="text-4xl font-bold mb-12 text-[#FF4C60]">Contact Me</h2>
      <div className="flex justify-center space-x-8">
        {socials.map((s) => (
          <motion.a
            key={s.name}
            href={s.link}
            target="_blank"
            className="text-[#4CFFF0] text-2xl font-semibold hover:scale-125 transition-transform"
            whileHover={{ scale: 1.3 }}
          >
            {s.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
