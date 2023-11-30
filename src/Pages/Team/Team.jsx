import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactUs from "./ContactUs";

const Team = () => {
  const [executives, setExecutives] = useState([]);

  useEffect(() => {
    fetch("executives.json")
      .then((res) => res.json())
      .then((data) => setExecutives(data));
  }, []);

  return (
    <>
      <div className="px-4  pt-20">
        <ContactUs></ContactUs>
        <h1 className="text-5xl font-bold mb-4 text-center text-cyan-500 pt-8 pb-8">Executive Team
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {executives.map((executive, index) => (
            <div
              key={index}
              className="text-center text-white transition-colors bg-gray-500 duration-300 cursor-pointer  hover:border-transparent group hover:bg-cyan-400 dark:border-gray-700 dark:hover:border-transparent transform hover:text-black rounded-2xl p-4 shadow"
            >
              <div className="flex flex-col items-center">
                <img
                  src={executive.imageSrc}
                  className="object-cover ring-4 ring-gray-300 w-60 h-60 rounded-full text"
                />
                <h2 className="text-xl font-bold mt-2">{executive.name}</h2>
                <p className=" font-semibold">{executive.role}</p>
                <ul className="mt-2">
                  <li>
                    <a className="flex">
                      <FaFacebook className="mr-2 text-xl"></FaFacebook>
                      <FaInstagram className="mr-2 text-xl"></FaInstagram>
                      <FaLinkedin className="mr-2 text-xl"></FaLinkedin>
                      <FaTwitter className="mr-2 text-xl"></FaTwitter>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
