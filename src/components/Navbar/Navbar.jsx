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
        ></motion.span>
        <div className="social">
          <a href="https://github.com/ihza6661/" target="_blank" rel="noopener noreferrer" aria-label="Visit Ihza's GitHub profile">
            <img src="/github_dark.png" alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/ihza.ms/" target="_blank" rel="noopener noreferrer" aria-label="Visit Ihza's Instagram profile">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
