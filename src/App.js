import React, { useState } from "react";
import logo from "./data/react.svg";
import "./App.css";

import data from "./data/logos.json";

//load the svg folder
var req = require.context("./data", true, /.*\.svg$/);
let imageData = req.keys().map(function(key) {
  return req(key);
});
imageData.reverse();

function App() {
  const [imageCount, incrementImageCount] = useState(0); //current position in a array
  const [currentLogo, changeImage] = useState(imageData[imageCount]);
  const [userInput, setUserInput] = useState("");
  let findMatchingString = () => {
    // console.log(data[imageCount].matches, data[imageCount].matches.length);
    for (let i = 0; i < data[imageCount].matches.length; i++) {
      if (userInput == data[imageCount].matches[i]) {
        console.log("trueeeeeeeeeeeeeee");
        return true;
      }
    }
  };
  let winPoint = 0;
  let onNext = e => {
    console.log(userInput);
    console.log(
      data[imageCount].matches.find(e => (e == userInput ? true : false))
    );

    if (findMatchingString()) {
      console.log(data[imageCount].matches, winPoint++);
    } else {
      console.log("data doesn't match");
    }
  };
  return (
    <div className="logoWiz-Wrapper">
      <p className="logoWiz">Logo Wiz</p>
      <div className="img-wrapper">
        <img src={currentLogo} />
        <input
          type="text"
          value={userInput}
          onChange={e => {
            setUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            console.log("Value of ImageCount before", imageCount);
            incrementImageCount(imageCount + 1);
            console.log("Value of ImageCount After", imageCount);
            changeImage(imageData[imageCount]);
            onNext();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
