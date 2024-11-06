import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Gallery from "./components/pages/Gallery";
import Edit from "./components/pages/Edit";
import CharacterInfo from "./components/pages/CharacterInfo";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path=":id" element={<CharacterInfo />} />
        <Route path="edit">
          <Route path=":id" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
