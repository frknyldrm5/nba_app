import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import PlayerForm from "../components/PlayerForm";


function EditPlayer() {

    const location = useLocation();
    const navigate = useNavigate();
    const player = location.state.player;
    const [updatedPlayer, setUpdatedPlayer] = useState(player);

    const {firstname,lastname,affiliation}=updatedPlayer


    const handleSubmit = async () => {
        const teamDoc = doc(db, "players", player.id);
        navigate("/");
        await updateDoc(teamDoc, {
            firstname: firstname,
            lastname: lastname,
            affiliation: affiliation,
        });


    }

    const handleChange = (e) => {
        setUpdatedPlayer({...updatedPlayer, [e.target.name]: e.target.value})
    }


    return (


        <PlayerForm handleChange={handleChange} handleSubmit={handleSubmit} player={updatedPlayer}/>


    );
}

export default EditPlayer;