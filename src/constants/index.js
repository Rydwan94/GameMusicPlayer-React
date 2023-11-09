
import bellIcon from "../assets/icons/bellIcon.png";
import heartIcon from "../assets/icons/heartIcon.png";

import jinx from "../assets/images/jinxImage.png";
import riven from "../assets/images/rivenImage.png";
import godOfWar from '../assets/images/godOfWar.jpg'
import spiderman from '../assets/images/spiderman.jpg'
import cyberpunk from '../assets/images/cyberpunk.jpg'
import witcher from '../assets/images/witcher.png'

import LegendsNeverDie from '../assets/music/LegendsNeverDie.mp3';
import Ignite from '../assets/music/Ignite.mp3'
import godOfWarTheme from '../assets/music/godOfWar.mp3'
import spidermanTheme from '../assets/music/SpidermanTheme.mp3'
import cyberpunkTheme from '../assets/music/cyberpunkTheme.mp3'
import witcherTheme from '../assets/music/theWitcherTheme.mp3'
import { createRef } from "react";


export const navLinks = [
  {
    label: "Playlist",
    path: "/playlist",
  },
  {
    label: "Favourites",
    path: "/favourites",
  },
];

export const songs = [
  {
   id:0,
    title: "Legends Never Die",
    source: LegendsNeverDie,
    img: jinx,
    isActive: false,
    isFavourite: false,
    songRef: createRef()
  },
  {
    id:1,
    title: "Ignite",
    source: Ignite,
    img: riven,
    isActive: false,
    isFavourite: false,
    songRef: createRef()
  },
  {
    id:2,
    title: "God of War",
    source: godOfWarTheme,
    img: godOfWar,
    isActive: false,
    isFavourite: false,
    songRef: createRef()
  },
  {
    id:3,
    title: "Spider-Man",
    source: spidermanTheme,
    img:  spiderman,
    isActive: false,
    isFavourite: false,
    songRef: createRef()
  },
  {
    id:4,
    title: "Cyberpunk",
    source: cyberpunkTheme,
    img: cyberpunk  ,
    isActive: false,
    isFavourite: false,
    songRef: createRef()
  },
  {
    id:5,
    title: "The Witcher",
    source: witcherTheme,
    img: witcher  ,
    isActive: false,
    isFavourite: false,
    songRef: createRef()
  },
  
  
];

export const icons = [bellIcon, heartIcon];

export const images = [jinx, riven, godOfWar, spiderman, cyberpunk,witcher];
