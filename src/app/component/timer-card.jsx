import { useState, useEffect } from "react";

export default function TimerCard() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Set your target batch start time here
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 20); // Example: 20 hours from now

    const updateTimer = () => {
      const now = new Date();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft("Starting now");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setTimeLeft(`${hours} hrs ${mins} mins`);
    };

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-sm text-gray-600 mb-2">
      Next batch starts in{" "}
      <span className="font-semibold text-black">{timeLeft}</span>
    </p>
  );
}
