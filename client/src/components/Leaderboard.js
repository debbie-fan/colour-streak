function Leaderboard() {
    return (
        <div className="leaderboard-page">
            <h1>LEADERBOARD</h1>
            <table>
                <tr>
                    <th className="rank-col">RANK</th>  <th className="username-col">USERNAME</th>  <th className="highscore-col">HIGHSCORE</th>
                </tr>
                <tr>
                    <td className="rank-col">1</td>     <td className="username-col">user1</td>     <td className="highscore-col">3</td>
                </tr>
            </table>
        </div>
    )
}

export default Leaderboard;