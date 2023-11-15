import {addDoc, collection} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import { useState} from "react";
import TeamForm from "../components/TeamForm";
import {db} from "../firebase/firebase";


function CreateTeam() {
    const teamCollectionRef = collection(db, "teams");
    const [team, setTeam]  = useState({
        city: "",
        name: "",
        logo: "",
    });
    let navigate = useNavigate();



    const handleSubmit = async () => {
        navigate("/");

        await addDoc(teamCollectionRef, {
            city: team.city,
            name: team.name,
            logo: team.logo,
        });
    }




    const handleChange = (e) => {
        setTeam({...team, [e.target.name]: e.target.value})
    }





    return (
        <TeamForm handleChange={handleChange} handleSubmit={handleSubmit}/>

    );
}

export default CreateTeam;