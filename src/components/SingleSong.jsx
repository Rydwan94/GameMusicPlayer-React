import { FaPlay, FaPause } from "react-icons/fa";

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
  songRef,
}) => {
  const handlePlayPauseClick = () => {
    const updatedSongData = [...songsList];
    if (currentIndex === index) {
      updatedSongData[currentIndex].isActive =
        !updatedSongData[currentIndex].isActive;

      if (updatedSongData[currentIndex].isActive) {
        console.log(updatedSongData[currentIndex].isActive);
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

  return (
    <div
      onClick={handleSelectSong}
      className={`flex justify-between items-center snap-start min-w-[600px] h-[200px]  max-md:h-[110px] max-md:min-w-[90%] max-md:ml-16  rounded-2xl bg-black text-white mr-7 border border-[#7C7C7C] ${
        currentIndex === index &&
        " bg-gradient-to-r from-[#151515] to-[#4f0b84]"
      }`}
    >
      <img
        src={img}
        alt="song image"
        className="rounded-2xl h-full border max-w-full border-[#7C7C7C] "
      />
      <h3 className="font-allerta">{title}</h3>
      <audio src={source} ref={songRef} />
      <button
        className="flex justify-center items-center rounded-full w-12 h-12 -mr-5 bg-[#40E2C1] hover:animate-jump "
        onClick={() => handlePlayPauseClick(currentIndex)}
      >
        {isActive ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default SingleSong;
