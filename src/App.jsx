import React, { useState } from "react";
export default function App() {
  const images = [
    {
      src: "images/pic1.jpg",
      alt: "Closeup of a human eye",
    },
    {
      src: "images/pic2.jpg",
      alt: "Rock that looks like a wave",
    },
    {
      src: "images/pic3.jpg",
      alt: "Purple and white pansies",
    },
    {
      src: "images/pic4.jpg",
      alt: "Section of wall from a pharoah's tomb",
    },
    {
      src: "images/pic5.jpg",
      alt: "Large moth on a leaf",
    },
  ];

  const [ButtonText, button] = useState("Darken");
  const [displayImg, display] = useState(images[0]);
  const [ChangeOverlay, co] = useState("overlay");
  function changeButtonText() {
    if (ButtonText == "Darken") {
      button("Lighten");
    } else {
      button("Darken");
    }

    if (ChangeOverlay == "overlay") {
      co("changedOverlay");
    } else {
      co("overlay");
    }
  }

  function changeImg(id) {
    display(images[id]);
  }
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={displayImg.src}
          alt={displayImg.alt}
        />
        <div className={ChangeOverlay}></div>
        <button onClick={changeButtonText} className="dark">
          {ButtonText}
        </button>
      </div>
      <div className="thumb-bar">
        {images.map((image, index) => {
          return (
            <img
              id={index}
              onClick={() => changeImg(index)}
              src={image.src}
              key={index}
              alt={image.alt}
            />
          );
        })}
      </div>
    </>
  );
}
