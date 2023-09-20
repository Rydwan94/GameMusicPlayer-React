
import brand from "../assets/images/brand.png";

const Logo = () => {
  return (
    <div className="flex items-center p-7" >
        <img src={brand} alt='brand' />
        <p className=" font-cabin text-white uppercase pl-2 pt-1">Games Music</p>
    </div>
  )
}

export default Logo