import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { NbaContext } from '../context/NbaContext';
import {Link, useNavigate, useParams} from "react-router-dom";
import Loading from "../components/Loading";
import 'bootstrap/dist/css/bootstrap.min.css';


function Main(props) {
    const { teamsFirestoreData } = useContext(NbaContext);

    const navigate = useNavigate();
    const params = useParams();


    return (
        <div>
            <h1>Main</h1>
            <div className="card-container row">
                {Array.isArray(teamsFirestoreData) ? (
                    teamsFirestoreData.map((team) => (
                        <div key={team.id} className="col-md-4 mb-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={team.logo} alt={`${team.nickname} Logo`} />
                                <Card.Body>
                                    <Card.Title>{team.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{team.nickname}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{team.city}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{team.code}</Card.Subtitle>
                                    <Link to={`/team-detail/${team.id}`} className="btn btn-primary">View Details</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <Loading/>
                )}
            </div>
        </div>
    );
}

export default Main;