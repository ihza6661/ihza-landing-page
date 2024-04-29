
import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import React from "react";


const item = [
    {
        id: 1,
        title: "React App",
        img: "/react.jpeg",
        desc: "a Simpe Portfolio build using react",
        //desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et hic, mollitia porro, dignissimos aspernatur fuga labore quaerat voluptates neque molestias quae. Incidunt facilis, corporis laborum deserunt illum, impedit ipsa perferendis alias sunt, distinctio autem nesciunt neque assumenda eligendi repudiandae possimus.",
        button: "Visit",
        link: "https://ihza-react.netlify.app/"

    },
    {
        id: 2,
        title: "React JS",
        img: "/project-1.png",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et hic, mollitia porro, dignissimos aspernatur fuga labore quaerat voluptates neque molestias quae. Incidunt facilis, corporis laborum deserunt illum, impedit ipsa perferendis alias sunt, distinctio autem nesciunt neque assumenda eligendi repudiandae possimus.",
        button: "Visit",

        link: "https://"
    },
    {
        id: 3,
        title: "Javascript App",
        img: "/project-2.png",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et hic, mollitia porro, dignissimos aspernatur fuga labore quaerat voluptates neque molestias quae. Incidunt facilis, corporis laborum deserunt illum, impedit ipsa perferendis alias sunt, distinctio autem nesciunt neque assumenda eligendi repudiandae possimus.",
        button: "visit",
        link: "https://"
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
                            <a href={item.link} target="_blank" >{/*rel="noopener noreferrer"*/}
                                <button class="button-85" role="button" >{item.button}</button>
                            </a>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start",] });

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