import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/cursor";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Footer from './components/poter/Footer';





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
        <Skills />
      </section>
      <Portfolio />
      <section>
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>

    </div>
  );
};

export default App;
