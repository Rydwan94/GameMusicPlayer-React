import { useEffect, useRef } from "react";

import SingleSong from "./singleSong";

const SongsList = ({
  currentIndex,
  setCurrentIndex,
  songsList,
  setSongsList,
  audioRefs
}) => {
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



  const songs = songsList.map((song, index) => (
    <SingleSong
      key={index}
      {...song}
      index={index}
      currentIndex={currentIndex}
      songsList={songsList}
      setSongsList={setSongsList}
      setCurrentIndex={setCurrentIndex}
      songRef={audioRefs.current[index]}
    />
  ));

  return (
    <div
      ref={songsListRef}
      className="flex  w-full my-5 snap-x snap-mandatory  overflow-x-hidden"
    >
      {songs}
    </div>
  );
};

export default SongsList;
