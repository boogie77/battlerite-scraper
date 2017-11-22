import * as Xray from 'x-ray';
import * as request from 'request';
import * as timers from 'timers';

const xray = Xray();

const root = '#champsContainer';
const champOptions = {
    names: xray(['div>div>p>a'])
};
const imageOptions = {
    images: xray(['div>div>a>img@src']),
};

export module Champs {
    export function getChamps(callback: any) {
        xray('https://battlerite.gamepedia.com/Battlerite_Wiki', root, [champOptions])
        (function (err: any, obj: any) {
            callback(obj[0].names);
        });
    }
    export function getChampImages(callback: any) {
        xray('https://battlerite.gamepedia.com/Battlerite_Wiki', root, [imageOptions])
        (function (err: any, obj: any) {
            callback(obj[0].images);
        });
    }
}