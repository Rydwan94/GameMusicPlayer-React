import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";
import { themeContext } from "../context/context";

const SingleSong = ({
  index,
  currentIndex,
  setCurrentIndex,
  img,
  source,
  title,
  isActive,
  isFavourite,
  updatedSongsList,
  setSongsList,
  setFilteredSongs,
  songRef,
}) => {
  const { songsList } = useContext(themeContext);

  const findItem = updatedSongsList.find((song) => song);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/favourites" && findItem) {
      setCurrentIndex(updatedSongsList.length - 1);
    }
  }, [updatedSongsList.length]);

  const handlePlayPauseClick = () => {
    const updatedSongData = [...updatedSongsList];
    const isCurrentSong = currentIndex === index;
    const currentSong = updatedSongData[index];

    if (isCurrentSong) {
      if (currentSong.isActive) {
        songRef.current.pause();
      } else {
        songRef.current.play();
      }
      currentSong.isActive = !currentSong.isActive;
    } else {
      songRef.current.play();

      currentSong.isActive = true;

      setCurrentIndex(index);

      updatedSongData.forEach((song, i) => {
        if (i !== index) {
          song.isActive = false;
          song.songRef.current.pause();
        }
      });
    }

    setFilteredSongs(updatedSongData);
  };

  const handleIsFavourite = () => {
    const updatedSongData = [...updatedSongsList];
    const songToModify = updatedSongData[index];

    // Odznacz jako nieulubione
    songToModify.isFavourite = !songToModify.isFavourite;

    // Aktualizuj songsList
    const updatedList = songsList.map((song) => {
      if (song.id === songToModify.id) {
        return { ...songToModify };
      }
      return { ...song };
    });

    setSongsList(updatedList);

    // Utwórz listę z ulubionymi
    const filtered = updatedSongData.filter((song) => song.isFavourite);

    // Ustaw stan skomponentu na podstawie nowych danych
    setFilteredSongs(filtered);
  };

  return (
    <div
      className={`flex justify-between items-center snap-start max-md:snap-center min-w-[600px] h-[200px]  max-md:h-[110px] max-md:min-w-[90%] max-md:ml-16  rounded-2xl bg-black bg-opacity-80 text-white mr-7 border border-[#7C7C7C] ${
        currentIndex === index &&
        "bg-gradient-to-r  from-[#1515158e] to-[#500b84e1] "
      }`}
    >
      <img
        src={img}
        alt="song image"
        className="rounded-2xl h-full border max-w-full border-[#7C7C7C] "
      />
      <div className="flex flex-col items-center">
        <h3 className="font-allerta px-1 text-center">{title}</h3>
        <FaHeart
          onClick={handleIsFavourite}
          className={` mt-5 ${
            isFavourite ? "animate-jump text-red-700" : "text-secondaryText"
          }`}
        />
      </div>
      <audio src={source} ref={songRef} />
      <button
        className="flex justify-center items-center rounded-full w-12 h-12 -mr-5 bg-[#40E2C1] hover:animate-jump "
        onClick={handlePlayPauseClick}
      >
        {isActive ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default SingleSong;
