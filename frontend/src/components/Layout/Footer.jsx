import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (
    <footer
      className={isAuthorized ? "block bg-black/90 text-white p-10" : "hidden"}
    >
      <div>
        <p className="text-center max-sm:text-xl text-2xl">
          &copy;All Right Reserved by Nayan
        </p>
      </div>
      <div className="max-sm:grid max-sm:grid-cols-2 flex text-xl p-4 gap-10 mt-10 items-center justify-center ">
        <Link className="flex gap-2 p-2 items-center" to={"/"} target="_blank">
          <FaFacebookF /> Facebook
        </Link>
        <Link className="flex gap-2 p-2 items-center" to={"/"} target="_blank">
          <FaYoutube />
          Youtube
        </Link>
        <Link className="flex gap-2 p-2 items-center" to={"/"} target="_blank">
          <FaLinkedin />
          Linkdin
        </Link>
        <Link className="flex gap-2 p-2 items-center" to={"/"} target="_blank">
          <FaInstagram />
          Instagram
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
