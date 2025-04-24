import Link from 'next/link'
import SEOHead from '../component/SEOHead';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
     <SEOHead
        title="Our Services - ITIDCS"
        description="Explore ITIDCS services including web development, digital marketing, UI/UX design, and cloud solutions."
      />
     <div className="overflow-hidden bg-white py-15 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Grid Features */}
        <div className="bg-gray-50 py-20 sm:py-22">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Title Section */}
            <div className="text-center">
              <h2 className="text-4xl font-semibold text-gray-900">
                Our Services
              </h2>
              <p className="mt-2 text-xl text-gray-600">
                Explore our specialized services with the latest technologies
                and certifications.
              </p>
            </div>

            {/* Service 1: CCC - Government Certified Course */}
            <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                  </svg>
                  CCC - Government Certified Course
                </dt>
                <dd className="mt-2 text-gray-600">
                  Gain government-recognized certifications with our
                  comprehensive CCC courses designed to boost your career.
                </dd>
              </div>

              {/* Service 2: Python */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                    <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                    <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                    <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
                  </svg>
                  Python Development
                </dt>
                <dd className="mt-2 text-gray-600">
                  Learn Python from scratch or enhance your existing skills with
                  our expert-led Python programming courses.
                </dd>
              </div>

              {/* Service 3: FastAPI */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  FastAPI
                </dt>
                <dd className="mt-2 text-gray-600">
                  Build fast and efficient APIs with FastAPI, a modern Python
                  framework for high-performance web development.
                </dd>
              </div>

              {/* Service 4: Docker */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  Docker & Containerization
                </dt>
                <dd className="mt-2 text-gray-600">
                  Learn how to containerize your applications and deploy them
                  with Docker, ensuring scalability and portability.
                </dd>
              </div>

              {/* Service 5: Node.js */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6  text-indigo-600 top-1 left-1 absolute"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Node.js Development
                </dt>
                <dd className="mt-2 text-gray-600">
                  Master Node.js to build scalable and efficient backend
                  applications using asynchronous programming.
                </dd>
              </div>

              {/* Service 6: MongoDB */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-indigo-600 top-1 left-1 absolute"
                  >
                    <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  MongoDB Database
                </dt>
                <dd className="mt-2 text-gray-600">
                  Learn to work with MongoDB, the NoSQL database, to manage and
                  store data for modern web applications.
                </dd>
              </div>

              {/* Service 7: React JS */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute top-1 left-1 h-6 w-6 text-indigo-600"
                  >
                    <path d="M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                    <path
                      fillRule="evenodd"
                      d="M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5h-9.75ZM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125V4.875Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  React JS Development
                </dt>
                <dd className="mt-2 text-gray-600">
                  Build dynamic user interfaces with React, the popular
                  JavaScript library for front-end development.
                </dd>
              </div>

              {/* Service 8: Tailwind CSS */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute top-1 left-1 h-6 w-6 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tailwind CSS
                </dt>
                <dd className="mt-2 text-gray-600">
                  Design fast, responsive, and modern websites with Tailwind
                  CSS, a utility-first CSS framework.
                </dd>
              </div>

              {/* Service 9: Vercel & AWS Cloud */}
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute top-1 left-1 h-6 w-6 text-indigo-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Vercel & AWS Cloud Solutions
                </dt>
                <dd className="mt-2 text-gray-600">
                  Deploy and scale your applications with ease using cloud
                  platforms like Vercel and AWS.
                </dd>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Service 1 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6"
                  alt="IT Skills"
                  fill
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Master IT Skills
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Learn the latest technologies from industry experts. Gain
                    certifications and boost your career with cutting-edge
                    skills.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Gain industry certifications</li>
                    <li>✔ Learn from experts</li>
                    <li>✔ Flexible learning modules</li>
                    <li>✔ Access to exclusive resources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d"
                  alt="Web & App Development"
                  fill
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    Custom Web & App Development
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Transform your ideas into reality with our high-performance
                    website and app development services.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Responsive and modern designs</li>
                    <li>✔ Tailored to your business needs</li>
                    <li>✔ High-speed performance</li>
                    <li>✔ Scalable and secure solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-auto rounded-lg shadow-lg"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  alt="SEO & Digital Marketing"
                  fill
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    SEO & Digital Marketing
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Increase your online visibility and grow your business with
                    data-driven marketing strategies.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Increase search engine rankings</li>
                    <li>✔ Targeted audience engagement</li>
                    <li>✔ Conversion optimization</li>
                    <li>✔ Detailed reporting & analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0 sm:space-x-8">
                <Image
                  className="w-full sm:w-1/2 h-70 rounded-lg shadow-lg object-cover"
                  src="https://images.unsplash.com/photo-1618788372246-79faff0c3742"
                  alt="UI/UX & Branding"
                  fill
                />
                <div className="sm:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900">
                    UI/UX & Branding
                  </h3>
                  <p className="mt-4 text-lg text-gray-600">
                    Stand out with modern, user-friendly designs. We create
                    stunning visuals that make an impact.
                  </p>
                  <ul className="mt-6 space-y-4 text-gray-600">
                    <li>✔ Custom web and app designs</li>
                    <li>✔ Rebrand and logo design</li>
                    <li>✔ Interactive and engaging UI</li>
                    <li>✔ Cross-device compatibility</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="mt-24 text-center">
              <p className="text-lg text-gray-600">
                Ready to get started? Let's work together to take your business
                to the next level.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block px-8 py-3 text-white bg-indigo-600 text-xl font-semibold hover:bg-indigo-700 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
    
  );
}
