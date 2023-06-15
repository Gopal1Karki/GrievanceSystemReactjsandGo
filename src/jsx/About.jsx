import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image1 from "../images/about.png"
import "../App.css";

const About = () => {
    return (
        <>
            <Header/>
               <div className="about_main">
                <h1>ABOUT US</h1>
                  <div className="para">
                  <div className="para1">
                        <p>
                        "Welcome to the official website of the Greivance system, proudly developed for the Government of Nepal.
                        Greivance is an innovative gravity-based solution that aims to transform the way our nation functions and serves its citizens.
                        With a focus on sustainability, efficiency, and technological advancement, Greivance offers a comprehensive suite of
                        gravity-powered solutions tailored to meet the unique needs of Nepal. From transportation and infrastructure development to
                        disaster management and public services, our state-of-the-art system empowers the government to overcome challenges
                        and improve the lives of its people.
                        </p>
                    </div>
                    <div className="para2">
                        <p>
                        "Unlocking Nepal's potential with Greivance. Our Greivance system integrates seamlessly into the fabric of our nation,
                         empowering the government to address complex challenges, improve connectivity, and enhance the quality of life for all
                          Nepali citizens.Discover Greivance: Nepal's gravity-based system designed to propel us towards a smarter future. By
                          leveraging the power of gravity, we are reshaping industries, optimizing resource utilization, and fostering sustainable
                          growth across the nation."
                        </p>
                    </div>
                  </div>
                  <div className="about_image">
                        <img src={Image1} className="about_image_1"/>
                  </div>
               </div>
            <Footer />
        </>
    )
}
export default About;
