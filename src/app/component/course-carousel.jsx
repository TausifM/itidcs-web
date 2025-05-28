import { useEffect } from "react";
import coursesData from "../data/coursesData";
import Image from "next/image";
import TimerCard from "./timer-card";
import Link from "next/link";

export default function CourseCarousel() {
  useEffect(() => {
    const carousel = document.getElementById("carousel");

    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = 520;

    const autoScroll = () => {
      if (!carousel) return;

      // Scroll by step
      carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
      scrollAmount += scrollStep;

      // If scrolled to the end (approx), reset instantly to the start
      if (scrollAmount >= carousel.scrollWidth / 2) {
        setTimeout(() => {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }, 500); // Give time for last scroll to finish
      }
    };

    const interval = setInterval(autoScroll, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.scrollBy({ left: direction * 520, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Explore Our Courses
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          &#10094;
        </button>

        {/* Carousel */}
        <div
          id="carousel"
          className="flex overflow-x-auto gap-6 px-2 md:px-10 no-scrollbar scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Duplicate the courses for infinite scroll effect */}
          {[...coursesData, ...coursesData].map((course, idx) => {
            const seatsLeft = (idx % coursesData.length) % 5 + 1;
           return (
             <div
               key={`${course.id}-${idx}`}
               className="flex-shrink-0 scroll-snap-align-start bg-white rounded-xl shadow-lg border border-gray-200 p-5 relative flex flex-col justify-between w-[90vw] sm:w-[80vw] md:w-[400px]"
             >
               <span className="absolute top-4 right-4 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-md border border-red-400 font-semibold">
                 + {seatsLeft} seats left +{" "}
               </span>
               <TimerCard />

              <Image
                src={course.image}
                alt={course.title}
                width={460}
                height={260}
                className="rounded-lg object-cover mb-4 w-full h-auto"
              />

              <h3 className="text-xl sm:text-2xl font-bold mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{course.description}</p>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-600 font-bold text-lg">
                  {course.offerPrice}
                </span>
                <span className="line-through text-red-500 text-sm">
                  {course.price}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {course.content.slice(0, 3).map((item, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {/* <button className="w-full border border-gray-300 rounded-md py-2 text-sm font-medium hover:bg-gray-100">
                  Download Brochure
                </button> */}
                <Link href={`/enroll/${course.id}`}>
                  <button className="w-full bg-lime-500 hover:bg-lime-600 text-white rounded-md py-2 text-sm font-medium">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          &#10095;
        </button>
      </div>

      {/* Hide scrollbar globally */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
