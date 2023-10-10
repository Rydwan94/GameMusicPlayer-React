import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";

import { FaHeart } from "react-icons/fa";

import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import { themeContext } from "../context/context";

const Navbar = () => {
  const context = useContext(themeContext);
  const [isOpen, setIsOpen] = useState(false);

  const { songsList} = context;

  const isFavourite = songsList.filter((song) => song.isFavourite).length;
  console.log(isFavourite);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = navLinks.map((link) => (
    <li
      className="font-cabin text-cente p-1 mx-4 max-md:py-4 rounded-xl transition-all hover:bg-white hover:scale-95 hover:text-black"
      key={link.label}
    >
      <NavLink to={link.path}>{link.label}</NavLink>
    </li>
  ));

  return (
    <header className="relative flex justify-between flex-wrap w-full bg-gradient-to-r from-[#151515] to-[#170525]">
      <section className="flex items-center pl-4 ">
        <FaHeart
          className={`text-xl text-secondaryText ${
            isFavourite && "animate-jump text-red-500"
          }`}
        />
        <p className="text-white mb-4">{isFavourite}</p>
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
