import React from 'react';
import {Card} from "react-bootstrap";
import classes from "./ProfileCard.module.css";

const ProfileCard = ({player,detailButtonHandler}) => {
    const currentYear = new Date().getFullYear();
    const playerAge = currentYear - parseInt(player.birth.date.split("-")[0], 10);

    return (
        <>

            <Card
                className={classes.ProfileCard + " mx-auto"}
                onClick={()=> {
                    detailButtonHandler(player)
                }}
            >
                <Card.Img className={classes.ProfileCardBackgroundImage} alt="Background Image" variant="top" src="/images/nba.svg" />
                <Card.Img className={classes.ProfileCardImage} alt="User Image" src={player.logo}/>
                <Card.Body className={"text-center " + classes.ProfileCardBody}>
                    <Card.Text className={classes.TextBold + " mb-0"}>
                        {player.firstname} {player.lastname} <span className={classes.TextMuted + " pl-1"}>{playerAge}</span>
                    </Card.Text>
                    <Card.Text className={classes.TextMuted}>
                        {player.birth.country}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={classes.CardFooter}>
                </Card.Footer>
            </Card>
        </>



    );
};

export default ProfileCard;