import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate(); // Use the imported useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const password = form.get("password");
    console.log(email, password, name, photoURL);


    createUser(email, password)
      .then((result) => {
        updateUser({ name, photo }).then(
          console.log(result.user),
          toast.success("Sign up Successful"),
          navigate("/"),

          window.location.reload()
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <section className="bg-gray-200">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={handleRegister} className="w-full max-w-md">
            <div className="normal-case font-bold text-center text-white">
              <h1 className="lg:text-3xl md:2xl pl-4 sm:text-xl font-extrabold">
                <span>
                  Tasty<span className="text-orange-500">Bite</span>
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center mt-6">
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
                <FaUser className="w-6 h-6 mx-3"></FaUser>
              </div>
              <input
                type="text"
                name="name"
                className="block w-full py-3 bg-white border rounded-lg px-11"
                placeholder="Username"
              />
            </div>
            <div className="relative flex items-center mt-6">
              <div className="absolute">
                <HiOutlineMail className="w-6 h-6 mx-3" />
              </div>
              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Email address"
              />
            </div>
            <div className="relative flex items-center mt-6">
              <div className="absolute">
                <HiOutlineMail className="w-6 h-6 mx-3" />
              </div>
              <input
                type="text"
                name="photoURL"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11"
                placeholder="Photo URL"
              />
            </div>  
           
            <div className="relative flex items-center mt-4">
              <div className="absolute">
                <RiLockPasswordFill className="w-6 h-6 mx-3" />
              </div>
              <input
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                placeholder="Password"
              />
            </div>


            <div className="mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn w-full bg-orange-500 text-white hover:bg-orange-700"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
