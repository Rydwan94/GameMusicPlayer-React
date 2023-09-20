import { Routes, Route } from "react-router-dom";
import { Playlist } from "../pages/Playlist";
import Authors from "../pages/Authors";



const Pages = () => {
  return (
    <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Playlist />} />
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/authors" element={<Authors />}/>
    </Routes>
    </main>
  )
}

export default Pages