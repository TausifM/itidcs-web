"use client";
import Image from "next/image";
import { useState, useEffect, use } from "react";

const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "/images/fullstack.png",
    description:
      "Learn front-end and back-end development with hands-on projects.",
    price: "₹59,999",
    offerPrice: "₹19,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "HTML, CSS, JavaScript",
      "React, Node.js, Express",
      "MongoDB, Databases",
      "API Development",
      "Deployment",
    ],
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: "/images/data-science.png",
    description:
      "Master data analysis, visualization, and machine learning techniques.",
    price: "₹24,999",
    offerPrice: "₹12,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",

    content: [
      "Python & Libraries (Pandas, Numpy)",
      "Data Visualization (Matplotlib, Seaborn)",
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Model Deployment",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    image: "/images/ui-ux.png",
    description:
      "Understand design principles, tools, and user-centric processes.",
    price: "₹14,999",
    offerPrice: "₹7,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Design Thinking",
      "Wireframing & Prototyping",
      "User Research",
      "Interaction Design",
      "Usability Testing",
    ],
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    image: "/images/cyber-security.jpg",
    description:
      "Protect systems, networks, and data with cybersecurity practices.",
    price: "₹19,999",
    offerPrice: "₹9,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Network Security",
      "Cryptography",
      "Ethical Hacking",
      "Penetration Testing",
      "Incident Response",
    ],
  },
  {
    id: 5,
    title: "Mobile App Development",
    image: "/images/mobile-app-development.png",
    description: "Build responsive apps using React Native and Backend APIs.",
    price: "₹49,999",
    offerPrice: "₹17,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "React Native Basics",
      "State Management (Redux)",
      "APIs & Data Fetching",
      "Mobile UI/UX Design",
      "Publishing Apps",
    ],
  },
  {
    id: 6,
    title: "Cloud Computing & DevOps",
    image: "/images/cloud-computing.png",
    description:
      "Learn cloud platforms and DevOps practices to build scalable systems.",
    price: "₹24,999",
    offerPrice: "₹12,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",

    content: [
      "Cloud Providers (AWS, Azure, Google Cloud)",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Containerization with Docker",
      "Kubernetes & Orchestration",
    ],
  },
  {
    id: 7,
    title: "Game Development with Unity",
    image: "/images/unity-game-dev.png",
    description:
      "Learn how to create 2D and 3D games using Unity engine and C#.",
    price: "₹29,999",
    offerPrice: "₹15,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Introduction to Unity",
      "C# Programming for Game Dev",
      "2D Game Development",
      "3D Game Development",
      "Physics, AI, and Animation",
    ],
  },
  {
    id: 8,
    title: "Digital Marketing & SEO",
    image: "/images/digital-marketing.png",
    description:
      "Master the strategies for online marketing, SEO, and social media.",
    price: "₹14,999",
    offerPrice: "₹7,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Search Engine Optimization (SEO)",
      "Content Marketing",
      "Google Analytics & Ads",
      "Social Media Marketing",
      "Email Marketing & Campaigns",
    ],
  },
  {
    id: 9,
    title: "Blockchain and Cryptocurrency",
    image: "/images/blockchain.png",
    description:
      "Understand the fundamentals of blockchain technology and cryptocurrency.",
    price: "₹19,999",
    offerPrice: "₹9,999", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Blockchain Basics",
      "Smart Contracts",
      "Cryptocurrency & Bitcoin",
      "Ethereum & DeFi",
      "Building Blockchain Apps",
    ],
  },
  {
    id: 10,
    title: "Artificial Intelligence & Deep Learning",
    image: "/images/ai-deep-learning.png",
    description:
      "Dive into the world of AI and deep learning with hands-on projects.",
    price: "₹44,999",
    offerPrice: "₹17,499", // Discounted price
    offerTag: "Limited Time Offer - 50% Off!",
    content: [
      "Introduction to AI",
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning",
      "Natural Language Processing (NLP)",
      "AI in Real-World Applications",
    ],
  },
];

export default function CourseDetailsPage({ params }) {
  const { id } = use(params);
  const [course, setCourse] = useState(null);
  console.log(id);
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
    <div className="l dn aoc axf cyi min-h-screen p-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto py-8 px-6 lg:px-8 rounded-3xl bg-white shadow-lg">
        {/* Course Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold  text-fuchsia-950">
          {course.title}</h1>
          <p className="mt-4 text-lg">{course.description}</p>
        </div>

        {/* Course Image */}
        <div className="flex justify-center mb-12">
          <Image
            src={course.image}
            alt={course.title}
            width={500}
            height={300}
            className="rounded-lg shadow-lg max-w-full h-72 object-cover"
          />
        </div>
        <div className="text-center mb-8">
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
        </div>
        {/* Course Content List */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold">Course Content</h2>
          <p className="mt-4 text-lg text-gray-700">
            Dive deep into the following topics:
          </p>
          {/* Make the bullet points in same alignment or line as the text */}
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
            {course.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Enroll Section */}
        <div className="flex justify-center align-middle items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSflmV56d0cYZcW4q5tVbuOfQQ7Qb_YKbYrqm4AEnTCjbzTeKA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-800 hover:bg-blue-900 text-white
            text-lg px-6 py-3 rounded-md transition duration-300 shadow-lg animate-pulse">
              Enroll Now
            </button>
            <p className="text-red-600 font-medium mt-2">
              🔥 Offer ends soon — Secure your seat now!
            </p>
          </a>
        
        </div>
      </div>
    </div>
  );
}
