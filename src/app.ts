import * as Xray from 'x-ray';
import * as request from 'request';
import * as fs from 'fs';
import * as timers from 'timers';
import * as async from 'async';

import { ChampAbilities } from './abilities/abilities';

const xray = new Xray();
var champs;


function updateChamps (callback) {
    xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [{
        images: xray(['div>div>a>img@src']),
        names: xray(['div>div>p>a'])
    }])(function (err, obj) {
        callback(obj[0].names);
    })
}

function getAllChamps () {
    updateChamps(function (champs) {
        ChampAbilities.getAll(champs)
    })
}

getAllChamps();