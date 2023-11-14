import React, { useContext } from 'react';
import { NbaContext } from '../context/NbaContext';

function Standings(props) {
    // Access the standings data from the context
    const { standingsFirestoreData } = useContext(NbaContext);
    console.log('Standings Data:', standingsFirestoreData); // Log the standings data to the console

    // Render the standings data
    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Standings</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                <tr style={{ background: 'gray' }}>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Team</th>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Logo</th>
                    <th style={{ padding: '10px', textAlign: 'center' }}>Season</th>
                    <th style={{ padding: '10px', textAlign: 'center' }}>Streak</th>
                    <th style={{ padding: '10px', textAlign: 'center' }}>Wins</th>
                    <th style={{ padding: '10px', textAlign: 'center' }}>Loses</th>
                </tr>
                </thead>
                <tbody>
                {standingsFirestoreData.map((standing) => (
                    <tr key={standing.id} style={{ borderBottom: '1px solid gray' }}>
                        <td style={{ padding: '10px', textAlign: 'left' }}>{standing.team.name}</td>
                        <td style={{ padding: '10px', textAlign: 'left' }}>
                            <img src={standing.team.logo} alt={`${standing.team.name} Logo`} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>{standing.season}</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>{standing.streak}</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>{standing.conference.win}</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>{standing.conference.loss}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Standings;
