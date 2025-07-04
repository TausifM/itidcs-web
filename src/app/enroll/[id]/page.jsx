"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import coursesData from "../../data/coursesData";
import TrainingHero from "@/app/component/training-hero";
import CourseCurriculum from "@/app/component/curriculum-data";
import Link from "next/link";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (id) {
      const foundCourse = coursesData.find(
        (course) => course.id === parseInt(id)
      );
      setCourse(foundCourse);
    }
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-100 to-blue-50 text-xl font-semibold text-gray-600">
        Course not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10">
        {/* Glass container */}
        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl md:py-10 transition-all duration-300 sm:py-8 px-6 sm:px-8 lg:px-10"> 
          {/* Breadcrumbs */}
          <nav
            className="text-sm text-gray-600 dark:text-gray-300 mb-6 sm:mt-4 lg:mt-2 md:mt-3"
            aria-label="Breadcrumb"
          >
            <ol className="list-reset flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:underline text-indigo-700 dark:text-indigo-400"
                >
                  Home
                </Link>
                <span className="mx-1 text-gray-400">/</span>
              </li>
              <li>
                <Link
                  href="/enroll"
                  className="hover:underline text-indigo-700 dark:text-indigo-400"
                >
                  Courses
                </Link>
                <span className="mx-1 text-gray-400">/</span>
              </li>
              <li className="font-semibold text-gray-900 dark:text-white truncate max-w-[180px] sm:max-w-none">
                {course.title}
              </li>
            </ol>
          </nav>

          {/* Course Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-400">
              {course.title}
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-200  leading-relaxed">
              {course.description}
            </p>
          </div>

          <TrainingHero
            imgSrc={course.image}
            category={course.category}
            title={course.title}
            offerTag={course.offerTag}
            price={course.price}
            offerPrice={course.offerPrice}
          />

          <CourseCurriculum title={course.title} />

          {/* Enroll Section */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-10">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-72 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-lg rounded-xl transition-all shadow-lg animate-bounce-sm">
                Enroll Now
              </button>
            </Link>
            <p className="text-red-600 font-medium mt-4 text-sm sm:text-base max-w-xs sm:max-w-md text-center">
              🔥 Offer ends soon — Secure your seat now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
