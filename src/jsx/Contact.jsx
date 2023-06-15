import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image1 from "../images/Contactus.png"
import Image2 from "../images/MAILd.png"
import Image3 from "../images/eMAIL.png"
import "../App1.css";

const Contact = () => {
  const images = [
    require("../images/renchu.png"),
    require("../images/message.png"),
    require("../images/clock.png"),
    require("../images/user.png"),
  ];
  const positions = [
    { top: "100px", left: "100px" },
    { top: "200px", right: "100px" },
    { bottom: "100px", left: "100px" },
    { bottom: "200px", right: "100px" },
  ];

  const [index, setIndex] = useState(0);
  const [imageStyle, setImageStyle] = useState(positions[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setImageStyle(positions[index]);
  }, [index]);

  return (
    <>
      <Header />
      <div className="contact_main_div">
        <div className="image1_main">
        <img src={Image1} alt="contact" className="image1_subdiv"/>
        </div>
        <div className="anim">
      <img src={images[index]} className="anim1div" />
      </div>
      <div className="contact_sub_div">
        <h1>CONTACT US</h1>
        <div className="para3">
          <p>
            If you have any questions, inquiries, or suggestions, we are just a
            phone call or email away. Our dedicated team is committed to
            providing prompt and helpful responses to ensure your satisfaction.
          </p>

        </div>
        <div className="imagediv">
            <img src={Image2} className="image2div" />
            <img src={Image3} className="image3div" />
          </div>
      </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;
