import { useContext, useRef } from "react";
import { themeContext } from "../context/context";
import PlaylistCounter from "../components/PlaylistCounter";
import SongsList from "../components/SongsList";
import MusicControl from "../components/MusicControl";

export const Playlist = () => {

  const context = useContext(themeContext)
  const { songsList, setSongsList, setFilteredSongs,  currentIndex, setCurrentIndex } = context

  

    const audioRefs = useRef(songsList.map(() => useRef()));
  console.log(songsList)
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-start w-full min-h-screen pl-48 max-md:pl-0 max-md:items-center  ">
        <h1>
          <p className="uppercase font-allerta text-secondaryText">
            catalog by <span className="text-white underline">Rydwan</span>
          </p>
          <p className="uppercase text-4xl text-white font-allerta mt-2">
            Rydwan playlist
          </p>
        </h1>
        <PlaylistCounter
          songsList={songsList}
          setSongsList={setSongsList}
          
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          audioRefs={audioRefs}
        />
        <SongsList
          currentIndex={currentIndex}
          songsList={songsList}
          setSongsList={setSongsList}
          setFilteredSongs={setFilteredSongs}
          setCurrentIndex={setCurrentIndex}
          audioRefs={audioRefs}
        />
      </div>
      <MusicControl audioRefs={audioRefs} setSongsList={setSongsList} setCurrentIndex={setCurrentIndex} songsList={songsList} currentIndex={currentIndex} />
    </div>
  );
};
