import { FaSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

const NoFavouritesInfo = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-col justify-center items-center rounded-lg p-10 bg-gradient-to-r from-[#151515a4]  to-[#170525] animate-jump-in">
        <p className="font-cabin text-white text-xl text-center mb-4">
          You don't have any favourite songs <FaSadTear className="w-full text-center mt-4" />
        </p>
        <Link className="underline font-cabin text-white text-md min-w-full" to="/playlist">
          Go to playlist
        </Link>
      </div>
    </div>
  );
};

export default NoFavouritesInfo;
