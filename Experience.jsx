import { motion } from "framer-motion";

export default function Experience() {

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Norwegian Cruise Line Holdings Ltd. (NCLH)",
      period: "Aug 2024 - Sep 2025",
      desc: "Delivered backend & full-stack features supporting high-traffic websites, APIs, cloud deployments, microservices, CI/CD pipelines, and modern frontend frameworks."
    },
    {
      title: "Multi-Role Technical Experience",
      company: "Florida International University (FIU)",
      period: "Jan 2018 - Jul 2024",
      desc: "Worked on ERP systems, enterprise databases, internal platforms, analytics dashboards, and modern web apps while improving UX, performance, and data reliability."
    }
  ];

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red via-gray-900 to-black"></div>

      {/* Glow effect */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-12 ml-8"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              {/* Timeline Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full ring-8 ring-black"></span>

              {/* Card */}
              <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition">

                <h3 className="text-xl font-bold text-white">
                  {exp.title}
                </h3>

                <span className="text-gray-400 text-sm">
                  {exp.company} | {exp.period}
                </span>

                <p className="mt-3 text-gray-300 leading-relaxed">
                  {exp.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}