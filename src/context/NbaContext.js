import { createContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const NbaContext = createContext();

function NbaContextProvider({ children }) {
    const [teamsFirestoreData, setTeamsFirestoreData] = useState([]);
    const [playersFirestoreData, setPlayersFirestoreData] = useState([]);
    const [standingsFirestoreData, setStandingsFirestoreData] = useState([]);

    useEffect(() => {
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

        // Fetch data from Firebase
        fetchFirebaseData();
    }, []);

    return (
        <NbaContext.Provider value={{ teamsFirestoreData, playersFirestoreData, standingsFirestoreData }}>
            {children}
        </NbaContext.Provider>
    );
}

export default NbaContextProvider;