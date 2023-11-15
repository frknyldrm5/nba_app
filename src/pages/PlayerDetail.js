import React, { useContext } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import { NbaContext } from '../context/NbaContext';
import {Button, Card} from "react-bootstrap";

function PlayerDetail() {
    const {deletePlayer } = useContext(NbaContext);
    const navigate = useNavigate();
    const location = useLocation();
    const player = location.state.player;

    console.log(player)

    function deleteHandler(id) {
        if (id) {
            deletePlayer(id);
            navigate('/');
        } else {
            console.error('Invalid team id:', id);
        }
    }

    function editHandler() {
        navigate(`/edit-player/${player.id}`, {
            state: {
                player: player,
            },
        });
    }

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            {player ? (
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Img
                        variant="top"
                        src={player.logo}
                        alt={`${player.nickname} Logo`}
                        style={{ maxWidth: '100%', maxHeight: '200px', margin: 'auto', objectFit: 'contain' }}
                    />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>{player.name}</Card.Title>
                        <Card.Text>
                            <p><strong>Firstname:</strong> {player?.firstname}</p>
                            <p><strong>Lastname:</strong> {player?.lastname}</p>
                            <p><strong>Affiliation:</strong> {player?.affiliation}</p>
                            <p><strong>Birth Date:</strong> {player?.birth.date}</p>
                            <p><strong>Country:</strong> {player?.birth.country}</p>
                        </Card.Text>
                        <div className="mb-3">
                            <Button variant="outline-danger" className="mx-2" onClick={() => deleteHandler(player.id)}>
                                Delete
                            </Button>
                            <Button variant="outline-primary" onClick={editHandler}>
                                Edit
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            ) : (
                <p>Player not found</p>
            )}
        </div>
    );
}

export default PlayerDetail;