const pool = require('../models/db')

const get_battle_result = async(req, res) => {
    try {
        const team1 = req.params.team1.replace('%20', ' ');
        const team2 = req.params.team2.replace('%20', ' ');
        const data = await pool.query('select season, venue, winning_team, player_of_match from ipl_match where (team1=$1 and team2=$2) OR (team2=$1 and team1=$2) order by season', [team1, team2]);
        res.status(200).json(data.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: "Error in fetching the request" })
    }
}

module.exports = { get_battle_result };