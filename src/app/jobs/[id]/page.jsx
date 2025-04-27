"use client";
import { useState, useEffect } from "react";

export default function JobsDetailsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    graduation: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({
    email: false,
    phoneNumber: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => {
    // Check if the phone number starts with 0
    if (phone.startsWith("0")) {
      setErrorMessage("Please remove the leading 0.");
      return false;
    }

    // Check if the phone number is a valid 10-digit number starting with 6-9
    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(phone)) {
      setErrorMessage(
        "Invalid phone number format. Please enter a valid 10-digit number"
      );
      return false;
    }

    // Clear any error messages if valid
    setErrorMessage("");
    return true;
  };
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
    <div className="isolate bg-white px-6 py-10 sm:py-15 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Computer Teacher Job Application
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Apply to be a Computer Teacher at Arvi, with a salary of ₹8000/month.
        </p>
      </div>

      <form
        action="https://formsubmit.co/innovativeitdcorporation@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        encType="multipart/form-data" // Required to send file data
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm mr-1">
                  Enter a valid email
                </span>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                type="text"
                placeholder="123-456-7890"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
              {errorMessage && (
                <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Graduation Details
            </label>
            <div className="mt-2.5">
              <input
                id="graduation"
                name="graduation"
                value={formData.graduation}
                onChange={handleChange}
                type="text"
                placeholder="Enter your graduation details (e.g., BCA, MSCIT, etc.)"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="resume"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Upload Resume
            </label>
            <div className="mt-2.5">
              <input
                id="resume"
                name="resume"
                type="file"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Why do you want to apply for this position?
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={""}
                required
              />
            </div>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                checked={agreed}
                className="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                role="switch"
                aria-checked="false"
                aria-labelledby="switch-1-label"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 translate-x-0 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                />
              </button>
            </div>
            <label className="text-sm/6 text-gray-600" id="switch-1-label">
              By selecting this, you agree to our
              <a href="#" className="font-semibold text-indigo-600">
               {" "} privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={!isFormValid}
            onClick={() => setShowToast(true)}
            className={`${
              isFormValid
                ? "bg-indigo-600 hover:bg-indigo-500"
                : "bg-gray-400 cursor-not-allowed"
            } block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            Submit Application
          </button>
        </div>
      </form>
      {showToast && (
  <div className="fixed top-4 mt-20 right-4 w-96 max-w-sm rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 ease-in-out">
    <div className="flex items-center">
      <div className="wx pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="oo text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          ></path>
        </svg>
      </div>
      <div className="">
        <p className="azt bai bbp"> Success</p>
        <p className="hd azt bbl">
          Your application has been submitted successfully. We will get back to you soon.
        </p>
      </div>
      <div className="kk lb wx">
        <button
          type="button"
          onClick={() => {
            setShowToast(false);
          }}
          className="lh age aoi bbk bwp byv bzh bzt cai"
        >
          <span className="i">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="on"
          >
            <path
              d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
