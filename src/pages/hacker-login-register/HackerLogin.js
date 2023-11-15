import React, { useContext, useState } from 'react';
import './HackerLogin.css';
import AuthForm from "../../components/AuthForm"; // Import your AuthForm component
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HackerLogin = () => {
    const { signIn } = useContext(AuthContext);
    const [info, setInfo] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(info.email, info.password, navigate);
    }

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    return (
        <section className="login-section">
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            <div className="signin">
                <div className="content">
                    <h2>Sign In</h2>
                    <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} info={info} />
                </div>
            </div>
        </section>
    );
};

export default HackerLogin;
