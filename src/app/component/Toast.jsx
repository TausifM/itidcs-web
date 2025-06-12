export default function Toast({ type = "success", message, onClose }) {
  const bgColor =
    type === "success" ? "bg-emerald-500" : "bg-red-500";
  const icon =
    type === "success" ? "✅" : "⚠️";

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-slideInUp">
      <div
        className={`flex items-center gap-4 px-6 py-4 rounded-xl shadow-xl text-white ${bgColor} backdrop-blur-md bg-opacity-90`}
      >
        <span className="text-xl">{icon}</span>
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-2 text-white text-lg hover:text-black"
        >
          &times;
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
