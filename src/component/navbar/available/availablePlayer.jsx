import Players from "../UI/players";

const AvailablePlayer = ({players}) => {
    // console.log(players)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            players.map(player=>{
                return(
                    <Players player={player}/>
                )
            })
        }
      </div>

    );
};

export default AvailablePlayer;