import React, { useState } from "react";

function WrittingBox() {
  const TEXT_URL = "https://baconipsum.com/api/?type=meat-and-filler&paras=1";

  let [error, setError] = useState(null);
  let [isLoaded, setIsLoaded] = useState(false);
  let [textData, setTextData] = useState([]);

  const getTextData = () => {
    return (
      fetch(TEXT_URL)
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded((isLoaded = true));
          setTextData((textData = result[0].split("")));
        }),
      (error) => {
        setError(error);
      }
    );
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={getTextData}>
        Go!
      </button>
      {textData.map((item, key) => (
        <span key={key}>{item}</span>
      ))}
    </div>
  );
}

export default WrittingBox;
