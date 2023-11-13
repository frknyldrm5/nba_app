import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { NbaContext } from '../context/NbaContext';

const PlayerDetail = () => {
    const { playersFirestoreData } = useContext(NbaContext);
    const { id } = useParams();

    // Find the player with the specified ID
    const player = playersFirestoreData.find((p) => p.id === id);

    if (!player) {
        return <p>Player not found</p>;
    }

    return (
        <Container className="mt-3">
            <h2>Player Detail</h2>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={player.logo} alt={`${player.firstname} Logo`} />
                        <Card.Body>
                            <Card.Title>{`${player.firstname} ${player.lastname}`}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{player.team}</Card.Subtitle>
                            <Card.Text>{`Country: ${player.birth.country}`}</Card.Text>
                            <Card.Text>{`Birth Date: ${player.birth.date}`}</Card.Text>
                            {/* Add other Card components for additional information */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PlayerDetail;
