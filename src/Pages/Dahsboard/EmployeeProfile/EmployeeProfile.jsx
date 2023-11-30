import React from "react";
import { FaUser, FaUserCheck } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProvider";
import { MdOutlineEmail } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { LuChevronLast } from "react-icons/lu";
import useRole from "../../../hooks/useRole";

const EmployeeProfile = () => {
  const { user } = React.useContext(AuthContext);
  const role = useRole(); 

  return (
    <div>
      <div className="pb-6 font-serif border-b-2">
        <div className="items-center flex justify-center">
          <img
            className="w-40 pb-2 h-40 rounded-full object-cover shadow-2xl"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div className="lg:text-lg md:text-md items-center gap-1 py-2 flex pb-2">
          <FaUser className="text-lg" />
          Name: {user?.displayName}
        </div>
        <div className="lg:text-lg md:text-md items-center flex gap-1 pb-2">
          {role && (
            <>
              <div className="lg:text-lg md:text-md items-center flex gap-1 pb-2">
                <FaUserCheck className="text-xl" />
                Role: {role}
              </div>
              <br />
            </>
          )}
        </div>
        <div className="lg:text-lg md:text-md items-center flex gap-1 pb-2">
          <MdOutlineEmail className="text-xl" />
          Email: {user?.email}
        </div>
        <div className="lg:text-lg md:text-md items-center flex gap-1">
          <LuChevronLast className="text-xl" />
          Last-Login: {user?.metadata.lastSignInTime}
        </div>
      </div>
      <button className="lg:text-2xl md:text-xl flex items-center gap-1 py-4">
        <FiSettings></FiSettings>Settings
      </button>
    </div>
  );
};

export default EmployeeProfile;
