import React from 'react';
import {Card} from "react-bootstrap";

function PlayerCard({player}) {

    return (
        <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>Team: {player.team}</Card.Text>
                <Card.Text>Position: {player.position}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PlayerCard;