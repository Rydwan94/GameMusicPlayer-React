import {  useEffect, useRef } from "react";
import { songs } from "../constants";
import SingleSong from "./singleSong";

const SongsList = ({ currentIndex, isPlaying, setIsPlaying, }) => {


  const songsListRef = useRef(null);
 

  useEffect(() => {
    if (songsListRef.current && currentIndex >= 0) {
      const songElements = songsListRef.current.children;
      if (songElements[currentIndex]) {
        songElements[currentIndex].scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);



  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  
  };

  const songsList = songs.map((song, index) => (
    <SingleSong
      key={index}
      {...song}
      handlePlayPauseClick={handlePlayPauseClick}
      currentIndex={currentIndex}
      isPlaying={isPlaying}
    />
  ));

  return (
    <div
      ref={songsListRef}
      className="flex w-full my-5 snap-x snap-mandatory  overflow-x-hidden  "
    >
      {songsList}
    </div>
  );
};

export default SongsList;
