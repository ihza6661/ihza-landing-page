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
  // {
  //   id: 4,
  //   title: "Luxury Resume",
  //   img: "/people.png",
  //   desc: "this template combines modern design elements with a touch of class.",
  //   button: "Visit",
  //   link: "https://luxury-cv.netlify.app/",
  // },
  // {
  //   id: 5,
  //   title: "Clean and Simple Portfolio",
  //   img: "/people.png",
  //   desc: "User-friendly layout.",
  //   button: "visit",
  //   link: "https://ihza-vite-portfolio.netlify.app/",
  // },
  // {
  //   id: 6,
  //   title: "Modern Design Resume",
  //   img: "/people.png",
  //   desc: "the template to you need.",
  //   button: "visit",
  //   link: "https://ihza-cv.netlify.app",
  // },
  // {
  //   id: 7,
  //   title: "Halo Doc Clone",
  //   img: "/people.png",
  //   desc: "HTML CSS Only HaloDoc Clone",
  //   button: "visit",
  //   link: "https://halo-doc-by-ihza.netlify.app/",
  // },
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
