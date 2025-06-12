import Image from "next/image";
import careerLogo from "../../../public/career-cloud.png";
import itidcsLogo from "../../../public/logo.png";

export default function CelebrationBanner() {
  return (
    <section className="relative bg-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft glow background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-80 h-80 bg-purple-500/20 blur-2xl top-[-60px] left-[10%] animate-float rounded-full"></div>
        <div className="absolute w-80 h-80 bg-emerald-400/20 blur-2xl bottom-[-60px] right-[10%] animate-float2 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 sm:p-10 shadow-lg">
        
        {/* Logos */}
        <div className="flex items-center justify-center gap-6 flex-wrap mb-2 p-4">
          <Image
            src={careerLogo}
            alt="Career CLOUD Logo"
            width={220}
            height={50}
            className="object-contain drop-shadow-md bg-white rounded-lg animate-float2 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          />
          <span className="text-4xl font-bold text-lime-400">+</span>
          <Image
            src={itidcsLogo}
            alt="ITIDCS Logo"
            width={160}
            height={50}
            className="object-contain drop-shadow-md bg-indigo-500 rounded-lg animate-float2 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text mb-2 animate-textGlow">
          🚀 Career CLOUD + ITIDCS
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-300 font-medium">
          Collaborating for a Smarter Future — <span className="text-lime-300 font-semibold">2025</span>
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        @keyframes textGlow {
          from {
            text-shadow: 0 0 4px #84cc16, 0 0 10px #22c55e;
          }
          to {
            text-shadow: 0 0 14px #bef264, 0 0 25px #4ade80;
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
        }

        .animate-textGlow {
          animation: textGlow 2.5s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}
