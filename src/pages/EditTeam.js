import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase/firebase";
import TeamForm from "../components/TeamForm";


function EditPost() {

    const location = useLocation();
    const navigate = useNavigate();
    const team = location.state.team;
    const [updatedTeam, setUpdatedTeam] = useState(team);

    const {city,name,logo}=updatedTeam


    const handleSubmit = async () => {
        const teamDoc = doc(db, "teams", team.id);
        navigate("/");
        await updateDoc(teamDoc, {
            city: city,
            name: name,
            logo: logo,
        });


    }

    const handleChange = (e) => {
        setUpdatedTeam({...updatedTeam, [e.target.name]: e.target.value})
    }


    return (


        <TeamForm handleChange={handleChange} handleSubmit={handleSubmit} team={updatedTeam}/>


    );
}

export default EditPost;