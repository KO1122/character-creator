import React, { useState, useEffect } from "react";
import Card from "../Card";
import { supabase } from "../../client";

function Gallery() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // READ all characters from table
    const fetchCharacters = async () => {
      const { data } = await supabase.from("Characters").select();
      // set state of characters
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  return (
    <main className="ml-64 mt-32 flex flex-col items-center text-gray-700">
      <h1 className="text-4xl">Character Gallery</h1>

      {characters && characters.length > 0 ? (
        <div className="mt-16 grid w-1/2 grid-cols-2 gap-x-16 gap-y-8">
          {characters
            .sort((a, b) => a.id - b.id)
            .map((character, index) => (
              <Card
                key={index}
                id={character.id}
                name={character.name}
                ability={character.ability}
                gender={character.gender}
              />
            ))}
        </div>
      ) : (
        <h2 className="mt-12 text-2xl">{"No Characters Yet 😞"}</h2>
      )}
    </main>
  );
}

export default Gallery;
