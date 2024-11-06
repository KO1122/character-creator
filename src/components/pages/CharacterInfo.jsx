import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";

function CharacterInfo() {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // READ all characters from table
    const fetchCharacters = async () => {
      const { data } = await supabase.from("Characters").select();
      // set state of characters
      const characters = data;
      const curCharacter = characters.find((c) => c.id == Number(id));
      setCharacter(curCharacter);
    };
    fetchCharacters();
  }, []);

  return (
    <main className="ml-64 mt-32 flex flex-col items-center text-gray-700">
      <h1 className="text-4xl">Character Information</h1>
      <p className="mt-8 text-2xl">Name: {character.name}</p>
      <p className="text-2xl">Ability: {character.ability}</p>
      <p className="text-2xl">Gender: {character.gender}</p>
    </main>
  );
}

export default CharacterInfo;
