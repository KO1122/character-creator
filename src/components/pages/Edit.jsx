import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../client";

function Edit() {
  const { id } = useParams();
  const [character, setCharacter] = useState({
    name: "",
    ability: "",
    gender: "",
  });

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

  function handleChange(e) {
    const { name, value } = e.target;
    setCharacter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function updateCharacter(e) {
    e.preventDefault();

    await supabase
      .from("Characters")
      .update({
        name: character.name,
        ability: character.ability,
        gender: character.gender,
      })
      .eq("id", id);

    window.location = "/";
  }

  async function deleteCharacter(e) {
    e.preventDefault();

    await supabase.from("Characters").delete().eq("id", id);

    window.location = "/";
  }

  return (
    <main className="ml-64 mt-32 flex flex-col items-center text-gray-700">
      <h1 className="text-4xl">Edit Character Information</h1>
      <form className="mt-5 flex w-1/3 flex-col gap-y-4">
        <div>
          <label htmlFor="name" className="text-xl">
            Name:
          </label>
          <br />
          <input
            id="name"
            name="name"
            placeholder="Enter a name"
            className="w-full rounded border border-black px-2 py-1 text-xl"
            value={character.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="Ability" className="text-xl">
            Ability:
          </label>
          <br />
          <input
            id="ability"
            name="ability"
            placeholder="Enter an ability"
            className="w-full rounded border border-black px-2 py-1 text-xl"
            value={character.ability}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-xl">Gender: </label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={character.gender === "male"}
              onChange={handleChange}
            />
            <label htmlFor="male" className="ml-2 text-xl">
              Male
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={character.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female" className="ml-2 text-xl">
              Female
            </label>
          </div>
        </div>
      </form>
      <div className="flex gap-x-4">
        <button
          className="mt-7 rounded-lg border border-gray-400 px-2 py-1 text-xl font-medium transition duration-200 hover:border-blue-500 hover:shadow"
          onClick={updateCharacter}
        >
          Update Character
        </button>
        <button
          className="mt-7 rounded-lg border border-gray-400 px-2 py-1 text-xl font-medium transition duration-200 hover:border-blue-500 hover:shadow"
          onClick={deleteCharacter}
        >
          Delete Character
        </button>
      </div>
    </main>
  );
}

export default Edit;
