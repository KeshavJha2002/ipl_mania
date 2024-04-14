const express = require('express')
const { get_battle_result } = require('../controllers/teamBattleController')
const teamBattleRouter = express.Router()
teamBattleRouter.get("/get_battle_result/:team1/:team2", get_battle_result)

module.exports = teamBattleRouter