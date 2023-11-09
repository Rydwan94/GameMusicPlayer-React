import { createContext, useState } from "react";

export const filteredSongsContext = createContext(undefined);

const FilteredSongsProvider = ({ children }) => {
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [filteredIndex, setFilteredIndex] = useState(0);

  return (
    <filteredSongsContext.Provider
      value={{
        filteredSongs,
        setFilteredSongs,
        filteredIndex,
        setFilteredIndex,
      }}
    >
      {children}
    </filteredSongsContext.Provider>
  );
};

//custom hook

// export const useFilteredSongsContext = () => {
//   const filteredSongs = useContext(filteredSongsContext)

//   if(filteredSongs === undefined){
//     throw new Error("useFilteredSongsContext must be used with filteredSongsContext")
//   }

//   return filteredSongs
// }

export default FilteredSongsProvider;
