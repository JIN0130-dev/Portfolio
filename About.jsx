import stevenPic from "../assets/steven.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Glow circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Profile Image */}
        <motion.div
          className="relative w-64 h-64 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 shadow-2xl">
            <img
              src={stevenPic}
              alt="Steven Morales"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            I'm <span className="text-purple-400 font-semibold">Steven Morales</span>,
            a versatile Senior Full Stack Engineer with 9+ years of experience
            building scalable web, cloud, and mobile applications.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            My expertise includes React, Next.js, Node.js, Python, Django,
            Angular, Vue, Java (Spring Boot), .NET/C#, DevOps, AI/ML, and
            cloud platforms like AWS and GCP.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-6">

            <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <h3 className="text-2xl font-bold text-purple-400">9+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <h3 className="text-2xl font-bold text-purple-400">50+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <h3 className="text-2xl font-bold text-purple-400">20+</h3>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}