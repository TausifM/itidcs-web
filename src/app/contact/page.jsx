"use client";
import { useEffect, useState } from "react";
import SEOHead from "../component/SEOHead";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    phoneNumber: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  useEffect(() => {
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phoneNumber);
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");

    setErrors({
      email: formData.email && !emailValid,
      phoneNumber: formData.phoneNumber && !phoneValid,
    });

    setIsFormValid(allFilled && emailValid && phoneValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/innovativeitdcorporation@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setShowToast(true); // show toast
        e.target.reset(); // clear form
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us - ITIDCS"
        description="Get in touch with ITIDCS for queries about courses, services, or support. We're here to help you succeed."
        image="https://itidcs.vercel.app/itidcs-logo.png"
        canonical="https://itidcs.vercel.app/contact"
        type="website"
      />
      <div className="l dn aoc">
        <div className="fy lc vy aah drk">
          <div className="l auc avs axd diz dwm">
            <div className="fy wk dlx dqg">
              <div className="j ae co do vo afg aks ber bga dpj">
                <svg aria-hidden="true" className="j u pe asc bjd">
                  <defs>
                    <pattern
                      x="100%"
                      y="-1"
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width="200"
                      height="200"
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                    </pattern>
                  </defs>
                  <rect
                    fill="white"
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                  ></rect>
                  <svg x="100%" y="-1" className="afi arf">
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                  </svg>
                  <rect
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                  ></rect>
                </svg>
              </div>
              <h2 className="ayk azr azt azw baw daa">Get in touch</h2>
              <p className="hk azc bat">
                Let’s Connect! Have a question or just want to say hi? Fill out
                the form below and we’ll be in touch shortly. We're always happy
                to help!
              </p>
              <dl className="ho acp ayy bat">
                <div className="la ace">
                  <dt className="wt">
                    <span className="i">Address</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="ps tt bar"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      ></path>
                    </svg>
                  </dt>
                  <dd>
                    ITIDCS (Innovative Total IT Development and Corporation and
                    Services Pvt. Ltd.)
                    <br />
                    <br />
                    Collaborative Workspace with Career Cloud,
                    <br />
                    1st Floor, Plot No. 2, Collaborative Workspace with Career
                    Cloud,
                    <br />
                    Kabir Nagar Square, Nandanvan Main Road, in front of Maruti
                    Arcade,
                    <br />
                    Near Dutta Mandir, Nandanvan, Nagpur, Maharashtra 440009
                  </dd>
                </div>
                {/* Responsive Google Map */}
                <div className="w-full px-4 sm:px-6 lg:px-8 my-8">
                  <div className="aspect-w-16 aspect-h-9">
                    <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6351635751357!2d79.116909474717!3d21.127106684394523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b9a5ea67cd75%3A0x3d77173dbcc4d966!2sITIDCS%20-%20INNOVATIVE%20TOTAL%20IT%20DEVELOPMENT%20CORPORATION%20AND%20SERVICES%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1749714316741!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                <div className="la ace">
                  <dt className="wt">
                    <span className="i">Telephone</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="ps tt bar"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      ></path>
                    </svg>
                  </dt>
                  <dd>
                    <a
                      href="tel:+917709382305"
                      className="text-green-500 hover:text-green-700 transition"
                    >
                      +91 7709 38 2305
                    </a>
                  </dd>
                </div>
                <div className="la ace">
                  <dt className="wt">
                    <span className="i">Email</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="ps tt bar"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      ></path>
                    </svg>
                  </dt>
                  <dd>
                    <a
                      href="mailto:innovativeitdcorporation@gmail.com"
                      className="text-blue-500 hover:text-blue-700 transition"
                      rel="noopener noreferrer"
                    >
                      innovativeitdcorporation@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="https://formsubmit.co/innovativeitdcorporation@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="auc avr axe czj dwm dxb"
          >
            {/* Add hidden inputs for customization */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="fy wk dmx dqg">
              <div className="lc aah ach adi csu">
                <div>
                  <label htmlFor="first-name" className="ky aze azr baw">
                    First name
                  </label>
                  <div className="hg">
                    <input
                      id="first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="ky vo agd aoc atz aul ayn baw bhh bhj bhm bqb bzo bzq bzx"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="ky aze azr baw">
                    Last name
                  </label>
                  <div className="hg">
                    <input
                      id="last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      type="text"
                      autoComplete="family-name"
                      className="ky vo agd aoc atz aul ayn baw bhh bhj bhm bqb bzo bzq bzx"
                    />
                  </div>
                </div>
                <div className="clo">
                  <label htmlFor="email" className="ky aze azr baw">
                    Email
                  </label>
                  <div className="hg">
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      autoComplete="email"
                      className="ky vo agd aoc atz aul ayn baw bhh bhj bhm bqb bzo bzq bzx"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mr-1">
                        Enter a valid email
                      </span>
                    )}
                  </div>
                </div>
                <div className="clo">
                  <label htmlFor="phone-number" className="ky aze azr baw">
                    Phone number
                  </label>
                  <div className="hg">
                    <input
                      id="phone-number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      type="tel"
                      autoComplete="tel"
                      className="ky vo agd aoc atz aul ayn baw bhh bhj bhm bqb bzo bzq bzx"
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500 text-sm mr-1">
                        Enter a valid 10-digit phone number
                      </span>
                    )}
                  </div>
                </div>
                <div className="clo">
                  <label htmlFor="message" className="ky aze azr baw">
                    Message
                  </label>
                  <div className="hg">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="ky vo agd aoc atz aul ayn baw bhh bhj bhm bqb bzo bzq bzx"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="hm la abg">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`agd amg atz aum ayb ayp azr bdk bff bto car cat cba ${
                    !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
          {/* ✅ Toast Notification */}
          {showToast && (
            <div className="fy vv fixed bottom-4 right-4 z-50">
              <div className="agd alr atr bg-white shadow-lg rounded-lg p-4">
                <div className="la flex items-center">
                  <div className="ww">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="om bbf"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="ki ml-3">
                    <p className="azg azv bbj font-medium text-green-700">
                      Successfully sent!
                    </p>
                  </div>
                  <div className="kt axv ml-auto">
                    <button
                      type="button"
                      onClick={() => setShowToast(false)}
                      className="lg agd alr atn bbg bth bxx byh byv bzc bzk text-blue-500 hover:text-blue-300"
                    >
                      <span className="sr-only">Dismiss</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="om w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
