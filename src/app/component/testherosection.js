const features = [
  {
    name: "Enroll & Upgrade Your IT Skills",
    description:
      "Master in-demand IT skills with our expert-led courses. Get certified and boost your career today!",
    //   icon: AcademicCapIcon,
  },
  {
    name: "Build Your Dream Website & App",
    description:
      "Transform your ideas into reality with our custom website and app development services. Let’s innovate together!",
    //   icon: CodeBracketIcon,
  },
  {
    name: "Get a Free Consultation",
    description:
      "Not sure where to start? Contact us today for a free consultation and take the first step towards success!",
    //   icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-5 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Call to action
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Ready to take the next step?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Don't wait to level up your skills or bring your digital vision
                to life. Partner with ITIDCS and unlock new
                opportunities today!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" /> */}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
