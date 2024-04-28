import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/cursor";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";




const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <Portfolio />
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
