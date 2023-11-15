import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PlayerCard from '../components/PlayerCard';
import { NbaContext } from '../context/NbaContext';
import {useNavigate, useParams} from "react-router-dom";

const Players = () => {
    // Use the useContext hook to access NBA player data from the context
    const { playersFirestoreData } = useContext(NbaContext);
    const navigate = useNavigate();
    const params = useParams();
    console.log('Players Data:', playersFirestoreData); // Log the player data to the console


    function detailButtonHandler(player) {
        navigate(`/player-detail/${player.id}`,{
            state:{
                player:player
            }
        })
    }

    return (
        <Container className="mt-3">
            <h2>Players</h2>
            <Row>
                {Array.isArray(playersFirestoreData) ? (
                    playersFirestoreData.map((player) => (
                        <Col key={player.id}>
                            <PlayerCard player={player} detailButtonHandler={detailButtonHandler}/>
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