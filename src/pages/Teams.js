import React, { useContext } from 'react';
import { NbaContext } from "../context/NbaContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import { teams } from "../data";

function Teams() {
    const { teamsFirestoreData } = useContext(NbaContext);
    const navigate = useNavigate();
    const params = useParams();
    console.log(teamsFirestoreData)


    function detailButtonHandler(team) {
        navigate(`/team-detail/${team.id}`,{
            state:{
                team:team
            }
        })
    }


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
                                    <Button variant="outline-primary" onClick={()=> {
                                        detailButtonHandler(team)
                                    }}>Continue Reading</Button>
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