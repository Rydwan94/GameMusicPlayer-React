import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { icons } from "../constants";

import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const iconsList = icons.map((icon) => (
    <img
      className="mx-3 cursor-pointer"
      key={icon}
      src={icon}
      alt="icon"
      width={20}
      height={20}
    />
  ));

  return (
    <header className="flex justify-between flex-wrap w-full bg-gradient-to-r from-[#151515] to-[#170525]">
      <section className="flex items-center max-md:hidden">{iconsList}</section>
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
