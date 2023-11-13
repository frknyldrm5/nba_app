import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NbaContext } from '../context/NbaContext';

function TeamDetail() {
    const { playersFirestoreData } = useContext(NbaContext);
    const { id } = useParams();

    // Find the team with the matching id
    const player = playersFirestoreData.find((player) => player.id === parseInt(id, 10));
    console.log(player)

    if (!player) {
        return <p>player not found</p>;
    }

    return (
        <div>
            <h1>Player Detail</h1>
            <div>
                <h2>{player.firstname} {player.lastname}</h2>
                <img src={player.logo} alt={`${player.firstName} Logo`} />
            </div>
        </div>
    );
}

export default TeamDetail;