import { Card } from 'react-bootstrap';


const PlayerCard = ({ player }) => {
    console.log(player)


    return (
        <Card style={{ width: '18rem' }}>
            {/* Assuming playerDetails has properties like name, team, position, etc. */}
            <Card.Body>
                <Card.Title>{player.firstname} {player.lastname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{player.team}</Card.Subtitle>
                <Card.Text>{`Country: ${player.birth.country}`}</Card.Text>
                <Card.Text>{`Birth Date: ${player.birth.date}`}</Card.Text>
                {/* Add other Card components for additional information */}
            </Card.Body>
        </Card>
    );
};

export default PlayerCard;