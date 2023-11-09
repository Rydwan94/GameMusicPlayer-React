import { useState, useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../constants";

import { FaHeart } from "react-icons/fa";

import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import { themeContext } from "../context/context";
import { filteredSongsContext } from "../context/filteredSongsProvider";

const Navbar = () => {
  const context = useContext(themeContext);
  const filteredContext = useContext(filteredSongsContext);

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const { filteredSongs, setFilteredIndex } = filteredContext;
  const { songsList, setBgImage, setCurrentIndex } = context;

  const isFavourite = songsList.filter((song) => song.isFavourite).length;
  const favouritesSongs = filteredSongs.filter((song) => song.isFavourite);

  useEffect(() => {
    if (pathname === "/favourites" && favouritesSongs.length > 0) {
      const currentSongImg = favouritesSongs[0];
      setFilteredIndex(0);
      setBgImage(currentSongImg.img);
    } else if (pathname === "/playlist") {
      const currentSongImg = songsList[0];
      setCurrentIndex(0)
      setBgImage(currentSongImg.img);
    }
  }, [pathname]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirectToAnotherURL = () => {
    navigate("/favourites");
  };

  const links = navLinks.map((link) => (
    <li
      className="font-cabin text-center p-1 mx-4 max-md:py-4 rounded-xl transition-all hover:bg-white hover:scale-95 hover:text-black"
      key={link.label}
    >
      <NavLink onClick={() => setIsOpen(false)} to={link.path}>{link.label}</NavLink>
    </li>
  ));

  return (
    <header className="relative flex justify-between flex-wrap w-full bg-gradient-to-r from-[#151515] to-[#170525]">
      <section className="flex items-center pl-4 max-md:absolute top-5 left-20">
        <FaHeart
          onClick={redirectToAnotherURL}
          className={`text-xl hover:animate-ping  ${
            favouritesSongs.length ? "animate-jump text-red-700" : "text-secondaryText"
          }`}
        />
        <p className="text-white mb-4">{favouritesSongs.length}</p>
      </section>
      <section className="max-md:w-full flex justify-between">
        <Hamburger onClick={handleMenu} isOpen={isOpen} />
        <Logo />
      </section>
      <nav
        className={`flex max-md:w-full text-white max-lg:overflow-hidden transition-[height] duration-700 ${
          isOpen ? "max-md:h-32" : "max-md:h-0"
        }`}
      >
        <ul className="flex items-center max-md:flex-col w-full">{links}</ul>
      </nav>
    </header>
  );
};

export default Navbar;
