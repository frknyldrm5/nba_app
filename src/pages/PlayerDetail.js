import React, { useContext } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import { NbaContext } from '../context/NbaContext';

function PlayerDetail() {
    const {deletePlayer } = useContext(NbaContext);
    const navigate = useNavigate();
    const location = useLocation();
    const player = location.state.player;

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

export default PlayerDetail;