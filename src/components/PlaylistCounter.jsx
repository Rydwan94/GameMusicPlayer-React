
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PlaylistCounter = ({ currentIndex, setCurrentIndex, songsList, setSongsList }) => {

  const currentSong = songsList[currentIndex]?.songRef.current;
  


  const nextIndex = () => {
    const updatedSongs = [...songsList]
    if (currentIndex < songsList.length - 1) {
      
      setCurrentIndex(prev => prev + 1);
      updatedSongs[currentIndex].isActive = false
      currentSong.currentTime = 0
      currentSong.pause()
    }

    setSongsList(updatedSongs)
  };

  const prevIndex = () => {
    const updatedSongs = [...songsList]
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      updatedSongs[currentIndex].isActive = false
      currentSong.currentTime = 0
      currentSong.pause()
    }

    setSongsList(updatedSongs)
  };

  return (
    <div className="flex items-center my-3">
      <button
        onClick={prevIndex}
        className="flex items-center justify-center w-10 h-10 bg-slate-500 rounded-full transition-all hover:bg-white"
      >
        <FiChevronLeft />
      </button>
      <section className="px-4 font-cabin text-white">
        {`${currentIndex + 1} / ${songsList.length}`}
      </section>
      <button
        onClick={nextIndex}
        className="flex items-center justify-center w-10 h-10 bg-slate-500 rounded-full transition-all hover:bg-white"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default PlaylistCounter;
