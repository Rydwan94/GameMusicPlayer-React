
import bellIcon from "../assets/icons/bellIcon.png";
import heartIcon from "../assets/icons/heartIcon.png";

import jinx from "../assets/images/jinxImage.png";
import riven from "../assets/images/rivenImage.png";
import yasuo from "../assets/images/yasuoImage.png";
import kda from "../assets/images/kda.png";

import LegendsNeverDie from '../assets/music/LegendsNeverDie.mp3';
import Ignite from '../assets/music/Ignite.mp3'



export const navLinks = [
  {
    label: "Playlist",
    path: "/playlist",
  },
  {
    label: "Authors",
    path: "/authors",
  },
];

export const songs = [
  {
   
    title: "Legends Never Die",
    source: LegendsNeverDie,
    img: jinx,
    isActive: false,
  },
  {
    
    title: "Ignie",
    source: Ignite,
    img: riven,
    isActive: false
  },
  {
    
    title: "Yasuo Song",
    source: "https://example.com/yasuo-song.mp3",
    img: yasuo,
    isActive: false
  },
  {
    
    title: "Kda Pop stars",
    source: "https://example.com/yasuo-song.mp3",
    img: kda,
    isActive: false
  },
];

export const icons = [bellIcon, heartIcon];

export const images = [jinx, riven, yasuo];
