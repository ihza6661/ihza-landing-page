import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,

  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },

};



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
          <motion.h2 className="name" variants={textVariants}>Ihza Mahendra</motion.h2>
          <motion.h1 className="job" variants={textVariants}>Frontend Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="https://gallery-ihza.netlify.app/" target="blank">
              <motion.button className="button-85" role="button" variants={textVariants}>
                Gallery
              </motion.button></a>
            <a href="#Contact">
              <motion.button className="button-85" role="button" variants={textVariants}>Contact</motion.button>
            </a>
          </motion.div>

        </motion.div>
        <div className="imageContainer">
          <img className="ihza-pic" src="/ihza.png" alt="" />
        </div>
      </div>

    </div>
  );
};

export default Hero;
