import React from "react";

function Home() {
  return (
    <main className="ml-64 flex h-screen flex-col items-center justify-center text-gray-700">
      <h1 className="text-4xl font-bold">Welcome to Character Creator!</h1>
      <p className="mt-2 text-lg">
        You can create all of your favorite characters here!
      </p>
      <img
        src="/assorted-characters.jpeg"
        alt="Assortment of characters"
        className="mt-5 w-9/12 min-w-60"
      />
    </main>
  );
}

export default Home;
