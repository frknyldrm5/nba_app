import { Card } from 'react-bootstrap';
import React from "react";
import {Link} from "react-router-dom";
import '../App.css';

const PlayerCard = ({ player }) => {


    return (
        <Card style={{ width: '18rem' }}>
            {/* Assuming playerDetails has properties like name, team, position, etc. */}
            <Card.Body>
                <Card.Img variant="top" src={player.logo} alt={`${player.firstName} Logo`} />
                <Card.Title>{player.firstname} {player.lastname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{player.team}</Card.Subtitle>
                <Card.Text>{`Country: ${player.birth.country}`}</Card.Text>
                <Card.Text>{`Birth Date: ${player.birth.date}`}</Card.Text>
                <Link to={`/player-detail/${player.id}`} className="btn btn-primary">View Details</Link>
            </Card.Body>
        </Card>
    );
};

export default PlayerCard;