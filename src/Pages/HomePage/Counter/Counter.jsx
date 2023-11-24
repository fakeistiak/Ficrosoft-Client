import { TbClock24 } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { Tb24Hours } from "react-icons/tb";

const Counter = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-20 pl-12">
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <FaUsers className="text-7xl mt-2 text-cyan-500"></FaUsers>
            <h1 className="text-4xl font-bold text-cyan-500">
              {counterStart && (
                <CountUp delay={0.2} end={150} duration={1.5} />
              )}
              +
            </h1>
            <h3 className="text-2xl font-serif font-bold text-cyan-500">
              Total Employees
            </h3>
          </div>
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <Tb24Hours className="text-7xl mt-2 text-cyan-500"></Tb24Hours>
            <h1 className="text-4xl font-bold text-cyan-500">
              {counterStart && <CountUp delay={0.2} end={70} duration={2} />}+
            </h1>
            <h3 className="text-2xl font-serif font-bold text-cyan-500">
              Working Hours
            </h3>
          </div>
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <FiUserCheck className="text-7xl mt-2 text-cyan-500"></FiUserCheck>
            <h1 className="text-4xl font-bold text-cyan-500">
              {counterStart && <CountUp delay={0.2} end={270} duration={2} />}+
            </h1>
            <h3 className="text-2xl font-serif font-bold text-cyan-500">
              Expert Trainers
            </h3>
          </div>
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <FaCalendarDays  className="text-7xl mt-2 text-cyan-500"></FaCalendarDays>
            <h1 className="text-4xl font-bold text-cyan-500">
              {counterStart && (
                <CountUp delay={0.2} end={312} duration={1.5} />
              )}
              +
            </h1>
            <h3 className="text-2xl font-serif font-bold text-cyan-500">
              Working Days
            </h3>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Counter;
