import React, { useState } from "react";
import axios from "axios";

function WrittingBox() {
  const TEXT_URL = "https://baconipsum.com/api/?type=meat-and-filler";

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [textData, setTextData] = useState("");

  const getTextData = () => {
    fetch(TEXT_URL)
      .then((res) => res.json())
      .then((result) => {
        isLoaded = setIsLoaded(true);
        textData = setTextData(result);
      }),
      (error) => {
        error = setError(error);
      };
  };

  return <div>{textData}</div>;
}

export default WrittingBox;
