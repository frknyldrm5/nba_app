import React from 'react';
import {Card} from "react-bootstrap";
import players from "../pages/Players";

function PlayerCard(props) {
    return (
        <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
                <Card.Title>{players.name}</Card.Title>
                <Card.Text>Team: {players.team}</Card.Text>
                <Card.Text>Position: {players.position}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PlayerCard;