import { useContext, useEffect } from "react";
import { themeContext } from "../context/context";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Pages from "./Pages";
import { filteredSongsContext } from "../context/filteredSongsProvider";

function App() {
  const context = useContext(themeContext);
  const filteredContext = useContext(filteredSongsContext);
  const { filteredSongs, filteredIndex } = filteredContext;
  const { bgImage, currentIndex, songsList, setBgImage } = context;

  const filteredSongsList = filteredSongs.filter((song) => song.isFavourite);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/playlist") {
      const currentSong = songsList[currentIndex];
      setBgImage(currentSong.img);
    }
  }, [currentIndex, songsList, pathname]);

  useEffect(() => {
    if (filteredSongsList.length > 0 && pathname === "/favourites") {
      const currentSong = filteredSongsList[filteredIndex];
      setBgImage(currentSong?.img);
    }
  }, [filteredIndex, filteredSongsList.length, pathname]);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="flex flex-col w-full min-h-screen bg-cover max-md:bg-[40%] "
    >
      <Navbar />

      <Pages />

      <section></section>
    </div>
  );
}

export default App;
