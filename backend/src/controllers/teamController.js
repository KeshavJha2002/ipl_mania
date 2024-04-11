const pool = require('../models/db')

const getBowlersDetails = async(req,res)=>{
    try{
       const teamname = req.params.teamname
       const bowlerData = await pool.query('select b.bowler,sum(b.is_wicket_delivery) as wicket_count from ball_info b join matches_played e on b.match_id = e.match_id and ((e.team1 = $1 and e.team1 <> b.batting_team) or (e.team2 = $1 and e.team2 <> b.batting_team)) group by b.bowler order by wicket_count desc limit 5',[teamname])
       res.status(200).json(bowlerData.rows)
    }
    catch(err)
    {
      console.log(err.message)
      res.status(500).json({message : "Error in fetching the request"})
    }
}

const getBattingDetails = async(req,res)=>{
   try{
      const teamname = req.params.teamname
      const battingData = await pool.query('select b.batter,sum(b.batsman_run) as tot_run from ball_info b join matches_played e on b.match_id = e.match_id and ((e.team1 = $1 and e.team1 = b.batting_team) or (e.team2 = $1 and e.team2 = b.batting_team)) group by b.batter order by tot_run desc limit 5',[teamname])
      res.status(200).json(battingData.rows)
   }
   catch(err)
   {
     console.log(err.message)
     res.status(500).json({message : "Error in fetching the request"})
   }
}

const getBoundaryDetails = async(req,res)=>{
   try{
      const teamname = req.params.teamname
      const boundaryData = await pool.query('with cte as (select * from ball_info where non_boundary = 0 and (batsman_run = 6 or batsman_run = 4)) select batter,count(batsman_run) from cte where batting_team = $1 group by batter',[teamname])
     // const sixes = await pool.query('with cte as (select * from ball_info where non_boundary = 0 and (batsman_run = 6 or batsman_run = 4)) select count(batsman_run) from cte where batsman_run = 6 and batting_team = $1 group by batsman_run',[teamname])
      res.status(200).json(boundaryData.rows)
   }
   catch(err)
   {
     console.log(err.message)
     res.status(500).json({message : "Error in fetching the request"})
   }
}

const getWinDetails = async(req,res)=>{
   try{
      const teamname = req.params.teamname
      const winData = await pool.query('select d.season,count(d.match_id) as matches_won from matches_played d join win_condition w on w.match_id = d.match_id and ((d.team1 = $1 and w.winning_team = d.team1) or (d.team2 = $1 and w.winning_team = d.team2)) group by d.season order by matches_won desc',[teamname])
      const lossData = await pool.query('select d.season,count(d.match_id) as matches_lost from matches_played d join win_condition w on w.match_id = d.match_id and ((d.team1 = $1 and w.winning_team = d.team2) or (d.team2 = $1 and w.winning_team = d.team1)) group by d.season order by matches_lost desc',[teamname])
      res.status(200).json({win_data : winData.rows,loss_data : lossData.rows})
   }
   catch(err)
   {
      console.log(err.message)
      res.status(500).json({message : "Error in fetching the request"})
   }
}

module.exports = {getBowlersDetails,getBattingDetails,getBoundaryDetails,getWinDetails}