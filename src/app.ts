import * as Xray from 'x-ray';
import * as request from 'request';
import * as fs from 'fs';
import * as timers from 'timers';
import * as async from 'async';

import { ChampAbilities } from './modules/abilities';
import { ChampBattlerites } from './modules/battlerites';
import { Champs } from './modules/champs';

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

function getAllChamps () {
    Champs.getChamps(function (champs: Array<String>) {
        console.log('GOT CHAMPS ', champs);
        // ChampAbilities.getAll(champs);
    });
    Champs.getChampImages(function (images: Array<String>) {
        console.log('GOT CHAMP IMAGES ', images);
        // ChampAbilities.getAll(champs);
    });
}

// getAllChamps();
// testUrl(`https://battlerite.gamepedia.com/Bakko`, function (obj: any) {
//     console.log('CALLBACK OBJ ', obj);
// });
getAllChamps();

// ChampAbilities.getByChamp('Bakko');
// ChampBattlerites.getByChamp('Bakko');