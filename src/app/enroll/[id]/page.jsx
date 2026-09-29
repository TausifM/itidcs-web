"use client";
import Image from "next/image";
import { useState, useEffect, use } from "react";

const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "/images/technology-work.jpg",
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
    image: "/images/digital-workspace.jpg",
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
    image: "/images/creative-design.jpg",
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
    image: "/images/software-development.jpg",
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
    image: "/images/team-workspace.jpg",
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
    image: "/images/technology-work.jpg",
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
    image: "/images/creative-design.jpg",
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
    image: "/images/digital-workspace.jpg",
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
    image: "/images/software-development.jpg",
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
    image: "/images/team-collaboration.jpg",
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
    <main className="course-detail-page l dn aoc axf cyi min-h-screen p-8">
      <div className="course-detail-card max-w-7xl mx-auto py-8 px-6 lg:px-8 rounded-3xl bg-white shadow-lg">
        {/* Course Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold  text-fuchsia-950">
          {course.title}</h1>
          <p className="mt-4 text-lg">{course.description}</p>
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
    </main>
  );
}
