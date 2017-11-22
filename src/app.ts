import * as Xray from 'x-ray';
import * as request from 'request';
import * as fs from 'fs';
import * as timers from 'timers';
import * as async from 'async';

import { ChampAbilities } from './abilities/abilities';
var champs;

var xray = Xray();

function testUrl (url: string, callback: any) {
    xray(url, 'body',
    ['div']
    )(function (err: any, obj: any) {
        timers.setTimeout(() => {
            console.log('Testing URL... ', obj, err);
            callback(obj);
        }, 10000);
    });
}

function updateChamps (callback: any) {
    xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [{
        images: xray(['div>div>a>img@src']),
        names: xray(['div>div>p>a'])
    }])(function (err: any, obj: any) {
        console.log('Updating Champions...', obj, err);
        callback(obj);
    });
}

function getAllChamps () {
    updateChamps(function (champs: Array<String>) {
        ChampAbilities.getAll(champs);
    });
}

// getAllChamps();
testUrl(`https://battlerite.gamepedia.com/Bakko`, function (obj: any) {
    console.log('CALLBACK OBJ ', obj);
});
// getAllChamps();

// ChampAbilities.getByChamp('Bakko');