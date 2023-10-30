import { useContext, useRef } from "react"
import { themeContext } from "../context/context"

import SongsList from "../components/SongsList";
import MusicControl from "../components/MusicControl";
import PlaylistCounter from "../components/PlaylistCounter"



const Favourites = () => {
  
  const context = useContext(themeContext)
  const { filteredSongs, setFilteredSongs, setSongsList, filteredIndex, setFilteredIndex} = context
  
  
  // const favouritesSongs = filteredSongs.filter(song => song.isFavourite)
  
  const audioRefs = useRef(filteredSongs.map(() => useRef()));
  

  
  console.log(filteredSongs)
  
  if(filteredSongs.length > 0){
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
        {/* <PlaylistCounter
          songsList={filteredSongs}
          setSongsList={setFilteredSongs}
          currentIndex={filteredIndex}
          setCurrentIndex={setFilteredIndex}
          audioRefs={audioRefs}
        /> */}
        <SongsList
          currentIndex={filteredIndex}

          songsList={filteredSongs}
          setSongsList={setSongsList}
          setFilteredSongs={setFilteredSongs}
          setCurrentIndex={setFilteredIndex}
          audioRefs={audioRefs}
        />
      </div>
      {/* <MusicControl audioRefs={audioRefs} songsList={favouritesSongs} setSongsList={setFilteredSongs} setCurrentIndex={setFilteredIndex}  currentIndex={filteredIndex} /> */}
    </div>
  )} else return <h1>You dont have any favourites songs</h1>
      
}

export default Favourites