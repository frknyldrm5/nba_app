import { createContext, useEffect, useState } from 'react';
import { collection,doc,deleteDoc, onSnapshot  } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const NbaContext = createContext();

function NbaContextProvider({ children }) {
    const [teamsFirestoreData, setTeamsFirestoreData] = useState([]);
    const [playersFirestoreData, setPlayersFirestoreData] = useState([]);
    const [standingsFirestoreData, setStandingsFirestoreData] = useState([]);


    const teamsCollectionRef = collection(db, "teams");
    const playersCollectionRef = collection(db, "players");
    const standingsCollectionRef = collection(db, "standings");

    // By this hook we are getting collections from data.
    useEffect(() => {
        onSnapshot(teamsCollectionRef,(snapshot)=>{
            setTeamsFirestoreData(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    },);
    useEffect(() => {

        onSnapshot(playersCollectionRef,(snapshot)=>{
            setPlayersFirestoreData(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })

    }, );
    useEffect(() => {

        onSnapshot(standingsCollectionRef,(snapshot)=>{
            setStandingsFirestoreData(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
        })
    },);



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