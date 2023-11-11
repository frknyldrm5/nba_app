import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NbaContext = createContext();

const teamsOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams',
    headers: {
        'X-RapidAPI-Key': '6f780524fcmsh9a7426587dc54ddp1e6dccjsn214dec2e0e23',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
    },
};

const playersOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/players',
    params: {
        team: '1', // Replace with the desired team ID
        season: '2021',
    },
    headers: {
        'X-RapidAPI-Key': '6f780524fcmsh9a7426587dc54ddp1e6dccjsn214dec2e0e23',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
    },
};

function NbaContextProvider({ children }) {
    const [teamsData, setTeamsData] = useState([]);
    const [playersData, setPlayersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch teams
                const teamsResponse = await axios.request(teamsOptions);
                const fetchedTeamsData = teamsResponse.data.response;
                setTeamsData(fetchedTeamsData);

                // Fetch players for a specific team (replace '1' with the desired team ID)
                const playersResponse = await axios.request(playersOptions);
                const fetchedPlayersData = playersResponse.data.response;
                setPlayersData(fetchedPlayersData);

                console.log('Teams:', fetchedTeamsData);
                console.log('Players:', fetchedPlayersData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <NbaContext.Provider value={{ teamsData, playersData }}>
            {children}
        </NbaContext.Provider>
    );
}

export default NbaContextProvider;