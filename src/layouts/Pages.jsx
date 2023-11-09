import { Routes, Route } from "react-router-dom";
import { Playlist } from "../pages/Playlist";
import Favourites from "../pages/Favourites";

const Pages = () => {
  return (
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Playlist />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </main>
  );
};

export default Pages;
