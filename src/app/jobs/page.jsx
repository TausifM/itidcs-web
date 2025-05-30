"use client";
import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
const jobData = [
  {
    id: 1,
    title: "Computer Teacher",
    category: "Education",
    description:
      "We are looking for a passionate and skilled Computer Teacher to join our team in Arvi District Wardha. If you have a deep understanding of computer science, strong teaching abilities, and enjoy inspiring students, this is the job for you. You will be responsible for educating students, helping them build computer literacy, and preparing them for their future career paths in technology. LAST DATE OF APPLICATION:10/05/2025",
    rolesAndResponsibilities: [
      "Plan and deliver computer science lessons for students of all ages.",
      "You have to teach students of 3 Villages and each Village ONE Hour = TOTAL 3 Hours a day",
      "Develop curriculum and teaching materials to meet student needs.",
      "Monitor and assess student progress, providing feedback and support as needed.",
      "Create a positive and engaging learning environment that encourages curiosity and problem-solving.",
      "Maintain regular communication with parents and school administration regarding student performance.",
      "Stay updated with the latest technological advancements and integrate them into the curriculum.",
    ],
    requirements: [
      "Graduation in any stream is mandatory.",
      "Must have an MSCIT certificate or any computer-related course certification.",
      "Laptop is necessary for the role (to prepare lessons, conduct online classes, etc.).",
      "Strong knowledge of computer science principles and programming.",
      "Excellent communication and interpersonal skills.",
      "Ability to make complex topics easy to understand for students.",
      "Passionate about teaching and helping students develop their skills.",
    ],
    location: "Arvi",
    salary: "₹8000 per month",
    applicationFees: "₹100",
    lastDateOfApplication: "May/10/2025"
  },
];
export default function JobsPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar with filters */}
      <nav className="amg bg-gradient-to-r from-blue-500 to-purple-600 py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Job Listings</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <span className="text-white hover:text-gray-200 cursor-pointer">All Jobs</span>
          <span className="text-white hover:text-gray-200 cursor-pointer">Featured Jobs</span>
          <span className="text-white hover:text-gray-200 cursor-pointer">Applied Jobs</span>
          <span className="text-white hover:text-gray-200 cursor-pointer">Saved Jobs</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
        >
           {isOpen ? (
            // Close icon SVG
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon SVG
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 space-y-2 bg-gradient-to-r from-blue-500 to-purple-600">
          <span className="block text-white hover:text-gray-200 cursor-pointer">All Jobs</span>
          <span className="block text-white hover:text-gray-200 cursor-pointer">Featured Jobs</span>
          <span className="block text-white hover:text-gray-200 cursor-pointer">Applied Jobs</span>
          <span className="block text-white hover:text-gray-200 cursor-pointer">Saved Jobs</span>
        </div>
      )}
    </nav>

      {/* Job Listings */}
      <div className="py-8 px-6 lg:px-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobData.map((job) => (
          <div
            key={job.id}
            className="h-full flex items-start border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
              <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                {job.lastDateOfApplication.split("/")[0]}{" "}
                {/* Extract the month */}
              </span>
              <span className="font-medium text-lg text-gray-800 title-font leading-none">
                {job.lastDateOfApplication.split("/")[1]}{" "}
                {/* Extract the date */}
              </span>
              <span className="font-medium text-lg text-gray-800 title-font leading-none pt-1">
                {job.lastDateOfApplication.split("/")[2]}{" "}
                {/* Extract the date */}
              </span>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                {job.category}
              </h2>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                {job.title}
              </h1>
              <p className="leading-relaxed mb-5">{job.description}</p>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Roles and Responsibilities
              </h3>
              <ul className="list-disc pl-5 mb-5">
                {job.rolesAndResponsibilities.map((role, index) => (
                  <li key={index} className="text-gray-700">
                    {role}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Requirements
              </h3>
              <ul className="list-disc pl-5 mb-5">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="text-gray-700">
                    {requirement}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-6">
                <span className="text-green-600 text-sm">
                  Location: {job.location}
                </span>
                <span className="text-green-600 text-sm">
                  Salary: {job.salary}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-red-600 text-sm">
                  Application Fees: {job.applicationFees}
                </span>
                <span className="text-red-600 text-sm">
                  Last Date: {job.lastDateOfApplication}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link
                  href={
                    "https://drive.google.com/file/d/1Px5RrFPxY45DTkaZOOhvL46Gss_oaTVP/view?usp=drive_link"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-lg hover:underline flex-grow"
                >
                  Job Details Advertisement
                </Link>
              </div>

              <Link
                className="flex items-center mt-4 text-indigo-600 hover:text-indigo-800 justify-between"
                href={`/jobs/${job.id}`} // Dynamically links to job details page
              >
                <button className="flex-grow flex flex-col pl-3 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="inline-flex -space-x-px">
          <button className="px-4 py-2 mx-1 text-gray-500 border border-gray-300 rounded-lg hover:bg-indigo-600 hover:text-white">
            Previous
          </button>
          <button className="px-4 py-2 mx-1 text-gray-500 border border-gray-300 rounded-lg hover:bg-indigo-600 hover:text-white">
            1
          </button>
          <button className="px-4 py-2 mx-1 text-gray-500 border border-gray-300 rounded-lg hover:bg-indigo-600 hover:text-white">
            2
          </button>
          <button className="px-4 py-2 mx-1 text-gray-500 border border-gray-300 rounded-lg hover:bg-indigo-600 hover:text-white">
            3
          </button>
          <button className="px-4 py-2 mx-1 text-gray-500 border border-gray-300 rounded-lg hover:bg-indigo-600 hover:text-white">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
