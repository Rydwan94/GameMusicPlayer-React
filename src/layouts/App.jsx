import { useContext, useEffect } from "react";
import { themeContext } from "../context/context";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Pages from "./Pages";
import { filteredSongsContext } from "../context/filteredSongsProvider";

function App() {
  const context = useContext(themeContext);
  const filteredContext = useContext(filteredSongsContext);
  const { filteredSongs, filteredIndex, setFilteredIndex } = filteredContext;
  const { bgImage, currentIndex, songsList, setBgImage } = context;

  const filteredSongsList = filteredSongs.filter((song) => song.isFavourite);

  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if(songsList.length > 0 && pathname === "/playlist"){
    const currentSong = songsList[currentIndex];
    setBgImage(currentSong.img);
    }
  }, [currentIndex, songsList]);

  // useEffect(() => {
  //   if (filteredSongsList.length > 0 && pathname === "/favourites") {
  //     const currentSong = filteredSongsList[filteredIndex];
  //     setBgImage(currentSong.img);
  //     console.log(currentSong)
  //   }
  // }, [filteredIndex, filteredSongsList.length]);

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
