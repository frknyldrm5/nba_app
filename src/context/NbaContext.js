import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NbaContext = createContext();

const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams',
    headers: {
        'X-RapidAPI-Key': '6f780524fcmsh9a7426587dc54ddp1e6dccjsn214dec2e0e23',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
    },
};

function NbaContextProvider({ children }) {
    const [nbaData, setNbaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                setNbaData(response.data); // Set the fetched data to state
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <NbaContext.Provider value={nbaData}>
            {children}
        </NbaContext.Provider>
    );
}

export default NbaContextProvider;
