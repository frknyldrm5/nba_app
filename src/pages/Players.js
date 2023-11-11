import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PlayerCard from '../components/PlayerCard';
import { NbaContext } from '../context/NbaContext';

const Players = () => {
    // Use the useContext hook to access NBA player data from the context
    const { playersFirestoreData } = useContext(NbaContext);
    console.log('Players Data:', playersFirestoreData); // Log the player data to the console

    return (
        <Container className="mt-3">
            <h2>Players</h2>
            <Row>
                {Array.isArray(playersFirestoreData) ? (
                    playersFirestoreData.map((player) => (
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