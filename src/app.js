"use strict";
exports.__esModule = true;
var Xray = require("x-ray");
var abilities_1 = require("./abilities/abilities");
var xray = new Xray();
var champs;
function updateChamps(callback) {
    xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [{
            images: xray(['div>div>a>img@src']),
            names: xray(['div>div>p>a'])
        }])(function (err, obj) {
        callback(obj[0].names);
    });
}
function getAllChamps() {
    updateChamps(function (champs) {
        abilities_1.ChampAbilities.getAll(champs);
    });
}
getAllChamps();
