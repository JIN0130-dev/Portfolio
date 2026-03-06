// src/components/FireSwordCursor.jsx
import { useEffect } from "react";

export default function FireSwordCursor() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = "none"; // don't block clicks
    canvas.style.zIndex = 9999;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const colors = ["#ff4500", "#ff8c00", "#ffd700", "#fff"];
    let mouse = { x: width / 2, y: height / 2 };

    function createParticle(x, y) {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: -Math.random() * 2 - 1,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 40 + Math.random() * 20,
      };
    }

    function drawSword() {
      // Draw sword as a glowing line
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
      ctx.lineTo(mouse.x, mouse.y - 40);
      ctx.lineWidth = 6;
      ctx.strokeStyle = "orange";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "orange";
      ctx.stroke();

      // fire particles along sword
      for (let i = 0; i < 4; i++) {
        particles.push(createParticle(mouse.x, mouse.y - Math.random() * 40));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawSword();

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

    animate();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize canvas
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