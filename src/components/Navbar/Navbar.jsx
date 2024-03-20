import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >

        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/Casablancas6661/" target="blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/ihza.ms/" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
