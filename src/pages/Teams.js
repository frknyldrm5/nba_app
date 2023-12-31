import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Card, Col, Row, Form, FormControl, Button} from 'react-bootstrap';
import { NbaContext } from '../context/NbaContext';
import Loading from '../components/Loading';

function Teams() {
    const { teamsFirestoreData } = useContext(NbaContext);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTeams = teamsFirestoreData.filter((team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function detailButtonHandler(team) {
        navigate(`/team-detail/${team.id}`, {
            state: {
                team: team,
            },
        });
    }

    return (
        <div className="container ">
            <h1 className="text-center mb-4">Teams</h1>

            {/* Search bar */}
            <Form className="mb-3">
                <FormControl
                    type="text"
                    placeholder="Search by team name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>

            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.isArray(filteredTeams) ? (
                    filteredTeams.map((team) => (
                        <Col key={team.id} className="mb-4">
                            <Card style={{ width: '20rem', height: '30rem' }} className="border-3">
                                <Card.Img
                                    variant="top"
                                    src={team.logo}
                                    alt={`${team.nickname} Logo`}
                                    className="img-fluid"
                                    style={{ objectFit: 'cover', height: '65%' }}
                                />
                                <Card.Body>
                                    <Card.Title>{team.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{team.nickname}</Card.Subtitle>
                                    <Button variant="outline-primary" onClick={() => detailButtonHandler(team)}>
                                        More Info
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Loading />
                )}
            </Row>
        </div>
    );
}

export default Teams;
