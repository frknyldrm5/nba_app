import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';

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
    const [teamsFirestoreData, setTeamsFirestoreData] = useState([]);
    const [playersFirestoreData, setPlayersFirestoreData] = useState([]);

    useEffect(() => {
        const fetchRapidAPIData = async () => {
            try {
                // Fetch teams from RapidAPI
                const teamsResponse = await axios.request(teamsOptions);
                const fetchedTeamsData = teamsResponse.data.response;

                // Fetch players from RapidAPI
                const playersResponse = await axios.request(playersOptions);
                const fetchedPlayersData = playersResponse.data.response;

                // Set state for RapidAPI data
                setTeamsData(fetchedTeamsData);
                setPlayersData(fetchedPlayersData);
            } catch (error) {
                console.error('Error fetching RapidAPI data:', error);
            }
        };

        const fetchFirebaseData = async () => {
            try {
                // Fetch teams from Firestore
                const teamsFirestoreSnapshot = await getDocs(collection(db, 'teams'));
                const fetchedTeamsFirestoreData = teamsFirestoreSnapshot.docs.map((doc) => doc.data());

                // Fetch players from Firestore
                const playersFirestoreSnapshot = await getDocs(collection(db, 'players'));
                const fetchedPlayersFirestoreData = playersFirestoreSnapshot.docs.map((doc) => doc.data());

                // Set state for Firebase data
                setTeamsFirestoreData(fetchedTeamsFirestoreData);
                setPlayersFirestoreData(fetchedPlayersFirestoreData);
            } catch (error) {
                console.error('Error fetching Firebase data:', error);
            }
        };

        // Fetch data from RapidAPI
        fetchRapidAPIData();

        // Fetch data from Firebase
        fetchFirebaseData();
    }, []);

    return (
        <NbaContext.Provider value={{ teamsData, playersData, teamsFirestoreData, playersFirestoreData }}>
            {children}
        </NbaContext.Provider>
    );
}

export default NbaContextProvider;