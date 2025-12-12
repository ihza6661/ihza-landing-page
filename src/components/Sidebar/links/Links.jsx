import { motion } from "framer-motion";
import { navLinksVariants, navItemVariants } from "../../../constants/animationVariants";

const Links = () => {
  const items = ["Homepage", "About", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={navLinksVariants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={navItemVariants}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
