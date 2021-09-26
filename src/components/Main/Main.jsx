import React, { useEffect, useState } from 'react'
import Players from '../Players/Players';

const Main = () => {
    const [data, setData] = useState([]);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("./api/players.JSON")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
            setPlayers(data);
        })
    }, []);

    const filterPlayer = (categTeam) => {
        const filterTeam = data.filter(player => player.team === categTeam);
        setPlayers(filterTeam);
    }

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <h1 className="text-4xl my-5 font-extrabold text-center">Click to see your Favorite <span className="text-blue-400">Ipl </span>  Team </h1>
                </header>
                <main className="my-14 px-20 grid place-items-center">
                    <div className="flex items-center gap-4 mb-10">
                        <button
                            className="px-4 py-3 bg-blue-500 rounded text-white"
                            onClick={() => filterPlayer("Rajasthan Royals")}>
                            Rajasthan Royals </button>
                        <button
                            className="px-4 py-3 bg-blue-500 rounded text-white"
                            onClick={() => filterPlayer("Chennai Super Kings")}>
                            Chennai Super Kings </button>
                        <button
                            className="px-4 py-3 bg-blue-500 rounded text-white"
                            onClick={() => filterPlayer("Kolkata Knight Riders")}>
                            Kolkata Knight Riders </button>
                        <button
                            className="px-4 py-3 bg-blue-500 rounded text-white"
                            onClick={() => filterPlayer("Punjab Kings")}>
                            Punjab Kings </button>
                        <button
                            className="px-4 py-3 bg-blue-500 rounded text-white"
                            onClick={() => filterPlayer("Royal Challengers Bangalore")}>
                            Royal Challengers Bangalore </button>
                    </div>
                    <div className="container mx-auto grid grid-cols-3 gap-5">

                        {
                            players.map(player => <Players player={player} key={player.id} />)
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Main
