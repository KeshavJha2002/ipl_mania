const pool = require('../models/db')

const getBowlersDetails = async(req, res) => {
    try {
        const bowlerData = await pool.query('select bowler,sum(is_wicket_delivery) as wicket_count from ball_info group by bowler order by wicket_count desc limit 5')
        res.status(200).json(bowlerData.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: "Error in fetching the request" })
    }
}

const getBattingDetails = async(req, res) => {
    try {
        const battingData = await pool.query('select batter,sum(batsman_run) as tot_run from ball_info group by batter order by tot_run desc limit 5')
        res.status(200).json(battingData.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: "Error in fetching the request" })
    }
}

const getBoundaryDetails = async(req, res) => {
    try {
        const boundaryData = await pool.query('with cte as (select * from ball_info where non_boundary = 0 and (batsman_run = 6 or batsman_run = 4)) select batter,count(batsman_run) as no_of_boundary from cte e join matches_played d on d.match_id = e.match_id group by batter order by no_of_boundary desc limit 5')
        res.status(200).json(boundaryData.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: "Error in fetching the request" })
    }
}

module.exports = { getBowlersDetails, getBattingDetails, getBoundaryDetails }