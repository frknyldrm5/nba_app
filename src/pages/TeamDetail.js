import React, { useContext } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { NbaContext } from '../context/NbaContext';

function TeamDetail() {
    const { teamsFirestoreData,deleteTeam } = useContext(NbaContext);
    const { name } = useParams();
    const navigate = useNavigate();

    // Find the team with the matching id
    const team = teamsFirestoreData.find((team) => team.name === parseInt(name, 10));
    console.log(team)

    function deleteHandler(id) {
        if (id) {
            deleteTeam(id);
            navigate("/");
        } else {
            console.error("Invalid team id:", id);
        }
    }


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
                <button className="mx-3 btn btn-outline-danger"
                        onClick={() => {
                            deleteHandler(team.id);
                        }}
                >
                    &#128465;
                </button>
                <h2>Players</h2>

            </div>
        </div>
    );
}

export default TeamDetail;