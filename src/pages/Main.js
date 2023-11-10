import React, { useContext } from 'react';
import {NbaContext} from "../context/NbaContext";


function Main(props) {
    // Use the useContext hook to access NBA data from the context
    const nbaData = useContext(NbaContext);
    console.log('NBA Data:', nbaData); // Log the NBA data to the console

    return (
        <div>
            <h1>Main</h1>
            {nbaData.map((team) => (
                <div key={team.id}>
                    <h2>{team.full_name}</h2>
                    {/* Display other relevant information about the team */}
                </div>
            ))}
        </div>
    );
}

export default Main;
