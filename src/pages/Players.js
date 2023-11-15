import React, { useContext, useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import PlayerCard from '../components/PlayerCard';
import { NbaContext } from '../context/NbaContext';
import Loading from "../components/Loading";


const Players = () => {
    // Use the useContext hook to access NBA player data from the context
    const { playersFirestoreData } = useContext(NbaContext);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter players based on the search term
    const filteredPlayers = playersFirestoreData.filter((player) =>
        `${player.firstname} ${player.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-3">
            <h2>Players</h2>

            {/* Search bar */}
            <Form className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Search by player name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>

            <Row>
                {Array.isArray(filteredPlayers) ? (
                    filteredPlayers.map((player) => (
                        <Col key={player.id}>
                            <PlayerCard player={player} />
                        </Col>
                    ))
                ) : (
                    <Loading />
                )}
            </Row>
        </Container>
    );
};

export default Players;
