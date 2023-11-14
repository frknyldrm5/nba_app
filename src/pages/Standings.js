import React, { useContext } from 'react';
import {NbaContext} from "../context/NbaContext";

function Standings(props) {
    // Access the standings data from the context
    const { standingsFirestoreData } = useContext(NbaContext);
    console.log('Standings Data:', standingsFirestoreData); // Log the standings data to the console

    // Render the standings data
    return (
        <div>
            <h2>Standings</h2>

            <table>
                <thead>
                <tr>
                    <th>Team</th>
                    <th>Wins</th>
                    <th>Losses</th>
                </tr>
                </thead>
                <tbody>
                {standingsFirestoreData.map((standing) => (
                    <tr key={standing.id}>
                        <td>{standing.team.name}</td>
                        <td>{standing.season}</td>
                        <td>{standing.streak}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Standings;