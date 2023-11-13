import { createContext, useEffect, useState } from 'react';
import { collection, getDocs,doc,deleteDoc, getDoc  } from 'firebase/firestore';
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

    async function deleteTeam(teamId) {
        console.log('Deleting team with ID:', teamId);

        // Convert teamId to string if it's a number
        const stringTeamId = String(teamId);

        const teamRef = doc(db, 'teams', stringTeamId);

        try {
            // Log the existing team data before deletion
            const teamData = await getDoc(teamRef);
            console.log('Existing Team Data:', teamData.data());

            await deleteDoc(teamRef);
            console.log('Team deleted successfully!');
        } catch (error) {
            console.error('Error deleting team:', error);
        }
    }


    return (
        <NbaContext.Provider value={{ teamsFirestoreData, playersFirestoreData, standingsFirestoreData,deleteTeam }}>
            {children}
        </NbaContext.Provider>
    );
}

export default NbaContextProvider;