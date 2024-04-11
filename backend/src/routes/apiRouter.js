const express = require('express')
const {getBowlersDetails,getBattingDetails,getBoundaryDetails} = require('../controllers/apiController')
const apiRouter = express.Router()
apiRouter.get("/get_top_bowlers",getBowlersDetails)
apiRouter.get("/get_top_batter",getBattingDetails)
apiRouter.get("/get_boundary_details",getBoundaryDetails)

module.exports = apiRouter