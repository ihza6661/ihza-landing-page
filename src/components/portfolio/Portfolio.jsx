import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 10,
    title: "Luxury Cake E-commerce Website",
    img: "/people.png",
    desc: "Build using TypeScript and React and Some third party libraries",
    button: "visit",
    link: "https://cake-e-com-by-ihza.netlify.app/",
  },
  {
    id: 2,
    title: "Luxury Fashion E-commerce Website",
    img: "/people.png",
    desc: "Build using TypeScript and React and Some third party libraries",
    button: "Visit",
    link: "https://clothing-web-by-ihza.netlify.app/",
  },
  {
    id: 3,
    title: "Modern Portfolio",
    img: "/people.png",
    desc: "Fully Responsive Design. Perfect for creatives, freelancers, and professionals who want to highlight their work in a sleek.",
    button: "Visit",
    link: "https://ihza-react.netlify.app/",
  },
  {
    id: 4,
    title: "Luxury-Themed Resume",
    img: "/people.png",
    desc: "this template combines modern design elements with a touch of class.",
    button: "Visit",
    link: "https://luxury-cv.netlify.app/",
  },
  {
    id: 5,
    title: "Clean and Simple Portfolio",
    img: "/people.png",
    desc: "Elevate your online presence with a responsive and clean design portfolio website, user-friendly layout. This portfolio template is crafted with simplicity and functionality in mind, ensuring your work takes center stage while providing an intuitive browsing experience on any device.",
    button: "visit",
    link: "https://ihza-vite-portfolio.netlify.app/",
  },
  {
    id: 6,
    title: "Modern Design Resume",
    img: "/people.png",
    desc: "Easily editable in Microsoft Word, or Google Docs, giving you complete control to tailor the template to your needs.",
    button: "visit",
    link: "https://ihza-cv.netlify.app",
  },
  {
    id: 7,
    title: "Halo Doc Clone",
    img: "/people.png",
    desc: "HTML CSS Only HaloDoc Clone",
    button: "visit",
    link: "https://halo-doc-by-ihza.netlify.app/",
  },
  {
    id: 8,
    title: "E-com Website",
    img: "/people.png",
    desc: "HTML CSS JS only",
    button: "visit",
    link: "https://e-com-by-ihza-baker.netlify.app",
  },
  {
    id: 9,
    title: "To Do App",
    img: "/people.png",
    desc: "A simple To-Do app built with React, demonstrating a basic understanding of React concepts.",
    button: "visit",
    link: "https://to-do-react-ihza.netlify.app/",
  },
  {
    id: 1,
    title: "PromptLah",
    img: "/people.png",
    desc: "Next JS App",
    button: "visit",
    link: "https://promp-lah.vercel.app/",
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
