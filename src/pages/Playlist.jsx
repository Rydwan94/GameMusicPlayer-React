import { useContext, useState } from 'react';
import { themeContext } from '../context/context';
import PlaylistCounter from "../components/PlaylistCounter"
import SongsList from "../components/SongsList"


export const Playlist = () => {
  const {songsList, currentIndex, setCurrentIndex,} = useContext(themeContext)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex flex-col justify-center items-start w-full min-h-screen pl-48 max-md:pl-0 max-md:items-center  ">
      <h1>
        <p className="uppercase font-allerta text-secondaryText">catalog by <span className="text-white underline">Rydwan</span></p>
        <p className="uppercase text-4xl text-white font-allerta mt-2">league of legends</p>
      </h1>
      <PlaylistCounter songsList={songsList} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <SongsList currentIndex={currentIndex} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}
