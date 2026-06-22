import { use } from 'react';
import AvailablePlayer from '../available/availablePlayer';

const PlayerCard = ({playerPromis}) => {
    const players =use(playerPromis)
    
    return (
        <div className='container mx-auto'>
            <h1>Player:{players.length}</h1>
            <AvailablePlayer players={players}/>
        </div>
    );
};

export default PlayerCard;