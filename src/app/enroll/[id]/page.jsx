"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import coursesData from "../../data/coursesData"; // adjust path as needed
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
    return <div>Course not found.</div>;
  }

  return (
    <div className="l dn aoc axf cyi min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 sm:px-4 lg:p-6">
      <div className="max-w-7xl mx-auto py-8 lg:px-8 rounded-3xl bg-white shadow-lg">
            {/* Breadcrumbs */}
    <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <ol className="list-reset flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline text-blue-700">Home</Link>
          <span className="mx-1">/</span>
        </li>
        <li>
          <Link href="/enroll" className="hover:underline text-blue-700">Courses</Link>
          <span className="mx-1">/</span>
        </li>
        <li className="text-gray-800 font-semibold truncate max-w-[180px] sm:max-w-none">
          {course.title}
        </li>
      </ol>
    </nav>
        {/* Course Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-fuchsia-950">
            {course.title}
          </h1>
          <p className="mt-4 text-lg">{course.description}</p>
        </div>

        {/* Course Image */}
        {/* <div className="flex justify-center mb-12">
          <Image
            src={course.image}
            alt={course.title}
            width={500}
            height={300}
            className="rounded-lg shadow-lg max-w-full h-72 object-cover"
          />
        </div> */}
        <TrainingHero
          imgSrc={course.image}
          category={course.category}
          title={course.title}
        />

        {/* Pricing & Offer */}
        {/* <div className="text-center mb-8">
          <p className="text-xl font-semibold text-gray-800">
            {course.offerTag}
          </p>
          <div className="text-2xl mt-2">
            <span className="line-through font-bold text-red-600 mr-4">
              {course.price}
            </span>
            <span className="font-bold text-green-800">
              {course.offerPrice}
            </span>
          </div>
          <p className="mt-2 text-xl font-semibold text-yellow-500">
            Hurry! Limited seats available.
          </p>
        </div> */}
        <CourseCurriculum title={course.title} />
        {/* Enroll Section */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-6">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="bg-blue-800 hover:bg-blue-900 w-full sm:w-80 text-white text-base sm:text-lg px-6 py-3 rounded-md transition duration-300 shadow-lg animate-pulse">
              Enroll Now
            </button>
          </Link>
          <p className="text-red-600 font-medium mt-3 text-sm sm:text-base">
            🔥 Offer ends soon — Secure your seat now!
          </p>
        </div>
      </div>
    </div>
  );
}
