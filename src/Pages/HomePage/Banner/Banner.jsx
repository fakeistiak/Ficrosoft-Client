const Banner = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/bzfh3zg/pexels-proxyclick-visitor-management-system-2451616.jpg')",
      }}
    >
      <div className="flex items-center w-full h-full bg-gray-900/30 pl-16">
        <div>
          <h1 className="text-3xl text-white lg:text-5xl font-bold w-1/2 pb-8">
            My-Task Hr & Project Management System
          </h1>
          <p className="w-1/3 text-white pb-8">
            This is a solution for everyone. Although it is at the heart of
            Scrum and is typically used by software development teams, it can be
            successfully applied to other businesses, as well as used for
            improving personal productivity.
          </p>
          <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-md lg:w-auto hover:bg-cyan-500 focus:outline-none focus:bg-cyan-500">
            Start project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
