const mongoose = require("mongoose");

// Table for saving Player game data
const playerDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
    playerName: {type: String, default: ''},
    coins: {type: Number, default: 0},
    tileNumber: {type: Number, default: 0},
    characterID: {type: Number, default: -1},
    level: {type: Number, default: 0}
})
const playerDetail = new mongoose.model("player_detail_table", playerDetailSchema, "player_detail_table");

module.exports = playerDetail;