import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/lebron.jpeg';
import Loading from "../components/Loading";

const fontStyle = {
    fontFamily: 'Arial, sans-serif',
};

const h1Style = {
    fontSize: '4rem', // Adjust the font size
    fontWeight: 'bold', // Set the font weight to bold
    color: '#ffffff', // Set the text color to white
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
};

function Main() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="container h-100">
                <div className="row h-100 align-items-end">
                    <div className="col-12 col-md-6 text-light text-md-left mb-4" style={fontStyle}>
                        <h1 style={h1Style} className="m-5">
                            NBA
                        </h1>
                        <p className="lead m-2">Stay informed about the latest developments of the NBA.</p>
                        <Link to="/teams" className="btn btn-dark btn-lg">
                            SEE NOW
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
