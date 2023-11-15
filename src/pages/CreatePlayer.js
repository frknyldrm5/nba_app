import {addDoc, collection} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import { useState} from "react";
import {db} from "../firebase/firebase";
import PlayerForm from "../components/PlayerForm";


function CreatePlayer() {
    const playersCollectionRef = collection(db, "players");
    const [player, setPlayer]  = useState({
        firstname: "",
        lastname: "",
        affiliation: "",
    });
    let navigate = useNavigate();



    const handleSubmit = async () => {
        navigate("/");

        await addDoc(playersCollectionRef, {
            firstname: player.firstname,
            lastname: player.lastname,
            affiliation: player.affiliation,
        });
    }




    const handleChange = (e) => {
        setPlayer({...player, [e.target.name]: e.target.value})
    }





    return (
        <PlayerForm handleChange={handleChange} handleSubmit={handleSubmit}/>

    );
}

export default CreatePlayer;