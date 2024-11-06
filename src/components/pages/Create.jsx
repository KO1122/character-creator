import React, { useState } from "react";
import { supabase } from "../../client";

function Create() {
  const [character, setCharacter] = useState({
    name: "",
    ability: "",
    gender: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCharacter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function createCharacter(e) {
    e.preventDefault();

    await supabase
      .from("Characters")
      .insert({
        name: character.name,
        ability: character.ability,
        gender: character.gender,
      })
      .select();

    window.location = "/";
  }

  return (
    <main className="ml-64 mt-32 flex flex-col items-center text-gray-700">
      <h1 className="text-4xl">Create a New Character</h1>
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
              onChange={handleChange}
            />
            <label htmlFor="female" className="ml-2 text-xl">
              Female
            </label>
          </div>
        </div>
      </form>
      <button
        className="mt-7 rounded-lg border border-gray-400 px-2 py-1 text-xl font-medium transition duration-200 hover:border-blue-500 hover:shadow"
        onClick={createCharacter}
      >
        Create Character
      </button>
    </main>
  );
}

export default Create;
