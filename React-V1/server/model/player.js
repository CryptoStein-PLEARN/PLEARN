const mongoose = require("mongoose");

// Table for saving Player game data
const playerDetailSchema = new mongoose.Schema({
    userAccount: {type: String},
    playerName: {type: String, default: ''},
    gameCoins: {type: Number, default: 1000},
    tileNumber: {type: Number, default: 0},
    characterID: {type: Number, default: -1},   //currently selected character
    houseID: {type: Number, default: -1},   //currently selected house
    lfID: {type: Number, default: -1},  //currently selected LifeInsurance
    lfBoughtAt: {type: Number, default: 1},  //LifeInsurance bought at which LEVEL; will be used to calculate 'sell insurance amt(2x)'
    loanAgainstLifeInsurance: {type: Number, default: 0},
    level: {type: Number, default: 1},
    ownedCharacters: {type: [String]},
    ownedHouseID: {type: [Number]},
    energy: {type: Number, default: 100}
})
const playerDetail = new mongoose.model("player_detail_table", playerDetailSchema, "player_detail_table");

module.exports = playerDetail;