import { useEffect, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaSync,
} from "react-icons/fa";

const MusicControl = ({
  audioRefs,
  songsList,
  setSongsList,
  currentIndex,
  setCurrentIndex,
}) => {
  const songTitle = songsList[currentIndex].title;
  const songIsActive = !songsList[currentIndex].isActive;
  const currentSongRef = audioRefs.current[currentIndex];
  const [currentTime, setCurrentTime] = useState("0:00");
  const [progress, setProgress] = useState(0);

  

  useEffect(() => {
    if (currentSongRef) {
      const updateCurrentTime = () => {
        const minutes = Math.floor(currentSongRef.current.currentTime / 60);
        const seconds = Math.floor(currentSongRef.current.currentTime % 60)
          .toString()
          .padStart(2, "0");
        setCurrentTime(`${minutes}:${seconds}`);
        const calculatedProgress =
          (currentSongRef.current.currentTime /
            currentSongRef.current.duration) *
          100;
        setProgress(isNaN(calculatedProgress) ? 0 : calculatedProgress);
      };

      currentSongRef.current.addEventListener("timeupdate", updateCurrentTime);
    }
  }, [currentSongRef]);


  const handlePlayPause = () => {
    const updatedSong = [...songsList];
    const currentSong = updatedSong[currentIndex];

    console.log(currentIndex);

    if (currentSong.isActive) {
      currentSongRef.current.pause();
    } else {
      currentSongRef.current.play();
    }

    currentSong.isActive = !currentSong.isActive;

    setSongsList(updatedSong);
  };

  const handleNextSongButton = () => {
    if (currentIndex < songsList.length - 1) {
      const nextIndex = currentIndex + 1;
      const newSongRef = audioRefs.current[nextIndex];

      const updatedSongList = [...songsList];

      updatedSongList[currentIndex].isActive = false;
      currentSongRef.current.pause();
      currentSongRef.current.currentTime = 0;

      if (newSongRef) {
        newSongRef.current.play();
        updatedSongList[nextIndex].isActive = true;
      }

      setCurrentIndex(nextIndex);

      setSongsList(updatedSongList);
    }
  };

  const handlePrevSongButton = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const newSongRef = audioRefs.current[prevIndex];

      const updatedSongList = [...songsList];

      updatedSongList[currentIndex].isActive = false;
      currentSongRef.current.pause();
      currentSongRef.current.currentTime = 0;

      if (newSongRef) {
        newSongRef.current.play();
        updatedSongList[prevIndex].isActive = true;
      }

      setCurrentIndex(prevIndex);

      setSongsList(updatedSongList);
    }
  };

  const handleResetSong = () => {
    currentSongRef.current.currentTime = 0;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;
    setProgress(newProgress);

    const newTime = (newProgress / 100) * currentSongRef.current.duration;
    currentSongRef.current.currentTime = newTime;
  };

  return (
    <>
      <div
        onClick={handleProgressClick}
        className="relative z-10 w-full h-1 cursor-pointer bg-white bg-gradient-to-r from-[#151515] to-[#170525]"
      >
        <div
          style={{ width: `${progress}%` }}
          className="relative h-1  bg-gradient-to-r from-[#3e7928] to-[#00ffaf] "
        >
          <div className="absolute right-[-10px] top-[-5px] w-4 h-4 cursor-pointer bg-white rounded-full bg-gradient-to-r from-[#00ffaf] to-[#00edff] hover:animate-jump  "></div>
        </div>
      </div>
      <div className="flex justify-between items-center relative z-0 px-2 bg-gradient-to-r from-[#151515] to-[#170525] h-20 w-full">
        <section className="flex flex-col items-center">
          <p className="text-primaryText text-xl max-md:text-[12px]">{songTitle}</p>
          <p className="text-[#A0A0A0] max-md:text-[12px]">Rydwan Remix</p>
        </section>
        <section className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-between items-center ">
          <button className="text-white text-xl  cursor-pointer transition-all hover:scale-110 ml-5 ">
            <FaStepBackward onClick={handlePrevSongButton} />
          </button>
          {songIsActive ? (
            <button className="text-white text-xl  cursor-pointer transition-all hover:scale-110 ml-5">
              <FaPlay onClick={handlePlayPause} />
            </button>
          ) : (
            <button className="text-white text-xl cursor-pointer transition-all hover:scale-110 ml-5">
              <FaPause onClick={handlePlayPause} />
            </button>
          )}

          <button className="text-white text-xl  cursor-pointer transition-all hover:scale-110 ml-5">
            <FaStepForward onClick={handleNextSongButton} />
          </button>
          <button className="text-white text-xl cursor-pointer transition-all hover:scale-110 ml-5">
            <FaSync onClick={handleResetSong} />
          </button>
        </section>
        <section className="text-white">{currentTime}</section>
      </div>
    </>
  );
};

export default MusicControl;
