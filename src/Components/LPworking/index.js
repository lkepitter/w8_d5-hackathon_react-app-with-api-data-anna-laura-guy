import React, { useState, useEffect } from "react";

function Display() {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    async function getCharacter() {
      let response = await fetch(
        "https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0",
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer M_NvO75ukBdw8Ht5Bb-Z",
          },
        }
      );
      let data = await response.json();
      let newCharacter = data.docs[0];
      console.log(newCharacter);
      setCharacter(data.docs[0]);
    }
    getCharacter();
  }, []);
  return (
    <div>
      <p>Name: {character.name}</p>
    </div>
  );
}

export default Display;
