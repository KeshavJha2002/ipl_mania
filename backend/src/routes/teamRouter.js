const express = require('express')
const { getBowlersDetails,getBattingDetails,getBoundaryDetails,getWinDetails} = require('../controllers/teamController')
const teamRouter = express.Router()
teamRouter.get("/get_top_bowlers/:teamname", getBowlersDetails)
teamRouter.get("/get_top_batter/:teamname",getBattingDetails)
teamRouter.get("/get_boundary_details/:teamname",getBoundaryDetails)
teamRouter.get("/get_win_details/:teamname",getWinDetails)

module.exports = teamRouter