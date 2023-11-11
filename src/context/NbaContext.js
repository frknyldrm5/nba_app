import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const NbaContext = createContext();

const teamsOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams',
    headers: {
        'X-RapidAPI-Key': '7072b9aca6mshb887b395dcec2a5p130bc1jsnacc43790d096',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
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
        'X-RapidAPI-Key': '7072b9aca6mshb887b395dcec2a5p130bc1jsnacc43790d096',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    },
};

const standingsOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/standings',
    params: {
        league: 'standard',
        season: '2021'
    },
    headers: {
        'X-RapidAPI-Key': '7072b9aca6mshb887b395dcec2a5p130bc1jsnacc43790d096',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    },

};



function NbaContextProvider({ children }) {
    const [teamsData, setTeamsData] = useState([]);
    const [playersData, setPlayersData] = useState([]);
    const [standingsData, setStandingsData] = useState([]);
    const [teamsFirestoreData, setTeamsFirestoreData] = useState([]);
    const [playersFirestoreData, setPlayersFirestoreData] = useState([]);
    const [standingsFirestoreData, setStandingsFirestoreData] = useState([]);

    useEffect(() => {
        const fetchRapidAPIData = async () => {
            try {
                // Fetch teams from RapidAPI
                const teamsResponse = await axios.request(teamsOptions);
                const fetchedTeamsData = teamsResponse.data.response;

                // Fetch players from RapidAPI
                const playersResponse = await axios.request(playersOptions);
                const fetchedPlayersData = playersResponse.data.response;


                // Fetch standings from RapidAPI
                const standingsResponse = await axios.request(standingsOptions);
                const fetchedStandingsData = standingsResponse.data.response;

                // Set state for RapidAPI data
                setTeamsData(fetchedTeamsData);
                setPlayersData(fetchedPlayersData);
                setStandingsData(fetchedStandingsData);
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

                // Fetch standings from Firestore
                const standingsFirestoreSnapshot = await getDocs(collection(db, 'standings'));
                const fetchedStandingsFirestoreData = standingsFirestoreSnapshot.docs.map((doc) => doc.data());

                // Set state for Firebase data
                setTeamsFirestoreData(fetchedTeamsFirestoreData);
                setPlayersFirestoreData(fetchedPlayersFirestoreData);
                setStandingsFirestoreData(fetchedStandingsFirestoreData);
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
        <NbaContext.Provider value={{ teamsFirestoreData, playersFirestoreData,standingsFirestoreData }}>
            {children}
        </NbaContext.Provider>
    );
}

export default NbaContextProvider;