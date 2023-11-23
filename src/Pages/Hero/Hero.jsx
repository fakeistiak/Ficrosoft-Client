const Hero = () => {
  return (
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md rounded-xl"
          src="https://i.ibb.co/B6gFWKB/confident-smiling-young-businesswoman-with-his-two-colleagues-holding-blank-placard.jpg"
          alt="apple watch photo"
        />
        <h1 className="absolute w-1/6 text-2xl font-bold tracking-wide pt-24 text-cyan-500 pl-2">
          Bridge for industrial and corporate development.
        </h1>
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
              <div className="max-w-lg lg:mx-12 lg:order-2">
                  <h2 className="text-4xl font-bold pb-4">15+ Years of experience</h2>
          <p className="mt-4 font-semibold">
            Effective employee management involves clear communication,
            fostering a positive work environment, recognizing achievements,
            providing growth opportunities, and addressing concerns promptly. It
            builds a motivated and productive workforce essential for success.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
