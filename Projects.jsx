import { link, title } from "framer-motion/client";

export default function Projects() {
  const projects = [
    { title: "Senior Software Engineer", tech: "React, Next.js, TypeScript, Tailwind, Node, Django, Redis", link: "https://www.nclhltd.com/" },
    { title: "Senior Software Engineer", tech: "Angular, TypeScript, Node, Scala, Stripe", link: "https://www.ncl.com/" },
    { title: "Software Developer", tech: "React Native, TypeScript, Firebase, gRPC, Python ML", link: "#" },
    { title: "AI Engineer", tech: "Python, TensorFlow, Keras, NumPy, Pandas, LSTM, CNN, Deep Learning, Model Evaluation", link: "#"},
    { title: "AI Developer", tech: "Python, NLP, Sentiment Analysis, TF-IDF, Scikit-learn, Twitter API, Spotify Dataset, Data Modeling", link: "#"}
  ];

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.tech}</p>
            <a href={p.link} target="_blank" className="bg-primary text-dark px-4 py-2 rounded-lg inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}