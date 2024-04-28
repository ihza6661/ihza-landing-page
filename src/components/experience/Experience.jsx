import "./experience.scss";

const experience = () => {
    return (
        <div>
            <div id="experience">
                <p className="section__text__p1"></p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <h2 className="experience-sub-title">Frontend Development</h2>
                            <div className="article-container">
                                <article>
                                    <img
                                        src="/checkmark_light.png"
                                        src-light="/checkmark_light.png"
                                        src-dark="/checkmark_dark.png"
                                        alt="Experience icon"
                                        className="icon"
                                    />
                                    <div>
                                        <h3>HTML</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src="/checkmark_light.png"
                                        src-light="/checkmark_light.png"
                                        src-dark="/checkmark_dark.png"
                                        alt="Experience icon"
                                        className="icon"
                                    />
                                    <div>
                                        <h3>CSS</h3>
                                        <p>Experienced</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src="/checkmark_light.png"
                                        src-light="/checkmark_light.png"
                                        src-dark="/checkmark_dark.png"
                                        alt="Experience icon"
                                        className="icon"
                                    />
                                    <div>
                                        <h3>SASS</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src="/checkmark_light.png"
                                        src-light="/checkmark_light.png"
                                        src-dark="/checkmark_dark.png"
                                        alt="Experience icon"
                                        className="icon"
                                    />
                                    <div>
                                        <h3>JavaScript</h3>
                                        <p>Basic</p>
                                    </div>
                                </article>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    )
}

export default experience