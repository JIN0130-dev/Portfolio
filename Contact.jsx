import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      "YOUR_SERVICE_ID", // EmailJS service ID
      "YOUR_TEMPLATE_ID", // EmailJS template ID
      formData,
      "YOUR_PUBLIC_KEY" // EmailJS public key
    )
    .then(() => {
      setSending(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setSending(false);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-4">
        w.bexpert5007@gmail.com | +1 (929) 810 3425 | in/stmorales23
      </p>

      {/* Button to open form */}
      {!formOpen && (
        <button
          onClick={() => setFormOpen(true)}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Send Message
        </button>
      )}

      {/* Contact Form */}
      {formOpen && (
        <form
          onSubmit={handleSend}
          className="mt-6 flex flex-col gap-4 text-left bg-gray-800 p-6 rounded-lg max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white outline-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            {sending ? "Sending..." : "Send"}
          </button>
          {success && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        </form>
      )}
    </section>
  );
}