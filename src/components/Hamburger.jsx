const Hamburger = ({onClick, isOpen}) => {



  return (
    <button onClick={onClick} className="md:hidden cursor-pointer max-md:p-7">
      <div className={`w-6 h-1 bg-white transition-all ${isOpen && "translate-y-2 -rotate-45" }`}></div>
      <div className={`w-6 h-1 mt-1 bg-white ${isOpen && "opacity-0" }`}></div>
      <div className={`w-6 h-1 mt-1 bg-white ${isOpen && "-translate-y-2 rotate-45" }`}></div>
    </button>
  );
};

export default Hamburger;
