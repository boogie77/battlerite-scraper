import * as Xray from 'x-ray';
import * as request from 'request';
import * as timers from 'timers';

const xray = Xray();

const root = '.battlerite';
const options = {
    title: '.battlerite--title',
    image: '.battlerite--art>span>span>a>img@src',
    overlay: '.battlerite--art>span>span>img@src',
    desc: '.battlerite--description',
    type: '.battlerite--type'
};

export module ChampBattlerites {
    export function getAll(champs: any) {
        if (champs) {
            champs.map((champ: any, index: number) => {
                xray(`https://battlerite.gamepedia.com/${champ}/Battlerites`, root, [options])
                .write(`./data/battlerites/${champ}.json`);
            });
        } else {
            console.error('Champ Update Failed!!');
        }
    }
    export function getByChamp(champ: string) {
        if (champ) {
            xray(`https://battlerite.gamepedia.com/${champ}/Battlerites`, root, [options])
            .write(`./data/battlerites/${champ}.json`);
        } else {
            console.error(`${champ} Update Failed!!`);
        }
    }
}