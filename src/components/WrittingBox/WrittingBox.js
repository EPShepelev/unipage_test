import React, { useState } from "react";
import axios from "axios";

function WrittingBox() {
  const TEXT_URL = "https://baconipsum.com/api/?type=meat-and-filler";

  let [error, setError] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [textData, setTextData] = useState("");

  const getTextData = () => {
    return (
      fetch(TEXT_URL)
        .then((res) => res.json())
        .then((result) => {
          isLoaded = setIsLoaded(true);
          textData = setTextData(result);
        }),
      (error) => {
        error = setError(error);
      }
    );
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={getTextData}>
        Go!
      </button>
      <div>{textData}</div>
    </div>
  );
}

export default WrittingBox;
