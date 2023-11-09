import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { filteredSongsContext } from "../context/filteredSongsProvider";
import { themeContext } from "../context/context";

import SongsList from "../components/SongsList";
import MusicControl from "../components/MusicControl";
import PlaylistCounter from "../components/PlaylistCounter";
import NoFavouritseInfo from "../components/NoFavouritseInfo";

const Favourites = () => {
  const context = useContext(themeContext);
  const filteredContext = useContext(filteredSongsContext);
  const { filteredSongs, setFilteredSongs, filteredIndex, setFilteredIndex } =
    filteredContext;

  const { setSongsList } = context;

  const location = useLocation();
  const { pathname } = location;

  const updatedFilteredSongs = filteredSongs.filter(
    (song) => song.isFavourite === true
  );

  useEffect(() => {
    if (pathname === "/favourites") {
      const updatedSongs = updatedFilteredSongs.map((song) => ({
        ...song,
        isActive: false,
      }));
      setFilteredSongs(updatedSongs);
    }
  }, [pathname]);

  if (updatedFilteredSongs.length > 0) {
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
            songsList={updatedFilteredSongs}
            setSongsList={setFilteredSongs}
            currentIndex={filteredIndex}
            setCurrentIndex={setFilteredIndex}
          />
          <SongsList
            currentIndex={filteredIndex}
            songsList={updatedFilteredSongs}
            setSongsList={setSongsList}
            setFilteredSongs={setFilteredSongs}
            setCurrentIndex={setFilteredIndex}
          />
        </div>
        <MusicControl
          songsList={updatedFilteredSongs}
          setSongsList={setFilteredSongs}
          setCurrentIndex={setFilteredIndex}
          currentIndex={filteredIndex}
        />
      </div>
    );
  } else return <NoFavouritseInfo />;
};

export default Favourites;
