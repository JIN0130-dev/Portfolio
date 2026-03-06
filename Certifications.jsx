export default function Certifications() {
  const certs = [
    "Deep Learning Specialization - DeepLearning.AI",
    "Structuring Machine Learning Projects - DeepLearning.AI",
    "Learning Django - LinkedIn",
    "IBM Data Science Professional Certificate - Coursera"
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Certifications</h2>
        <ul className="flex flex-col gap-4">
          {certs.map((c, idx) => <li key={idx} className="bg-gray-800 p-4 rounded-lg">{c}</li>)}
        </ul>
      </div>
    </section>
  )
}