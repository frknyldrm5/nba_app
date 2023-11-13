import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/lebron.jpeg';

const fontStyle = {
    fontFamily: 'Arial, sans-serif', // You can replace this with the desired font
};

function Main() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="container h-100">
                <div className="row h-100 align-items-end">
                    <div className="col-12 col-md-6 text-light text-md-left mb-4" style={fontStyle}>
                        <h1 className="display-1 font-weight-bold m-5">NBA</h1>
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
