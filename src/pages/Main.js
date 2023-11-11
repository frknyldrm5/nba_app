import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { NbaContext } from '../context/NbaContext';

function Main(props) {
    // Use the useContext hook to access NBA data from the context
    const { teamsData } = useContext(NbaContext);
    console.log('Teams Data:', teamsData); // Log the NBA data to the console

    return (
        <div>
            <h1>Main</h1>
            <div className="card-container row">
                {Array.isArray(teamsData) ? (
                    teamsData.map((team) => (
                        <div key={team.id} className="col-md-4 mb-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={team.logo} alt={`${team.nickname} Logo`} />
                                <Card.Body>
                                    <Card.Title>{team.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{team.nickname}</Card.Subtitle>
                                    {/* You can add other Card components for additional information */}
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Main;