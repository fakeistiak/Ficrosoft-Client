import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/user?email=${user?.email}`, {
          headers: {
            Authorization: `Bearer${localStorage.getItem("access-token")}`,
          },
        })
        .then((res) => {
          setRole(res?.data?.role);
        });
    }
  }, [axiosSecure, user?.email]);

  return role;
};

export default useRole;
