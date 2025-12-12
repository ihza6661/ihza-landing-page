/* eslint-disable react/no-unescaped-entities */
import "./about.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="/nice.png" alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/experience_dark.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                5+ years <br />
                Fullstack Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="/education_dark.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Informatics <br />
                Engineering
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a Fullstack Developer from Pontianak, Indonesia, with a
              passion for crafting user-friendly web interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
