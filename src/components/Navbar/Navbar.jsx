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
          {/* <a href="https://www.facebook.com/Casablancas6661/" target="blank"> */}
          {/*   <img src="/facebook.png" alt="facebook icon" /> */}
          {/* </a> */}
          <a href="https://github.com/ihza6661/" target="blank">
            <img src="/github_dark.png" alt="github icon" />
          </a>
          <a href="https://github.com/ihza6661/" target="blank">
            <img src="/linkedin_dark.png" alt="linkedin icon" />
          </a>
          <a href="https://www.instagram.com/ihza.ms/" target="blank">
            <img src="/instagram.png" alt="instagram icon" />
          </a>
          {/* <a href="https://wa.me/089692070270/" className="WA-logo" target="blank"> */}
          {/*   <img src="/whatsapp.png" alt="wa app icon" /> */}
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
