import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NbaContext } from '../context/NbaContext';

function TeamDetail() {
    const { teamsFirestoreData } = useContext(NbaContext);
    const { id } = useParams();

    // Find the team with the matching id
    const team = teamsFirestoreData.find((team) => team.id === parseInt(id, 10));
    console.log(team)

    if (!team) {
        return <p>Team not found</p>;
    }

    return (
        <div>
            <h1>Team Detail</h1>
            <div>
                <img src={team.logo} alt={`${team.nickname} Logo`} />
                <h2>{team.name}</h2>
                <p>Nickname: {team.nickname}</p>
                <p>City: {team.city}</p>
                <p>Conference: {team.conference}</p>
                <h2>Players</h2>

            </div>
        </div>
    );
}

export default TeamDetail;