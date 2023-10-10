import { useContext, useRef } from "react"
import { themeContext } from "../context/context"

import SongsList from "../components/SongsList";
import MusicControl from "../components/MusicControl";
import PlaylistCounter from "../components/PlaylistCounter"



const Favourites = () => {

  const context = useContext(themeContext)

  const { songsList, setSongsList, currentIndex, setCurrentIndex } = context

  
  const favouritesSongs = songsList.filter(song => song.isFavourite)
  
  const audioRefs = useRef(favouritesSongs.map(() => useRef()));
  
  if(favouritesSongs.length > 0){
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex flex-col justify-center items-start w-full min-h-screen pl-48 max-md:pl-0 max-md:items-center  ">
        <h1>
          <p className="uppercase font-allerta text-secondaryText">
            catalog by <span className="text-white underline">Rydwan</span>
          </p>
          <p className="uppercase text-4xl text-white font-allerta mt-2">
            Rydwan playlist
          </p>
        </h1>
        <PlaylistCounter
          songsList={favouritesSongs}
          setSongsList={setSongsList}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          audioRefs={audioRefs}
        />
        <SongsList
          currentIndex={currentIndex}
          songsList={favouritesSongs}
          setSongsList={setSongsList}
          setCurrentIndex={setCurrentIndex}
          audioRefs={audioRefs}
        />
      </div>
      <MusicControl audioRefs={audioRefs} setSongsList={setSongsList} setCurrentIndex={setCurrentIndex} songsList={favouritesSongs} currentIndex={currentIndex} />
    </div>
  )
  } else return <h1 className="text-white">You dont have favourites Songs</h1>
}

export default Favourites