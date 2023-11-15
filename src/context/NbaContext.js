import { createContext, useEffect, useState } from 'react';
import { collection,doc,deleteDoc, onSnapshot  } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const NbaContext = createContext();

function NbaContextProvider({ children }) {
    const [teamsFirestoreData, setTeamsFirestoreData] = useState([]);
    const [playersFirestoreData, setPlayersFirestoreData] = useState([]);
    const [standingsFirestoreData, setStandingsFirestoreData] = useState([]);

    // useEffect(() => {
    //     const fetchFirebaseData = async () => {
    //         try {
    //             // Fetch teams from Firestore
    //             const teamsFirestoreSnapshot = await getDocs(collection(db, 'teams'));
    //             const fetchedTeamsFirestoreData = teamsFirestoreSnapshot.docs.map((doc) => doc.data());
    //
    //             // Fetch players from Firestore
    //             const playersFirestoreSnapshot = await getDocs(collection(db, 'players'));
    //             const fetchedPlayersFirestoreData = playersFirestoreSnapshot.docs.map((doc) => doc.data());
    //
    //             // Fetch standings from Firestore
    //             const standingsFirestoreSnapshot = await getDocs(collection(db, 'standings'));
    //             const fetchedStandingsFirestoreData = standingsFirestoreSnapshot.docs.map((doc) => doc.data());
    //
    //             // Set state for Firebase data
    //             setTeamsFirestoreData(fetchedTeamsFirestoreData);
    //             setPlayersFirestoreData(fetchedPlayersFirestoreData);
    //             setStandingsFirestoreData(fetchedStandingsFirestoreData);
    //         } catch (error) {
    //             console.error('Error fetching Firebase data:', error);
    //         }
    //     };
    //
    //     // Fetch data from Firebase
    //     fetchFirebaseData();
    // }, []);



    const teamsCollectionRef = collection(db, "teams");
    const playersCollectionRef = collection(db, "players");
    const standingsCollectionRef = collection(db, "standings");

    // By this hook we are getting collection of posts from data.
    useEffect(() => {
        onSnapshot(teamsCollectionRef,(snapshot)=>{
            setTeamsFirestoreData(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    },[] );
    useEffect(() => {

        onSnapshot(playersCollectionRef,(snapshot)=>{
            setPlayersFirestoreData(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })

    },[] );
    useEffect(() => {

        onSnapshot(standingsCollectionRef,(snapshot)=>{
            setStandingsFirestoreData(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    },[] );



    const deleteTeam = async (id) => {
        const teamDoc = doc(db, "teams", id);
        await deleteDoc(teamDoc);
    };

    const deletePlayer = async (id) => {
        const playerDoc = doc(db, "players", id);
        await deleteDoc(playerDoc);
    };


    return (
        <NbaContext.Provider value={{ teamsFirestoreData, playersFirestoreData, standingsFirestoreData,deleteTeam,deletePlayer }}>
            {children}
        </NbaContext.Provider>
    );
}

export default NbaContextProvider;