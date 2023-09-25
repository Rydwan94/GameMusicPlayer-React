import { createContext, useState } from "react";
import { songs } from "../constants";

import { images } from "../constants";

export const themeContext = createContext();

const ContextProvider = ({ children }) => {

    

  const [bgImage, setBgImage] = useState(images);
  const [songsList, setSongsList] = useState(songs)
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <themeContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        songsList,
        setSongsList,
        bgImage,
        setBgImage,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ContextProvider;
