import * as Xray from 'x-ray';
import * as request from 'request';
import * as timers from 'timers';
import * as trim from 'trim-newlines';

const xray = Xray();

const champOptions = {
    names: xray(['div>div>p>a'])
};
const imageOptions = {
    images: xray(['div>div>a>img@src']),
};
const champInfoOptions = {
    name: ['#mw-content-text>table>tr>.caption'],
    image: '#mw-content-text>table>tr>td>.center>.floatnone>a>img@src',
    health: ['#mw-content-text>table>tr>td'],
    bio: ['#mw-content-text>p']
};

export module Champs {
    export function listChamps(callback: any) {
        xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [champOptions])
        (function (err: any, obj: any) {
            callback(obj[0].names);
        });
    }
    export function getChampAvatars(callback: any) {
        xray('https://battlerite.gamepedia.com/Battlerite_Wiki', '#champsContainer', [imageOptions])
        (function (err: any, obj: any) {
            callback(obj[0].images);
        });
    }
    export function getChampInfo(champ: string, callback: any) {
        xray(`https://battlerite.gamepedia.com/${champ}`, '#bodyContent', [champInfoOptions])
        (function (err: any, obj: any) {
            let data = JSON.parse(trim(JSON.stringify(obj)));
            callback(trim({
                name: data[0].name[0],
                slogan: data[0].name[1],
                image: data[0].image,
                stats: {
                    health: data[0].health[1],
                },
                bio: data[0].bio[0]
            }));
        });
    }
}