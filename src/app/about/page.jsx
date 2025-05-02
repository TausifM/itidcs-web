import SEOHead from "../component/SEOHead";
import Link from "next/link";
export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us - ITIDCS"
        description="Learn more about ITIDCS and our mission to deliver top-notch IT education and digital solutions."
      />
     <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to Innovative IT Development Corporation and Services (ITIDCS)</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are a leading provider of IT training courses and custom app development services. Our mission is to empower individuals and businesses with the skills and tools they need to thrive in the digital age.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At ITIDCS, we believe in the power of technology to transform lives and businesses. Our team of experienced professionals is dedicated to providing high-quality education and innovative solutions that meet the unique needs of our clients.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're looking to enhance your skills through our comprehensive training programs or seeking custom software solutions to streamline your operations, we are here to help you succeed.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Join us on this exciting journey and discover how we can help you achieve your goals. Together, we can build a brighter future through technology.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          For more information about our services, please explore our website or contact us directly. We look forward to working with you!</p>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for choosing ITIDCS as your trusted partner in IT education and development.</p>
        <p className="text-lg text-gray-700 mb-6">
          Best regards,<br />
          The ITIDCS Team
        </p>
        <Link href="/contact" className="text-indigo-600 hover:text-indigo-800 font-semibold">Contact Us</Link>
      </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to ITIDCS</h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Your trusted partner for IT training and custom app development.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-xl hover:bg-gray-200 transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
      <div className="bg-white py-16">

                
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
        <p className="text-xl max-w-3xl mx-auto mb-12">
          At Innovative Total IT Development Corporation and Services, we are passionate about empowering businesses with the latest technologies. We offer expert-led IT courses and custom app development services designed to accelerate growth, improve efficiency, and enhance user experiences. Whether you're an individual looking to upgrade your skills or a business aiming to transform through technology, we've got you covered.
        </p>

        <h3 className="text-3xl font-semibold mb-6">Our Mission</h3>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Our mission is to bridge the gap between technology and business. We provide a comprehensive suite of IT courses to help individuals build a strong foundation in tech, as well as bespoke app development services to cater to business needs. Our goal is to create a seamless experience for businesses looking to modernize, optimize, and scale through digital solutions.
        </p>

        <h3 className="text-3xl font-semibold mb-6">What We Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <dt className="text-2xl font-semibold mb-4">IT Training Courses</dt>
            <dd className="text-lg">
              We offer a variety of online IT courses, including software development, web development, cybersecurity, data science, and more. Our courses are designed by industry professionals to give you the skills that matter.
            </dd>
          </div>

          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <dt className="text-2xl font-semibold mb-4">Custom App Development</dt>
            <dd className="text-lg">
              We create custom web and mobile applications that align with your business goals. Whether you need a simple app or a complex enterprise solution, our team delivers high-quality, scalable applications.
            </dd>
          </div>

          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <dt className="text-2xl font-semibold mb-4">Consulting & Strategy</dt>
            <dd className="text-lg">
              Our consultants work closely with businesses to provide strategic guidance on digital transformation. From app development to process automation, we help companies stay competitive in an ever-evolving market.
            </dd>
          </div>

          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <dt className="text-2xl font-semibold mb-4">Enterprise Solutions</dt>
            <dd className="text-lg">
              We specialize in developing scalable solutions that meet the needs of large organizations. Our enterprise applications are built to handle complex workflows, secure data management, and integrate with existing systems.
            </dd>
          </div>

          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <dt className="text-2xl font-semibold mb-4">E-Commerce Development</dt>
            <dd className="text-lg">
              We help businesses build powerful e-commerce platforms with custom features, seamless payment integrations, and responsive designs to enhance the online shopping experience.
            </dd>
          </div>

          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <dt className="text-2xl font-semibold mb-4">Digital Marketing</dt>
            <dd className="text-lg">
              In addition to IT courses and app development, we offer digital marketing services to help your business grow online. We provide SEO, social media marketing, and other strategies to boost your online presence.
            </dd>
          </div>
        </div>

        <h3 className="text-3xl font-semibold mt-16 mb-6">Why Choose Us?</h3>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          At Innovative IT, we focus on delivering high-quality services with an emphasis on customer satisfaction. Here are some reasons why you should choose us:
        </p>

        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-lg">
          <li><strong>Experienced Trainers:</strong> Learn from industry experts with years of practical experience.</li>
          <li><strong>Tailored Solutions:</strong> We create custom solutions based on your unique business needs.</li>
          <li><strong>Affordable Pricing:</strong> Get top-quality services without breaking the bank.</li>
          <li><strong>Fast Turnaround:</strong> We deliver results quickly without compromising quality.</li>
          <li><strong>Continuous Support:</strong> We offer ongoing support and maintenance to ensure your success.</li>
        </ul>

        <h3 className="text-3xl font-semibold mt-16 mb-6">Let’s Build the Future Together</h3>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Whether you're an aspiring IT professional or a business looking to take the digital leap, we are here to guide you every step of the way. Join us today to unlock new opportunities and take your skills or business to the next level.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-indigo-700 transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
