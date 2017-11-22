"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Xray = require("x-ray");
const timers = require("timers");
const abilities_1 = require("./abilities/abilities");
var champs;
var xray = Xray();
function testUrl(url, callback) {
    xray(url, 'body', ['div'])(function (err, obj) {
        timers.setTimeout(() => {
            console.log('Testing URL... ', obj, err);
            callback(obj);
        }, 10000);
    });
}
function updateChamps(callback) {
    xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [{
            images: xray(['div>div>a>img@src']),
            names: xray(['div>div>p>a'])
        }])(function (err, obj) {
        console.log('Updating Champions...', obj, err);
        callback(obj);
    });
}
function getAllChamps() {
    updateChamps(function (champs) {
        abilities_1.ChampAbilities.getAll(champs);
    });
}
testUrl(`https://battlerite.gamepedia.com/Bakko`, function (obj) {
    console.log('CALLBACK OBJ ', obj);
});
