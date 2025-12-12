import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 1,
    title: "Invitation Website",
    img: "/people.png",
    desc: "Build using TypeScript and React and Some third party libraries",
    button: "visit",
    link: "https://duainsanstory.eproject.tech/",
    // link: "https://duainsanstory.netlify.app/",
  },
  {
    id: 2,
    title: "Luxury Cake Website",
    img: "/people.png",
    desc: "Build using TypeScript and React and Some third party libraries",
    button: "visit",
    link: "https://brownies-chi.vercel.app/",
  },
  {
    id: 3,
    title: "Fashion Website",
    img: "/people.png",
    desc: "Build using TypeScript and React and Some third party libraries",
    button: "Visit",
    link: "https://clothing-web-by-ihza.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-300", "300"]);

  return (
    <section>
      <div className="container" id="Portfolio">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.button && (
              <a href={item.link} target="_blank" rel="noreferrer">
                <button className="button-85" role="button">
                  {item.button}
                </button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
