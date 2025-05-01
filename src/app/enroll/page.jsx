"use client";
import { useState } from "react";
import Image from "next/image";
import SEOHead from "../component/SEOHead";
import Link from "next/link";

const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "/images/fullstack.png",
    description:
      "Learn front-end and back-end development with hands-on projects.",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: "/images/data-science.png",
    description:
      "Master data analysis, visualization, and machine learning techniques.",
    category: "Data Science",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    image: "/images/ui-ux.png",
    description:
      "Understand design principles, tools, and user-centric processes.",
    category: "Design",
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    image: "/images/cyber-security.jpg",
    description:
      "Protect systems, networks, and data with cybersecurity practices.",
    category: "Security",
  },
  {
    id: 5,
    title: "Mobile App Development",
    image: "/images/mobile-app-development.png",
    description: "Build responsive apps using Flutter and React Native.",
    category: "Mobile",
  },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  // const filteredCourses = coursesData.filter((course) => {
  //   return (
  //     (filter === "All" || course.category === filter) &&
  //     course.title.toLowerCase().includes(search.toLowerCase())
  //   );
  // });
  // make a function on click of search button to filter the courses based on search input and category

  const handleSearch = () => {
    const filtered = coursesData.filter((course) => {
      return (
        (filter === "All" || course.category === filter) &&
        course.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredCourses(filtered);
  };

  // if course category is not available in the coursesData then show all the courses
  const handleFilter = (category) => {
    setFilter(category);
    // if category is All then show all the courses
    if (category === "All") {
      setFilteredCourses(coursesData);
      // but if category is not in the coursesData then show all the courses
    } else {
      const filtered = coursesData.filter((course) => course.category === category);
      setFilteredCourses(filtered);
    }
  };

  const categories = ["All", ...new Set(coursesData.map((c) => c.category))];

  return (
    <>
      <SEOHead
        title="Explore Courses - ITIDCS"
        description="Browse our professional IT and development courses. Learn skills that matter."
      />

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 pt-18 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-4 py-2 rounded-md w-full md:w-1/2 lg:w-1/3"
            />
            {/* Search Icon */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={handleSearch}>
              Search
            </button>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className={`px-4 py-2 border rounded-full whitespace-nowrap text-sm transition ${
                    filter === cat
                      ? "amg text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={500}
              className="w-full h-65 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{course.description}</p>
              <div className="mt-4 flex justify-center">
              <Link
                href={`/enroll/${course.id}`}  // Dynamically links to course details page
              >
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  View Details
                </button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
