import React, { useContext, useState } from 'react';
import './HackerLogin.css';
import AuthForm from "../../components/AuthForm"; // Import your AuthForm component
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HackerRegister = () => {

    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);

    const [info,setInfo]=useState({
        firstName:" ",
        lastName:" ",
        email:" ",
        password:" ",
    });

    const {firstName, lastName, email, password}=info;

    const handleSubmit = (e)=>{
        e.preventDefault();
        const displayName=`${firstName} ${lastName}`
        createUser(email,password,navigate,displayName)

    }
    const handleChange = (e)=>{
        setInfo({...info,[e.target.name]:e.target.value})
    }

    return (
        <section className="login-section">
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            <div className="signin">
                <div className="content">
                    <h2>Sign In</h2>
                    {/* Use AuthForm with custom styling */}
                    <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} info={info} />

                </div>
            </div>
        </section>
    );
};

export default HackerRegister;