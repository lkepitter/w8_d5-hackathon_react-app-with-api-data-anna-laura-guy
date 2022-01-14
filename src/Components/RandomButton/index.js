import React from "react";
import { useState, useEffect } from "react";

function Random({ handleClick }) {
  const [random, setRandom] = useState("");

  useEffect(() => {
    async function getRandomCharacter() {
      console.log("Random is running");
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://the-one-api.dev/v2/character`,
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer M_NvO75ukBdw8Ht5Bb-Z",
          },
        }
      );
      let data = await response.json();
      console.log(data.docs);
      //const randomNumber = Math.floor(Math.random() * 933);
      const randomNumber = Math.floor(Math.random() * 20);
      setRandom(data.docs[randomNumber]);
    }
    getRandomCharacter();
  }, [random]);

  return (
    <div>
      <button
        onClick={() => {
          handleClick(random);
        }}
      >
        Random Character
      </button>
    </div>
  );
}

export default Random;
