import navImg from "../../assets/Currency.png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Dream Eleven</a>
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