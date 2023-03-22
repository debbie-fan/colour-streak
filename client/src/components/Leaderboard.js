import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";

function Leaderboard() {

    // Link to server
    const { getCurrentLeaderboard } = useContext(AuthContext);
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLeaderboardData(await getCurrentLeaderboard());
        }
        fetchData();
    }, [])

    console.log(leaderboardData);

    return (
        <div className="leaderboard-page">
            <h1>LEADERBOARD</h1>
            <table>
                <tbody>
                    <tr>
                        <th className="rank-col">RANK</th><th className="username-col">USERNAME</th><th className="highscore-col">HIGHSCORE</th>
                    </tr>
                    {leaderboardData.map((entry, index) => (
                        <tr key={index}>
                            <td className="rank-col">{index + 1}</td>
                            <td className="username-col">{entry.username}</td>
                            <td className="highscore-col">{entry.highscore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard;