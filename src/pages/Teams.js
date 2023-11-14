import React, { useContext } from 'react';
import { NbaContext } from "../context/NbaContext";
import {useNavigate, useParams} from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import Loading from "../components/Loading";

function Teams() {
    const { teamsFirestoreData } = useContext(NbaContext);
    const navigate = useNavigate();
    // const params = useParams();
    // console.log(teamsFirestoreData)


    function detailButtonHandler(team) {
        navigate(`/team-detail/${team.id}`, {
            state: {
                team: team
            }
        });
    }

    return (
        <div className="container bg-info">
            <h1 className="text-center mb-4">Teams</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.isArray(teamsFirestoreData) ? (
                    teamsFirestoreData.map((team) => (
                        <Col key={team.id} className="mb-4">
                            <Card style={{ width: '20rem', height: '30rem' }} className="border-3">
                                <Card.Img variant="top" src={team.logo} alt={`${team.nickname} Logo`} className="img-fluid" style={{ objectFit: 'cover', height: '65%'}} />
                                <Card.Body>
                                    <Card.Title>{team.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{team.nickname}</Card.Subtitle>
                                    <Button variant="outline-primary" onClick={() => detailButtonHandler(team)}>
                                        Continue Reading
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Loading/>
                )}
            </Row>
        </div>
    );
}

export default Teams;
