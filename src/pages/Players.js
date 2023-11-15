import React, { useContext, useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import PlayerCard from '../components/PlayerCard';
import { NbaContext } from '../context/NbaContext';
import Loading from "../components/Loading";
import { useNavigate } from 'react-router-dom';
import ProfileCard from "../components/ProfileCard/ProfileCard";

const Players = () => {
    const { playersFirestoreData } = useContext(NbaContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Filter players based on the search term
    const filteredPlayers = playersFirestoreData.filter((player) =>
        `${player.firstname} ${player.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handler to navigate to player detail page
    const detailButtonHandler = (player) => {
        navigate(`/player-detail/${player.id}`, {
            state: {
                player: player
            }
        });
    }

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
                            <ProfileCard player={player} detailButtonHandler={() => detailButtonHandler(player)} />
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
