import { use, useState } from 'react';
import AvailablePlayer from '../available/availablePlayer';
import SelectedPlayer from '../selected/selectedPlayer';

const PlayerCard = ({playerPromis}) => {
    const players =use(playerPromis)
    const [selectType,setselectType]=useState("avilable")
    // setavailableType(availableType)
    return (
        <div className='container mx-auto my-[60px]'>
            <div className='flex justify-between items-center mb-[20px]'>
               {selectType === "avilable" ?<h1 className='font-bold text-3xl'>Available Player</h1>:<h1 className='font-bold text-3xl'>Selected Players(2/6)</h1>}
                <div className="">
                    <button onClick={()=>setselectType("avilable")} className={`btn ${selectType === "avilable"?"bg-accent":"bg-gray"}`}>Avilable</button>
                    <button onClick={()=>setselectType("selected")} className={`btn ${selectType === "selected"?"bg-accent":"bg-gray"}`}>Selected (0)</button>
                </div>
            </div>
            {selectType === "avilable"?<AvailablePlayer players={players}/>:<SelectedPlayer/>}
        </div>
    );
};

export default PlayerCard;