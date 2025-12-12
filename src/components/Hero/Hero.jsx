import "./hero.scss";
import { motion } from "framer-motion";
import { textVariants } from "../../constants/animationVariants";

const Hero = () => {
  return (
    <div className="hero" id="Homepage">
      <div className="hero-wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={textVariants}></motion.h3>
          <motion.h2 className="name" variants={textVariants}>
            Ihza Mahendra
          </motion.h2>
          <motion.h1 className="job" variants={textVariants}>
            Fullstack Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="https://gallery-ihza.netlify.app/" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="button-85"
                role="button"
                variants={textVariants}
              >
                Gallery
              </motion.button>
            </a>
            <a href="#Portfolio">
              <motion.button
                className="button-85"
                role="button"
                variants={textVariants}
              >
                Projects
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
        <div className="imageContainer">
          <img className="ihza-pic" src="/ihza.webp" alt="Ihza Mahendra - Fullstack Developer" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
