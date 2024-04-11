const pool = require('../models/db')


const getBowlersDetails = async(req,res)=>{
    try{
       const season = req.params.season
       const bowlerData = await pool.query('select b.bowler,sum(b.is_wicket_delivery) as wicket_count from matches_played d join ball_info b on b.match_id = d.match_id and d.season = $1 group by b.bowler order by wicket_count desc limit 5',[season])
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
      const season = req.params.season
      const battingData = await pool.query('select b.batter,sum(b.batsman_run) as tot_run from matches_played d join ball_info b on d.match_id = b.match_id and d.season = $1 group by b.batter order by tot_run desc limit 5',[season])
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
      const season = req.params.season
      const boundaryData = await pool.query('with cte as (select * from ball_info where non_boundary = 0 and (batsman_run = 6 or batsman_run = 4)) select batter,count(batsman_run) as no_of_boundary from cte e join matches_played d on d.match_id = e.match_id and d.season = $1 group by batter order by no_of_boundary desc limit 5',[season])
      // const sixesData = await pool.query('with cte as (select * from ball_info where non_boundary = 0 and (batsman_run = 6 or batsman_run = 4)) select batter,count(batsman_run) as no_of_sixes from cte e join matches_played d on d.match_id = e.match_id and d.season = $1 and e.batsman_run = 6 group by batter order by no_of_sixes desc limit 5',[season])
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
      const season = req.params.season
      const winData = await pool.query('select team,sum(case when winning_team = team then 1 else 0 end) as wins,sum(case when winning_team != team then 1 else 0 end) as losses from (select d.match_id,d.season,d.team1 AS team,w.winning_team from matches_played d join win_condition w on d.match_id = w.match_id AND d.season = $1 union all select d.match_id,d.season,d.team2 as team,w.winning_team from matches_played d join win_condition w on d.match_id = w.match_id and d.season = $1) as matches_season group by team;',[season])
      res.status(200).json(winData.rows)
   }
   catch(err)
   {
      console.log(err.message)
      res.status(500).json({message : "Error in fetching the request"})
   }
}

module.exports = {getBowlersDetails,getBattingDetails,getBoundaryDetails,getWinDetails}