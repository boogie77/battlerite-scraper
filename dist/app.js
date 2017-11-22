"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Xray = require("x-ray");
const timers = require("timers");
const champs_1 = require("./modules/champs");
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
function getAllChamps() {
    champs_1.Champs.getChamps(function (champs) {
        console.log('GOT CHAMPS ', champs);
    });
    champs_1.Champs.getChampImages(function (images) {
        console.log('GOT CHAMP IMAGES ', images);
    });
}
getAllChamps();
