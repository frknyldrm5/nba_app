import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NbaContext } from '../context/NbaContext';
import { Card, Button } from 'react-bootstrap';

function TeamDetail() {
    const { deleteTeam } = useContext(NbaContext);
    const navigate = useNavigate();
    const location = useLocation();
    const team = location.state && location.state.team;
    const allStar = team.allStar === true ? 'Yes' : 'No';
    const conference = team.leagues.sacramento  ?  team.leagues.sacramento.conference : 'No conference' ;

    function deleteHandler(id) {
        if (id) {
            deleteTeam(id);
            navigate('/');
        } else {
            console.error('Invalid team id:', id);
        }
    }

    function editHandler() {
        navigate(`/edit-team/${team.id}`, {
            state: {
                team: team,
            },
        });
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            {team ? (
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Img
                        variant="top"
                        src={team.logo}
                        alt={`${team.nickname} Logo`}
                        style={{ maxWidth: '100%', maxHeight: '200px', margin: 'auto', objectFit: 'contain' }}
                    />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>{team.name}</Card.Title>
                        <Card.Text>
                            <p><strong>Nickname:</strong> {team.nickname}</p>
                            <p><strong>City:</strong> {team.city}</p>
                            <p><strong>Conference:</strong> {conference}</p>
                            <p><strong>Code:</strong> {team.code}</p>
                            <p><strong>Has AllStar:</strong> {allStar}</p>
                        </Card.Text>
                        <div className="mb-3">
                            <Button variant="outline-danger" className="mx-2" onClick={() => deleteHandler(team.id)}>
                                Delete
                            </Button>
                            <Button variant="outline-primary" onClick={editHandler}>
                                Edit
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ) : (
                <p>Team not found</p>
            )}
        </div>
    );
}

export default TeamDetail;
