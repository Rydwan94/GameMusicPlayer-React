import { FaPlay, FaPause, FaHeart } from "react-icons/fa";

const SingleSong = ({
  index,
  currentIndex,
  setCurrentIndex,
  img,
  source,
  title,
  isActive,
  songsList,
  setSongsList,
  setFilteredSongs,
  songRef,
}) => {

  const isFavourite = songsList[index].isFavourite;

  
 
  const handlePlayPauseClick = () => {
    const updatedSongData = [...songsList];
    if (currentIndex === index) {
      updatedSongData[currentIndex].isActive =
        !updatedSongData[currentIndex].isActive;

      if (updatedSongData[currentIndex].isActive) {
        songRef.current.play();
      } else {
        updatedSongData[currentIndex].isActive;
        songRef.current.pause();
      }

      setSongsList(updatedSongData);
    }
  };

  const handleSelectSong = () => {
    setCurrentIndex(index);
  };

  const handleIsFavourite = () => {
    const updatedSong = [...songsList];

    if (currentIndex === index) {     
      const songToModify = updatedSong[currentIndex];
      
      songToModify.isFavourite = !songToModify.isFavourite;
      setSongsList(updatedSong)
    }
    
    const filtered = updatedSong.filter(song => song.isFavourite)
    setFilteredSongs(filtered)
  };
  
  return (
    <div
      onClick={handleSelectSong}
      className={`flex justify-between items-center snap-start max-md:snap-center min-w-[600px] h-[200px]  max-md:h-[110px] max-md:min-w-[90%] max-md:ml-16  rounded-2xl bg-black text-white mr-7 border border-[#7C7C7C] ${
        currentIndex === index &&
        " bg-gradient-to-r from-[#151515] to-[#4f0b84]"
      }`}
    >
      <img
        src={img}
        alt="song image"
        className="rounded-2xl h-full border max-w-full border-[#7C7C7C] "
      />
      <div className="flex flex-col items-center">
        <h3 className="font-allerta">{title}</h3>
        <FaHeart
          onClick={handleIsFavourite}
          className={`text-secondaryText mt-5 ${
            isFavourite && "animate-jump text-red-500"
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
