import { FaFlag, FaUser } from "react-icons/fa";

const Players = ({player}) => {
    const {player_name,player_country,player_type,rating,batting_style,bowling_style,price,player_img} =player;
    // console.log(data)
    return (
              <div className="card bg-green-100 shadow-sm h-full
              transition-all duration-300
                hover:scale-105 hover:shadow-xl">
  <figure>
    <img
      src={player_img}
      alt="players"
      className="w-full h-96 object-cover" />
      
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser/> {player_name}</h2>
   <div className="flex justify-between">
     <div className="flex justify-center items-center gap-2">
        <FaFlag/>
        <p>{player_country}</p>
    </div>
    <button className="btn"> {player_type}</button>
   </div>
     <div className="divider"></div>
    <h3 className="font-bold text-xl">Ratings:{rating}</h3>
    <div className="flex justify-between font-bold">
        <p>{batting_style}</p>
        <p>{bowling_style}</p>  
    </div>
    <div className="card-actions justify-between items-center">
        <p className="font-bold">Price:{price}</p>
      <button className="btn">Choose Player</button>
    </div>
  </div>
</div>
    );
};

export default Players;