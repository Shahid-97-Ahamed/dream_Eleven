import { TbCricket } from "react-icons/tb";
import navImg from "../../assets/Currency.png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm  my-[20px] container mx-auto">
  <div className="flex-1 justify-center items-center">
    <a className="btn btn-ghost text-xl"><TbCricket/> Dream Eleven</a>
  </div>
  <div className="flex-none">
    <button className="flex justify-center items-center gap-2 font-bold text-xl">
        0 coins
        <img src={navImg} alt="" />
    </button>
  </div>
</div>
    );
};

export default Navbar;