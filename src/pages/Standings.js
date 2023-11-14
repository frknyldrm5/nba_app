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
                <tr style={{ background: '#f2f2f2' }}>
                    <th style={{ padding: '10px', textAlign: 'left' }}>Team</th>
                    <th style={{ padding: '10px', textAlign: 'center' }}>Season</th>
                    <th style={{ padding: '10px', textAlign: 'center' }}>Streak</th>
                </tr>
                </thead>
                <tbody>
                {standingsFirestoreData.map((standing) => (
                    <tr key={standing.id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td style={{ padding: '10px', textAlign: 'left' }}>{standing.team.name}</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>{standing.season}</td>
                        <td style={{ padding: '10px', textAlign: 'center' }}>{standing.streak}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Standings;
