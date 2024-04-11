const express = require('express')
const {getBowlersDetails,getBattingDetails,getBoundaryDetails,getWinDetails} = require('../controllers/seasonController')
const seasonRouter = express.Router()
seasonRouter.get("/get_top_bowlers/:season",getBowlersDetails)
seasonRouter.get("/get_top_batter/:season",getBattingDetails)
seasonRouter.get("/get_boundary_details/:season",getBoundaryDetails)
seasonRouter.get("/get_win_details/:season",getWinDetails)

module.exports = seasonRouter