import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NbaContext } from '../context/NbaContext';

function Main(props) {
    const { teamsFirestoreData, deleteTeam } = useContext(NbaContext);


    function deleteHandler(id){
        deleteTeam(id);

    }

    return (
        <div>
            <h1>Main</h1>
            <div className="card-container row">
                {Array.isArray(teamsFirestoreData) ? (
                    teamsFirestoreData.map((team) => (
                        <div key={team.id} className="col-md-4 mb-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={team.logo} alt={`${team.nickname} Logo`} />
                                <Card.Body>
                                    <Card.Title>{team.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{team.nickname}</Card.Subtitle>
                                    {/* You can add other Card components for additional information */}
                                    <Button onClick={() => {
                                        deleteHandler(team.id);
                                    }}>Delete Team</Button>
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