import { useContext, useEffect } from "react";
import { themeContext } from "../context/context";
import { HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Pages from "./Pages";

function App() {
  const context = useContext(themeContext);
  const { bgImage, currentIndex, songsList, setBgImage } = context;

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < songsList.length) {
      const currentSong = songsList[currentIndex];
      setBgImage(currentSong.img);
    }
  }, [currentIndex, songsList, setBgImage]);

  return (
    <HashRouter>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="flex flex-col w-full min-h-screen bg-cover max-md:bg-[40%] "
      >
        <Navbar />

        <Pages />

        <section></section>
      </div>
    </HashRouter>
  );
}

export default App;
