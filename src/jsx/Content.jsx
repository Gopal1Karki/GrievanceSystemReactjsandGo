import React, { useState, useEffect } from 'react';
import '../App.css';
import Image1 from "../images/nooo.png"
import Image2 from "../images/phone.png"
import Image3 from "../images/complain.png"

const Content = () => {
  const texts = ['Ignite Change', 'Voice Your Concern', 'Together, let\'s transform'];
  const colors = ['red', 'green', 'blue'];
  const [index, setIndex] = useState(0);
  const images = [Image3,Image1,Image2];
  const [text, setText] = useState(texts[index]);
  const [color, setColor] = useState(colors[index]);
  const [image, setImage] = useState(images[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setText(texts[index]);
    setColor(colors[index]);
    setImage(images[index])
  }, [index]);

  const textStyle = {
    color: color,
    transition: 'color 0.5s'
  };

  return (

    <div className="content_div">
         <div className="image_content">
        <img src={image} alt="Animated Image" className="animated_image" />
      </div>
      <div className="content1">
        <p className="anim_text" style={textStyle}>
          {text}
        </p>
      </div>
      <div className="content2">
       <ol className="contents">
           <p className="head_div">Why Greivance?</p>
           <li>To give information about event/accident.</li>
           <li>To seek rescue help in event or accident.</li>
           <li>To give information on domestic violence.</li>
           <li>To complain or suggest with regard to public<br/>
               services.</li>
           <li>To complain irregularities while delivering in<br/>
             Government services</li>

       </ol>
      </div>
    </div>
  );
};

export default Content;
