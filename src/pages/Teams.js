import React, { useContext } from 'react';
import { NbaContext } from "../context/NbaContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { teams } from "../data";

function Teams() {
    const { teamsFirestoreData } = useContext(NbaContext);
    const navigate = useNavigate();
    const params = useParams();
    console.log(teamsFirestoreData)

    return (
        <div className="container bg-info">
            <h1>Teams</h1>
            <div className="card-container row justify-content-center ">
                {Array.isArray(teamsFirestoreData) ? (
                    teamsFirestoreData.map((team) => (
                        <div key={team.id} className="col-md-4 bg-danger text-center px-2" >
                            <Card style={{ width: '18rem' }} className="border-3">
                                <Card.Img variant="top" src={team.logo} alt={`${team.nickname} Logo`} />
                                <Card.Body>
                                    <Card.Title>{team.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{team.nickname}</Card.Subtitle>
                                    <Link to={`/team-detail/${team.id}`} className="btn btn-primary">View Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Teams;