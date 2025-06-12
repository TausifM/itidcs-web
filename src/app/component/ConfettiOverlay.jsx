import { useEffect, useState } from "react";

export default function ConfettiOverlay() {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // Create 40 random confetti pieces on mount
    setConfetti(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 3,
        backgroundColor: getRandomColor(),
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {confetti.map((c) => (
        <span
          key={c.id}
          className="confetti absolute w-2 h-2 rounded-sm"
          style={{
            left: `${c.left}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            backgroundColor: c.backgroundColor,
          }}
        />
      ))}

      <style jsx>{`
        .confetti {
          top: -10px;
          animation-name: fall, sway;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite;
          transform-origin: center;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }

        @keyframes sway {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

function getRandomColor() {
  const colors = [
    "#f87171", // red-400
    "#fb923c", // orange-400
    "#facc15", // yellow-400
    "#4ade80", // green-400
    "#38bdf8", // blue-400
    "#a78bfa", // purple-400
    "#f472b6", // pink-400
    "#ffffff", // white
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
