import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("bg-light");
    document.body.classList.toggle("text-dark");
    document.body.classList.toggle("text-light");
  };

  return (
    <nav className="fixed w-full bg-dark/90 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Scroll to top when clicking Steven Morales */}
        <Link
          to="hero"      // Make sure your Hero section has id="hero"
          smooth={true}
          duration={500}  // Scroll duration in ms
          className="text-2xl font-bold cursor-pointer"
        >
          Steven Morales
        </Link>

        <div className="flex items-center gap-6">
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
          <button onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}