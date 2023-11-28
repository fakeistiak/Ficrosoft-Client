import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { CiBank } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { MdDesignServices, MdInsertPhoto } from "react-icons/md";
import { RiLockPasswordFill, RiUserReceived2Line } from "react-icons/ri";
import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserPen } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../utils/uploadImage";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const {
      email,
      password,
      salary,
      designation,
      bank_account_no,
      name,
      image,
    } = data;
    createUser(email, password)
      .then(async () => {
        await uploadImage(image[0]).then((result) => {
          console.log(result);
          updateUser({
            name,
            photo: result.data.display_url,
          }).then(() => {
            const userInfo = {
              name: name,
              email: data.email,
              salary: data.salary,
              designation: data.designation,
              bank_account_no: data.bank_account_no,
              image: data.image,
              role: data.role
            };
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to database')
                Swal.fire("Login Successful", "EXPLORE THE PAGE", "success");
                navigate("/");
              }
            })
            
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <section className="bg-gray-200">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <div className="normal-case font-bold text-center text-white">
              <h1 className="lg:text-3xl md:2xl pl-4 sm:text-xl font-extrabold">
                <span>
                  Ficro<span className="text-cyan-500">Soft</span>
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center mt-4">
              <Link
                to="/login"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400"
              >
                sign in
              </Link>

              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                sign up
              </a>
            </div>

            <div className="relative flex items-center mt-8">
              <div className="absolute">
                <RiUserReceived2Line className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <select
                {...register("role")}
                name="role"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
              >
                <option value="Employee">Employee</option>
                <option value="HR">HR</option>
              </select>
            </div>
            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <FaUserPen className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <input
                defaultValue={"Istiak"}
                {...register("name")}
                type="text"
                name="name"
                className="block w-full py-3 bg-white border rounded-lg px-11"
                placeholder="Username"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <HiOutlineMail className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <input
                defaultValue={"Istiak@gmai.com"}
                {...register("email")}
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Email address"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <CiBank className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <input
                defaultValue={42424242}
                {...register("bank_account_no")}
                type="text"
                name="bank_account_no"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Bank Account Number"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <GiMoneyStack className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <input
                defaultValue={300000}
                {...register("salary")}
                type="text"
                name="salary"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Salary"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <MdDesignServices className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <input
                defaultValue={"Engineer"}
                {...register("designation")}
                type="text"
                name="designation"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Your Designation"
              />
            </div>
            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <MdInsertPhoto className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <input
                {...register("image")}
                type="file"
                name="image"
                required
                accept="image/*"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Photo URL"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <RiLockPasswordFill className="w-6 h-6 mx-3 text-cyan-500" />
              </div>
              <input
                defaultValue={123456}
                {...register("password")}
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                placeholder="Password"
              />
            </div>

            <div className="mt-4">
              <input
                type="submit"
                value="Sign Up"
                className="btn w-full bg-cyan-500 text-white hover:bg-cyan-700"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
