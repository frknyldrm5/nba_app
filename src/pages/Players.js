import React from 'react';
import PlayerCard from "../components/PlayerCard";
import {Col, Container, Row} from "react-bootstrap";

const Players = () => {
    // Dummy data for players
    const playersData = [
        { id: 1, name: 'Player 1', team: 'Team A', position: 'Forward' },
        { id: 2, name: 'Player 2', team: 'Team B', position: 'Midfielder' },
        { id: 3, name: 'Player 3', team: 'Team C', position: 'Defender' },
        { id: 4, name: 'Player 4', team: 'Team D', position: 'Forward' },
        { id: 5, name: 'Player 5', team: 'Team E', position: 'Midfielder' },
        { id: 6, name: 'Player 6', team: 'Team F', position: 'Defender' },
        // Add more players as needed
    ];

    return (
        <Container className="mt-3">
            <h2>Players</h2>
            <Row>
                {playersData.map((player) => (
                    <Col key={player.id}>
                        <PlayerCard player={player} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Players;