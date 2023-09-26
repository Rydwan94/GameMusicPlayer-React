import { useEffect, useRef } from "react";
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
  const duration = useRef(0)

  useEffect(() => {
    if(currentSongRef){
      duration.current = currentSongRef.duration
    }
  }, [currentSongRef])

  console.log(duration)
  
  const handlePlayPause = () => {
    const updatedSong = [...songsList];
    updatedSong[currentIndex].isActive = !updatedSong[currentIndex].isActive;
    if (updatedSong[currentIndex].isActive) {
      currentSongRef.current.play();
    } else {
      currentSongRef.current.pause();
    }
    setSongsList(updatedSong);
  };


  const handleNextSongButton = () => {
    if (currentIndex < songsList.length - 1) {
      
      setCurrentIndex(prev => prev +1);
    }

  };

  const handlePrevSongButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <>
    <div></div>
      <div className="flex justify-between items-center px-10 bg-gradient-to-r from-[#151515] to-[#170525] h-20 w-full">
        <section className="flex flex-col items-center">
          <p className="text-primaryText text-xl">{songTitle}</p>
          <p className="text-[#A0A0A0]">Rydwan Remix</p>
        </section>
        <section className="flex justify-between items-center min-w-[150px]">
          <button className="text-white text-xl  cursor-pointer" >

          <FaStepBackward onClick={handlePrevSongButton} />
          </button>
          {songIsActive ? (
            <button className="text-white text-xl  cursor-pointer">
            <FaPlay
              onClick={handlePlayPause}
              
            />
            </button>
          ) : (
            <button className="text-white text-xl cursor-pointer">
            <FaPause
              onClick={handlePlayPause}
           
            />
            </button>
          )}

          <button className="text-white text-xl  cursor-pointer" ><FaStepForward onClick={handleNextSongButton} /></button>
          <button className="text-white text-xl cursor-pointer" ><FaSync/></button>
        </section>
        <section className="text-white">current time</section>
      </div>
    </>
  );
};

export default MusicControl;
