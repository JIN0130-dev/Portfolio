// src/components/FirePointer.jsx
import { useEffect } from "react";

export default function FirePointer() {

  useEffect(() => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = "none"; // don't block clicks
    canvas.style.zIndex = 9999;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const colors = ["#ff4500", "#ff8c00", "#ffd700", "#fff"];

    function createParticle(x, y) {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 2 - 1,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 50 + Math.random() * 30
      };
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.size *= 0.95;
        p.life--;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        if (p.life <= 0 || p.size <= 0.5) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      for (let i = 0; i < 5; i++) {
        particles.push(createParticle(e.clientX, e.clientY));
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // resize
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
}