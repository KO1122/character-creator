import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="rounded-md border border-gray-700 p-6 text-center">
      <p>
        Name: <span className="font-medium">{props.name}</span>
      </p>
      <p>
        Ability: <span className="font-medium">{props.ability}</span>
      </p>
      <p>
        Gender: <span className="font-medium">{props.gender}</span>
      </p>
      <Link
        className="mt-5 inline-block rounded-lg border border-gray-400 px-2 py-1 font-medium transition duration-200 hover:border-blue-500 hover:shadow"
        to={`/${props.id}`}
      >
        Character Info
      </Link>
      <Link
        className="mt-5 inline-block rounded-lg border border-gray-400 px-2 py-1 font-medium transition duration-200 hover:border-blue-500 hover:shadow"
        to={`/edit/${props.id}`}
      >
        Edit Character
      </Link>
    </div>
  );
}

export default Card;
