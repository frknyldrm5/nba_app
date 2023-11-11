import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PlayerCard from '../components/PlayerCard';
import { NbaContext } from '../context/NbaContext';

const Players = () => {
    // Use the useContext hook to access NBA player data from the context
    const { playersData } = useContext(NbaContext);
    console.log('Players Data:', playersData); // Log the player data to the console

    return (
        <Container className="mt-3">
            <h2>Players</h2>
            <Row>
                {Array.isArray(playersData) ? (
                    playersData.map((player) => (
                        <Col key={player.id}>
                            <PlayerCard player={player} />
                        </Col>
                    ))
                ) : (
                    <p>Loading players...</p>
                )}
            </Row>
        </Container>
    );
};

export default Players;