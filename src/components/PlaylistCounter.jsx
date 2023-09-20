
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PlaylistCounter = ({ currentIndex, setCurrentIndex, songsList }) => {

  



  const nextIndex = () => {
    if (currentIndex < songsList.length - 1) {
      const nextSongIndex = currentIndex + 1;
      setCurrentIndex(nextSongIndex);
    }
  };

  const prevIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center my-3">
      <button
        onClick={prevIndex}
        className="flex items-center justify-center w-10 h-10 bg-slate-500 rounded-full transition-all hover:bg-white"
      >
        <FiChevronLeft />
      </button>
      <section className="px-4 font-cabin">
        {`${currentIndex} / ${songsList.length - 1}`}
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
