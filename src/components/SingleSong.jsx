
import { useRef, useEffect, useState } from "react";

import {FaPlay, FaPause} from "react-icons/fa";


const SingleSong = ({index, currentIndex,img, source, title, handlePlayPauseClick, isActive, isPlaying}) => {

    

    const singleSongRef = useRef(null)
   

    useEffect(() => {
        if (singleSongRef.current) {
          if (isPlaying) {
            singleSongRef.current.play();
          } else {
            singleSongRef.current.pause();
          }
        }
      }, [isPlaying]);

  return (
    <div
      key={index}
      className={`flex justify-between items-center snap-start min-w-[600px] h-[200px] max-md:min-w-full max-md:h-[150px] rounded-2xl bg-black text-white mr-7 border border-[#7C7C7C] transition-all delay-[.3s]  ${
        index === currentIndex && "animate"
      }`}
    >
      <img
        src={img}
        alt="song image"
        className="rounded-2xl h-full border max-w-full border-[#7C7C7C] "
      />
      <h3 className="font-allerta">{title}</h3>
      <audio src={source} ref={singleSongRef} />
      <button
        className="flex justify-center items-center rounded-full w-12 h-12 -mr-5 bg-[#40E2C1]"
        onClick={handlePlayPauseClick}
      >
        {isActive ? <FaPause /> : <FaPlay/>}
      </button>
    </div>
  )
}

export default SingleSong