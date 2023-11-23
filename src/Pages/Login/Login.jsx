import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { app } from "../../firebase/firebase.config";


const Login = () => {

     const [user, setUser] = useState(null);
     const auth = getAuth(app);
     const provider = new GoogleAuthProvider();
     const location = useLocation();
     const navigate = useNavigate();

     const handleGoogleSignIn = () => {
       signInWithPopup(auth, provider)
         .then((result) => {
           const loggedInUser = result.user;
           setUser(loggedInUser);
           Swal.fire("Login Successful", "EXPLORE THE PAGE", "success");
           navigate(location?.state ? location.state : "/");
         })
         .catch((error) => {
           // Swal.fire("Login Failed", error.message, "error");
           console.error(error);
         });
     };

     const { signIn } = useContext(AuthContext);

     const handleLogin = (e) => {
       e.preventDefault();
       const form = new FormData(e.currentTarget);
       const email = form.get("email");
       const password = form.get("password");

       signIn(email, password)
         .then((result) => {
           Swal.fire("Login Successful", "EXPLORE THE PAGE", "success");
           navigate(location?.state ? location.state : "/");
         })
         .catch((error) => {
           Swal.fire("Login Failed", "Invalid User or Password", "error");
           console.error(error);
         });
     };

  return (
    <>
      <div>
        <section className="bg-gray-200">
          <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form onSubmit={handleLogin} className="w-full max-w-md pt-20">
              <div className="normal-case font-bold text-center text-white">
                <h1 className="lg:text-3xl pl-4 md:text-2xl sm:text-xl font-extrabold">
                  <span>
                    Ficro<span className="text-cyan-500">Soft</span>
                  </span>
                </h1>
              </div>
              <div className="flex items-center justify-center mt-6">
                <a className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-blue-500 border-b-2 dark:text-white dark:border-blue-400">
                  sign in
                </a>

                <Link
                  to="/register"
                  href="#"
                  className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b  dark:border-gray-400 "
                >
                  sign up
                </Link>
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
              <div className="relative flex-col items-center mt-4">
                <input
                  type="text"
                  name="captcha"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
                  placeholder="type the captcha above..."
                />
                <button className="btn btn-outline btn-xs w-full mt-2 h-8 hover:bg-black hover:text-white">
                  Validate
                </button>
              </div>

              <div className="mt-6">
                <button className="btn w-full bg-cyan-500 text-white hover:bg-cyan-700">
                  Sign Up
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border- lg:w-1/5"></span>

                <a
                  href="#"
                  className="text-xs text-center uppercase mb-2 hover:underline"
                >
                  or login with Social Media
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
              </div>

              <div className="flex">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-ghost w-full mt-4 border-white hover:bg-black hover:text-white"
                >
                  Sign In with Google <FcGoogle className="text-2xl"></FcGoogle>{" "}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <div></div>
    </>
  );
};

export default Login;
