import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaHashnode } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-black">
      <aside>
        <FaHashnode className="text-7xl"/>
        <p className="font-bold">
          IAB<span className="text-red-500">Courses</span> Industries Ltd.{" "}
          <br />
          Providing reliable rooms since 1992
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col text-3xl gap-4 cursor-pointer">
          <BsFacebook className="text-blue-600"></BsFacebook>
          <BsInstagram className="text-rose-500"></BsInstagram>
          <BsYoutube className="text-red-500"></BsYoutube>
          <BsTwitter className="text-sky-500"></BsTwitter>
          <BsLinkedin className="text-sky-400"></BsLinkedin>
          <BsWhatsapp className="text-green-500"></BsWhatsapp>
        </div>
          </nav>
          
    </footer>
  );
};

export default Footer;
