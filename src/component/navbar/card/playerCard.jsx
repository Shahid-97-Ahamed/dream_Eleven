import { use } from 'react';

const PlayerCard = ({playerPromis}) => {
    const playerData =use(playerPromis)
    // console.log(playerData)
    return (
        <div>
            <h1>Player:{playerData.length}</h1>
        </div>
    );
};

export default PlayerCard;