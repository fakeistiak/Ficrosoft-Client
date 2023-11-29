import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://b8a12-server-side-fakeistiak.vercel.app",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
